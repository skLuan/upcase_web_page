<?php

//ini_set('display_errors','Off');
class Easy_Custom_Facebook_Feed_Widget extends WP_Widget
{
    /**
     * Register widget with WordPress.
     */
    function __construct()
    {
        parent::__construct(
            'easy_facebook_feed',
            // Base ID
            __( 'Easy Facebook Feed', 'easy-facebook-likebox' ),
            // Name
            [
                'description' => __( 'Drag and drop this widget for facebook feed integration', 'easy-facebook-likebox' ),
            ]
        );
    }
    
    /**
     * Front-end display of widget.
     *
     * @param array $args Widget arguments.
     * @param array $instance Saved values from database.
     *
     * @see WP_Widget::widget()
     *
     */
    public function widget( $args, $instance )
    {
        global  $efbl ;
        $title = apply_filters( 'widget_title', $instance['title'] );
        echo  $args['before_widget'] ;
        if ( !empty($title) ) {
            echo  $args['before_title'] . $title . $args['after_title'] ;
        }
        echo  $efbl->render_fbfeed_box( $instance ) ;
        echo  $args['after_widget'] ;
    }
    
    /**
     * Back-end widget form.
     *
     * @param array $instance Previously saved values from database.
     *
     * @see WP_Widget::form()
     *
     */
    public function form( $instance )
    {
        /*
         * Getting Main Class
         */
        $FTA = new Feed_Them_All();
        global  $efbl_skins ;
        /*
         * Getting All Settings
         */
        $fta_settings = $FTA->fta_get_settings();
        $locales = [
            'af_ZA' => 'Afrikaans',
            'ar_AR' => 'Arabic',
            'az_AZ' => 'Azeri',
            'be_BY' => 'Belarusian',
            'bg_BG' => 'Bulgarian',
            'bn_IN' => 'Bengali',
            'bs_BA' => 'Bosnian',
            'ca_ES' => 'Catalan',
            'cs_CZ' => 'Czech',
            'cy_GB' => 'Welsh',
            'da_DK' => 'Danish',
            'de_DE' => 'German',
            'el_GR' => 'Greek',
            'en_US' => 'English (US)',
            'en_GB' => 'English (UK)',
            'eo_EO' => 'Esperanto',
            'es_ES' => 'Spanish (Spain)',
            'es_LA' => 'Spanish',
            'et_EE' => 'Estonian',
            'eu_ES' => 'Basque',
            'fa_IR' => 'Persian',
            'fb_LT' => 'Leet Speak',
            'fi_FI' => 'Finnish',
            'fo_FO' => 'Faroese',
            'fr_FR' => 'French (France)',
            'fr_CA' => 'French (Canada)',
            'fy_NL' => 'NETHERLANDS (NL)',
            'ga_IE' => 'Irish',
            'gl_ES' => 'Galician',
            'hi_IN' => 'Hindi',
            'hr_HR' => 'Croatian',
            'hu_HU' => 'Hungarian',
            'hy_AM' => 'Armenian',
            'id_ID' => 'Indonesian',
            'is_IS' => 'Icelandic',
            'it_IT' => 'Italian',
            'ja_JP' => 'Japanese',
            'ka_GE' => 'Georgian',
            'km_KH' => 'Khmer',
            'ko_KR' => 'Korean',
            'ku_TR' => 'Kurdish',
            'la_VA' => 'Latin',
            'lt_LT' => 'Lithuanian',
            'lv_LV' => 'Latvian',
            'mk_MK' => 'Macedonian',
            'ml_IN' => 'Malayalam',
            'ms_MY' => 'Malay',
            'nb_NO' => 'Norwegian (bokmal)',
            'ne_NP' => 'Nepali',
            'nl_NL' => 'Dutch',
            'nn_NO' => 'Norwegian (nynorsk)',
            'pa_IN' => 'Punjabi',
            'pl_PL' => 'Polish',
            'ps_AF' => 'Pashto',
            'pt_PT' => 'Portuguese (Portugal)',
            'pt_BR' => 'Portuguese (Brazil)',
            'ro_RO' => 'Romanian',
            'ru_RU' => 'Russian',
            'sk_SK' => 'Slovak',
            'sl_SI' => 'Slovenian',
            'sq_AL' => 'Albanian',
            'sr_RS' => 'Serbian',
            'sv_SE' => 'Swedish',
            'sw_KE' => 'Swahili',
            'ta_IN' => 'Tamil',
            'te_IN' => 'Telugu',
            'th_TH' => 'Thai',
            'tl_PH' => 'Filipino',
            'tr_TR' => 'Turkish',
            'uk_UA' => 'Ukrainian',
            'ur_PK' => 'Urdu',
            'vi_VN' => 'Vietnamese',
            'zh_CN' => 'Simplified Chinese (China)',
            'zh_HK' => 'Traditional Chinese (Hong Kong)',
            'zh_TW' => 'Traditional Chinese (Taiwan)',
        ];
        $defaults = [
            'title'            => null,
            'fb_appid'         => null,
            'fanpage_id'       => 'innovationforce',
            'layout'           => 'half',
            'filter'           => 'none',
            'other_page_id'    => null,
            'accesstoken'      => null,
            'post_limit'       => 10,
            'words_limit'      => 25,
            'skin_id'          => $fta_settings['plugins']['facebook']['default_skin_id'],
            'show_logo'        => 1,
            'show_image'       => 1,
            'show_like_box'    => 1,
            'links_new_tab'    => '1',
            'cache_unit'       => 5,
            'cache_duration'   => 'days',
            'locale'           => 'en_US',
            'locale_other'     => '',
            'events_filter'    => 'upcoming',
            'load_more'        => 1,
            'live_stream_only' => 0,
        ];
        $instance = wp_parse_args( (array) $instance, $defaults );
        extract( $instance, EXTR_SKIP );
        ?>
        <div class="efbl_widget">

            <p>
                <label style="font-weight: bold;"
                       for="<?php 
        echo  $this->get_field_id( 'title' ) ;
        ?>"><?php 
        _e( 'Title:', 'easy-facebook-likebox' );
        ?></label>
                <input class="widefat"
                       id="<?php 
        echo  $this->get_field_id( 'title' ) ;
        ?>"
                       name="<?php 
        echo  $this->get_field_name( 'title' ) ;
        ?>"
                       type="text" value="<?php 
        echo  esc_attr( $title ) ;
        ?>">
            </p>

            <p>
				<?php 
        $efbl_page_options = null;
        
        if ( isset( $fta_settings['plugins']['facebook']['approved_pages'] ) ) {
            ?>
                    <label style="font-weight: bold;"
                           for="<?php 
            echo  $this->get_field_id( 'fanpage_id' ) ;
            ?>"><?php 
            _e( 'Select Page:', 'easy-facebook-likebox' );
            ?></label>
                    <select <?php 
            if ( class_exists( 'Esf_Multifeed_Facebook_Frontend' ) ) {
                ?> multiple <?php 
            }
            ?>  style="width: 100%;"
                            id="<?php 
            echo  $this->get_field_id( 'fanpage_id' ) ;
            ?>"
                            name="<?php 
            echo  $this->get_field_name( 'fanpage_id' ) ;
            if ( class_exists( 'Esf_Multifeed_Facebook_Frontend' ) ) {
                ?>[]<?php 
            }
            ?>">
						<?php 
            foreach ( $fta_settings['plugins']['facebook']['approved_pages'] as $efbl_page ) {
                
                if ( isset( $efbl_page['username'] ) ) {
                    $efbl_username = $efbl_page['username'];
                } else {
                    $efbl_username = $efbl_page['id'];
                }
                
                
                if ( is_array( $fanpage_id ) ) {
                    $selected = ( in_array( $efbl_username, $fanpage_id ) ? ' selected="selected" ' : '' );
                } else {
                    $selected = selected( $fanpage_id, $efbl_username, false );
                }
                
                ?>
                            <option value="<?php 
                esc_attr_e( $efbl_username );
                ?>" <?php 
                esc_attr_e( $selected );
                ?>>
								<?php 
                esc_html_e( $efbl_page['name'] );
                ?>
                            </option>
                        <?php 
            }
            ?>
                    </select><br/>

                    <i><?php 
            _e( "List of connected pages, Select one to display it's feeds", 'easy-facebook-likebox' );
            ?></i>
				<?php 
        } else {
            ?>
                        <span style="color: #ff0303; font-weight: bold;"><?php 
            esc_html_e( "No page found, Please connect your Facebook page with plugin first from authentication tab", "easy-facebook-likebox" );
            ?>
                            <a href="<?php 
            echo  esc_url( admin_url( 'admin.php?page=easy-facebook-likebox' ) ) ;
            ?>"><?php 
            esc_html_e( "Yes, take me there", "easy-facebook-likebox" );
            ?></a>
                        </span>
				<?php 
        }
        
        ?>

            </p>


            <p>
                <label style="font-weight: bold;"
                       for="<?php 
        echo  $this->get_field_id( 'accesstoken' ) ;
        ?>"><?php 
        _e( 'Access Token (Optional):', 'easy-facebook-likebox' );
        ?></label>
                <input class="widefat"
                       id="<?php 
        echo  $this->get_field_id( 'accesstoken' ) ;
        ?>"
                       name="<?php 
        echo  $this->get_field_name( 'accesstoken' ) ;
        ?>"
                       type="text"
                       value="<?php 
        echo  esc_attr( $accesstoken ) ;
        ?>">
                <br/>

                <i><?php 
        _e( "This step is only required for events filter you can follow the steps explained", 'easy-facebook-likebox' );
        ?>. <a target=_blank href=https://maltathemes.com/custom-facebook-feed/page-token/><?php 
        _e( 'here', 'easy-facebook-likebox' );
        ?></a></i>
            </p>

            <p>
                <label style="font-weight: bold;"
                       for="<?php 
        echo  $this->get_field_id( 'filter' ) ;
        ?>"><?php 
        _e( 'Filter Posts:', 'easy-facebook-likebox' );
        ?></label>
				<?php 
        echo  __( "We're sorry, posts filter is not included in your plan. Please upgrade to premium version to unlock this and all other cool features. ", "easy-facebook-likebox" ) ;
        ?>
                    <a href="<?php 
        echo  esc_url( efl_fs()->get_upgrade_url() ) ;
        ?>"> <?php 
        echo  __( "Upgrade to PRO", "easy-facebook-likebox" ) ;
        ?> </a>
                    <?php 
        ?>

            </p>

			<?php 
        ?>

            <p>
                <label style="font-weight: bold;"
                       for="<?php 
        echo  $this->get_field_id( 'skin_id' ) ;
        ?>"><?php 
        _e( 'Skin:', 'easy-facebook-likebox' );
        ?></label><br/>
				<?php 
        
        if ( isset( $efbl_skins ) ) {
            ?>
                    <select style="width: 100%;"
                            id="<?php 
            echo  $this->get_field_id( 'skin_id' ) ;
            ?>"
                            name="<?php 
            echo  $this->get_field_name( 'skin_id' ) ;
            ?>">

						<?php 
            foreach ( $efbl_skins as $efbl_skin ) {
                if ( $efbl_skin['layout'] == 'half' || $efbl_skin['layout'] == 'thumbnail' ) {
                    continue;
                }
                ?>

                            <option value="<?php 
                esc_attr_e( $efbl_skin['ID'] );
                ?>" <?php 
                selected( $skin_id, $efbl_skin['ID'], true );
                ?>><?php 
                esc_html_e( $efbl_skin['title'] );
                ?></option>

						<?php 
            }
            
            if ( efl_fs()->is_plan( 'facebook_premium', true ) or efl_fs()->is_plan( 'combo_premium', true ) ) {
            } else {
                ?>

                        <option value="free-masonry" disabled><?php 
                esc_html_e( "Skin - Masonry (pro)", 'easy-facebook-likebox' );
                ?></option>
                        <option value="free-carousel" disabled><?php 
                esc_html_e( "Skin - Carousel (pro)", 'easy-facebook-likebox' );
                ?></option>
                        <option value="free-grid" disabled><?php 
                esc_html_e( "Skin - Grid (pro)", 'easy-facebook-likebox' );
                ?></option>
                    <?php 
            }
            
            ?>

                    </select>

                    <br/>
                    <i><?php 
            _e( 'Skin holds all the design settings like feed layout, page header and single post colors, margins and alot of cool settings seprately. You can create new skin from Easy Social Feed > Facebook > Customise(skins) tab.', 'easy-facebook-likebox' );
            ?></i>
				<?php 
        } else {
            echo  __( "WHOOPS, No skin found. You can create new skin from Facebook Likebox - FTA > Facebook > Skins tab. ", "easy-facebook-likebox" ) ;
            ?>
                    <a href="<?php 
            echo  admin_url( 'admin.php?page=easy-facebook-likebox#efbl-skins' ) ;
            ?>"> <?php 
            echo  __( "Yes, take me there", "easy-facebook-likebox" ) ;
            ?> </a>
					<?php 
        }
        
        ?>
            </p>

            <div class="clearfix"></div>

            <p>
                <label style="font-weight: bold;"
                       for="<?php 
        echo  $this->get_field_id( 'post_limit' ) ;
        ?>"><?php 
        _e( 'Posts to display:', 'easy-facebook-likebox' );
        ?></label>
                <input class="widefat"
                       id="<?php 
        echo  $this->get_field_id( 'post_limit' ) ;
        ?>"
                       name="<?php 
        echo  $this->get_field_name( 'post_limit' ) ;
        ?>"
                       type="number" min="1"
                       value="<?php 
        echo  esc_attr( $post_limit ) ;
        ?>"
                       size="5"><br/>
                <i><?php 
        _e( 'Define how many posts you want to display in feed', 'easy-facebook-likebox' );
        ?></i>
            </p>


            <p>
                <label style="font-weight: bold;"
                       for="<?php 
        echo  $this->get_field_id( 'words_limit' ) ;
        ?>"><?php 
        _e( 'Words limit to show:', 'easy-facebook-likebox' );
        ?></label>
                <input class="widefat"
                       id="<?php 
        echo  $this->get_field_id( 'words_limit' ) ;
        ?>"
                       name="<?php 
        echo  $this->get_field_name( 'words_limit' ) ;
        ?>"
                       type="number" min="1"
                       value="<?php 
        echo  esc_attr( $words_limit ) ;
        ?>" size="5"><br/>
                <i><?php 
        _e( 'Define how many words you want to show in feed', 'easy-facebook-likebox' );
        ?></i>
            </p>
            <?php 
        
        if ( efl_fs()->is_plan( 'facebook_premium', true ) or efl_fs()->is_plan( 'combo_premium', true ) ) {
        } else {
            ?>

                <p class="widget-half">
                    <label style="font-weight: bold;"><?php 
            _e( 'Load More', 'easy-facebook-likebox' );
            ?>:</label>
	                <?php 
            _e( "We're sorry, load more feature is not included in your plan. Please upgrade to premium version to unlock this and all other cool features.", 'easy-facebook-likebox' );
            ?>
                   <a href="<?php 
            echo  esc_url( efl_fs()->get_upgrade_url() ) ;
            ?>"><?php 
            _e( 'Upgrade to PRO', 'easy-facebook-likebox' );
            ?></a>
                </p>

        <?php 
        }
        
        ?>

		<?php 
        
        if ( efl_fs()->is_plan( 'facebook_premium', true ) or efl_fs()->is_plan( 'combo_premium', true ) ) {
        } else {
            ?>

            <p class="widget-half">
                <label style="font-weight: bold;"><?php 
            _e( 'Live stream only', 'easy-facebook-likebox' );
            ?>:</label>
				<?php 
            _e( "We're sorry, live stream feature is not included in your plan. Please upgrade to premium version to unlock this and all other cool features.", 'easy-facebook-likebox' );
            ?>
                <a href="<?php 
            echo  esc_url( efl_fs()->get_upgrade_url() ) ;
            ?>"><?php 
            _e( 'Upgrade to PRO', 'easy-facebook-likebox' );
            ?></a>
            </p>

		<?php 
        }
        
        ?>

            <p class="widget-half">
                <input type="checkbox" class="widefat"
                       id="<?php 
        echo  $this->get_field_id( 'show_like_box' ) ;
        ?>"
                       name="<?php 
        echo  $this->get_field_name( 'show_like_box' ) ;
        ?>"
                       value="1" <?php 
        checked( $show_like_box, 1 );
        ?>>
                <label style="font-weight: bold;"
                       for="<?php 
        echo  $this->get_field_id( 'show_like_box' ) ;
        ?>"><?php 
        _e( 'Show like box', 'easy-facebook-likebox' );
        ?></label>

            </p>

            <p class="widget-half">
                <input type="checkbox" class="widefat"
                       id="<?php 
        echo  $this->get_field_id( 'links_new_tab' ) ;
        ?>"
                       name="<?php 
        echo  $this->get_field_name( 'links_new_tab' ) ;
        ?>"
                       value="1" <?php 
        checked( $links_new_tab, 1 );
        ?>>
                <label style="font-weight: bold;"
                       for="<?php 
        echo  $this->get_field_id( 'links_new_tab' ) ;
        ?>"><?php 
        _e( 'Open links in New tab', 'easy-facebook-likebox' );
        ?></label>

            </p>


            <div class="clearfix"></div>
            <p>
                <label style="font-weight: bold;"
                       for="<?php 
        echo  $this->get_field_id( 'cache_unit' ) ;
        ?>"><?php 
        _e( 'Check new posts after every:', 'easy-facebook-likebox' );
        ?></label><br/>

                <input class="half_field"
                       id="<?php 
        echo  $this->get_field_id( 'cache_unit' ) ;
        ?>"
                       name="<?php 
        echo  $this->get_field_name( 'cache_unit' ) ;
        ?>"
                       type="number" min="1"
                       value="<?php 
        echo  esc_attr( $cache_unit ) ;
        ?>" size="5">
                <select class="half_field"
                        id="<?php 
        echo  $this->get_field_id( 'cache_duration' ) ;
        ?>"
                        name="<?php 
        echo  $this->get_field_name( 'cache_duration' ) ;
        ?>">
                    <option <?php 
        selected( $cache_duration, 'hours', $echo = true );
        ?>
                            value="hours"><?php 
        _e( 'Hours', 'easy-facebook-likebox' );
        ?></option>
                    <option <?php 
        selected( $cache_duration, 'minutes', $echo = true );
        ?>
                            value="minutes"><?php 
        _e( 'Minutes', 'easy-facebook-likebox' );
        ?></option>
                    <option <?php 
        selected( $cache_duration, 'days', $echo = true );
        ?>
                            value="days"><?php 
        _e( 'Days', 'easy-facebook-likebox' );
        ?></option>

                </select><br/>
                <i><?php 
        _e( 'Plugin will store the posts in database temporarily and will look for new posts after every selected time duration', 'easy-facebook-likebox' );
        ?></i>
            </p>

            <p><?php 
        _e( 'Use below shortcode to display like box inside pages, posts or in any shortcode aware textarea/editor', 'easy-facebook-likebox' );
        ?></p>
			<?php 
        $multi_ids = '';
        if ( is_array( $fanpage_id ) ) {
            $fanpage_id = implode( ',', $fanpage_id );
        }
        if ( !empty($fb_appid) ) {
            $fb_appid = 'fb_appid="' . $fb_appid . '"';
        }
        if ( !empty($accesstoken) ) {
            $accesstoken = 'accesstoken="' . $accesstoken . '"';
        }
        $efbl_filter_events = '';
        $show_logo = ( isset( $show_logo ) ? $show_logo : 0 );
        $show_image = ( isset( $show_image ) ? $show_image : 0 );
        $show_like_box = ( isset( $show_like_box ) ? $show_like_box : 0 );
        $links_new_tab = ( isset( $links_new_tab ) ? $links_new_tab : '1' );
        $load_more = ( isset( $load_more ) ? $load_more : '1' );
        $live_stream_only = ( isset( $live_stream_only ) ? $live_stream_only : '1' );
        $post_limit = ( isset( $post_limit ) ? $post_limit : '10' );
        ?>

            <p style="background:#ddd; padding:5px; "><?php 
        echo  '[efb_feed fanpage_id="' . $fanpage_id . '" ' . $accesstoken . ' ' . $filter . ' ' . $efbl_filter_events . '  show_like_box="' . $show_like_box . '" load_more="' . $load_more . '" live_stream_only="' . $live_stream_only . '" links_new_tab="' . $links_new_tab . '" post_limit="' . $post_limit . '"  words_limit="' . $words_limit . '"  cache_unit="' . $cache_unit . '" cache_duration="' . $cache_duration . '" ]' ;
        ?></p>
        </div>
		<?php 
    }
    
