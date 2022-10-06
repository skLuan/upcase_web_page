<?php
require_once(get_stylesheet_directory() . '/inc/functions/breadcrumbs.php');
// require_once(get_stylesheet_directory() . '/inc/functions/woocommerce.php');
add_action('wp_enqueue_scripts', 'porto_child_css', 1001);

// Load CSS
function porto_child_css()
{
	// porto child theme styles
	wp_enqueue_style('font-awesome');
	wp_deregister_style('styles-child');
	wp_register_style('styles-child', esc_url(get_stylesheet_directory_uri()) . '/style.css');
	wp_enqueue_style('styles-child');


	if (is_rtl()) {
		wp_deregister_style('styles-child-rtl');
		wp_register_style('styles-child-rtl', esc_url(get_stylesheet_directory_uri()) . '/style_rtl.css');
		wp_enqueue_style('styles-child-rtl');
	}
}

function loadScripts()
{
	wp_enqueue_script('mainUpcase', get_stylesheet_directory_uri() . '/assets/js/mainUpcase.js', [], 1.0, true);
	// wp_register_script('mainUpcase', get_stylesheet_directory_uri( ).'/assets/js/mainUpcase.js', [], 1.0, true);
}
add_action('init', 'loadScripts', 100);

//Search form
function upcase_search_form($el_class = '')
{
	global $porto_settings;

	if (!$porto_settings['show-searchform']) {
		return '';
	}
	$result  = '';
	$result .= '<div class="searchform-popup' . (isset($porto_settings['search-layout']) && ('simple' == $porto_settings['search-layout'] || 'large' == $porto_settings['search-layout'] || 'reveal' == $porto_settings['search-layout'] || 'overlay' == $porto_settings['search-layout']) ? ' search-popup' : '') . ($el_class ? ' ' . esc_attr($el_class) : '') . '">';
	$result .= '<a class="search-toggle" href="#"><i class="fas fa-search"></i></a>';
	$result .= porto_search_form_content();
	$result .= '</div>';
	return apply_filters('porto_search_form', $result);
}

//Social media 
function social_media_link($socialMedia = '')
{
	$media = [
		'facebook' => 'https://www.facebook.com/upcase',
		'instagram' => 'https://www.instagram.com/upcase.com.co/',
		'whatsapp' => 'https://wa.me/573153801321',
	];
	return esc_url($media[$socialMedia]);
}
// horizontal filter
function upcase_child_woocommerce_output_horizontal_filter()
{
	global $porto_shop_filter_layout, $porto_settings;
	if (!isset($porto_shop_filter_layout)) {
		return;
	}
	if ('horizontal' === $porto_shop_filter_layout) {
		if (porto_is_ajax() && isset($_COOKIE['porto_horizontal_filter']) && 'opened' == $_COOKIE['porto_horizontal_filter']) {
			$class = ' opened';
		} else {
			$class = '';
		}
		echo '<span class="porto-product-filters-toggle d-none d-lg-flex' . $class . '"><span>' . esc_html__('Filters:', 'porto') . '</span><a href="#">&nbsp;</a></span>';
	} elseif ('horizontal2' === $porto_shop_filter_layout) {
		echo '<div class="porto-product-filters style2 mobile-sidebar">';
		echo '<div class="uc_filter porto-product-filters-body">';
		dynamic_sidebar('woo-category-filter-sidebar');
		echo '</div>';
		echo '</div>';
	}

	if ('offcanvas' === $porto_shop_filter_layout) {
		echo '<a href="#" class="porto-product-filters-toggle sidebar-toggle d-inline-flex"><i class="fas fa-sliders-h"></i> <span>' . esc_html__('Filters', 'porto') . '</span></a>';
		$GLOBALS['porto_mobile_toggle'] = false;
	} elseif (!empty($porto_settings['show-mobile-sidebar']) || 'horizontal2' === $porto_shop_filter_layout) {
		echo '<a href="#" class="porto-product-filters-toggle sidebar-toggle d-inline-flex d-lg-none"><svg data-name="Layer 3" id="Layer_3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><line class="cls-1" x1="15" x2="26" y1="9" y2="9"/><line class="cls-1" x1="6" x2="9" y1="9" y2="9"/><line class="cls-1" x1="23" x2="26" y1="16" y2="16"/><line class="cls-1" x1="6" x2="17" y1="16" y2="16"/><line class="cls-1" x1="17" x2="26" y1="23" y2="23"/><line class="cls-1" x1="6" x2="11" y1="23" y2="23"/><path class="cls-2" d="M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z"/><path class="cls-2" d="M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z"/><path class="cls-3" d="M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z"/><path class="cls-2" d="M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z"/></svg> <span>' . esc_html__('Filter', 'porto') . '</span></a>';
		$GLOBALS['porto_mobile_toggle'] = false;
	}
	if ('horizontal2' === $porto_shop_filter_layout) {
		unset($porto_shop_filter_layout);
	}
}
function uc_filter() {
	$thisId = get_current_blog_id();
	// $pageSlug = get_blog_details();
	$pageSlug = get_post_type(get_the_ID());
	$terms = get_term_children(17, 'product_cat');
	echo do_shortcode('[searchandfilter id="general"]');
	
?>
	<!-- <div class="flex-row filter_container d-flex">
		<div class="container_cat">
			<label for="cat">Categoria</label>
			<section class="px-3 py-1 bg-white" id="cat">
				<?php foreach ($terms as $term) :
					
					?>
				
					<?php endforeach; ?>
			</section>
		</div>
		<div class="">
			<label for="marca">Marca</label>
			<section class="px-3 py-1 bg-white" id="marca">
				<option value="">example</option>
			</section>
		</div>
		<div class="">
			<label for="modelo">Modelo</label>
			<section class="px-3 py-1 bg-white" id="modelo">
				<option value="">example</option>
			</section>
		</div>
	</div> -->


<?php
}

function uc_add_actions()
{
	add_action('woocommerce_before_shop_loop', 'upcase_child_woocommerce_output_horizontal_filter', 25);
	// add_action('woocommerce_before_shop_loop', 'uc_filter', 25);
}

function uc_remove_actions()
{
	remove_action('woocommerce_before_shop_loop', 'porto_woocommerce_output_horizontal_filter', 25);
}
add_action('wp', 'uc_remove_actions', 11);
add_action('wp_loaded', 'uc_add_actions', 10);
?>