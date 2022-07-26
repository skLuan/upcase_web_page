<?php
/* @var array $args */

$instance          = $args['instance'];
$accounts          = $args['accounts'];
$accounts_business = $args['accounts_business'];
$sliders           = $args['sliders'];
$options_linkto    = $args['options_linkto'];
$is_update         = $args['is_update'];
$feed_id           = $args['instance']['id'] ?? '';
?>
<div class="wisw-social-content">
    <h2>
		<?php if ( $is_update ) {
			_e( 'Edit feed', 'instagram-slider-widget' );
		} else {
			_e( 'Add feed', 'instagram-slider-widget' );
		} ?>
    </h2>
    <form action="" method="post" name="wis-feed-add-form" id="wis-feed-add-form">
        <div class="jr-container">
            <div class="isw-common-settings">
                <div class="wis-flex-content">
                    <div class="wis-flex-content-column">
                        <div class="form-group">
                            <label for="title" class="form-label"><?php _e( 'Title:', 'instagram-slider-widget' ); ?></label>
                            <input class="form-input" id="title"
                                   name="title"
                                   value="<?php echo $instance['title']; ?>"/>
                        </div>
                        <div class="form-group" id="wis-feed-account">
							<?php
							if ( count( $accounts ) ) {
								?>
                                <label class="form-label" for="account"><?php _e( 'Account', 'instagram-slider-widget' ); ?></label>
                                <select id="account" class="form-select" name="account">
									<?php
									foreach ( $accounts as $acc ) {
										$selected = $instance['account'] == $acc['name'] ? "selected='selected'" : "";
										echo "<option value='{$acc['name']}' {$selected}>{$acc['name']}</option>";
									}
									?>
                                </select>
								<?php
							} else {
								?>
                                <label class="form-label"><?php _e( 'Account', 'instagram-slider-widget' ); ?></label>
                                <a href="<?php echo admin_url( 'admin.php?page=settings-wisw' ); ?>"><?php _e( 'Add account in settings', 'instagram-slider-widget' ); ?></a>
								<?php
							}
							?>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <label class="form-label form-inline"
                                       for="refresh_hour"><?php _e( 'Check for new images every:', 'instagram-slider-widget' ); ?></label>
                                <div class="input-group">
                                    <input class="form-input" type="number" min="1" max="200" id="refresh_hour" name="refresh_hour"
                                           value="<?php echo $instance['refresh_hour']; ?>"/>
                                    <span class="input-group-addon"><?php _e( 'hours', 'instagram-slider-widget' ); ?></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wis-flex-content-column">
						<?php if ( $feed_id ) : ?>
                            <div id="wis-field-jr_insta_shortcode" class="form-group">
                                <label class="form-label" for="jr_insta_shortcode">
									<?php _e( 'Shortcode of this feed:', 'instagram-slider-widget' ); ?>
                                </label>
                                <input id="jr_insta_shortcode" onclick="this.setSelectionRange(0, this.value.length)" type="text" class="form-input"
                                       value="[cm_facebook_feed id=&quot;<?php echo $feed_id ?>&quot;]"
                                       readonly="readonly" style="border:none; color:black; font-family:monospace;">
                                <div class="jr-description"><?php _e( 'Use this shortcode in any page or post to display images with this widget configuration!', 'instagram-slider-widget' ) ?></div>
                            </div>
						<?php endif; ?>
                    </div>
                </div>
            </div>

            <div class="isw-tabs">
                <ul>
                    <li class="desk_tab active" id="desk_tab_<?= $feed_id ?>" data-tab-id="<?= $feed_id ?>"><?php _e( 'Desktop', 'instagram-slider-widget' ); ?></li>
                    <li class="mob_tab" id="mob_tab_<?= $feed_id ?>" data-tab-id="<?= $feed_id ?>"><?php _e( 'Mobile', 'instagram-slider-widget' ); ?></li>
                </ul>
            </div>

            <div class="isw-tabs-content" id="widget_tabs_<?= $feed_id ?>" data-widget-id="<?= $feed_id ?>">
                <div id="desk_tab_content_<?= $feed_id ?>" class="desk_settings">
                    <h3 style="width: 100%; text-align: center"><?php _e( 'Desktop settings', 'instagram-slider-widget' ); ?></h3>

                    <div class="wis-flex-content">
                        <div class="wis-flex-content-column">
                            <div id="wis-field-images_number" class="form-group">
                                <div class="input-group">
                                    <label class="form-label form-inline"
                                           for="images_number"><?php _e( 'Count of images to show:', 'instagram-slider-widget' ); ?>
                                    </label>
                                    <div class="input-group">
                                        <input class="form-input" type="number" min="1" max="" id="images_number" name="images_number"
                                               value="<?php echo $instance['images_number']; ?>"/>
                                        <span class="input-group-addon"><?php _e( 'pcs', 'instagram-slider-widget' ); ?></span>
                                    </div>
                                </div>
                                <div class="jr-description">
									<?php if ( ! $this->plugin->is_premium() ) {
										_e( 'Maximum 20 images in free version.', 'instagram-slider-widget' );
										echo " " . sprintf( __( "More in <a href='%s'>PRO version</a>", 'instagram-slider-widget' ), $this->plugin->get_support()->get_pricing_url( true, "wis_widget_settings" ) );
									}
									?>
                                </div>

                            </div>
                            <div id="wis-field-words_in_caption" class="form-group">
                                <div class="input-group">
                                    <label class="form-label form-inline" for="title_words">
										<?php _e( 'Number of words in caption:', 'instagram-slider-widget' ); ?>
                                    </label>
                                    <div class="input-group">
                                        <input class="form-input" type="number" min="0" max="" id="title_words" name="title_words"
                                               value="<?php echo $instance['title_words']; ?>"/>
                                        <span class="input-group-addon"><?php _e( 'pcs', 'instagram-slider-widget' ); ?></span>
                                    </div>
                                </div>
                            </div>
                            <div id="wis-field-orderby" class="form-group">
                                <label class="form-label" for="orderby"><?php _e( 'Order by', 'instagram-slider-widget' ); ?></label>
                                <select class="form-select" name="orderby" id="orderby">
                                    <option value="date-ASC" <?php selected( $instance['orderby'], 'date-ASC', true ); ?>><?php _e( 'Date - Ascending', 'instagram-slider-widget' ); ?></option>
                                    <option value="date-DESC" <?php selected( $instance['orderby'], 'date-DESC', true ); ?>><?php _e( 'Date - Descending', 'instagram-slider-widget' ); ?></option>
                                    <option value="popular-ASC" <?php selected( $instance['orderby'], 'popular-ASC', true ); ?>><?php _e( 'Popularity - Ascending', 'instagram-slider-widget' ); ?></option>
                                    <option value="popular-DESC" <?php selected( $instance['orderby'], 'popular-DESC', true ); ?>><?php _e( 'Popularity - Descending', 'instagram-slider-widget' ); ?></option>
                                    <option value="rand" <?php selected( $instance['orderby'], 'rand', true ); ?>><?php _e( 'Random', 'instagram-slider-widget' ); ?></option>
                                </select>
                            </div>
                            <div id="wis-field-images_link" class="form-group">
                                <label class="form-label" for="fbimages_link">
									<?php _e( 'Link to', 'instagram-slider-widget' ); ?>
                                </label>
                                <select class="form-select" name="fbimages_link" id="fbimages_link">
									<?php
									if ( count( $options_linkto ) ) {
										foreach ( $options_linkto as $key => $option ) {
											$selected = selected( $instance['fbimages_link'], $key, false );
											echo "<option value='{$key}' {$selected}>{$option}</option>\n";
										}
									}
									?>
                                </select>
                            </div>
                            <div id="wis-field-show_feed_header" class="form-group">
                                <label class="form-switch" for="show_feed_header">
                                    <input class="form-input" id="show_feed_header"
                                           name="show_feed_header" type="checkbox"
                                           value="1" <?php checked( '1', $instance['show_feed_header'] ); ?> />
                                    <i class="form-icon"></i>
									<?php _e( 'Show feed header', 'instagram-slider-widget' ); ?>
                                </label>
                            </div>
                        </div>
                        <div class="wis-flex-content-column">
                            <div id="wis-field-template" class="form-group">
                                <label class="form-label" for="template">
									<?php _e( 'Template', 'instagram-slider-widget' ); ?>
                                </label>
                                <select class="form-select" name="template" id="template">
									<?php
									if ( count( $sliders ) ) {
										foreach ( $sliders as $key => $slider ) {
											$selected = ( $instance['template'] == $key ) ? "selected='selected'" : '';
											echo "<option value='{$key}' {$selected}>{$slider}</option>\n";
										}
									}
									?>
                                </select>
                                <div id="masonry_notice"
                                     class="masonry_notice jr-description <?php if ( 'masonry' != $instance['template'] ) {
									     echo 'hidden';
								     } ?>">
									<?php _e( "Not recommended for <strong>sidebar</strong>" ) ?></div>
                            </div>
                            <div class="masonry_settings" <?php echo 'masonry' != $instance['template'] ? 'style="display:none;"' : ''; ?>>
                                <div id="wis-field-gutter" class="form-group">
                                    <div class="input-group">
                                        <label class="form-label form-inline" for="gutter">
											<?php _e( 'Vertical space between item elements:', 'instagram-slider-widget' ); ?>
                                        </label>
                                        <div class="input-group">
                                            <input class="form-input" id="gutter" name="gutter" type="number" min="0" max=""
                                                   value="<?php echo $instance['gutter']; ?>"/>
                                            <span class="input-group-addon"><?php _e( 'px', 'instagram-slider-widget' ); ?></span>
                                        </div>
                                    </div>
                                </div>
                                <div id="wis-field-masonry_image_width" class="form-group">
                                    <div class="input-group">
                                        <label class="form-label form-inline" for="masonry_post_width">
											<?php _e( 'Post width:', 'instagram-slider-widget' ); ?>
                                        </label>
                                        <div class="input-group">
                                            <input class="form-input" id="masonry_post_width" name="masonry_post_width" type="number" min="0" max=""
                                                   value="<?php echo $instance['masonry_post_width']; ?>"/>
                                            <span class="input-group-addon"> <?php _e( 'px', 'instagram-slider-widget' ); ?> </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="mob_tab_content_<?= $feed_id ?>" class="mob_settings" style="display: none;">
                    <h3 style="width: 100%; text-align: center"><?php _e( 'Mobile settings', 'instagram-slider-widget' ); ?></h3>
                    <?php if ( defined( 'WISP_PLUGIN_ACTIVE' ) && $this->plugin->is_premium() ) :
						echo apply_filters( 'wis/facebook/mob_settings', '', $this, $instance, $sliders, $options_linkto, $feed_id );
					else: ?>
                        <h3 style="width: 100%; text-align: center"><?php _e( 'Mobile settings available only in premium version', 'instagram-slider-widget' ); ?></h3>
					<?php endif; ?>
                </div>
            </div>
        </div>
        <div class="wis-feed-save-button-container">
            <input name="wis-feed-save-action" class="wbcr-factory-button wbcr-save-button" type="submit" value="<?php _e( 'Save', 'instagram-slider-widget' ); ?>">
        </div>
    </form>
</div>