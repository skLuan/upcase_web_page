jQuery(document).ready(function($) {
    var $container = $('.wbfb_masonry_container');

    $container.imagesLoaded(function() {
        $container.masonry({
            gutter: Number(5),
            itemSelector: '.wbfb_masonry_post'
        });
    });
});
