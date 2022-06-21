<?php
/**
 * Admin View: Tab - Authenticate
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


$FTA = new Feed_Them_All();

$fta_settings = $FTA->fta_get_settings();

if ( isset( $_GET['access_token'] ) && ! empty( $_GET['access_token'] ) ) {
	$access_token = sanitize_text_field( $_GET['access_token'] );
	$type = sanitize_text_field( $_GET['type'] );

	if ( current_user_can( 'editor' ) || current_user_can( 'administrator' ) ) { ?>

        <script>
          jQuery(document).ready(function($) {

            function esfShowNotification(text, delay = 4000){

              if(!text){

                text = fta.copied;
              }

              jQuery(".esf-notification-holder").html(' ').html(text).css('opacity', 1).animate({bottom: '0'});

              setTimeout(function(){ jQuery(".esf-notification-holder").animate({bottom: '-=100%'}) }, delay);
            }

            function EFBLremoveURLParameter(url, parameter) {

              var urlparts = url.split('?');

              if (urlparts.length >= 2) {

                var prefix = encodeURIComponent(parameter) + '=';

                var pars = urlparts[1].split(/[&;]/g);

                for (var i = pars.length; i-- > 0;) {

                  if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                    pars.splice(i, 1);
                  }
                }
                url = urlparts[0] + '?' + pars.join('&');
                return url;
              }
              else {
                return url;
              }
            }

            /*
			* Show the dialog for Saving.
			*/
            esfShowNotification( 'Please wait! Authenticating...', 50000000 );

            var url = window.location.href;

            url = EFBLremoveURLParameter(url, 'access_token');

            url = EFBLremoveURLParameter(url, 'type');

            jQuery('#efbl_access_token').text('\'.$access_token.\'');

            var data = {
              'action': 'efbl_save_fb_access_token',
              'access_token': '<?php esc_html_e( $access_token ); ?>',
              'type' : '<?php esc_html_e( $type ); ?>'
            };

            jQuery.ajax({

              url: "<?php echo admin_url( 'admin-ajax.php' ); ?>",
              type: 'post',
              data: data,
              dataType: 'json',
              success: function(response) {
                window.history.pushState('newurl', 'newurl', url);
                 if (response.success) {
                  var pages_html = response.data['1'];
                  if (pages_html == null && response.data['4'] == 'page') {
                    $('#fta-auth-error').addClass('open');
                    return;
                  }

                  esfShowNotification( response.data['0'], 3000 );
                  jQuery('.efbl_all_pages').html(' ').html(response.data['1']);

                  if (response.data['2'] == 'yes') {
                    jQuery('#efbl-groups-list-modal .groups-list-wrap').html(' ').html(response.data['3']);
                    jQuery('#efbl-groups-list-modal').addClass('open');
                  }else{
                    // setTimeout(function() {
                    //   window.location.href = '&tab=efbl-general';
                    //   window.location.reload();
                    // }, 2000);
                  }
                  jQuery('.fta_noti_holder').fadeOut('slow');

                }
                else {
                  esfShowNotification( response.data, 3000 );
                }
              },
            });

          });
        </script>
	<?php }
}

$app_ID = [ '405460652816219' ];

$rand_app_ID = array_rand( $app_ID, '1' );

$u_app_ID = $app_ID[ $rand_app_ID ];

$authenticate_url = add_query_arg( [
	'client_id'    => $u_app_ID,
	'redirect_uri' => 'https://maltathemes.com/efbl/app-' . $u_app_ID . '/index.php',
	'scope'        => 'pages_read_engagement,pages_manage_metadata,pages_read_user_content',
	'state'        => admin_url( 'admin.php?page=easy-facebook-likebox,type=page' ),
], 'https://www.facebook.com/dialog/oauth' );

// Group auth
$group_authenticate_url = add_query_arg( [
	'client_id'    => $u_app_ID,
	'redirect_uri' => 'https://maltathemes.com/efbl/app-' . $u_app_ID . '/index.php',
	'scope'        => 'groups_access_member_info',
	'state'        => admin_url( 'admin.php?page=easy-facebook-likebox,type=group' ),
], 'https://www.facebook.com/dialog/oauth' );

?>

