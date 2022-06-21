<?php
/**
 * Plugin Premium Offer Page
 *
 * @package Countdown Timer Ultimate
 * @since 1.1.4
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
} ?>

<div class="wrap">

	<h2><?php _e( 'Countdown Timer Ultimate', 'countdown-timer-ultimate' ); ?></h2>

	<style>
		.wpos-plugin-pricing-table thead th h2{font-weight: 400; font-size: 2.4em; line-height:normal; margin:0px; color: #2ECC71;}
		.wpos-plugin-pricing-table thead th h2 + p{font-size: 1.25em; line-height: 1.4; color: #999; margin:5px 0 5px 0;}

		table.wpos-plugin-pricing-table{width:100%; text-align: left; border-spacing: 0; border-collapse: collapse; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;}

		.wpos-plugin-pricing-table th, .wpos-plugin-pricing-table td{font-size:14px; line-height:normal; color:#444; vertical-align:middle; padding:12px;}
		.wpos-about-epb-table td{padding: 12px 12px 60px;position: relative;}

		.wpos-plugin-pricing-table colgroup:nth-child(1) { width: 31%; border: 0 none; }
		.wpos-plugin-pricing-table colgroup:nth-child(2) { width: 22%; border: 1px solid #ccc; }
		.wpos-plugin-pricing-table colgroup:nth-child(3) { width: 25%; border: 10px solid #2ECC71; }

		/* Tablehead */
		.wpos-plugin-pricing-table thead th {background-color: #fff; background:linear-gradient(to bottom, #ffffff 0%, #ffffff 100%); text-align: center; position: relative; border-bottom: 1px solid #ccc; padding: 1em 0 1em; font-weight:400; color:#999;}
		.wpos-plugin-pricing-table thead th:nth-child(1) {background: transparent;}
		.wpos-plugin-pricing-table thead th:nth-child(3) p{color:#000;}	
		.wpos-plugin-pricing-table thead th p.promo {font-size: 14px; color: #fff; position: absolute; bottom:0; left: -17px; z-index: 1000; width: 100%; margin: 0; padding: .625em 17px .75em; background-color: #ca4a1f; box-shadow: 0 2px 4px rgba(0,0,0,.25); border-bottom: 1px solid #ca4a1f;}
		.wpos-plugin-pricing-table thead th p.promo:before {content: ""; position: absolute; display: block; width: 0px; height: 0px; border-style: solid; border-width: 0 7px 7px 0; border-color: transparent #900 transparent transparent; bottom: -7px; left: 0;}
		.wpos-plugin-pricing-table thead th p.promo:after {content: ""; position: absolute; display: block; width: 0px; height: 0px; border-style: solid; border-width: 7px 7px 0 0; border-color: #900 transparent transparent transparent; bottom: -7px; right: 0;}
		.wpos-about-epb-table{margin:10px 0;}
		.wpos-about-epb-table, .wpos-about-epb-table td{border:1px solid #ccc;}
		.wpos-about-epb-table th {background: #ff4081 !important; font-size:18px; font-weight:100%;  color:#fff; border-bottom: 1px solid #ccc !important;  padding:10px !important; color:#fff !important;}
		.wpos-about-epb-table th, .wpos-about-epb-table td{text-align:left !important; vertical-align:top;}
		.wpos-about-epb-table td ul{list-style:none;}		
		.wpos-about-epb-table ul li::before {content: "\2022";color:#ff2700 ;font-weight: bold;display: inline-block;width: 15px;}
		
		/* Tablebody */
		.wpos-plugin-pricing-table tbody th{background: #fff; border-left: 1px solid #ccc; font-weight: 600;}
		.wpos-plugin-pricing-table tbody th span{font-weight: normal; font-size: 87.5%; color: #999; display: block;}

		.wpos-plugin-pricing-table tbody td{background: #fff; text-align: center;}
		.wpos-plugin-pricing-table tbody td .dashicons{height: auto; width: auto; font-size:30px;}
		.wpos-plugin-pricing-table tbody td .dashicons-no-alt{color: #ff2700;}
		.wpos-plugin-pricing-table tbody td .dashicons-yes{color: #2ECC71;}

		.wpos-plugin-pricing-table tbody tr:nth-child(even) th,
		.wpos-plugin-pricing-table tbody tr:nth-child(even) td { background: #f5f5f5; border: 1px solid #ccc; border-width: 1px 0 1px 1px; }
		.wpos-plugin-pricing-table tbody tr:last-child td {border-bottom: 0 none;}

		/* Table Footer */
		.wpos-plugin-pricing-table tfoot th, .wpos-plugin-pricing-table tfoot td{text-align: center; border-top: 1px solid #ccc;}
		.wpos-plugin-pricing-table tfoot a, .wpos-plugin-pricing-table thead a{font-weight: 600; color: #fff; text-decoration: none; text-transform: uppercase; display: inline-block; padding: 1em 2em; background: #ff2700; border-radius: .2em;}
		a.epb-cutom-button{font-weight: 600; color: #fff; text-decoration: none; text-transform: uppercase; display: inline-block; padding: 1em 2em; background: #ff2700; border-radius: .2em;}
		.wpos-epb{color:#ff2700 !important;}

		.wp-plugin-icon{position: absolute;bottom: 15px;}
		.wp-plugin-icon img {margin: 0 5px;}
		.wp-plugin-icon span{font-size: 14px;font-style: italic;color: red;display: block;}
		.wp-icons {margin-bottom: 20px;text-align: center;}
		.wp-icons img{vertical-align: top;}
		.wp-icons ul{margin: 0;}
		.wp-icons li{display: inline-block;margin-right: 5px;}
		
		/* SideBar */
		.wpos-sidebar .wpos-epb-wrap{background:#0055fb; color:#fff; padding:15px;}
		.wpos-sidebar .wpos-epb-wrap  h2{font-size:24px !important; color:#fff; margin:0 0 15px 0; padding:0px !important;}
		.wpos-sidebar .wpos-epb-wrap  h2 span{font-size:20px !important; color:#ffff00 !important;}
		.wpos-sidebar .wpos-epb-wrap ul li{font-size:16px; margin-bottom:8px;}
		.wpos-sidebar .wpos-epb-wrap ul li span{color:#ffff00 !important;}
		.wpos-sidebar .wpos-epb-wrap ul{list-style: decimal inside none;}
		.wpos-sidebar .wpos-epb-wrap b{font-weight:bold !important;}
		.wpos-sidebar .wpos-epb-wrap p{font-size:16px;}
		.wpos-sidebar .wpos-epb-wrap .button-yellow{font-weight: 600;color: #000; text-align:center;text-decoration: none;display:block;padding: 1em 2em;background: #ffff00;border-radius: .2em;}
		.wpos-sidebar .wpos-epb-wrap .button-orange{font-weight: 600;color: #fff; text-align:center;text-decoration: none;display:block;padding: 1em 2em;background: #ff2700;border-radius: .2em;}
		.larger-font{font-size:24px; line-height:35px; margin:0px;}
		.h-blue{color:#0055fb ;}
		.h-orange{color:#FF5D52 ;}
	</style>
	
	<div id="poststuff">
		<div id="post-body" class="metabox-holder">
			<div id="post-body-content">
				<h3 style="text-align:center"><?php _e( 'Compare "Countdown Timer Ultimate" Free VS Pro', 'countdown-timer-ultimate' ); ?></h3>
				<table class="wpos-plugin-pricing-table">
					<colgroup></colgroup>
					<colgroup></colgroup>
					<colgroup></colgroup>	
						<thead>
						<tr>
							<th></th>
							<th>
								<h2>Free</h2>
							</th>
							<th>
								<h2 class="wpos-epb">Premium</h2>
								<a href="<?php echo WPCDT_SITE_LINK; ?>/wordpress-plugin/countdown-timer-ultimate/?utm_source=WP&utm_medium=Countdown-Timer&utm_campaign=Upgrade-PRO#wpos-epb" class="wpos-button" target="_blank">Buy Now</a>
							</th>	    		
						</tr>
					</thead>

					<tfoot>
						<tr>
							<th></th>
							<td></td>
							<td>
							<a href="<?php echo WPCDT_SITE_LINK; ?>/wordpress-plugin/countdown-timer-ultimate/?utm_source=WP&utm_medium=Countdown-Timer&utm_campaign=Upgrade-PRO#wpos-epb" class="wpos-button" target="_blank">Buy Now</a></td>
						</tr>
					</tfoot>

					<tbody>
						<tr>
							<th>Clock Designs <span>Clock Designs that make your website better</span></th>
							<td>1</td>
							<td>12+ (Clock Style)</td>
						</tr>
						<tr>
							<th>Shortcodes <span>Shortcode provide output to the front-end side</span></th>
							<td>1</td>
							<td>3</td>
						</tr>
						<tr>
							<th>Plugin Settings <span>Various Useful Plugin Settings</span></th>
							<td>Limited</td>
							<td>Extended (Background Color, Label Color and etc.)</td>
						</tr>
						<tr>
							<th>Clock expiry time functionality <span>Allow expiry time functionality</span></th>
							<td><i class="dashicons dashicons-yes"></i></td>
							<td><i class="dashicons dashicons-yes"></i></td>
						</tr>
						<tr>
							<th>Works With Server Timezone <span>WordPress server timezone</span></th>
							<td><i class="dashicons dashicons-no-alt"></i></td>
							<td><i class="dashicons dashicons-yes"></i></td>
						</tr>
						<tr>
							<th>Timer clock option  <span>Extra Timer clock option available</span></th>
							<td><i class="dashicons dashicons-no-alt"></i></td>
							<td><i class="dashicons dashicons-yes"></i></td>
						</tr>
						<tr>
							<th>Timer label text color  <span>You can change timer label text color</span></th>
							<td><i class="dashicons dashicons-no-alt"></i></td>
							<td><i class="dashicons dashicons-yes"></i></td>
						</tr>
						<tr>
							<th>WP Templating Features <span class="subtext">You can modify plugin html/designs in your current theme.</span></th>
							<td><i class="dashicons dashicons-no-alt"> </i></td>
							<td><i class="dashicons dashicons-yes"> </i></td>
						</tr>
						<tr>
							<th>Schedule Timer <span class="subtext">You can set schedule timer.</span></th>
							<td><i class="dashicons dashicons-no-alt"> </i></td>
							<td><i class="dashicons dashicons-yes"> </i></td>
						</tr>
						<tr>
							<th>Recurring Timer <span class="subtext">You can set recurring timer.</span></th>
							<td><i class="dashicons dashicons-no-alt"> </i></td>
							<td><i class="dashicons dashicons-yes"> </i></td>
						</tr>
						<tr>
							<th>Simple Timer Shortcode <span class="subtext">New simple timer shortcode.</span></th>
							<td><i class="dashicons dashicons-no-alt"> </i></td>
							<td><i class="dashicons dashicons-yes"> </i></td>
						</tr>
						<tr>
							<th>Pre Text Timer Shortcode <span class="subtext">New pre text timer shortcode.</span></th>
							<td><i class="dashicons dashicons-no-alt"> </i></td>
							<td><i class="dashicons dashicons-yes"> </i></td>
						</tr>
						<tr>
							<th>Completion Text <span class="subtext">Manage after timer content.</span></th>
							<td><i class="dashicons dashicons-no-alt"> </i></td>
							<td><i class="dashicons dashicons-yes"> </i></td>
						</tr>
						<tr>
							<th>Custom CSS for plugin <span>Plugin related CSS add in settings menu</span></th>
							<td><i class="dashicons dashicons-no-alt"></i></td>
							<td><i class="dashicons dashicons-yes"></i></td>
						</tr>
						<tr>
							<th>Clock RTL Support <span>Clock supports for RTL website</span></th>
							<td><i class="dashicons dashicons-no-alt"></i></td>
							<td><i class="dashicons dashicons-yes"></i></td>
						</tr>
						<tr>
							<th>Automatic Update <span>Get automatic  plugin updates </span></th>
							<td>Lifetime</td>
							<td>Lifetime</td>
						</tr>
						<tr>
							<th>Support <span>Get support for plugin</span></th>
							<td>Limited</td>
							<td>1 Year</td>
						</tr>    	
					</tbody>
				</table>
			</div>
		</div>
	</div>			
</div>