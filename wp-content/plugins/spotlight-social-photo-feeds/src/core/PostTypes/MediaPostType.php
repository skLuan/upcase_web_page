<?php

namespace RebelCode\Spotlight\Instagram\PostTypes;

use RebelCode\Spotlight\Instagram\Engine\Store\ThumbnailStore;
use RebelCode\Spotlight\Instagram\Wp\PostType;

/**
 * The post type for media.
 *
 * This class extends the {@link PostType} class only as a formality. The primary purpose of this class is to house
 * the meta key constants and functionality for dealing with posts of the media custom post type.
 *
 * @since 0.1
 */
class MediaPostType extends PostType
{
    const MEDIA_ID = '_sli_media_id';
    const USERNAME = '_sli_media_username';
    const TIMESTAMP = '_sli_timestamp';
    const CAPTION = '_sli_caption';
    const TYPE = '_sli_media_type';
    const URL = '_sli_media_url';
    const PRODUCT_TYPE = '_sli_product_type';
    const PERMALINK = '_sli_permalink';
    const SHORTCODE = '_sli_shortcode';
    const VIDEO_TITLE = '_sli_video_title';
    const THUMBNAIL_URL = '_sli_thumbnail_url';
    const THUMBNAILS = '_sli_thumbnails';
    const SIZE = '_sli_media_size';
    const LIKES_COUNT = '_sli_likes_count';
    const COMMENTS_COUNT = '_sli_comments_count';
    const COMMENTS = '_sli_comments';
    const CHILDREN = '_sli_children';
    const LAST_REQUESTED = '_sli_last_requested';
    const IS_STORY = '_sli_is_story';
    const SOURCE = '_sli_source';
    /** @deprecated Use {@link SOURCE} instead. */
    const SOURCE_NAME = '_sli_source_name';
    /** @deprecated Use {@link SOURCE} instead. */
    const SOURCE_TYPE = '_sli_source_type';

    /** @var ThumbnailStore */
    protected $thumbnails;

    /** Constructor */
    public function __construct(string $slug, array $args, array $fields, ThumbnailStore $thumbnailStore)
    {
        parent::__construct($slug, $args, $fields);
        $this->thumbnails = $thumbnailStore;
    }

    /** @inheritDoc */
    public function deleteAll()
    {
        $result = parent::deleteAll();

        if ($result !== false) {
            $this->thumbnails->deleteAll();
        }

        return $result;
    }
}
