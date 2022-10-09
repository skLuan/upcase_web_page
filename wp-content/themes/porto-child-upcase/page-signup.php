<?php get_header(); ?>

<?php
global $porto_settings, $porto_layout;

$featured_images = porto_get_featured_images();
?>
<div id="content" role="main">
    <?php /* The loop */ ?>
    <?php
    while (have_posts()) :
        the_post();
    ?>

<?php endwhile; ?>

<?php get_template_part('woocommerce/myaccount/form', 'register'); ?>

</div>

<?php get_footer(); ?>