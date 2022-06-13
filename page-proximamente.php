<!doctype html>
<html style="margin: 0 !important;" <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" rel="stylesheet">
	<?php wp_head(); ?>
	
	<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() ?>/assets/css/styleProx.css">
</head>

<body style="background-color: #F8FAFC; font-family: 'Montserrat', sans-serif;">

	<main id="main" class="" role="main">
		<picture class="mbOnly img-top">
			<img src="<?php echo get_template_directory_uri() ?>/assets/images/upcase/top-mobile.png" alt="">
		</picture>
		<picture class="logo-container">
			<img class="logo-img" src="<?php echo get_template_directory_uri() ?>/assets/images/upcase/Logo.svg" alt="">
		</picture>
		<?php
		while (have_posts()) :
			the_post();

			// do_action('storefront_page_before');

			get_template_part('content', 'page');

			/**
			 * Functions hooked in to storefront_page_after action
			 *
			 * @hooked storefront_display_comments - 10
			 */
		// do_action('storefront_page_after');

		endwhile; // End of the loop.
		?>
		<picture class="mbOnly img-bottom">
			<img src="<?php echo get_template_directory_uri() ?>/assets/images/upcase/bottom-mobile.png" alt="">
		</picture>
	</main><!-- #main -->
</body>