<?php
/* @var array $args */
$this_feed         = $args['_this'];
$instance          = $args['instance'];
$accounts          = $args['accounts'];
$accounts_business = $args['accounts_business'];
$sliders           = $args['sliders'];
$options_linkto    = $args['options_linkto'];
$is_update         = $args['is_update'];
$feed_id           = $args['instance']['id'] ?? '';

$search_for = $instance['search_for'] ?? '';
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
                        <div class="form-group">
                            <label for="title"
                                   class="form-label"><?php _e( 'Search Instagram for', 'instagram-slider-widget' ); ?></label>
                            <label class="form-radio form-inline">
                                <input type="radio" id="search_for" name="search_for"
                                       value="account" <?php checked( 'account', $search_for ); ?> />
                                <i class="form-icon"></i>
								<?php _e( 'Account', 'instagram-slider-widget' ); ?>
                            </label>
                            <label class="form-radio form-inline">
                                <input type="radio" id="search_for" name="search_for"
                                       value="account_business" <?php checked( 'account_business', $search_for ); ?> />
                                <i class="form-icon"></i>
								<?php _e( 'Business account', 'instagram-slider-widget' ); ?>
                            </label>
                            <label class="form-radio form-inline">
                                <input type="radio" class="" id="search_for" name="search_for"
                                       value="username" <?php checked( 'username', $search_for ); ?> />
                                <i class="form-icon"></i>
								<?php _e( 'Username', 'instagram-slider-widget' ); ?>
                            </label>
                            <label class="form-radio form-inline">
                                <input type="radio" id="search_for" name="search_for"
                                       value="hashtag" <?php checked( 'hashtag', $search_for ); ?> />
                                <i class="form-icon"></i>
								<?php _e( 'Hashtag', 'instagram-slider-widget' ); ?>
                            </label>

                        </div>
                        <div class="form-group" id="wis-feed-account"
							<?php echo 'account' !== $search_for ? 'style="display:none;"' : ''; ?>>
							<?php
							if ( count( $accounts ) ) {
								?>
                                <label class="form-label" for="account"><?php _e( 'Account', 'instagram-slider-widget' ); ?></label>
                                <select id="account" class="form-select"
                                        name="account"><?php
									foreach ( $accounts as $acc ) {
										$selected = $instance['account'] == $acc['username'] ? "selected='selected'" : "";
										echo "<option value='{$acc['username']}' {$selected}>{$acc['username']}</option>";
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
                        <div class="form-group" id="wis-feed-account_business"
							<?php echo 'account_business' !== $search_for ? 'style="display:none;"' : ''; ?>>
							<?php
							if ( count( $accounts_business ) ) {
								?>
                                <label class="form-label"
                                       for="account_business"><?php _e( 'Business account', 'instagram-slider-widget' ); ?></label>
                                <select id="account_business" class="form-select"
                                        name="account_business">
									<?php foreach ( $accounts_business as $acc ) {
										$selected = $instance['account_business'] == $acc['username'] ? "selected='selected'" : "";
										echo "<option value='{$acc['username']}' {$selected}>{$acc['username']}</option>";
									}
									?>
                                </select>
								<?php
							} else {
								echo "<a href='" . admin_url( 'admin.php?page=settings-wisw' ) . "'>" . __( 'Add account in settings', 'instagram-slider-widget' ) . "</a>";
							}
							?>
                        </div>
                        <div class="form-group" id="wis-feed-username"
							<?php echo 'username' !== $search_for ? 'style="display:none;"' : ''; ?>>
                            <label class="form-label" for="username"><?php _e( 'Username', 'instagram-slider-widget' ); ?></label>
                            <div class="input-group">
                                <span class="input-group-addon">instagram.com/</span>
                                <input id="username" class="form-input" name="username"
                                       value="<?php echo $instance['username']; ?>"/>
                            </div>
                        </div>
                        <div class="form-group" id="wis-feed-hashtag"
							<?php echo 'hashtag' !== $search_for ? 'style="display:none;"' : ''; ?>>
                            <label class="form-label" for="hashtag"><?php _e( 'Hashtag', 'instagram-slider-widget' ); ?></label>
                            <div class="input-group">
                                <span class="input-group-addon">#</span>
                                <input id="hashtag" class="form-input" name="hashtag"
                                       value="<?php echo $instance['hashtag']; ?>"/>
                            </div>

                            <div class="jr-description hashtag-problem-info <?php echo 'hashtag' !== $search_for ? 'hidden' : ''; ?>">
								<?php _e( 'If you have problems displaying by hashtag, please connect your business account and select display by hashtag again', 'instagram-slider-widget' ); ?>
                            </div>

                            <label class="form-label"
                                   for="blocked_users"><?php _e( 'Block Users', 'instagram-slider-widget' ); ?></label>
                            <input class="form-input" id="blocked_users" name="blocked_users"
                                   value="<?php echo $instance['blocked_users']; ?>"/>
                            <div class="jr-description"><?php _e( 'Enter words separated by commas whose images you don\'t want to show', 'instagram-slider-widget' ); ?></div>
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
                                       value="[jr_instagram id=&quot;<?php echo $feed_id ?>&quot;]"
                                       readonly="readonly" style="border:none; color:black; font-family:monospace;">
                                <div class="jr-description"><?php _e( 'Use this shortcode in any page or post to display images with this configuration!', 'instagram-slider-widget' ) ?></div>
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
                            <div id="wis-field-words_in_caption" class="form-group"
								<?php echo ( 'thumbs' == $instance['template'] || 'thumbs-no-border' == $instance['template'] || 'highlight' == $instance['template'] || 'slick_slider' == $instance['template'] ) ? 'style="display:none;"' : ''; ?>>
                                <div class="input-group">
                                    <label class="form-label form-inline" for="caption_words">
										<?php _e( 'Number of words in caption:', 'instagram-slider-widget' ); ?>
                                    </label>
                                    <div class="input-group">
                                        <input class="form-input" type="number" min="0" max="" id="caption_words" name="caption_words"
                                               value="<?php echo $instance['caption_words']; ?>"/>
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
                            <div id="wis-field-images_link" class="form-group" <?php echo 'showcase' == $instance['template'] ? 'style="display:none;' : '' ?>>
                                <label class="form-label" for="images_link">
									<?php _e( 'Link to', 'instagram-slider-widget' ); ?>
                                </label>
                                <select class="form-select" name="images_link"
                                        id="images_link">
									<?php
									if ( count( $options_linkto ) ) {
										foreach ( $options_linkto as $key => $option ) {
											$selected = selected( $instance['images_link'], $key, false );
											echo "<option value='{$key}' {$selected}>{$option}</option>\n";
										}
									}
									if ( ! $this->plugin->is_premium() ) {
										?>
                                        <optgroup label="Available in PRO">
                                            <option value='1' disabled="disabled">Pop Up</option>
                                        </optgroup>
										<?php
									}
									?>
                                </select>
                            </div>
                            <div id="wis-field-custom_url" class="form-group" <?php echo 'custom_url' !== $instance['images_link'] ? 'style="display:none;' : '' ?>>
                                <label class="form-label" for="custom_url"><?php _e( 'Custom link:', 'instagram-slider-widget' ); ?></label>
                                <input class="form-input" id="custom_url" name="custom_url" value="<?php echo $instance['custom_url']; ?>"/>
                                <span class="jr-description"><?php _e( '* use this field only if the above option is set to <strong>Custom Link</strong>', 'instagram-slider-widget' ); ?></span>
                            </div>
                            <div id="wis-field-show_feed_header" class="form-group"
								<?php echo 'account_business' !== $search_for ? 'style="display:none;"' : ''; ?>>
                                <label class="form-switch" for="show_feed_header">
                                    <input class="form-input" id="show_feed_header" name="show_feed_header" type="checkbox"
                                           value="1" <?php checked( '1', $instance['show_feed_header'] ); ?> />
                                    <i class="form-icon"></i>
									<?php _e( 'Show feed header', 'instagram-slider-widget' ); ?>
                                </label>
                            </div>
                            <div id="wis-field-enable_stories" class="form-group"
								<?php echo 'account_business' !== $search_for ? 'style="display:none;"' : ''; ?>>
                                <label class="form-switch" for="enable_stories">
                                    <input class="form-input" id="enable_stories" name="enable_stories" type="checkbox"
                                           value="1" <?php echo $this->plugin->is_premium() ? checked( '1', $instance['enable_stories'] ) : ''; ?>
										<?php echo ! $this->plugin->is_premium() ? 'disabled' : ''; ?>/>
                                    <i class="form-icon"></i><?php _e( 'Show Stories', 'instagram-slider-widget' ); ?>
                                </label>
                                <div class="jr-description">
									<?php if ( $this->plugin->is_premium() ) {
										_e( 'Works only with business account.', 'instagram-slider-widget' );
									} else {
										_e( 'Available in PRO version.', 'instagram-slider-widget' );
										echo " " . sprintf( __( "More in <a href='%s'>PRO version</a>", 'instagram-slider-widget' ), $this->plugin->get_support()->get_pricing_url( true, "wis_widget_settings" ) );
									}
									?>
                                </div>
                            </div>
                            <div id="wis-field-enable_ad" class="form-group">
                                <label class="form-switch" for="enable_ad">
                                    <input class="form-input" id="enable_ad" name="enable_ad" type="checkbox"
                                           value="1" <?php checked( '1', $instance['enable_ad'] ); ?> />
                                    <i class="form-icon"></i><?php _e( 'Enable author\'s ad', 'instagram-slider-widget' ); ?>
                                </label>
                            </div>
                            <div id="wis-field-enable_icons" class="form-group">
                                <label class="form-switch" for="enable_icons">
                                    <input class="form-input" id="enable_icons" name="enable_icons" type="checkbox"
                                           value="1" <?php checked( '1', $instance['enable_icons'] ); ?> />
                                    <i class="form-icon"></i><?php _e( 'Enable instagram icons', 'instagram-slider-widget' ); ?>
                                </label>
                            </div>
                            <div id="wis-field-blocked_words" class="form-group"
								<?php echo 'hashtag' == $search_for ? 'style="display:none;"' : ''; ?>>
                                <label class="form-label" for="blocked_words">
									<?php _e( 'Block words', 'instagram-slider-widget' ); ?>
                                </label>
                                <input class="form-input" id="blocked_words" name="blocked_words"
                                       value="<?php echo $instance['blocked_words']; ?>"/>
                                <div class="jr-description"><?php _e( 'Enter comma-separated words. If one of them occurs in the image description, the image will not be displayed', 'instagram-slider-widget' ); ?></div>
                            </div>
                            <div id="wis-field-allowed_words" class="form-group"
								<?php echo 'hashtag' == $search_for ? 'style="display:none;"' : ''; ?>>
                                <label class="form-label" for="allowed_words">
									<?php _e( 'Allow words', 'instagram-slider-widget' ); ?>
                                </label>
                                <input class="form-input" id="allowed_words"
                                       name="allowed_words"
                                       value="<?php echo $instance['allowed_words']; ?>"/>
                                <div class="jr-description"><?php _e( 'Enter comma-separated words. If one of them occurs in the image description, the image will be displayed', 'instagram-slider-widget' ); ?></div>
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
									if ( ! $this->plugin->is_premium() ) {
										?>
                                        <optgroup label="Available in PRO">
                                            <option value='slick_slider' disabled="disabled">Slick</option>
                                            <option value='masonry' disabled="disabled">Masonry</option>
                                            <option value='highlight' disabled="disabled">Highlight</option>
                                            <option value='showcase' disabled="disabled">Shopifeed - Thumbnails</option>
                                            <option value="masonry_lite" disabled="disabled">Masonry Lite</option>
                                        </optgroup>
										<?php
									}
									?>
                                </select>
                                <div id="masonry_notice"
                                     class="masonry_notice jr-description <?php if ( 'masonry' != $instance['template'] ) {
									     echo 'hidden';
								     } ?>">
									<?php _e( "Not recommended for <strong>sidebar</strong>" ) ?></div>
                            </div>
                            <div class="thumbs_settings" <?php echo ( 'thumbs' != $instance['template'] && 'thumbs-no-border' != $instance['template'] ) ? 'style="display:none;"' : ''; ?>>
                                <div id="wis-field-columns" class="form-group">
                                    <label class="form-label form-inline" for="columns">
										<?php _e( 'Number of Columns:', 'instagram-slider-widget' ); ?>
                                    </label>
                                    <input class="form-input" id="columns" name="columns" type="number" min="1" max="10"
                                           value="<?php echo $instance['columns']; ?>"/>
                                    <div class='jr-description'><?php _e( 'max is 10 ( only for thumbnails template )', 'instagram-slider-widget' ); ?></div>
                                </div>
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
                                        <label class="form-label form-inline" for="masonry_image_width">
											<?php _e( 'Image width:', 'instagram-slider-widget' ); ?>
                                        </label>
                                        <div class="input-group">
                                            <input class="form-input" id="masonry_image_width" name="masonry_image_width" type="number" min="0" max=""
                                                   value="<?php echo $instance['masonry_image_width']; ?>"/>
                                            <span class="input-group-addon"> <?php _e( 'px', 'instagram-slider-widget' ); ?> </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="masonry_lite_settings" <?php echo 'masonry_lite' != $instance['template'] ? 'style="display:none;"' : ''; ?>>
                                <div id="wis-field-masonry-cols" class="form-group">
                                    <div class="input-group">
                                        <label class="form-label form-inline" for="masonry_lite_cols">
					                        <?php _e( 'Columns:', 'instagram-slider-widget' ); ?>
                                        </label>
                                        <div class="input-group">
                                            <input class="form-input" id="masonry_lite_cols" name="masonry_lite_cols"
                                                   type="number" min="1"
                                                   max="6"
                                                   value="<?php echo $instance['masonry_lite_cols']; ?>"/>
                                            <span class="input-group-addon"><?php _e( 'cols', 'instagram-slider-widget' ); ?></span>
                                        </div>
                                    </div>
                                </div>

                                <div id="wis-field-masonry-gap" class="form-group">
                                    <div class="input-group">
                                        <label class="form-label form-inline" for="masonry_lite_gap">
				                            <?php _e( 'Gap:', 'instagram-slider-widget' ); ?>
                                        </label>
                                        <div class="input-group">
                                            <input class="form-input" id="masonry_lite_gap" name="masonry_lite_gap"
                                                   type="number"
                                                   value="<?php echo $instance['masonry_lite_gap']; ?>"/>
                                            <span class="input-group-addon"><?php _e( 'px', 'instagram-slider-widget' ); ?></span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="slick_settings" <?php echo 'slick_slider' != $instance['template'] ? 'style="display:none;"' : ''; ?>>
                                <div id="wis-field-enable_control_buttons" class="form-group">
                                    <label class="form-switch" for="enable_control_buttons">
                                        <input class="form-input" id="enable_control_buttons" name="enable_control_buttons" type="checkbox" value="1"
											<?php checked( '1', $instance['enable_control_buttons'] ); ?> />
                                        <i class="form-icon"></i><?php _e( 'Enable control buttons', 'instagram-slider-widget' ); ?>
                                    </label>
                                </div>

                                <div id="wis-field-keep_ratio" class="form-group">
                                    <label class="form-switch" for="keep_ratio">
                                        <input class="form-input" id="keep_ratio" name="keep_ratio" type="checkbox" value="1"
											<?php checked( '1', $instance['keep_ratio'] ); ?> />
                                        <i class="form-icon"></i><?php _e( 'Keep 1x1 Instagram ratio', 'instagram-slider-widget' ); ?>
                                    </label>
                                </div>

                                <div id="wis-field-slick_img_size" class="form-group">
                                    <div class="input-group">
                                        <label class="form-label" for="slick_img_size">
											<?php _e( 'Images size: ', 'instagram-slider-widget' ); ?>
                                        </label>
                                        <div class="input-group">
                                            <input class="form-input" type="number" min="1" max="500" step="1" id="slick_img_size" name="slick_img_size"
                                                   value="<?php echo $instance['slick_img_size']; ?>"/>
                                            <span class="input-group-addon"><?php _e( 'px', 'instagram-slider-widget' ); ?></span>
                                        </div>
                                    </div>
                                </div>

                                <div id="wis-field-slick_slides_to_show" class="form-group">
                                    <div class="input-group">
                                        <label class="form-label" for="slick_slides_to_show">
											<?php _e( 'Pictures per slide:', 'instagram-slider-widget' ); ?>
                                        </label>
                                        <div class="input-group">
                                            <input class="form-input" id="slick_slides_to_show" type="number" min="1" max="" step="1" name="slick_slides_to_show"
                                                   value="<?php echo $instance['slick_slides_to_show']; ?>"/>
                                            <span class="input-group-addon"><?php _e( 'pcs', 'instagram-slider-widget' ); ?></span>
                                        </div>
                                    </div>
                                </div>

                                <div id="wis-field-slick_sliding_speed" class="form-group">
                                    <div class="input-group">
                                        <label class="form-label" for="slick_sliding_speed">
											<?php _e( 'Sliding speed:', 'instagram-slider-widget' ); ?>
                                        </label>
                                        <div class="input-group">
                                            <input class="form-input" id="slick_sliding_speed" type="number" min="1" max="" name="slick_sliding_speed"
                                                   value="<?php echo $instance['slick_sliding_speed']; ?>"/>
                                            <span class="input-group-addon"><?php _e( 'ms', 'instagram-slider-widget' ); ?></span>
                                        </div>
                                    </div>
                                </div>

                                <div id="wis-field-slick_slides_padding" class="form-group">
                                    <label class="form-switch" for="slick_slides_padding">
                                        <input class="form-input" id="slick_slides_padding" name="slick_slides_padding" type="checkbox"
                                               value="1" <?php checked( '1', $instance['slick_slides_padding'] ); ?> />
                                        <i class="form-icon"></i><?php _e( 'Space between pictures', 'instagram-slider-widget' ); ?>
                                    </label>
                                </div>
                            </div>
                            <div class="highlight_settings" <?php echo 'highlight' !== $instance['template'] ? 'style="display:none;"' : ''; ?>>
                                <div id="wis-field-highlight_offset" class="form-group">
                                    <div class="input-group">
                                        <label class="form-label" for="highlight_offset">
											<?php _e( 'Offset', 'instagram-slider-widget' ); ?>
                                        </label>
                                        <div class="input-group">
                                            <input type="number" min="1" max="" class="form-input" id="highlight_offset" name="highlight_offset"
                                                   value="<?php echo $instance['highlight_offset']; ?>"/>
                                        </div>
                                    </div>
                                </div>

                                <div id="wis-field-highlight_pattern" class="form-group">
                                    <div class="input-group">
                                        <label class="form-label" for="highlight_pattern">
											<?php _e( 'Pattern', 'instagram-slider-widget' ); ?>
                                        </label>
                                        <div class="input-group">
                                            <input type="number" min="0" class="form-input" id="highlight_pattern" name="highlight_pattern"
                                                   value="<?php echo $instance['highlight_pattern']; ?>"/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="shopifeed_settings" <?php echo 'showcase' != $instance['template'] ? 'style="display:none;"' : ''; ?>>
                                <div id="wis-field-shopifeed_phone" class="form-group">
                                    <label class="form-label" for="shopifeed_phone">
										<?php _e( 'Phone', 'instagram-slider-widget' ); ?>
                                    </label>
                                    <input type="text" class="form-input" id="shopifeed_phone" name="shopifeed_phone"
                                           value="<?php echo $instance['shopifeed_phone']; ?>"/>
                                    <div class="jr-description"><?php _e( "Use for whatsapp messages" ) ?></div>
                                </div>

                                <div id="wis-field-shopifeed_color" class="form-group">
                                    <label class="form-label form-inline" for="shopifeed_color">
										<?php _e( 'Buttons Color', 'instagram-slider-widget' ); ?>
                                    </label>
                                    <input type="color" class="shopifeed_color form-inline" id="shopifeed_color" name="shopifeed_color"
                                           style="border: none !important;"
                                           value="<?php echo $instance['shopifeed_color']; ?>"/>
                                </div>
                                <div id="wis-field-shopifeed_columns" class="form-group">
                                    <div class="input-group">
                                        <label class="form-label" for="shopifeed_columns">
											<?php _e( 'Columns count', 'instagram-slider-widget' ); ?>
                                        </label>
                                        <div class="input-group">
                                            <input type="number" class="shopifeed_columns" min="1" max="6" id="shopifeed_columns" name="shopifeed_columns"
                                                   value="<?php echo $instance['shopifeed_columns']; ?>"/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="slider_normal_settings" <?php echo ( 'slider' != $instance['template'] && 'slider-overlay' != $instance['template'] ) ? 'style="display:none;"' : ''; ?>>
                                <div id="wis-field-controls" class="form-group">
                                    <label class="form-label"><?php _e( 'Slider Navigation Controls:', 'instagram-slider-widget' ); ?></label>
                                    <label class="form-radio form-inline">
                                        <input type="radio" id="controls" name="controls" value="prev_next" <?php checked( 'prev_next', $instance['controls'] ); ?> />
                                        <i class="form-icon"></i><?php _e( 'Prev & Next', 'instagram-slider-widget' ); ?>
                                    </label>
                                    <label class="form-radio form-inline">
                                        <input type="radio" id="controls" name="controls"
                                               value="numberless" <?php checked( 'numberless', $instance['controls'] ); ?> />
                                        <i class="form-icon"></i><?php _e( 'Dotted', 'instagram-slider-widget' ); ?>
                                    </label>
                                    <label class="form-radio form-inline">
                                        <input type="radio" id="controls" name="controls" value="none" <?php checked( 'none', $instance['controls'] ); ?> />
                                        <i class="form-icon"></i><?php _e( 'No Navigation', 'instagram-slider-widget' ); ?>
                                    </label>
                                </div>
                                <div id="wis-field-animation" class="form-group">
                                    <label class="form-label"><?php _e( 'Slider Animation:', 'instagram-slider-widget' ); ?></label>
                                    <label class="form-radio form-inline">
                                        <input type="radio" id="animation" name="animation" value="slide" <?php checked( 'slide', $instance['animation'] ); ?> />
                                        <i class="form-icon"></i><?php _e( 'Slide', 'instagram-slider-widget' ); ?>
                                    </label>
                                    <label class="form-radio form-inline">
                                        <input type="radio" id="animation" name="animation" value="fade" <?php checked( 'fade', $instance['animation'] ); ?> />
                                        <i class="form-icon"></i><?php _e( 'Fade', 'instagram-slider-widget' ); ?>
                                    </label>
                                </div>
                                <div id="wis-field-slidespeed" class="form-group">
                                    <div class="input-group">
                                        <label class="form-label" for="slidespeed">
											<?php _e( 'Slide Speed:', 'instagram-slider-widget' ); ?>
                                        </label>
                                        <div class="input-group">
                                            <input type="number" min="1000" step="100" class="form-input" id="slidespeed" name="slidespeed"
                                                   value="<?php echo $instance['slidespeed']; ?>"/>
                                            <span class="input-group-addon"><?php _e( 'ms', 'instagram-slider-widget' ); ?></span>
                                        </div>
                                    </div>
                                </div>
                                <div id="wis-field-description" class="form-group">
                                    <label class="form-label" for="description"><?php _e( 'Slider Text Description:', 'instagram-slider-widget' ); ?></label>
                                    <select size='3' class='form-select' id="description" name="description[]" multiple="multiple">
                                        <option value='username' <?php $this_feed->selected( $instance['description'], 'username' ); ?>
                                                class="<?php echo 'hashtag' == $search_for ? 'hidden' : '' ?>"><?php _e( 'Username', 'instagram-slider-widget' ); ?></option>
                                        <option value='time'<?php $this_feed->selected( $instance['description'], 'time' ); ?>><?php _e( 'Time', 'instagram-slider-widget' ); ?></option>
                                        <option value='caption'<?php $this_feed->selected( $instance['description'], 'caption' ); ?>><?php _e( 'Caption', 'instagram-slider-widget' ); ?></option>
                                    </select>
                                    <span class="jr-description"><?php _e( 'Hold ctrl and click the fields you want to show/hide on your slider. Leave all unselected to hide them all. Default all selected.', 'instagram-slider-widget' ) ?></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mob_tab_content_<?= $feed_id ?>" class="mob_settings" style="display: none;">
                    <h3 style="width: 100%; text-align: center"><?php _e( 'Mobile settings', 'instagram-slider-widget' ); ?></h3>
					<?php if ( defined( 'WISP_PLUGIN_ACTIVE' ) && $this->plugin->is_premium() ) :
						echo apply_filters( 'wis/mob_settings', '', $this_feed, $instance, $sliders, $options_linkto, $feed_id );
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