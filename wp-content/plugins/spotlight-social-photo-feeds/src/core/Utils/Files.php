<?php

namespace RebelCode\Spotlight\Instagram\Utils;

/**
 * Utility functions for dealing with files.
 *
 * @since 0.4.1
 */
class Files
{
    /**
     * Deletes a directory, recursively.
     *
     * @since 0.4.1
     *
     * @param string $path The absolute path to the directory to delete.
     */
    public static function rmDirRecursive(string $path)
    {
        $dir = @opendir($path);
        if (!is_resource($dir)) {
            return;
        }

        while (false !== ($file = readdir($dir))) {
            if (($file != '.') && ($file != '..')) {
                $full = $path . '/' . $file;
                if (is_dir($full)) {
                    static::rmDirRecursive($full);
                } else {
                    @unlink($full);
                }
            }
        }
        closedir($dir);
        @rmdir($path);
    }
}
