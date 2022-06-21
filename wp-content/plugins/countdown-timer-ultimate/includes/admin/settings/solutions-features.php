<?php
/**
 * Plugin Solutions & Features Page
 *
 * @package WP Logo Showcase Responsive Slider
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

// Taking some variables
$popup_add_link = add_query_arg( array( 'post_type' => WPCDT_POST_TYPE ), admin_url( 'post-new.php' ) );
?>

<div id="wrap">
	<div class="wpcdt-sf-wrap">
		<div class="wpcdt-sf-inr">
			<!-- Start - Welcome Box -->
			<div class="wpcdt-sf-welcome-wrap">
				<div class="wpcdt-sf-welcome-inr">
					<div class="wpcdt-sf-welcome-left">
						<div class="wpcdt-sf-subtitle">Getting Started</div>
						<h2 class="wpcdt-sf-title">Welcome to Countdown Timer</h2>
						<p class="wpcdt-sf-content">Countdown easier, simpler and beautiful. The visitors who visit your website through navigational query would come across such a beautiful WordPress countdown plugin and will not feel bored.</p>
						<a href="<?php echo esc_url( $popup_add_link ); ?>" class="wpcdt-sf-btn">Launch Countdown Timer</a></br> <b>OR</b> </br><a href="<?php echo WPCDT_PLUGIN_LINK_WELCOME; ?>"  target="_blank" class="wpcdt-sf-btn wpcdt-sf-btn-orange">Grab Now Pro Features</a>
						<div class="wpcdt-rc-wrap">
							<div class="wpcdt-rc-inr wpcdt-rc-bg-box">
								<div class="wpcdt-rc-icon">
									<img src="<?php echo esc_url( WPCDT_URL ); ?>assets/images/popup-icon/14-days-money-back-guarantee.png" alt="14-days-money-back-guarantee" title="14-days-money-back-guarantee" />
								</div>
								<div class="wpcdt-rc-cont">
									<h3>14 Days Refund Policy</h3>
									<p>14-day No Question Asked Refund Guarantee</p>
								</div>
							</div>
							<div class="wpcdt-rc-inr wpcdt-rc-bg-box">
								<div class="wpcdt-rc-icon">
									<img src="<?php echo esc_url( WPCDT_URL ); ?>assets/images/popup-icon/popup-design.png" alt="popup-design" title="popup-design" />
								</div>
								<div class="wpcdt-rc-cont">
									<h3>Include Done-For-You Countdown Timer Setup</h3>
									<p>Our  experts team will design 1 free Countdown Timer for you as per your need.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="wpcdt-sf-welcome-right">
						<div class="wpcdt-sf-fp-ttl">Free vs Pro</div>
						<div class="wpcdt-sf-fp-box-wrp">
							<div class="wpcdt-sf-fp-box">
								<i class="dashicons dashicons-art"></i>
								<div class="wpcdt-sf-box-ttl">1 Clock Designs</div>
								<div class="wpcdt-sf-tag">Free</div>
							</div>
							<div class="wpcdt-sf-fp-box">
								<i class="dashicons dashicons-clock"></i>
								<div class="wpcdt-sf-box-ttl">Clock expiry time</div>
								<div class="wpcdt-sf-tag">Free</div>
							</div>
							<div class="wpcdt-sf-fp-box">
								<i class="dashicons dashicons-art"></i>
								<div class="wpcdt-sf-box-ttl">Background Color</div>
								<div class="wpcdt-sf-tag">Free</div>
							</div>
							<div class="wpcdt-sf-fp-box">
								<i class="dashicons dashicons-clock"></i>
								<div class="wpcdt-sf-box-ttl">Create Unlimited Timer</div>
								<div class="wpcdt-sf-tag">Free</div>
							</div>
							<div class="wpcdt-sf-fp-box">
								<i class="dashicons dashicons-clock"></i>
								<div class="wpcdt-sf-box-ttl">Animation Timer</div>
								<div class="wpcdt-sf-tag">Free</div>
							</div>
							<div class="wpcdt-sf-fp-box wpcdt-sf-pro-box">
								<i class="dashicons dashicons-desktop"></i>
								<div class="wpcdt-sf-box-ttl">Works With Server Timezone</div>
								<div class="wpcdt-sf-tag">Pro</div>
							</div>
							<div class="wpcdt-sf-fp-box wpcdt-sf-pro-box">
								<i class="dashicons dashicons-clock"></i>
								<div class="wpcdt-sf-box-ttl">Timer clock option</div>
								<div class="wpcdt-sf-tag">Pro</div>
							</div>
							<div class="wpcdt-sf-fp-box wpcdt-sf-pro-box">
								<i class="dashicons dashicons-art"></i>
								<div class="wpcdt-sf-box-ttl">Timer label text color</div>
								<div class="wpcdt-sf-tag">Pro</div>
							</div>
							<div class="wpcdt-sf-fp-box wpcdt-sf-pro-box">
								<i class="dashicons dashicons-clock"></i>
								<div class="wpcdt-sf-box-ttl">Schedule Timer</div>
								<div class="wpcdt-sf-tag">Pro</div>
							</div>
							<div class="wpcdt-sf-fp-box wpcdt-sf-pro-box">
								<i class="dashicons dashicons-clock"></i>
								<div class="wpcdt-sf-box-ttl">Recurring Timer</div>
								<div class="wpcdt-sf-tag">Pro</div>
							</div>
							<div class="wpcdt-sf-fp-box wpcdt-sf-pro-box">
								<i class="dashicons dashicons-clock"></i>
								<div class="wpcdt-sf-box-ttl">Simple Timer Shortcode</div>
								<div class="wpcdt-sf-tag">Pro</div>
							</div>
							<div class="wpcdt-sf-fp-box wpcdt-sf-pro-box">
								<i class="dashicons dashicons-clock"></i>
								<div class="wpcdt-sf-box-ttl">12+ (Clock Style)</div>
								<div class="wpcdt-sf-tag">Pro</div>
							</div>
							<div class="wpcdt-sf-fp-box wpcdt-sf-pro-box">
								<i class="dashicons dashicons-html"></i>
								<div class="wpcdt-sf-box-ttl">WP Templating Features </div>
								<div class="wpcdt-sf-tag">Pro</div>
							</div>
							<div class="wpcdt-sf-fp-box wpcdt-sf-pro-box">
								<i class="dashicons dashicons-media-text"></i>
								<div class="wpcdt-sf-box-ttl">Completion Text</div>
								<div class="wpcdt-sf-tag">Pro</div>
							</div>
							<div class="wpcdt-sf-fp-box wpcdt-sf-pro-box">
								<i class="dashicons dashicons-editor-code"></i>
								<div class="wpcdt-sf-box-ttl">Custom CSS for plugin</div>
								<div class="wpcdt-sf-tag">Pro</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- End - Welcome Box -->
			
			<!-- Start - Logo Showcase - Features -->
			<div class="wpcdt-features-section">
				<div class="wpcdt-center wpcdt-features-ttl">
					<h2 class="wpcdt-sf-ttl">Powerful Pro Features, Simplified</h2>
				
				</div>
				<div class="wpcdt-features-section-inr">
					<div class="wpcdt-features-box-wrap">
						<ul class="wpcdt-features-box-grid">
							<li>
							<div class="wpcdt-popup-icon"><img src="<?php echo WPCDT_URL; ?>/assets/images/popup-icon/circle-count-down.png" /></div>Circle Countdown Timer</li>
							<li>
							<div class="wpcdt-popup-icon"><img src="<?php echo WPCDT_URL; ?>/assets/images/popup-icon/flip-count-down.png" /></div>
							Flip Countdown Timer</li>
							<li>
							<div class="wpcdt-popup-icon"><img src="<?php echo WPCDT_URL; ?>/assets/images/popup-icon/simple-clock-2.png" /></div>
							Simple Clock Timer</li>
							<li>
							<div class="wpcdt-popup-icon"><img src="<?php echo WPCDT_URL; ?>/assets/images/popup-icon/circle-count-down.png" /></div>Evergreen Timer</li>
							<li>
							<div class="wpcdt-popup-icon"><img src="<?php echo WPCDT_URL; ?>/assets/images/popup-icon/circle-count-down.png" /></div>Recurring Timer</li>
							<li>
							<div class="wpcdt-popup-icon"><img src="<?php echo WPCDT_URL; ?>/assets/images/popup-icon/circle-count-down.png" /></div>Schedule Timer</li>
						</ul>
					</div>
					<a href="<?php echo WPCDT_PLUGIN_LINK_WELCOME; ?>" target="_blank" class="wpcdt-sf-btn wpcdt-sf-btn-orange"><span class="dashicons dashicons-cart"></span> Grab Now Pro Features</a>
					<div class="wpcdt-rc-wrap">
						<div class="wpcdt-rc-inr wpcdt-rc-bg-box">
							<div class="wpcdt-rc-icon">
								<img src="<?php echo esc_url( WPCDT_URL ); ?>assets/images/popup-icon/14-days-money-back-guarantee.png" alt="14-days-money-back-guarantee" title="14-days-money-back-guarantee" />
							</div>
							<div class="wpcdt-rc-cont">
								<h3>14 Days Refund Policy</h3>
								<p>14-day No Question Asked Refund Guarantee</p>
							</div>
						</div>
						<div class="wpcdt-rc-inr wpcdt-rc-bg-box">
							<div class="wpcdt-rc-icon">
								<img src="<?php echo esc_url( WPCDT_URL ); ?>assets/images/popup-icon/popup-design.png" alt="popup-design" title="popup-design" />
							</div>
								<div class="wpcdt-rc-cont">
									<h3>Include Done-For-You Countdown Timer Setup</h3>
									<p>Our experts team will design 1 free Countdown Timer for you as per your need.</p>
								</div>
						</div>
					</div>
				</div>
			</div>
			<!-- End - Logo Showcase - Features -->

			<!-- Start - Testimonial Section -->
			<div class="wpcdt-sf-testimonial-wrap">
				<div class="wpcdt-center wpcdt-features-ttl">
					<h2 class="wpcdt-sf-ttl">Looking for a Reason to Use Countdown Timer? Here are 40+...</h2>
				</div>
				<div class="wpcdt-testimonial-section-inr">
					<div class="wpcdt-testimonial-box-wrap">
						<div class="wpcdt-testimonial-box-grid">
								<h3 class="wpcdt-testimonial-title">Best Features And Great Support</h3>
								<div class="wpcdt-testimonial-desc">I’ve tried other countdowns, they’re all based on similar Javascript, but what Ultimate doesn’t do is limit the styles of theirs to Pro versions, whereas others, like countdown builder, do! Ketan went above and beyond with a fix that was related to my css, not his code. Excellent plugin, outstanding developer. Many thanks.</div>
								<div class="wpcdt-testimonial-clnt">@beardyfoureyes</div>
								<div class="wpcdt-testimonial-rating"><img src="<?php echo WPCDT_URL; ?>/assets/images/rating.png" /></div>
						</div>
						<div class="wpcdt-testimonial-box-grid">
								<h3 class="wpcdt-testimonial-title">Functional and customizable</h3>
								<div class="wpcdt-testimonial-desc">It works and supports extra customization and styling. I like that in the new version when timer reaches zero it disappears instead of just show zeros, so thumbs up for this update. Although it works on Oxygen as well, i saw in the changelog it added native support for various builders but not Oxygen, so i recommend adding support for it too 🙂</div>
								<div class="wpcdt-testimonial-clnt">@geokongr</div>
								<div class="wpcdt-testimonial-rating"><img src="<?php echo WPCDT_URL; ?>/assets/images/rating.png" /></div>
						</div>
						<div class="wpcdt-testimonial-box-grid">
								<h3 class="wpcdt-testimonial-title">Great Plugin</h3>
								<div class="wpcdt-testimonial-desc">The plugin works without any trouble and is user friendly. Even the support is fast and helping.</div>
								<div class="wpcdt-testimonial-clnt">@kshitijk1</div>
								<div class="wpcdt-testimonial-rating"><img src="<?php echo WPCDT_URL; ?>/assets/images/rating.png" /></div>
						</div>
						
						<div class="wpcdt-testimonial-box-grid">
								<h3 class="wpcdt-testimonial-title">Works! Looks good! Easy to set up!</h3>
								<div class="wpcdt-testimonial-desc">So i tried the free version first and looking through the supports i additionally found out, how to change the color of the numbers. Perfect. Great work. Thank you!</div>
								<div class="wpcdt-testimonial-clnt">@firetime</div>
								<div class="wpcdt-testimonial-rating"><img src="<?php echo WPCDT_URL; ?>/assets/images/rating.png" /></div>
						</div>
						<div class="wpcdt-testimonial-box-grid">
								<h3 class="wpcdt-testimonial-title">Amazing support for this plugin</h3>
								<div class="wpcdt-testimonial-desc">The support I received after downloading this plugin was second to none, the developers assisted me with multiple requests to customise the countdown clock I was using on my site, nothing was too difficult for them and they came back so quickly to all my requests for further help.</div>
								<div class="wpcdt-testimonial-clnt">@kateperrett</div>
								<div class="wpcdt-testimonial-rating"><img src="<?php echo WPCDT_URL; ?>/assets/images/rating.png" /></div>
						</div>
						<div class="wpcdt-testimonial-box-grid">
								<h3 class="wpcdt-testimonial-title">Looks great</h3>
								<div class="wpcdt-testimonial-desc">One of those plugins that feels effortless to use and gives great results – can’t ask for more.</div>
								<div class="wpcdt-testimonial-clnt">@riklewis</div>
								<div class="wpcdt-testimonial-rating"><img src="<?php echo WPCDT_URL; ?>/assets/images/rating.png" /></div>
						</div>
					</div>
					<a href="https://wordpress.org/support/plugin/countdown-timer-ultimate/reviews/?filter=5" target="_blank" class="wpcdt-sf-btn"><span class="dashicons dashicons-star-filled"></span> View All Reviews</a> OR <a href="<?php echo WPCDT_PLUGIN_LINK_WELCOME; ?>"  target="_blank" class="wpcdt-sf-btn wpcdt-sf-btn-orange">Grab Now Pro Features</a>
					<div class="wpcdt-rc-wrap">
						<div class="wpcdt-rc-inr wpcdt-rc-bg-box">
							<div class="wpcdt-rc-icon">
								<img src="<?php echo esc_url( WPCDT_URL ); ?>assets/images/popup-icon/14-days-money-back-guarantee.png" alt="14-days-money-back-guarantee" title="14-days-money-back-guarantee" />
							</div>
							<div class="wpcdt-rc-cont">
								<h3>14 Days Refund Policy</h3>
								<p>14-day No Question Asked Refund Guarantee</p>
							</div>
						</div>
						<div class="wpcdt-rc-inr wpcdt-rc-bg-box">
							<div class="wpcdt-rc-icon">
								<img src="<?php echo esc_url( WPCDT_URL ); ?>assets/images/popup-icon/popup-design.png" alt="popup-design" title="popup-design" />
							</div>
								<div class="wpcdt-rc-cont">
									<h3>Include Done-For-You Countdown Timer Setup</h3>
									<p>Our  experts team will design 1 free Countdown Timer for you as per your need.</p>
								</div>
						</div>
					</div>
				</div>
			</div>
			<!-- End - Testimonial Section -->
		</div>
	</div><!-- end .wpcdt-sf-wrap -->
</div><!-- end .wrap -->