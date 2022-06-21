<?php

namespace RebelCode\Spotlight\Instagram\Modules\Dev;

use RebelCode\Spotlight\Instagram\Engine\Store\ThumbnailStore;

/**
 * Dev tool that deletes all the thumbnails.
 */
class DevDeleteThumbnails
{
    /** @var ThumbnailStore */
    protected $thumbnails;

    /** Constructor. */
    public function __construct(ThumbnailStore $thumbnails)
    {
        $this->thumbnails = $thumbnails;
    }

    /**
     * @since 0.1
     */
    public function __invoke()
    {
        $nonce = filter_input(INPUT_POST, 'sli_delete_thumbnails');
        if (!$nonce) {
            return;
        }

        if (!wp_verify_nonce($nonce, 'sli_delete_thumbnails')) {
            wp_die('You cannot do that!', 'Unauthorized', [
                'back_link' => true,
            ]);
        }

        $this->thumbnails->deleteAll();

        add_action('admin_notices', function () {
            echo '<div class="notice notice-success"><p>Deleted the thumbnails</p></div>';
        });
    }
}
