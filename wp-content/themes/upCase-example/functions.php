<?php 
function av_assets() {
    wp_register_style('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css', array(),false, 'all');
    
    wp_enqueue_style('estilos', get_template_directory_uri().'/style.css', array('bootstrap'), false, 'all');
    wp_enqueue_style('blogCss', get_template_directory_uri().'/styles/blog.css',array('estilos'), false, 'all');
    wp_enqueue_script('bootstrap-js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js');

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

