<?php
/**
 * @var array $args
 * @var bool $is_premium
 * @var string $authorize_url
 * @var array $accounts
 */

$social = $args['social'];
?>
<div id="wis-add-account-button" class="">
	<?php
	if ( count( $accounts ) && ! $is_premium ) : ?>
        <span class="wis-btn-facebook-account btn-instagram-account-disabled">
                                <?php _e( 'Add Account', 'instagram-slider-widget' ) ?></span>
        <span class="instagram-account-pro"><?php echo sprintf( __( "More accounts in <a href='%s'>PRO version</a>", 'instagram-slider-widget' ), WIS_Plugin::app()->get_support()->get_pricing_url( true, "wis_settings" ) ); ?></span>
	<?php else: ?>
        <a class="wis-btn-facebook-account" target="_self" href="<?php echo $authorize_url; ?>"
           title="Add Account">
			<?php _e( 'Add Account', 'instagram-slider-widget' ) ?>
        </a>
        <span style="float: none; margin-top: 0;" class="spinner" id="wis-spinner"> </span>
	<?php endif; ?>
</div>
<?php
if ( ! empty( $accounts ) ) :
	?>
    <br>
    <table class="widefat wis-table">
        <thead>
        <tr>
            <th class="wis-profile-picture"><?php echo __( 'Image', 'instagram-slider-widget' ); ?></th>
            <th class="wis-profile-id"><?php echo __( 'ID', 'instagram-slider-widget' ); ?></th>
            <th class="wis-profile-name"><?php echo __( 'Name', 'instagram-slider-widget' ); ?></th>
            <th class="wis-profile-token"><?php echo __( 'Token', 'instagram-slider-widget' ); ?></th>
            <th class="wis-profile-actions"><?php echo __( 'Action', 'instagram-slider-widget' ); ?></th>
        </tr>
        </thead>
        <tbody>
		<?php
		foreach ( $accounts as $key => $profile_info ) {
			$delete_link = $this->getActionUrl( 'delete', [ 'social' => $social, 'account' => $key ] );
			$image       = $profile_info['avatar'];
			$fullname    = $profile_info['name'];
			?>
            <tr>
                <td class="wis-profile-picture">
                    <img src="<?php echo esc_url( $image ); ?>"
                         width="30" alt=""/>
                </td>
                <td class="wis-profile-id"><?php echo esc_attr( $profile_info['id'] ); ?></td>
                <td class="wis-profile-name">
                    <a href="https://www.facebook.com/<?php echo esc_html( $profile_info['id'] ); ?>"><?php echo esc_html( $profile_info['name'] ); ?></a>
                </td>
                <td class="wis-profile-token">
                    <input id="<?php echo esc_attr( $profile_info['id'] ); ?>-facebook-access-token"
                           type="text"
                           value="<?php echo esc_attr( $profile_info['token'] ); ?>"
                           class="wis-text-token" readonly/>
                </td>
                <td class="wis-profile-actions">
                    <a href="<?php echo $delete_link; ?>" class="btn btn-danger wfb-delete-account">
                        <span class="dashicons dashicons-trash"></span><?php echo __( 'Delete', 'instagram-slider-widget' ); ?>
                    </a>
                    <span class="spinner"
                          id="wis-delete-spinner-<?php echo esc_attr( $profile_info['id'] ); ?>"></span>
                </td>
            </tr>
			<?php
		}
		?>
        </tbody>
    </table>
	<?php wp_nonce_field( $this->plugin->getPrefix() . 'settings_form', $this->plugin->getPrefix() . 'nonce' ); ?>
<?php endif; ?>
