/**
 * Init Masonry layout
 */
function esf_insta_init_masonry(){
  jQuery('.esf_insta_load_more_btns_wrap').hide();
  jQuery('.esf-insta-masonry-wrapper .esf_insta_feed_fancy_popup'). imagesLoaded(function() {
        jQuery('.esf_insta_feeds_holder .esf-insta-load-opacity').fadeIn('slow').css('display', 'inline-block');
        jQuery('.esf_insta_load_more_btns_wrap').slideDown();
        jQuery('.esf_insta_feeds_holder .esf-insta-load-opacity').removeClass('esf-insta-load-opacity');
  });
}
/**
 * Init Grid layout
 */
function esf_insta_init_grid(){
  jQuery('.esf_insta_load_more_btns_wrap').hide();
  jQuery('.esf-insta-grid-wrapper .esf_insta_feed_fancy_popup').imagesLoaded(function() {
        jQuery('.esf_insta_feeds_holder .esf-insta-load-opacity').fadeIn('slow');
        jQuery('.esf_insta_load_more_btns_wrap').slideDown();
        jQuery('.esf_insta_feeds_holder .esf-insta-load-opacity').removeClass('esf-insta-load-opacity');
  });
}

/**
 * Init carousel layout
 *
 * @param current
 */
function esf_insta_init_carousel(current){
  current.on('initialized.owl.carousel resized.owl.carousel', function(event) {

    let item_width = event.relatedTarget._widths[0];

    let item_half = parseInt(item_width / 2);

    current.find('.esf_insta_feed_fancy_popup').css('height', item_width + 'px');

    current.children('.owl-nav').children('button').css('top', item_half + 'px');
  }).owlCarousel({
    loop: current.data('loop'),
    autoplay: current.data('autoplay'),
    margin: current.data('margin'),
    responsiveClass: true,
    nav: true,
    responsive: {
      0: {
        items: current.data('items'),
      },
      600: {
        items: current.data('items'),
      },
      1000: {
        items: current.data('items'),
      },
    },
    navText: [
      '<i class=\'icon icon-esf-angle-left\'></i>',
      '<i class=\'icon icon-esf-angle-right\'></i>'],
  });
}

function esf_insta_feed_popup() {

  jQuery('.esf_insta_feed_fancy_popup').fancybox({
    infobar: false,
    toolbar: true,
    afterShow: esf_insta_popup_after_load,
    baseClass: 'esf_insta_feed_popup_container',
    showCloseButton: false,
    autoDimensions: true,
    autoScale: true,
    buttons: [
      'zoom',
      'slideShow',
      'fullScreen',
      'thumbs',
      'close',
    ],
    image: {
      preload: true,
    },
    animationEffect: 'zoom-in-out',
    transitionEffect: 'zoom-in-out',
    slideShow: {
      autoStart: false,
      speed: 3000,
    },
    touch: false, // Allow to drag content vertically
    hash: false,
    iframe: {
      autoDimensions: true,
    },
  });
}

