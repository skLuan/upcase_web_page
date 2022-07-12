<?php
/**
 * @var array $args
 * @var \YoutubeFeed\Api\Channel\YoutubeChannelItem[] $accounts
 * @var bool $is_premium
 * @var array $accounts
 */

$social = $args['social'];

$count_accounts = ! empty( $accounts ) ? count( $accounts ) : 0;
?>
<form action="<?= $_SERVER['REQUEST_URI']; ?>" method="post">
    <div class="wis-youtube-form-row">
        <div class="wyt-add-form">
            <input type="text" name="wyt_api_key" id="wyt_api_key" class="" style="width: 550px;"
                   value="<?= WIS_Plugin::app()->getOption( WYT_API_KEY_OPTION_NAME, '' ) ?>"
                   placeholder="<?php _e( 'Youtube api key.', 'instagram-slider-widget' ) ?>">
        </div>
        <div class="wyt-add-form">
            <input type="submit" class="wyt-btn-Youtube-account"
                   value="<?php _e( 'Save', 'instagram-slider-widget' ) ?>">
        </div>
        <div class="" style="display: inline-block;">
            <a href="<?= admin_url(); ?>?page=manual-wisw" target="_blank">How to get Youtube API
                key</a>
        </div>
    </div>

	<?php
	if ( $count_accounts >= 1 && ! $is_premium ) : ?>
        <div class="wyt-add-form">
            <span class="instagram-account-pro"><?php echo sprintf( __( "More accounts in <a href='%s'>PRO version</a>", 'instagram-slider-widget' ), WIS_Plugin::app()->get_support()->get_pricing_url( true, "wis_settings" ) ); ?></span>
        </div>
	<?php else: ?>
        <div class="wis-youtube-form-row" style="margin-top: 15px;">
            <a class="wis-btn-youtube-account" target="_self" href="#" title="Add Account">
				<?php _e( 'Add channel', 'instagram-slider-widget' ) ?>
            </a>
        </div>
        <div class="wyt-add-form">
            <span class="instagram-account-pro"><?php echo sprintf( __( "More accounts in <a href='%s'>PRO version</a>", 'instagram-slider-widget' ), WIS_Plugin::app()->get_support()->get_pricing_url( true, "wis_settings" ) ); ?></span>
        </div>
	<?php endif; ?>

</form>


<?php
if ( ! empty( $accounts ) ) :
	?>
    <div class="wis-social-group"><?php echo __( 'Connected channels', 'instagram-slider-widget' ); ?></div>
    <table class="widefat wis-table">
        <thead>
        <tr>
            <th class="wis-profile-picture"><?php echo __( 'Image', 'instagram-slider-widget' ); ?></th>
            <th class="wis-profile-id"><?php echo __( 'ID', 'instagram-slider-widget' ); ?></th>
            <th class="wis-profile-name"><?php echo __( 'Name', 'instagram-slider-widget' ); ?></th>
            <th class="wis-profile-actions"><?php echo __( 'Action', 'instagram-slider-widget' ); ?></th>
        </tr>
        </thead>
        <tbody>
		<?php
		foreach ( $accounts as $channelId => $account ) {
			$delete_link = $this->getActionUrl( 'delete', [ 'social' => $social, 'account' => $channelId ] );
			?>
            <tr>
                <td class="wis-profile-picture">
                    <img src="<?= $account->snippet->thumbnails->default->url ?>"
                         width="30" alt=""/>
                </td>
                <td class="wis-profile-id"><?php echo $channelId; ?></td>
                <td class="wis-profile-name">
                    <a href="https://youtube.com/channel/<?= $channelId ?>"><?php echo $account->snippet->title; ?></a>
                </td>
                <td class="wis-profile-actions">
                    <a href="<?php echo $delete_link; ?>" class="btn btn-danger wyt-close-button">
                        <span class="dashicons dashicons-trash"></span><?php echo __( 'Delete', 'instagram-slider-widget' ); ?>
                    </a>
                    <span class="spinner"
                          id="wis-delete-spinner-<?php echo $channelId; ?>"></span>
                </td>
            </tr>
			<?php
		}
		?>
        </tbody>
    </table>
	<?php wp_nonce_field( $this->plugin->getPrefix() . 'settings_form', $this->plugin->getPrefix() . 'nonce' ); ?>
<?php endif; ?>

<div id="wis_add_ytaccount_modal" class="wis_accounts_modal wis_closed">
    <div class="wis_modal_header">
		<?php _e( 'Add Youtube channel', 'instagram-slider-widget' ); ?>
    </div>
    <div class="wis_modal_content">
        <form action="<?= $_SERVER['REQUEST_URI']; ?>" method="post">
            <div class="wis-youtube-form-row">
                <div class="wyt-add-form" style="width: 100%;">
                    <input type="text" name="wyt_feed_link" id="wyt_feed_link" class=""
                           placeholder="<?php _e( 'Channel link. Example: https://www.youtube.com/channel/UC0WP5P-ufpRfjbNrmOWwLBQ', 'instagram-slider-widget' ) ?>">
                </div>
                <div class="">
                    <a href="https://support.google.com/youtube/answer/6180214"
                       target="_blank"><?php _e( 'How to get channel link', 'instagram-slider-widget' ); ?></a>
                </div>
            </div>

            <div class='wis-row-style'>
                <input type="submit" class='btn btn-primary' value="<?php _e( 'Add channel', 'instagram-slider-widget' ); ?>">
            </div>
        </form>
    </div>
</div>
<div id="wis_add_ytaccount_modal_overlay" class="wis_modal_overlay wis_closed"></div>
