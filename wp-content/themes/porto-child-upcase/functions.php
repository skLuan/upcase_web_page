<?php
// define( 'PORTO_DIR', get_stylesheet_directory_uri() );              // template directory
// define( 'PORTO_LIB', PORTO_DIR . '/inc' );                        // library directory
// define( 'PORTO_FUNCTIONS', PORTO_LIB . '/functions' );
require_once realpath(dirname(__FILE__)) . '/inc/functions/up_wc.php';

            // functions directory

remove_filter( 'wc_add_to_cart_message_html', 'porto_add_to_cart_message_html', 10);
add_filter( 'wc_add_to_cart_message_html', 'uc_add_to_cart_message_html', 12, 3);

// remove_action( 'woocommerce_after_add_to_cart_button', 'porto_view_cart_after_add', 10 );
add_action( 'woocommerce_after_add_to_cart_button', 'uc_view_cart_after_add', defined( 'WC_STRIPE_PLUGIN_NAME' ) ? 12 : 35 );
add_action( 'wp_enqueue_scripts', 'porto_child_css', 1001 );


// Load CSS
function porto_child_css() {
	// porto child theme styles
	wp_enqueue_style('font-awesome');
	wp_deregister_style( 'styles-child' );
	wp_register_style( 'styles-child', esc_url( get_stylesheet_directory_uri() ) . '/style.css' );
	wp_enqueue_style( 'styles-child' );


	if ( is_rtl() ) {
		wp_deregister_style( 'styles-child-rtl' );
		wp_register_style( 'styles-child-rtl', esc_url( get_stylesheet_directory_uri() ) . '/style_rtl.css' );
		wp_enqueue_style( 'styles-child-rtl' );
	}
}

