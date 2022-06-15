<?php

/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package storefront
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

	<?php wp_body_open(); ?>

	<?php do_action('storefront_before_site'); ?>

	<div id="page" class="hfeed site">
		<?php do_action('storefront_before_header'); ?>

		<header id="masthead" class="site-header" role="banner" style="">

			<?php
			/**
			 * Functions hooked into storefront_header action
			 *
			 * @hooked storefront_header_container                 - 0
			 * @hooked storefront_skip_links                       - 5
			 * @hooked storefront_social_icons                     - 10
			 * @hooked storefront_site_branding                    - 20
			 * @hooked storefront_secondary_navigation             - 30
			 * @hooked storefront_product_search                   - 40
			 * @hooked storefront_header_container_close           - 41
			 * @hooked storefront_primary_navigation_wrapper       - 42
			 * @hooked storefront_primary_navigation               - 50
			 * @hooked storefront_header_cart                      - 60
			 * @hooked storefront_primary_navigation_wrapper_close - 68
			 */

			add_action('upcase_header', 'storefront_social_icons');
			add_action('upcase_header', 'storefront_secondary_navigation');
			//  add_action('upcase_header', 'storefront_product_search');

			do_action('upcase_header');
			// wp_nav_menu(array('theme-location' => 'header-menu'))
			?>
			<ul class="relative hidden list-none lg:flex-row lg:flex lg:justify-center lg:items-center">
				<li class="px-4"><a class="text-lg font-medium" href="">Fundas</a></li>
				<li class="px-4"><a class="text-lg font-medium" href="">Colección</a></li>
				<li class="px-4"><a class="" href="<?php echo home_url() ?>"><img src="<?php echo get_stylesheet_directory_uri() ?>/assets/images/upcase/Logosm.svg" alt="Logo Upcase"></a></li>
				<li class="px-4"><a class="text-lg font-medium" href="">Personaliza</a></li>
				<li class="px-4"><a class="text-lg font-medium" href="">Stikers</a></li>
				<li class="absolute right-0 pl-4">
					<?php 
					do_action('upcase_product_search');

					?>
				</li>
			</ul>
		<?php
		/**
		 * Functions hooked in to storefront_before_content
		 *
		 * @hooked storefront_header_widget_region - 10
		 * @hooked woocommerce_breadcrumb - 10
		 */
		do_action('uc_bread');
		?>
		</header><!-- #masthead -->


		<div id="content" class="site-content" tabindex="-1">
			<div class="col-full">

				<?php
				do_action('storefront_content_top');
