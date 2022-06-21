<?php

declare(strict_types=1);

namespace RebelCode\Spotlight\Instagram\Engine\Store;

use Exception;
use RebelCode\Iris\Data\Item;
use RebelCode\Spotlight\Instagram\Actions\IgImageProxy;
use RebelCode\Spotlight\Instagram\Engine\Data\Item\MediaItem;
use RebelCode\Spotlight\Instagram\Engine\Data\Item\MediaType;
use RebelCode\Spotlight\Instagram\Utils\Files;
use RuntimeException;

/**
 * @psalm-type ThumbnailSize = ThumbnailGenerator::SIZE_*
 */
class ThumbnailStore
{
    const SIZE_SMALL = 's';
    const SIZE_MEDIUM = 'm';
    const SIZE_LARGE = 'l';
    const IMAGE_MIME_TYPE = 'image/jpeg';

    /** @var string */
    protected $dirName;

    /** @var ThumbnailRecipe[] */
    protected $recipes;

    /** @var array|null */
    protected $dirInfo = null;

    /** @var string */
    protected $largestRecipe;

    /**
     * Constructor.
     *
     * @param string $dirName
     * @param ThumbnailRecipe[] $recipes
     */
    public function __construct(string $dirName, array $recipes)
    {
        $this->dirName = $dirName;
        $this->recipes = $recipes;

        uasort($this->recipes, function (ThumbnailRecipe $a, ThumbnailRecipe $b) {
            return $a->width <=> $b->width;
        });

        $this->largestRecipe = array_keys($this->recipes)[count($this->recipes) - 1];
    }

    public function downloadAndGenerate(Item $item): Item
    {
        // Download and generate the thumbnails
        $data = $this->downloadAndGenerateForData($item->id, $item->data);
        $item = $item->withChanges($data);

        // Use proxy image URLs for the original media URLs
        return IgImageProxy::itemWithProxyImages($item);
    }

    protected function downloadAndGenerateForData(string $id, array $data): array
    {
        $url = $data[MediaItem::MEDIA_URL] ?? '';
        $type = $data[MediaItem::MEDIA_TYPE] ?? '';
        $thumbnail = $data[MediaItem::THUMBNAIL_URL] ?? '';
        $thumbnail = empty($thumbnail) ? null : $thumbnail;

        $isVideo = $type === MediaType::VIDEO;
        $remoteImg = $isVideo ? $thumbnail : $url;

        if (!empty($remoteImg)) {
            $localImg = $this->getFileInfo($id)['path'];
            $remoteHost = parse_url($remoteImg, PHP_URL_HOST);
            $remoteIsIg = stripos($remoteHost, 'instagram.com') !== false;

            try {
                // Download the image if it doesn't exist
                if (!file_exists($localImg) && $remoteIsIg) {
                    static::downloadFile($remoteImg, $localImg);
                }

                // Get and save its dimensions
                $imgSize = @getimagesize($localImg);

                if (is_array($imgSize) && $imgSize[0] > 0 && $imgSize[1] > 0) {
                    $data[MediaItem::MEDIA_SIZE] = [
                        'width' => $imgSize[0],
                        'height' => $imgSize[1],
                    ];
                }

                // Generate thumbnails from the original image
                $newThumbnails = $this->generateThumbnails($id, $localImg);
                if ($newThumbnails !== null) {
                    $data[MediaItem::THUMBNAILS] = $newThumbnails;
                }

                // If the item has no main thumbnail, set it to the largest available thumbnail
                if (empty($thumbnail)) {
                    $data[MediaItem::THUMBNAIL_URL] = $data[MediaItem::THUMBNAILS][$this->largestRecipe] ?? $remoteImg;
                }
            } catch (Exception $exception) {
                // do nothing
            } finally {
                // Remove the original file
                if (file_exists($localImg)) {
                    @unlink($localImg);
                }
            }
        }

        $children = $data[MediaItem::CHILDREN] ?? [];
        if ($type === MediaType::ALBUM && !empty($children)) {
            foreach ($children as $idx => $child) {
                $childId = $child[MediaItem::CHILD_ID] ?? null;

                if (empty($childId)) {
                    continue;
                }

                $data[MediaItem::CHILDREN][$idx] = $this->downloadAndGenerateForData($childId, $child);
            }
        }

        return $data;
    }