// For Popup Carousel Image
function esfInstacarouselImages() {
  // Changing Images Function starts here
  var imgFront = jQuery('.esf-insta-popup .esf-insta-media-item img');

  jQuery(document).on('click', '.esf-insta-media-thumbnail', function(event) {
    if (jQuery(this).attr('data-type') == 'VIDEO') {

      var vidoUrl = jQuery(this).attr('data-v-url');

      jQuery(imgFront).addClass('esf-insta-carousel-hide');

      jQuery('.esf-insta-popup .esf-insta-media-item .esf-insta-carousel-video').
          attr('src', vidoUrl);

      jQuery('.esf-insta-popup .esf-insta-media-item .esf-insta-carousel-video').
          get(0).
          play();

      jQuery('.esf-insta-popup .esf-insta-media-item .esf-insta-carousel-video').
          removeClass('esf-insta-carousel-hide');

    }
    else {
      var imgTo = jQuery(this).attr('style');
      imgTo = imgTo.replace('background:url(\'', '').
          replace('\');', '').
          replace(/\"/gi, '');
      jQuery('.esf-insta-popup .esf-insta-media-item .esf-insta-carousel-video').
          addClass('esf-insta-carousel-hide');
      jQuery(imgFront).attr('src', imgTo);
      jQuery('.esf-insta-popup .esf-insta-media-item .esf-insta-carousel-video').
          get(0).
          pause();
      jQuery(imgFront).removeClass('esf-insta-carousel-hide');

    }
  });
  // Changing Images Function ends here

  // next prev button for function for thumbs starts here
  var thumbSec = jQuery('.esf-insta-popup .esf-insta-media-thumbnail-section');
  var thumbSecOuter = jQuery('.esf-insta-popup .esf-insta-media-carousel');
  jQuery(thumbSecOuter).
      prepend('<span class="esf-insta-scrollbtn esf-insta-lsbtn"></span>');
  jQuery(thumbSecOuter).
      append('<span class="esf-insta-scrollbtn esf-insta-rsbtn"></span>');
  var thumbLBtn = jQuery(
      '.esf-insta-popup .esf-insta-scrollbtn.esf-insta-lsbtn');
  var thumbRBtn = jQuery(
      '.esf-insta-popup .esf-insta-scrollbtn.esf-insta-rsbtn');
  thumbLBtn.fadeOut();
  var view = jQuery('.esf-insta-popup .esf-insta-media-thumbnail-section-inner');
  var move = jQuery(thumbSec).width();
  var limWidth = jQuery(view).width();
  var sliderLimit = jQuery(thumbSec).width() - limWidth;

  if (jQuery(view).width() <= jQuery(thumbSec).width()) {
    thumbRBtn.fadeOut();
    thumbLBtn.fadeOut();
  }

  jQuery(thumbRBtn).click(function() {
    var currentPosition = parseInt(view.css('left'));
    if (currentPosition > sliderLimit) {
      view.stop(false, true).
          animate({left: '-=' + move}, {duration: 400});
    }
    thumbLBtn.fadeIn();
    var currentPositionP = Math.abs(currentPosition);
    var curNewPositionP = currentPositionP;
    var rLimitPositionP = Math.abs(sliderLimit + jQuery(thumbSec).width());
    if (curNewPositionP >= rLimitPositionP) {
      jQuery(this).fadeOut();
    }
  });

  jQuery(thumbLBtn).click(function() {

    var currentPosition = parseInt(view.css('left'));
    if (currentPosition < 0) {
      view.stop(false, true).
          animate({left: '+=' + move}, {duration: 400});
    }
    var currentStopPos = Math.abs(currentPosition);
    var stopPos = jQuery(thumbSec).width();
    if (currentStopPos == stopPos) {
      jQuery(this).fadeOut();
    }
    thumbRBtn.fadeIn();

  });
  // next prev button for function for thumbs ends here

}

function esf_insta_popup_after_load() {
  esfInstacarouselImages();
}

jQuery(document).ready(function($) {
  if (jQuery('.esf_insta_feeds_masonary').length) {
     esf_insta_init_masonry();
  }
  if (jQuery('.esf_insta_feeds_grid').length) {
    esf_insta_init_grid();
  }

  

  jQuery(document).on('click', '.esf_insta_load_more_btn', function(event) {

    event.preventDefault();

    var outer_this = jQuery(this);

    var selected_template = jQuery(this).data('selected-template');

    var load_more_outer = jQuery(this).parent().parent().parent();

    var is_disabled = jQuery(this).hasClass('no-more');

    if (is_disabled) { return; }

    jQuery(outer_this).addClass('loading');

    var transient_name = jQuery(this).data('transient-name');

    var current_items = jQuery(this).attr('data-current_items');

    var shortcode_atts = jQuery(this).data('shortcode_atts');

    jQuery.ajax({

      url: esf_insta.ajax_url,

      type: 'post',

      dataType: 'json',

      data: {

        action: 'esf_insta_load_more_feeds',

        current_items: current_items,

        shortcode_atts: shortcode_atts,

        transient_name: transient_name,

        selected_template: selected_template,

        nonce: esf_insta.nonce,

      },

      success: function(response) {

        if (response.success) {

          var html = response.data.html;

          var total_items = response.data.total_items;

          jQuery(outer_this).attr('data-current_items', ' ');

          jQuery(outer_this).attr('data-current_items', total_items);

          if (selected_template === 'masonary') {

            var $container = jQuery('.esf-insta-masonry-wrapper a');

            var $items = jQuery(html);

            jQuery(outer_this).
                parent().
                parent().
                parent().
                parent().
                find('.esf-insta-masonry').
                append(html);
            jQuery('.esf-insta-masonry-wrapper .esf_insta_feed_fancy_popup').
                imagesLoaded(function() {

                  jQuery('.esf_insta_feeds_holder .esf-insta-load-opacity').
                      fadeIn('slow').
                      css('display', 'inline-block');

                  jQuery(outer_this).removeClass('loading');

                  jQuery('.esf_insta_feeds_holder .esf-insta-load-opacity').
                      removeClass('esf-insta-load-opacity');

                });

          }
          else if (selected_template === 'grid') {

            jQuery(outer_this).
                parent().
                parent().
                parent().
                parent().
                find('.esf-insta-row').
                append(html);

            jQuery('.esf-insta-grid-wrapper .esf_insta_feed_fancy_popup').
                imagesLoaded(function() {

                  jQuery('.esf_insta_feeds_holder .esf-insta-load-opacity').
                      fadeIn('slow');

                  jQuery(outer_this).removeClass('loading');

                  jQuery('.esf_insta_feeds_holder .esf-insta-load-opacity').
                      removeClass('esf-insta-load-opacity');

                });

            jQuery(outer_this).removeClass('loading');

          }
          else {

            jQuery(outer_this).
                parent().
                parent().
                parent().
                siblings('.esf_insta_feeds_holder').
                append(html);

            jQuery(outer_this).removeClass('loading');

          }

          

        }
        else {

          jQuery(outer_this).removeClass('loading');

          jQuery(outer_this).addClass('no-more');
          console.log('ESF Error: ' + response.data);

        }

      },

    });

  });

  /* </fs_premium_only> */

});

function esf_insta_init_layouts(){
  esf_insta_init_masonry();
  esf_insta_init_grid();
  esf_insta_init_carousel(jQuery('.esf_insta_feeds_carousel'));
  esf_insta_feed_popup();
  esf_insta_popup_after_load();
}

jQuery( window ).on( 'elementor/frontend/init', function() {
  elementorFrontend.hooks.addAction( 'frontend/element_ready/shortcode.default', function(){
    esf_insta_init_layouts();
  });
  elementorFrontend.hooks.addAction( 'frontend/element_ready/esf_instagram_feed.default', function(){
    esf_insta_init_layouts();
  });
} );