<div id="efbl-authentication" class="col efbl_tab_c s12 slideLeft <?php echo $active_tab == 'efbl-authentication' ? 'active' : ''; ?>">
    <h5><?php esc_html_e( "Let's connect your Facebook account with the plugin.", 'easy-facebook-likebox' ); ?></h5>
    <p><?php esc_html_e( "Click the button below, log into your Facebook account and authorize the app to get access token.", 'easy-facebook-likebox' ); ?></p>
    <a class=" efbl_authentication_btn btn esf-modal-trigger"
       href="#efbl-authentication-modal"><img
                class="efb_icon left"
                src="<?php echo EFBL_PLUGIN_URL ?>/admin/assets/images/facebook-icon.png"/><?php esc_html_e( "Connect My Facebook Account", 'easy-facebook-likebox' ); ?>
    </a>
    <span class="efbl-or-placeholder"><?php esc_html_e( "OR", 'easy-facebook-likebox' ); ?></span>
    <a class="efbl_authentication_btn btn efbl-connect-manually">
	    <?php esc_html_e( "Setup Manually", 'easy-facebook-likebox' ); ?>
    </a>
    <div class="row efbl-connect-manually-wrap">
        <form action="" method="get">
            <div class="efbl-fields-wrap">
                <input type="hidden" name="page" value="easy-facebook-likebox">
                <div class="input-field col s12 efbl_fields">
                    <label for="efbl_feed_type"><?php esc_html_e( "Feed type", 'easy-facebook-likebox' ); ?></label>
                    <select id="efbl_feed_type" name="type" class="efbl_feed_type">
                        <option value="page" ><?php esc_html_e( "Page", 'easy-facebook-likebox' ); ?></option>
                        <option value="group" ><?php esc_html_e( "Group", 'easy-facebook-likebox' ); ?></option>
                    </select>
                </div>
                <div class="input-field col s12 efbl_fields">
                    <label for="efbl_access_token">
                        <?php esc_html_e( "Access Token", 'easy-facebook-likebox' ); ?>
                        <a class="tooltip" target="_blank" href="https://easysocialfeed.com/custom-facebook-feed/page-token/">(?)</a>
                    </label>
                    <input id="efbl_access_token" name="access_token" required type="text">
                </div>
            </div>
            <input class="btn" value="<?php esc_html_e( "Submit", 'easy-facebook-likebox' ); ?>" type="submit">
        </form>
    </div>
    <div class="row auth-row">
        <div class="efbl_all_pages col s12">
			<?php if ( isset( $fta_settings['plugins']['facebook']['approved_pages'] ) && ! empty( $fta_settings['plugins']['facebook']['approved_pages'] ) ) { ?>
                <ul class="collection with-header">
                    <li class="collection-header">
                        <h5><?php esc_html_e( "Approved Page(s)", 'easy-facebook-likebox' ); ?>
                        </h5>

                        <a href="#fta-remove-at"
                           class="esf-modal-trigger fta-remove-at-btn tooltipped"
                           data-position="left" data-delay="50"
                           data-tooltip="<?php esc_html_e( "Delete Access Token", 'easy-facebook-likebox' ); ?>">
                            <span class="dashicons dashicons-trash"></span>
                        </a>
                    </li>

					<?php foreach ( $fta_settings['plugins']['facebook']['approved_pages'] as $efbl_page ) {

						if ( $efbl_page['id'] ) {
							if ( isset( $efbl_page['username'] ) ) {
								$efbl_username       = $efbl_page['username'];
								$efbl_username_label = __( 'Username:', 'easy-facebook-likebox' );
							} else {
								$efbl_username       = $efbl_page['id'];
								$efbl_username_label = __( 'ID:', 'easy-facebook-likebox' );

							}
							?>
                            <li class="collection-item avatar li-<?php esc_attr_e( $efbl_page['id'] ); ?>">
                                <a href="<?php echo esc_url( 'https://web.facebook.com/' . $efbl_page['id'] . '' ) ?>"
                                   target="_blank">
                                    <img src="<?php echo efbl_get_page_logo( $efbl_page['id'] ); ?>"
                                         alt="" class="circle">
                                </a>
                                <div class="esf-bio-wrap">
								<?php if ( $efbl_page['name'] ) { ?>

                                    <span class="title"><?php esc_html_e( $efbl_page['name'] ); ?></span>

								<?php } ?>

                                <p>
									<?php if ( $efbl_page['category'] ) {
										esc_html_e( $efbl_page['category'] );
									} ?>
                                    <br>
									<?php if ( $efbl_username_label ) {
										esc_html_e( $efbl_username_label );
									} ?>

									<?php if ( $efbl_username ) {
										esc_html_e( $efbl_username ); ?>

                                        <span class="dashicons dashicons-admin-page efbl_copy_id tooltipped"
                                           data-position="right"
                                           data-clipboard-text="<?php esc_attr_e( $efbl_username ); ?>"
                                           data-delay="100"
                                           data-tooltip="<?php esc_html_e( "Copy", 'easy-facebook-likebox' ); ?>"></span>
									<?php } ?>
                                </p>

                                </div>

                            </li>


						<?php }
					} ?>

                </ul>
			<?php } ?>

	        <?php
            if ( isset( $fta_settings['plugins']['facebook']['approved_groups'] ) && ! empty( $fta_settings['plugins']['facebook']['approved_groups'] ) ) { ?>
                <ul class="collection with-header">
                    <li class="collection-header">
                        <h5><?php esc_html_e( "Approved Group(s)", 'easy-facebook-likebox' ); ?>
                        </h5>
                        <a href="#fta-remove-at"
                           class="esf-modal-trigger fta-remove-at-btn tooltipped"
                           data-position="left" data-delay="50"
                           data-tooltip="<?php esc_html_e( "Delete Access Token", 'easy-facebook-likebox' ); ?>">
                            <span class="dashicons dashicons-trash"></span>
                        </a>
                    </li>
			        <?php foreach ( $fta_settings['plugins']['facebook']['approved_groups'] as $group ) {
				        if ( $group->id ) { ?>
                            <li class="collection-item avatar li-<?php esc_attr_e( $group->id );  ?>">
                                <a href="<?php echo esc_url( 'https://web.facebook.com/'.$group->id.'' ) ?>"
                                   target="_blank">
                                    <img src="<?php echo efbl_get_page_logo( $group->id ); ?>"
                                         alt="" class="circle">
                                </a>
                                <div class="esf-bio-wrap">
						        <?php if ( $group->name ) { ?>
                                    <span class="title"><?php esc_html_e( $group->id );  ?></span>
						        <?php } ?>
                                <p>

                                   <?php esc_html_e( 'ID:', 'easy-facebook-likebox' ); ?>

							        <?php if ($group->id ) {
								        esc_html_e( $group->id ); ?>

                                    <span class="dashicons dashicons-admin-page efbl_copy_id tooltipped"
                                           data-position="right"
                                           data-clipboard-text="<?php esc_attr_e( $group->id );  ?>"
                                           data-delay="100"
                                           data-tooltip="<?php esc_html_e( "Copy", 'easy-facebook-likebox' ); ?>"></span>
							        <?php } ?>
                                </p>


                                <?php if( isset( $group->administrator ) &&  $group->administrator == 1 ){ ?>
                                        <span class="efbl-is-group-admin"><?php esc_html_e( "Admin", 'easy-facebook-likebox' ); ?></span>
                                        <a href="https://www.facebook.com/groups/<?php esc_attr_e( $group->id );  ?>/apps/store" target="_blank" class="efbl-group-setting"><?php esc_html_e( "Add Easy Social Feed (A)/(B) App", 'easy-facebook-likebox' ); ?></a>
                                <?php } ?>
                                </div>
                            </li>


				        <?php }
			        } ?>

                </ul>
                <?php   if( !isset( $fta_settings['hide_group_info']) ){  ?>
                <div class="efbl-group-app-addition esf-hide-group_info">
                    <div class="dashicons dashicons-no-alt esf-hide-free-sidebar" data-id="group_info"></div>
                    <h4><?php esc_html_e( "Important", 'easy-facebook-likebox' ); ?></h4>
                    <p><?php esc_html_e( "To display a feed from your group you need to add our app in your Facebook group settings:", 'easy-facebook-likebox' ); ?></p>
                    <ul>
                        <li><b>1)</b><?php esc_html_e( 'Go to your group settings page by clicking the "Add {App Name} app" button above in the list', 'easy-facebook-likebox' ); ?>.</li>
                        <li><b>2)</b><?php esc_html_e( 'In the "Apps" section click "Add Apps"', 'easy-facebook-likebox' ); ?>.</li>
                        <li><b>3)</b><?php esc_html_e( 'Search for Easy Social Feed (b) and select and add both of our apps', 'easy-facebook-likebox' ); ?>.</li>
                        <li><b>4)</b><?php esc_html_e( 'Click "Add"', 'easy-facebook-likebox' ); ?>.</li>
                    </ul>
                    <p><?php esc_html_e( "You can now use the plugin to display a feed from your group.", 'easy-facebook-likebox' ); ?></p>
                </div>
	        <?php
                }
            } ?>

        </div>
    </div>

    <p class="esf-notice"><?php esc_html_e( "Please note: This does not give us permission to manage your Facebook pages or groups, it simply allows the plugin to see a list of the pages or groups you approved and retrieve an Access Token.", 'easy-facebook-likebox' ); ?></p>
