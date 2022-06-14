<?php 
function av_assets() {
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700', false, 'all');
    // wp_enqueue_style('estilos', get_stylesheet_directory_uri().'/assets/css/style.css', array('bootstrap'), false, 'all');
    wp_enqueue_style('tailwind', get_stylesheet_directory_uri().'/assets/css/tailwind.css', array('google-fonts'), false, 'all');
    wp_enqueue_style('estilos', get_stylesheet_directory_uri().'/assets/css/style.css', array('tailwind'), false, 'all');
    // wp_enqueue_style('blogCss', get_template_directory_uri().'/styles/blog.css',array('estilos'), false, 'all');

}	

add_action('wp_enqueue_scripts', 'av_assets');

function av_theme_supports() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('widgets');
    add_theme_support('customize-selective-refresh-widgets');

}

add_action('after_setup_theme', 'av_theme_supports');

function av_add_sidebar() {
    register_sidebar(
        array(
            'name' => 'Barra lateral por defecto',
            'id' => 'right-blog',
            'before_widget' => '',
            'after_widget' => ''
        )
        );
}

add_action('widgets_init', 'av_add_sidebar');
?>