    public function generateThumbnails(string $mediaId, string $imagePath, bool $overwrite = false): ?array
    {
        if (!file_exists($imagePath)) {
            return null;
        }

        $result = [];

        foreach ($this->recipes as $size => $recipe) {
            $result[$size] = false;
            $thumbnail = $this->getFileInfo($mediaId, $size);

            // If the image does not already exist or we can overwrite it, pass image through the WordPress Image Editor
            if (!file_exists($thumbnail['path']) || $overwrite) {
                $editor = wp_get_image_editor($imagePath);

                if (is_wp_error($editor)) {
                    continue;
                }

                @$editor->resize($recipe->width, null);
                @$editor->set_quality($recipe->jpegQuality);
                $editorResult = @$editor->save($thumbnail['path'], static::IMAGE_MIME_TYPE);

                if (is_wp_error($editorResult)) {
                    continue;
                }
            }

            $result[$size] = $thumbnail['url'];
        }

        return $result;
    }

    public function getThumbnails(string $mediaId): array
    {
        $result = [];

        foreach ($this->recipes as $size => $recipe) {
            $result[$size] = false;
            $file = $this->getFileInfo($mediaId, $size);

            if (file_exists($file['path'])) {
                $result[$size] = $file;
            }
        }

        return $result;
    }

    public function getFileInfo(string $mediaId, ?string $size = null): array
    {
        $dirInfo = $this->getDirInfo();
        $suffix = $size ? "-{$size}" : '';
        $fileName = "{$mediaId}{$suffix}.jpg";

        return [
            'path' => $dirInfo['path'] . '/' . $fileName,
            'url' => $dirInfo['url'] . '/' . $fileName,
        ];
    }

    public function getDirInfo(): array
    {
        if ($this->dirInfo !== null) {
            return $this->dirInfo;
        }

        $uploadDir = wp_upload_dir();

        if (isset($uploadDir['error']) && $uploadDir['error'] !== false) {
            throw new RuntimeException(
                'Spotlight failed to access your uploads directory: ' . $uploadDir['error']
            );
        }

        if (!is_dir($uploadDir['basedir'])) {
            if (!mkdir($uploadDir['basedir'], 0775)) {
                throw new RuntimeException(
                    'Spotlight failed to create the uploads directory: ' . $uploadDir['basedir']
                );
            }
        }

        $subDir = $uploadDir['basedir'] . '/' . $this->dirName;
        if (!is_dir($subDir)) {
            if (!mkdir($subDir, 0775)) {
                throw new RuntimeException(
                    'Spotlight failed to create its photo uploads directory: ' . $subDir
                );
            }
        }

        // Fix the URL protocol to be HTTPS when the site is using SSL
        $baseUrl = is_ssl()
            ? str_replace('http://', 'https://', $uploadDir['baseurl'])
            : $uploadDir['baseurl'];

        return $this->dirInfo = [
            'path' => $subDir,
            'url' => $baseUrl . '/' . $this->dirName,
        ];
    }

    /**
     * Downloads a remote file.
     *
     * @param string $url The URL that points to the resource to be downloaded.
     * @param string $filepath The path to the file to which the resource will downloaded to.
     */
    public static function downloadFile(string $url, string $filepath)
    {
        $curl = curl_init($url);

        if (!$curl) {
            throw new RuntimeException(
                'Spotlight was unable to initialize curl. Please check if the curl extension is enabled.'
            );
        }

        $file = @fopen($filepath, 'wb');

        if (!$file) {
            throw new RuntimeException(
                'Spotlight was unable to create the file: ' . $filepath
            );
        }

        try {
            // SET UP CURL
            {
                curl_setopt($curl, CURLOPT_FILE, $file);
                curl_setopt($curl, CURLOPT_FAILONERROR, true);
                curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
                curl_setopt($curl, CURLOPT_ENCODING, '');
                curl_setopt($curl, CURLOPT_TIMEOUT, 10);
                curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
                curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

                if (!empty($_SERVER['HTTP_USER_AGENT'])) {
                    curl_setopt($curl, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
                }
            }

            $success = curl_exec($curl);

            if (!$success) {
                throw new RuntimeException(
                    'Spotlight failed to get the media data from Instagram: ' . curl_error($curl)
                );
            }
        } finally {
            curl_close($curl);
            fclose($file);
        }
    }

    public function delete(string $mediaId)
    {
        foreach ($this->recipes as $size => $recipe) {
            $thumbnail = $this->getFileInfo($mediaId, $size);

            if (file_exists($thumbnail['path'])) {
                @unlink($thumbnail['path']);
            }
        }
    }

    public function deleteAll()
    {
        $dirInfo = $this->getDirInfo();
        Files::rmDirRecursive($dirInfo['path']);
    }
}
