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
})
// function mytheme_add_woocommerce_support() {
// 	add_theme_support( 'woocommerce' );
// }
// add_action( 'after_setup_theme', 'mytheme_add_woocommerce_support' );



?>