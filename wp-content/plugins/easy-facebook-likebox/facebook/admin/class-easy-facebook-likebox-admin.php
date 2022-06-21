<?php

/*
* Stop execution if someone tried to get file directly.
*/
if ( !defined( 'ABSPATH' ) ) {
    exit;
}
//======================================================================
// Admin of Facebook Module
//======================================================================

if ( !class_exists( 'Easy_Facebook_Likebox_Admin' ) ) {
    class Easy_Facebook_Likebox_Admin
    {
        var  $plugin_slug = 'easy-facebook-likebox' ;
        var  $admin_page_id = 'easy-social-feed_page_easy-facebook-likebox' ;
        function __construct()
        {
            add_action( 'admin_menu', [ $this, 'efbl_menu' ] );
            add_action( 'admin_enqueue_scripts', [ $this, 'efbl_admin_style' ] );
            add_action( 'wp_ajax_efbl_create_skin_url', [ $this, 'efbl_create_skin_url' ] );
            add_action( 'wp_ajax_efbl_get_albums_list', [ $this, 'efbl_get_albums_list' ] );
            add_action( 'wp_ajax_efbl_del_trans', [ $this, 'efbl_delete_transient' ] );
            add_action( 'wp_ajax_efbl_clear_all_cache', [ $this, 'clear_all_cache' ] );
            add_action( 'wp_ajax_efbl_save_fb_access_token', [ $this, 'efbl_save_facebook_access_token' ] );
            add_action( 'wp_ajax_efbl_get_moderate_feed', [ $this, 'efbl_get_moderate_feed' ] );
            add_action( 'wp_ajax_efbl_save_groups_list', [ $this, 'save_groups_list' ] );
        }
        
        /*
         * efbl_admin_style will enqueue style and js files.
         * Returns hook name of the current page in admin.
         * $hook will contain the hook name.
         */
        public function efbl_admin_style( $hook )
        {
            if ( $this->admin_page_id !== $hook ) {
                return;
            }
            wp_enqueue_style( $this->plugin_slug . '-admin-styles', EFBL_PLUGIN_URL . 'admin/assets/css/admin.css', [] );
            wp_enqueue_script( $this->plugin_slug . '-admin-script', EFBL_PLUGIN_URL . 'admin/assets/js/admin.js', [ 'jquery', 'esf-admin' ] );
            wp_enqueue_style( 'easy-facebook-likebox-frontend', EFBL_PLUGIN_URL . 'frontend/assets/css/easy-facebook-likebox-frontend.css', [] );
            $FTA = new Feed_Them_All();
            $fta_settings = $FTA->fta_get_settings();
            $default_skin_id = $fta_settings['plugins']['facebook']['default_skin_id'];
            $efbl_ver = 'free';
            if ( efl_fs()->is_plan( 'facebook_premium', true ) or efl_fs()->is_plan( 'combo_premium', true ) ) {
                $efbl_ver = 'pro';
            }
            wp_localize_script( $this->plugin_slug . '-admin-script', 'efbl', [
                'ajax_url'        => admin_url( 'admin-ajax.php' ),
                'nonce'           => wp_create_nonce( 'efbl-ajax-nonce' ),
                'version'         => $efbl_ver,
                'copied'          => __( 'Copied', 'easy-facebook-likebox' ),
                'error'           => __( 'Something went wrong!', 'easy-facebook-likebox' ),
                'saving'          => __( 'Saving', 'easy-facebook-likebox' ),
                'deleting'        => __( 'Deleting', 'easy-facebook-likebox' ),
                'default_skin_id' => $default_skin_id,
                'moderate_wait'   => __( 'Please wait, we are generating preview for you', 'easy-facebook-likebox' ),
            ] );
            wp_enqueue_script( 'media-upload' );
            wp_enqueue_media();
        }
        
        /*
         * Adds Facebook sub-menu in dashboard
         */
        public function efbl_menu()
        {
            add_submenu_page(
                'feed-them-all',
                __( 'Facebook', 'easy-facebook-likebox' ),
                __( 'Facebook', 'easy-facebook-likebox' ),
                'manage_options',
                'easy-facebook-likebox',
                [ $this, 'efbl_page' ],
                1
            );
        }
        
        /*
         * efbl_page contains the html/markup of the Facebook page.
         * Returns nothing.
         */
        public function efbl_page()
        {
            /**
             * Facebook page view.
             */
            include_once EFBL_PLUGIN_DIR . 'admin/views/html-admin-page-easy-facebook-likebox.php';
        }
        
        /*
         * get saved option values
         */
        private function options( $option = null )
        {
            $FTA = new Feed_Them_All();
            $fta_settings = $FTA->fta_get_settings();
            $fta_settings = wp_parse_args( $fta_settings['plugins']['facebook'], $this->efbl_default_options() );
            return $fta_settings[$option];
        }
        
        /**
         * Provides default values for the Social Options.
         */
        function efbl_default_options()
        {
            $defaults = [
                'efbl_enable_popup'          => null,
                'efbl_popup_interval'        => null,
                'efbl_popup_width'           => null,
                'efbl_popup_height'          => null,
                'efbl_popup_shortcode'       => '',
                'efbl_enable_home_only'      => null,
                'efbl_enable_if_login'       => null,
                'efbl_enable_if_not_login'   => null,
                'efbl_do_not_show_again'     => null,
                'efbl_do_not_show_on_mobile' => null,
            ];
            return apply_filters( 'efbl_default_options', $defaults );
        }
        
        /*
         * Deletes Facebook cached data on AJax
         */
        function efbl_delete_transient()
        {
            $value = sanitize_text_field( $_POST['efbl_option'] );
            $replaced_value = str_replace( '_transient_', '', $value );
            if ( wp_verify_nonce( $_POST['efbl_nonce'], 'efbl-ajax-nonce' ) ) {
                
                if ( current_user_can( 'editor' ) || current_user_can( 'administrator' ) ) {
                    $page_id = explode( '-', $value );
                    
                    if ( isset( $page_id['1'] ) && !empty($page_id['1']) ) {
                        $page_id = $page_id['1'];
                        $page_logo_trasneint_name = "esf_logo_" . $page_id;
                        delete_transient( $page_logo_trasneint_name );
                    }
                    
                    $efbl_deleted_trans = delete_transient( $replaced_value );
                }
            
            }
            
            if ( isset( $efbl_deleted_trans ) ) {
                wp_send_json_success( [ __( 'Deleted', 'easy-facebook-likebox' ), $value ] );
            } else {
                wp_send_json_error( __( 'Something went wrong! Refresh the page and try again', 'easy-facebook-likebox' ) );
            }
        
        }
        
        /*
         * Get the attachment ID from the file URL
         */
        function efbl_get_image_id( $image_url )
        {
            global  $wpdb ;
            $attachment = $wpdb->get_col( $wpdb->prepare( "SELECT ID FROM {$wpdb->posts} WHERE guid='%s';", $image_url ) );
            return $attachment[0];
        }
        
        /**
         * Delete all cached data
         *
         * @since 6.3.2
         */
        function clear_all_cache()
        {
            if ( wp_verify_nonce( $_POST['efbl_nonce'], 'efbl-ajax-nonce' ) ) {
                
                if ( current_user_can( 'editor' ) || current_user_can( 'administrator' ) ) {
                    $cache = $this->get_cache( 'all' );
                    if ( $cache ) {
                        foreach ( $cache as $id => $single ) {
                            $transient_name = str_replace( '_transient_', '', $id );
                            $page_id = explode( '-', $transient_name );
                            
                            if ( isset( $page_id['1'] ) && !empty($page_id['1']) ) {
                                $page_id = $page_id['1'];
                                $page_logo_trasneint_name = "esf_logo_" . $page_id;
                                delete_transient( $page_logo_trasneint_name );
                            }
                            
                            $efbl_deleted_trans = delete_transient( $transient_name );
                        }
                    }
                }
            
            }
            
            if ( isset( $efbl_deleted_trans ) ) {
                wp_send_json_success( __( 'Deleted', 'easy-facebook-likebox' ) );
            } else {
                wp_send_json_error( __( 'Something went wrong! Refresh the page and try again', 'easy-facebook-likebox' ) );
            }
        
        }
        
        /**
         *  Get albums list on Ajax
         *
         * @since 6.2.2
         */
        function efbl_get_albums_list()
        {
            $FTA = new Feed_Them_All();
            $page_id = sanitize_text_field( $_POST['page_id'] );
            if ( wp_verify_nonce( $_POST['efbl_nonce'], 'efbl-ajax-nonce' ) ) {
                
                if ( current_user_can( 'editor' ) || current_user_can( 'administrator' ) ) {
                    $albums_list = efbl_get_albums_list( $page_id );
                    $html = '<option value="">' . __( "None", "easy-facebook-likebox" ) . '</option>';
                    
                    if ( isset( $albums_list ) ) {
                        foreach ( $albums_list as $list ) {
                            
                            if ( isset( $list->picture->data->url ) && !empty(isset( $list->picture->data->url )) ) {
                                $pic_url = $list->picture->data->url;
                            } else {
                                $pic_url = '';
                            }
                            
                            $html .= '<option data-icon="' . $pic_url . '" value="' . $list->id . '">' . $list->name . '</option>';
                        }
                    } else {
                        $html = '';
                    }
                
                }
            
            }
            
            if ( isset( $html ) ) {
                wp_send_json_success( $html );
            } else {
                wp_send_json_error( __( 'Something Went Wrong! Please try again.', 'easy-facebook-likebox' ) );
            }
        
        }
        
        /*
         * Get the access token and save back into DB
         */
        public function efbl_save_facebook_access_token()
        {
            $access_token = sanitize_text_field( $_POST['access_token'] );
            $type = sanitize_text_field( $_POST['type'] );
            $approved_pages = [];
            $FTA = new Feed_Them_All();
            $fta_settings = $FTA->fta_get_settings();
            
            if ( $type == 'page' ) {
                $fta_api_url = 'https://graph.facebook.com/me/accounts?fields=access_token,username,id,name,fan_count,category,about&access_token=' . $access_token;
                $args = [
                    'timeout'   => 150,
                    'sslverify' => false,
                ];
                $fta_pages = wp_remote_get( $fta_api_url, $args );
                $fb_pages = json_decode( $fta_pages['body'] );
                
                if ( $fb_pages->data ) {
                    $title = __( 'Approved Pages', 'easy-facebook-likebox' );
                    $efbl_all_pages_html = '<ul class="collection with-header"> <li class="collection-header"><h5>' . $title . '</h5> 
		        <a href="#fta-remove-at" class="esf-modal-trigger fta-remove-at-btn tooltipped" data-position="left" data-delay="50" data-tooltip="' . __( 'Delete Access Token', 'easy-facebook-likebox' ) . '"><span class="dashicons dashicons-trash"></span></a></li>';
                    foreach ( $fb_pages->data as $efbl_page ) {
                        $page_logo_trasneint_name = "esf_logo_" . $efbl_page->id;
                        $auth_img_src = get_transient( $page_logo_trasneint_name );
                        
                        if ( !$auth_img_src || '' == $auth_img_src ) {
                            $auth_img_src = 'https://graph.facebook.com/' . $efbl_page->id . '/picture?type=large&redirect=0&access_token=' . $access_token;
                            if ( $auth_img_src ) {
                                $auth_img_src = json_decode( jws_fetchUrl( $auth_img_src ) );
                            }
                            if ( $auth_img_src->data->url ) {
                                $auth_img_src = $auth_img_src->data->url;
                            }
                            set_transient( $page_logo_trasneint_name, $auth_img_src, 30 * 60 * 60 * 24 );
                        }
                        
                        
                        if ( isset( $efbl_page->username ) ) {
                            $efbl_username = $efbl_page->username;
                            $efbl_username_label = __( 'Username:', 'easy-facebook-likebox' );
                        } else {
                            $efbl_username = $efbl_page->id;
                            $efbl_username_label = __( 'ID:', 'easy-facebook-likebox' );
                        }
                        
                        $efbl_all_pages_html .= sprintf(
                            '<li class="collection-item avatar li-' . $efbl_page->id . '">
		                <a href="https://www.facebook.com/' . $efbl_page->id . '" target="_blank">
		                <img src="%2$s" alt="" class="circle">
		                </a>   
		                <div class="esf-bio-wrap">       
		                <span class="title">%1$s</span>
		                <p>%3$s <br> %5$s %4$s <span class="dashicons dashicons-admin-page efbl_copy_id tooltipped" data-position="right" data-clipboard-text="%4$s" data-delay="100" data-tooltip="%6$s"></span></p>
		                </div></li>',
                            $efbl_page->name,
                            $auth_img_src,
                            $efbl_page->category,
                            $efbl_username,
                            $efbl_username_label,
                            __( 'Copy', 'easy-facebook-likebox' )
                        );
                        $efbl_page = (array) $efbl_page;
                        $approved_pages[$efbl_page['id']] = $efbl_page;
                    }
                    $efbl_all_pages_html .= '</ul>';
                }
            
            } else {
                $approved_pages = $fta_settings['plugins']['facebook']['approved_pages'];
            }
            
            $fta_self_url = 'https://graph.facebook.com/me?fields=id,name&access_token=' . $access_token;
            $fta_self_data = json_decode( jws_fetchUrl( $fta_self_url, $args ) );
            $user_id = $fta_self_data->id;
            
            if ( $type == 'group' ) {
                // Get approved groups list
                $efbl_groups_api_url = add_query_arg( [
                    'fields'       => 'id,name,administrator,cover',
                    'limit'        => 1000,
                    'access_token' => $access_token,
                ], 'https://graph.facebook.com/v4.0/' . $user_id . '/groups' );
                $groups_list = jws_fetchUrl( $efbl_groups_api_url );
                $groups_list = json_decode( $groups_list );
                $efbl_groups_html = '';
                $groups_data = $groups_list->data;
                usort( $groups_data, [ $this, 'sort_groups_by_admin' ] );
                
                if ( $groups_data ) {
                    $efbl_groups_html = '<ul id="efbl-selected-groups-list" >';
                    $gi = 0;
                    foreach ( $groups_data as $group ) {
                        $efbl_groups_html .= '<li data-id="' . $group->id . '"';
                        if ( isset( $group->administrator ) && $group->administrator == 1 ) {
                            $efbl_groups_html .= 'class="is-admin"';
                        }
                        $efbl_groups_html .= '>';
                        $efbl_groups_html .= '<img src="' . $group->cover->source . '" />
						<span>' . $group->name . '';
                        if ( isset( $group->administrator ) && $group->administrator == 1 ) {
                            $efbl_groups_html .= ' </br> ' . __( "Admin", 'easy-facebook-likebox' ) . '';
                        }
                        $efbl_groups_html .= '</span></li>';
                        $gi++;
                    }
                    $efbl_groups_html .= '</ul> <button class="efbl-save-groups-list  btn">' . __( "Save", "easy-facebook-likebox" ) . '</button>';
                    $is_groups = 'yes';
                } else {
                    $is_groups = 'no';
                }
            
            }
            
            $fta_settings['plugins']['facebook']['approved_pages'] = $approved_pages;
            if ( isset( $groups_list->data ) ) {
                $fta_settings['plugins']['facebook']['all_groups_list'] = $groups_data;
            }
            $fta_settings['plugins']['facebook']['access_token'] = $access_token;
            $fta_settings['plugins']['facebook']['type'] = $type;
            $fta_settings['plugins']['facebook']['author'] = $fta_self_data;
            $efbl_saved = update_option( 'fta_settings', $fta_settings );
            
            if ( isset( $efbl_saved ) ) {
                wp_send_json_success( [
                    __( 'Successfully Authenticated!', 'easy-facebook-likebox' ),
                    $efbl_all_pages_html,
                    $is_groups,
                    $efbl_groups_html,
                    $type
                ] );
            } else {
                wp_send_json_error( __( 'Something went wrong! Refresh the page and try again', 'easy-facebook-likebox' ) );
            }
        
        }
        
        /*
         * efbl_create_skin_url on ajax.
         * Returns the URL.
         */
        function efbl_create_skin_url()
        {
            $skin_id = intval( $_POST['skin_id'] );
            $selectedVal = intval( $_POST['selectedVal'] );
            $page_id = intval( $_POST['page_id'] );
            $page_permalink = get_permalink( $page_id );
            
            if ( wp_verify_nonce( $_POST['efbl_nonce'], 'efbl-ajax-nonce' ) ) {
                $customizer_url = admin_url( 'customize.php' );
                if ( isset( $page_permalink ) ) {
                    $customizer_url = add_query_arg( [
                        'url'              => urlencode( $page_permalink ),
                        'autofocus[panel]' => 'efbl_customize_panel',
                        'efbl_skin_id'     => $skin_id,
                        'mif_customize'    => 'yes',
                        'efbl_account_id'  => $selectedVal,
                    ], $customizer_url );
                }
                wp_send_json_success( [ __( 'Please wait! We are generating a preview for you.', 'easy-facebook-likebox' ), $customizer_url ] );
            } else {
                wp_send_json_error( __( 'Something Went Wrong! Please try again.', 'easy-facebook-likebox' ) );
            }
        
        }
        
        /**
         * Get moderate tab data and render shortcode to get a preview
         *
         * @since 6.2.3
         */
        public function efbl_get_moderate_feed()
        {
            if ( !wp_verify_nonce( $_POST['efbl_nonce'], 'efbl-ajax-nonce' ) ) {
                wp_send_json_error( __( 'Nonce not verified! Please try again', 'easy-facebook-likebox' ) );
            }
            $feed_type = sanitize_text_field( $_POST['feed_type'] );
            $page_id = intval( $_POST['page_id'] );
            $group_id = intval( $_POST['group_id'] );
            global  $efbl_skins ;
            $skin_id = '';
            if ( isset( $efbl_skins ) ) {
                foreach ( $efbl_skins as $skin ) {
                    if ( $skin['layout'] == 'grid' ) {
                        $skin_id = $skin['ID'];
                    }
                }
            }
            
            if ( $feed_type == 'group' ) {
                $page_id = $group_id;
            } else {
                $page_id = $page_id;
            }
            
            $shortcode = '[efb_feed fanpage_id="' . $page_id . '" type="' . $feed_type . '" test_mode="true" is_moderate="true" skin_id="' . $skin_id . '" words_limit="25" post_limit="30" links_new_tab="1"]';
            wp_send_json_success( do_shortcode( $shortcode ) );
        }
        
        /**
         * Returns the groups object sorted by admin at top
         * @param $left
         * @param $right
         *
         * @return mixed
         *
         * @since 6.2.3
         */
        public function sort_groups_by_admin( $left, $right )
        {
            return $right->administrator - $left->administrator;
        }
        
        /**
         * Save lists of group in DB
         */
        function save_groups_list()
        {
            $groups_id = $_POST['groups_id'];
            if ( !isset( $groups_id ) && empty($groups_id) ) {
                wp_send_json_error( __( 'Please select the group first', 'easy-facebook-likebox' ) );
            }
            
            if ( is_array( $groups_id ) ) {
                $groups_id = array_map( 'sanitize_key', $groups_id );
            } else {
                $groups_id = sanitize_key( $groups_id );
            }
            
            $FTA = new Feed_Them_All();
            $fta_settings = $FTA->fta_get_settings();
            $fb_settings = $fta_settings['plugins']['facebook'];
            $groups_html = '';
            
            if ( isset( $fta_settings['plugins']['facebook']['all_groups_list'] ) && !empty($fta_settings['plugins']['facebook']['all_groups_list']) ) {
                $groups_html .= '<ul class="collection with-header"> <li class="collection-header"><h5>' . __( 'Approved Group(s)', 'easy-facebook-likebox' ) . '</h5></li>';
                $groups = $fta_settings['plugins']['facebook']['all_groups_list'];
                foreach ( $groups as $key => $group ) {
                    
                    if ( !in_array( $group->id, $groups_id ) ) {
                        unset( $groups[$key] );
                    } else {
                        $efbl_username = $group->id;
                        $efbl_username_label = __( 'ID:', 'easy-facebook-likebox' );
                        $groups_html .= '<li class="collection-item avatar li-' . $group->id . '">
						<a href="https://www.facebook.com/' . $group->id . '" target="_blank">
			                <img src="' . $group->cover->source . '" alt="" class="circle">
			                </a>  
			        <div class="esf-bio-wrap">        
	 				<span class="title">' . $group->name . '</span>
	 				<p>' . $efbl_username_label . ' ' . $efbl_username . ' <span class="dashicons dashicons-admin-page efbl_copy_id tooltipped" data-position="right" data-clipboard-text="' . $efbl_username . '" data-delay="100" data-tooltip="' . __( 'Copy', 'easy-facebook-likebox' ) . '"></span></p>';
                        if ( isset( $group->administrator ) && $group->administrator == 1 ) {
                            $groups_html .= '<span class="efbl-is-group-admin">' . __( "Admin", 'easy-facebook-likebox' ) . '</span>
                                        <a href="https://www.facebook.com/groups/' . $group->id . '/apps/store" target="_blank" class="efbl-group-setting">' . __( "Add Easy Social Feed (A)/(B) App", 'easy-facebook-likebox' ) . '</a>';
                        }
                        $groups_html .= '</div></li>';
                    }
                
                }
                $groups_html .= '</ul>';
                if ( !isset( $fta_settings['hide_group_info'] ) ) {
                    $groups_html .= '<div class="efbl-group-app-addition">
 					<div class="dashicons dashicons-no-alt esf-hide-free-sidebar" data-id="group_info"></div>
                    <h4>' . __( "Important", "easy-facebook-likebox" ) . '</h4>
					<p>' . __( "To display a feed from your group you need to add our app in your Facebook group settings:", "easy-facebook-likebox" ) . '</p>
					<ul>
						<li><b>1)</b>' . __( "Go to your group settings page by clicking the Add {App Name} app button above in the list", "easy-facebook-likebox" ) . '.</li>
						<li><b>2)</b>' . __( "In the Apps section click Add Apps", "easy-facebook-likebox" ) . '.</li>
						<li><b>3)</b>' . __( "Search for Easy Social Feed (b) and select and add both of our apps", "easy-facebook-likebox" ) . '.</li>
						<li><b>4)</b>' . __( "Click Add", "easy-facebook-likebox" ) . '.</li>
					</ul>
					<p>' . __( "You can now use the plugin to display a feed from your group", "easy-facebook-likebox" ) . '.</p>
					</div>';
                }
            }
            
            $fta_settings['plugins']['facebook']['approved_groups'] = $groups;
            if ( isset( $fta_settings['plugins']['facebook']['all_groups_list'] ) ) {
                unset( $fta_settings['plugins']['facebook']['all_groups_list'] );
            }
            $updated = update_option( 'fta_settings', $fta_settings );
            
            if ( isset( $updated ) && !is_wp_error( $updated ) ) {
                wp_send_json_success( array( __( 'Saved successfully', 'easy-facebook-likebox' ), $groups_html ) );
            } else {
                wp_send_json_error( __( 'Something went wrong! Please try again', 'easy-facebook-likebox' ) );
            }
        
        }
        
        /**
         * Return Plugin cache data
         *
         * @since 6.2.3
         *
         * @param string $type
         *
         * @return array
         */
        public function get_cache( $type = 'posts' )
        {
            global  $wpdb ;
            $efbl_trans_sql = "SELECT `option_name` AS `name`, `option_value` AS `value`\n\t\t    FROM  {$wpdb->options}\n\t\t    WHERE `option_name` LIKE '%transient_%'\n\t\t    ORDER BY `option_name`";
            $efbl_trans_results = $wpdb->get_results( $efbl_trans_sql );
            $efbl_trans_posts = [];
            $efbl_trans_group = [];
            $efbl_trans_bio = [];
            $all_cache = [];
            if ( $efbl_trans_results ) {
                foreach ( $efbl_trans_results as $efbl_trans_result ) {
                    if ( strpos( $efbl_trans_result->name, 'efbl' ) !== false && strpos( $efbl_trans_result->name, 'posts' ) !== false && strpos( $efbl_trans_result->name, 'timeout' ) == false ) {
                        $efbl_trans_posts[$efbl_trans_result->name] = $efbl_trans_result->value;
                    }
                    if ( strpos( $efbl_trans_result->name, 'efbl' ) !== false && strpos( $efbl_trans_result->name, 'bio' ) !== false && strpos( $efbl_trans_result->name, 'timeout' ) == false ) {
                        $efbl_trans_bio[$efbl_trans_result->name] = $efbl_trans_result->value;
                    }
                    if ( strpos( $efbl_trans_result->name, 'efbl' ) !== false && strpos( $efbl_trans_result->name, 'group' ) !== false && strpos( $efbl_trans_result->name, 'timeout' ) == false ) {
                        $efbl_trans_group[$efbl_trans_result->name] = $efbl_trans_result->value;
                    }
                }
            }
            if ( $type == 'bio' ) {
                $cache = $efbl_trans_bio;
            }
            if ( $type == 'group' ) {
                $cache = $efbl_trans_group;
            }
            if ( $type == 'posts' ) {
                $cache = $efbl_trans_posts;
            }
            if ( $type == 'all' ) {
                $cache = array_merge( $efbl_trans_bio, $efbl_trans_group, $efbl_trans_posts );
            }
            return $cache;
        }
    
    }
    $Easy_Facebook_Likebox_Admin = new Easy_Facebook_Likebox_Admin();
}