    /**
     * Sanitize widget form values as they are saved.
     *
     * @param array $new_instance Values just sent to be saved.
     * @param array $old_instance Previously saved values from database.
     *
     * @return array Updated safe values to be saved.
     * @see WP_Widget::update()
     *
     */
    public function update( $new_instance, $old_instance )
    {
        $instance = [];
        $instance['title'] = ( !empty($new_instance['title']) ? strip_tags( $new_instance['title'] ) : '' );
        
        if ( !empty($new_instance['fanpage_id']) ) {
            $instance['fanpage_id'] = esc_sql( $new_instance['fanpage_id'] );
        } else {
            $instance['fanpage_id'] = '';
        }
        
        $instance['fb_appid'] = ( !empty($new_instance['fb_appid']) ? strip_tags( $new_instance['fb_appid'] ) : '' );
        $instance['layout'] = ( !empty($new_instance['layout']) ? strip_tags( $new_instance['layout'] ) : '' );
        $instance['skin_id'] = ( !empty($new_instance['skin_id']) ? strip_tags( $new_instance['skin_id'] ) : '' );
        $instance['post_limit'] = ( !empty($new_instance['post_limit']) ? strip_tags( $new_instance['post_limit'] ) : '' );
        $instance['words_limit'] = ( !empty($new_instance['words_limit']) ? strip_tags( $new_instance['words_limit'] ) : '' );
        $instance['show_logo'] = ( !empty($new_instance['show_logo']) ? strip_tags( $new_instance['show_logo'] ) : '' );
        $instance['show_image'] = ( !empty($new_instance['show_image']) ? strip_tags( $new_instance['show_image'] ) : '' );
        $instance['show_like_box'] = ( !empty($new_instance['show_like_box']) ? strip_tags( $new_instance['show_like_box'] ) : '' );
        $instance['links_new_tab'] = ( !empty($new_instance['links_new_tab']) ? strip_tags( $new_instance['links_new_tab'] ) : '' );
        $instance['accesstoken'] = ( !empty($new_instance['accesstoken']) ? strip_tags( $new_instance['accesstoken'] ) : '' );
        $instance['cache_unit'] = ( !empty($new_instance['cache_unit']) ? strip_tags( $new_instance['cache_unit'] ) : '' );
        $instance['cache_duration'] = ( !empty($new_instance['cache_duration']) ? strip_tags( $new_instance['cache_duration'] ) : '' );
        return $instance;
    }

}
// class Foo_Widget
// $Easy_Custom_Facebook_Feed_Widget = new Easy_Custom_Facebook_Feed_Widget();