</div>
<div id="efbl-authentication-modal" class="efbl-authentication-modal fadeIn esf-modal">
    <div class="modal-content">

        <div class="mif-modal-content">
            <h6>
                <?php esc_html_e( "Would you like to display a Facebook Page or Group?", 'easy-facebook-likebox' ); ?>
            </h6>

            <div class="efbl-auth-btn-holder">

                <input class="with-gap" name="efbl_login_type"
                       data-url="<?php echo esc_url( $authenticate_url ); ?>"
                       value="basic" type="radio" id="efbl_page_type" checked/>
                <label for="efbl_page_type"><?php esc_html_e( "Facebook Page", 'easy-facebook-likebox' ); ?></label>
            </div>
            <div class="efbl-auth-btn-holder">
                <input class="with-gap" name="efbl_login_type"
                       data-url="<?php echo esc_url( $group_authenticate_url ); ?>" value="group"
                       type="radio" id="efbl_group_type"/>
                <label for="efbl_group_type"><?php esc_html_e( "Facebook Group", 'easy-facebook-likebox' ); ?></label>
            </div>
            <a href="<?php echo esc_url( $authenticate_url ); ?>"
               class=" btn efbl-auth-modal-btn"><?php esc_html_e( "Connect", 'easy-facebook-likebox' ); ?></a>

        </div>
    </div>

</div>

<div id="efbl-groups-list-modal" class="esf-modal efbl-groups-list-modal">
    <div class="modal-content">
            <h5><?php esc_html_e( "Select Facebook group(s) from the list to show feed", 'easy-facebook-likebox' ); ?></h5>
            <div class="groups-list-wrap">

            </div>
    </div>
</div>