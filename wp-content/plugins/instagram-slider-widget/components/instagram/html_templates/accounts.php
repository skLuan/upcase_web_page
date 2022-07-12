<?php
/**
 * @var array $args
 * @var bool $is_premium
 * @var string $authorize_url_instagram
 * @var string $authorize_url_business
 * @var array $accounts
 * @var array $accounts_business
 */

$social         = $args['social'];
$count_accounts = count( $accounts ) + count( $accounts_business );
?>
<div id="wis-add-account-button" class="">
	<?php
	if ( $count_accounts >= 1 && ! $is_premium ) : ?>
        <span class="wis-btn-instagram-account-disabled btn-instagram-account-disabled">
                                <?php _e( 'Add Account', 'instagram-slider-widget' ) ?></span>
        <span class="instagram-account-pro"><?php echo sprintf( __( "More accounts in <a href='%s'>PRO version</a>", 'instagram-slider-widget' ), WIS_Plugin::app()->get_support()->get_pricing_url( true, "wis_settings" ) ); ?></span>
	<?php else: ?>
        <a class="wis-btn-instagram-account" target="_self" href="#" title="Add Account">
			<?php _e( 'Add Account', 'instagram-slider-widget' ) ?>
        </a>
        <span style="float: none; margin-top: 0;" class="spinner" id="wis-spinner"> </span>
	<?php endif; ?>
</div>
<!-- Personal accounts -->
<?php
if ( count( $accounts ) ) :
	?>
    <div class="wis-social-group"><?php echo __( 'Personal Accounts', 'instagram-slider-widget' ); ?></div>
    <table class="widefat wis-table wis-personal-status">
        <thead>
        <tr>
            <th class="wis-profile-picture"><?php echo __( 'Image', 'instagram-slider-widget' ); ?></th>
            <th class="wis-profile-id"><?php echo __( 'ID', 'instagram-slider-widget' ); ?></th>
            <th class="wis-profile-name"><?php echo __( 'User', 'instagram-slider-widget' ); ?></th>
            <th class="wis-profile-token"><?php echo __( 'Token', 'instagram-slider-widget' ); ?></th>
            <th class="wis-profile-actions"><?php echo __( 'Action', 'instagram-slider-widget' ); ?></th>
        </tr>
        </thead>
        <tbody>
		<?php
		foreach ( $accounts as $key => $profile_info ) {
			$delete_link = $this->getActionUrl( 'delete', [ 'social' => $social, 'business' => false, 'account' => $key ] );
			?>
            <tr>
                <td class="wis-profile-picture"></td>
                <td class="wis-profile-id"><?php echo esc_attr( $profile_info['id'] ); ?></td>
                <td class="wis-profile-name">
                    <a href="https://www.instagram.com/<?php echo esc_html( $profile_info['username'] ); ?>">@<?php echo esc_html( $profile_info['username'] ); ?></a>
                </td>
                <td class="wis-profile-token">
                    <input id="<?php echo esc_attr( $profile_info['id'] ); ?>-account-access-token" type="text" value="<?php echo esc_attr( $profile_info['token'] ); ?>"
                           class="wis-text-token" readonly/>
                </td>
                <td class="wis-profile-actions">
                    <a href="<?php echo $delete_link; ?>" class="btn btn-danger wis-delete-account">
                        <span class="dashicons dashicons-trash"></span><?php echo __( 'Delete', 'instagram-slider-widget' ); ?>
                    </a>
					<?php
					if ( isset( $_GET['access_token'] ) && $_GET['access_token'] === $profile_info['token'] ) {
						?><span class="wis-div-added">Successfully connected</span><?php
					}
					?>
                </td>
            </tr>
			<?php
		}
		?>
        </tbody>
    </table>
	<?php wp_nonce_field( $this->plugin->getPrefix() . 'settings_form', $this->plugin->getPrefix() . 'nonce' ); ?>
<?php endif; ?>
<!-- Business accounts -->
<?php
if ( count( $accounts_business ) ) :
	?>
    <div class="wis-social-group"><?php echo __( 'Business Accounts', 'instagram-slider-widget' ); ?></div>
    <table class="widefat wis-table wis-business-status">
        <thead>
        <tr>
            <th class="wis-profile-picture"><?php echo __( 'Image', 'instagram-slider-widget' ); ?></th>
            <th class="wis-profile-id"><?php echo __( 'ID', 'instagram-slider-widget' ); ?></th>
            <th class="wis-profile-name"><?php echo __( 'User', 'instagram-slider-widget' ); ?></th>
            <th class="wis-profile-token"><?php echo __( 'Token', 'instagram-slider-widget' ); ?></th>
            <th class="wis-profile-action"><?php echo __( 'Action', 'instagram-slider-widget' ); ?></th>
        </tr>
        </thead>
        <tbody>
		<?php
		foreach ( $accounts_business as $key => $profile_info ) {
			$delete_link = $this->getActionUrl( 'delete', [ 'social' => $social, 'business' => true, 'account' => $key ] );
			$image       = $profile_info['profile_picture_url'];
			$fullname    = $profile_info['name'];
			?>
            <tr>
                <td class="wis-profile-picture">
                    <img src="<?php echo esc_url( $image ); ?>"
                         width="30"/>
                </td>
                <td class="wis-profile-id"><?php echo esc_attr( $profile_info['id'] ); ?></td>
                <td class="wis-profile-name">
					<?php echo esc_html( $fullname ); ?> <a
                            href="https://www.instagram.com/<?php echo esc_html( $profile_info['username'] ); ?>">@<?php echo esc_html( $profile_info['username'] ); ?></a>
                </td>
                <td class="wis-profile-token">
                    <input id="<?php echo esc_attr( $profile_info['id'] ); ?>-business-account-access-token"
                           type="text"
                           value="<?php echo esc_attr( $profile_info['token'] ); ?>"
                           class="wis-text-token" readonly/>
                </td>
                <td class="wis-profile-actions">
                    <a href="<?php echo $delete_link; ?>" class="btn btn-danger wis-delete-account">
                        <span class="dashicons dashicons-trash"></span><?php echo __( 'Delete', 'instagram-slider-widget' ); ?>
                    </a>
                    <span class="spinner"
                          id="wis-delete-spinner-<?php echo esc_attr( $profile_info['id'] ); ?>"></span>
                    <span class="wis-div-added"
                          style="display: none;"><?php _e( 'Successfully connected', 'instagram-slider-widget' ); ?></span>
                </td>
            </tr>
			<?php
		}
		?>
        </tbody>
    </table>
	<?php wp_nonce_field( $this->plugin->getPrefix() . 'settings_form', $this->plugin->getPrefix() . 'nonce' ); ?>
<?php endif; ?>

<div id="wis_add_account_modal" class="wis_accounts_modal wis_closed">
    <div class="wis_modal_header">
        Select type of account
    </div>
    <div class="wis_modal_content">

        <div class='wis-row-style'>
            <a href="<?php echo $authorize_url_instagram; ?>" class='wis-btn-instagram-account'>Personal
                account</a>
        </div>
        <div class='wis-row-style'>
            <a href="<?php echo $authorize_url_business; ?>" class='wis-btn-facebook-account'>Business
                account</a>
        </div>
    </div>
</div>
<div id="wis_add_account_modal_overlay" class="wis_modal_overlay wis_closed"></div>
