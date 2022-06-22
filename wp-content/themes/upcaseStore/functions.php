<?php
// ------------------------ Carga de Assets
function av_assets()
{
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700', false, 'all');
    wp_enqueue_style('tailwind', get_stylesheet_directory_uri() . '/assets/css/tailwind.css', array('google-fonts'), false, 'all');
    wp_enqueue_style('estilos', get_stylesheet_directory_uri() . '/assets/css/style.css', array('tailwind'), false, 'all');
}

add_action('wp_enqueue_scripts', 'av_assets');
// --------------------------------------------------
function av_theme_supports()
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('widgets');
    add_theme_support('customize-selective-refresh-widgets');
}

add_action('after_setup_theme', 'av_theme_supports');

function uc_register_menus()
{
    register_nav_menus(
        array(
            'header-menu' => __('PrincipalMenu')
        )
    );
}

function upcase_page_content()
{
?>
    <div class="entry-content">
        <?php the_content(); ?>
        <?php
        wp_link_pages(
            array(
                'before' => '<div class="page-links">' . __('Pages:', 'storefront'),
                'after'  => '</div>',
            )
        );
        ?>
    </div><!-- .entry-content -->
<?php
}

function product_search()
{
?>
    <?php the_widget('WC_Widget_Product_Search', 'title='); ?>
<?php
}
add_action('upcase_product_search', 'product_search');

function uc_bread()
{
?>
    <div class="upcase-container">
        <?php if (class_exists('WooCommerce') && is_woocommerce()) : ?>

            <?php woocommerce_breadcrumb(array(
                'delimiter'   => '&#62;',
                'wrap_before' => '<nav class="flex justify-center w-full upcase-breadcrumb">',
                'wrap_after' => '</nav>',
            )); ?>

        <?php endif; ?>
    </div>
    <?php
}

add_action('uc_bread', 'uc_bread', 10);

function upcase_header_cart()
{
    if (storefront_is_woocommerce_activated()) {
        if (is_cart()) {
            $class = 'current-menu-item';
        } else {
            $class = '';
        }
    ?>
        <ul id="site-header-cart" class="site-header-cart menu">
            <li class="<?php echo esc_attr($class); ?>">
                <?php storefront_cart_link(); ?>
            </li>
            <li>
                <?php the_widget('WC_Widget_Cart', 'title='); ?>
            </li>
        </ul>
<?php
    }
}
add_action('upcase_product_search', 'upcase_header_cart', 10);

add_filter('woocommerce_breadcrumb_home_url', function () {
    return 'http://woocommerce.com';
});

/**
 * Insert the opening anchor tag for products in the loop.
 */
function woocommerce_template_loop_product_link_open()
{
    global $product;

    $link = apply_filters('woocommerce_loop_product_link', get_the_permalink(), $product);

    echo '<a href="' . esc_url($link) . '" class="w-28 woocommerce-LoopProduct-link woocommerce-loop-product__link">';
}

function upcaseButton() {
    echo '<a href="" class="inline-block px-5 py-3 mx-auto mt-24 mb-16 text-base font-semibold rounded-lg text-blackTxt bg-yellow drop-shadow-md">Ver colecciones</a>';
}
add_action('storefront_homepage_after_recent_products', 'upcaseButton');
/**
 * Display Recent Products
 * Hooked into the `homepage` action in the homepage template
 *
 * @since  1.0.0
 * @param array $args the product section args.
 * @return void
 */
function storefront_recent_products($args)
{
    $args = apply_filters(
        'storefront_recent_products_args',
        array(
            'limit'   => 6,
            'columns' => 4,
            'orderby' => 'date',
            'order'   => 'desc',
        )
    );

    $shortcode_content = storefront_do_shortcode(
        'products',
        apply_filters(
            'storefront_recent_products_shortcode_args',
            array(
                'orderby'  => esc_attr($args['orderby']),
                'order'    => esc_attr($args['order']),
                'per_page' => intval($args['limit']),
                'columns'  => intval($args['columns']),
                'class'  => '',
            )
        )
    );
    /**
     * Only display the section if the shortcode returns products
     */
    if (false !== strpos($shortcode_content, 'product')) {
        echo '<section class="storefront-product-section storefront-recent-products" aria-label="' . esc_attr__('Recent Products', 'storefront') . '">';

        do_action('storefront_homepage_before_recent_products');

        echo '<h2 class="flex flex-col mb-12 tracking-tight text-center mt-80">
            <span class="text-2xl font-normal text-center">Ultimas</span>
				<span class="text-4xl font-bold">Tendencias</span>
				<span class="text-base font-normal">Desde $37.000</span>
            </h2>';

        do_action('storefront_homepage_after_recent_products_title');
        echo '<div class="relative flex flex-col bg-white-true drop drop-shadow-md lg:px-28">';
        echo '<img class="relative lg:static -top-[57px] -left-[10%] ml-[15%] py-8" src="' .get_stylesheet_directory_uri() . '/assets/images/upcase/newIcon.svg" width="100px" >';
        echo $shortcode_content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        do_action( 'storefront_homepage_after_recent_products' );
        echo '</div>';

        echo'</section>';
    }
}
/**
 * Show the product title in the product loop. By default this is an H2.
 */
function woocommerce_template_loop_product_title()
{
    echo '<h2 class="text-lg font-bold font-montserrat">' . get_the_title() . '</h2>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
}
// function mytheme_add_woocommerce_support() {
// 	add_theme_support( 'woocommerce' );
// }
// add_action( 'after_setup_theme', 'mytheme_add_woocommerce_support' );



?>