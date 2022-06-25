<?php

/**
 * Related Products
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product/related.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://docs.woocommerce.com/document/template-structure/
 * @package     WooCommerce\Templates
 * @version     3.9.0
 */

if (!defined('ABSPATH')) {
	exit;
}

if ($related_products) : ?>

	<section class="related products">

		<?php
		$heading = apply_filters('woocommerce_product_related_products_heading', __('Diseños Imperdibles', 'woocommerce'));

		if ($heading) :
		?>
			<!-- <h2 class="text-center "><?php // echo esc_html($heading); ?></h2> -->
			<h2 class="flex flex-col text-center "><span class="text-2xl">Diseños</span><span class="text-4xl font-bold">Imperdibles</span></h2>
		<?php endif; ?>
		<div class="relative px-24 py-16 mb-3 shadow-md bg-white-true">


			<ul class="flex flex-row p-0 m-0 list-none ">

				<?php foreach ($related_products as $related_product) : ?>

					<?php
					$post_object = get_post($related_product->get_id());

					setup_postdata($GLOBALS['post'] = &$post_object); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited, Squiz.PHP.DisallowMultipleAssignments.Found

					wc_get_template_part('content', 'price-product');
					?>

				<?php endforeach; ?>

			</ul>

		</div>
	</section>
<?php
endif;

wp_reset_postdata();
