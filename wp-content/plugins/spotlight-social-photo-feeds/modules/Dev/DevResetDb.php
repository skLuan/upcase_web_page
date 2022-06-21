<?php

namespace RebelCode\Spotlight\Instagram\Modules\Dev;

use RebelCode\Spotlight\Instagram\Utils\DbQueries;

/**
 * Dev tool that resets the DB.
 */
class DevResetDb
{
    /** @var callable */
    protected $deletePostsAction;

    /** Constructor */
    public function __construct(callable $deletePostsAction)
    {
        $this->deletePostsAction = $deletePostsAction;
    }

    public function __invoke()
    {
        $resetDb = filter_input(INPUT_POST, 'sli_reset_db');
        if (!$resetDb) {
            return;
        }

        if (!wp_verify_nonce($resetDb, 'sli_reset_db')) {
            wp_die('You cannot do that!', 'Unauthorized', [
                'back_link' => true,
            ]);
        }

        set_time_limit(30 * 60);

        global $wpdb;
        $count = 0;

        // The post types to delete
        $postTypes = [];
        // Check for "keep accounts"
        if (!filter_input(INPUT_POST, 'sli_reset_keep_accounts', FILTER_VALIDATE_BOOLEAN)) {
            $postTypes[] = 'sl-insta-account';
        }
        // Check for "keep feeds"
        if (!filter_input(INPUT_POST, 'sli_reset_keep_feeds', FILTER_VALIDATE_BOOLEAN)) {
            $postTypes[] = 'sl-insta-feed';
        }

        // Delete the accounts and feeds
        if (!empty($postTypes)) {
            $query = DbQueries::deletePostsByType($postTypes);
            $count += $wpdb->query($query);
        }

        // Delete the posts
        $count += ($this->deletePostsAction)();

        if ($wpdb->last_error) {
            wp_die($wpdb->last_error, 'Spotlight DB Reset - Error', ['back_link' => true]);
        }

        $count += $wpdb->query("DELETE FROM {$wpdb->options}
                              WHERE (option_name LIKE 'sli_%' OR option_name LIKE '%_sli_%') AND
                                     option_name != 'sli_user_did_onboarding'");

        if ($wpdb->last_error) {
            wp_die($wpdb->last_error, 'Spotlight DB Reset - Error', ['back_link' => true]);
        }

        add_action('admin_notices', function () use ($count) {
            printf('<div class="notice notice-success"><p>Deleted %d items from the database</p></div>', $count);
        });
    }
}
