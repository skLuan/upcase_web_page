jQuery(document).ready(function($) {

  jQuery(document).on('click', '.mif_del_trans', function($) {

    var transient_id = jQuery(this).data('mif_trans');
    var collection_class = jQuery(this).data('mif_collection');

    /*
    * Collecting data for ajax call.
    */
    var data = {
      action: 'mif_delete_transient',
      transient_id: transient_id,
      mif_nonce: mif.nonce,
    };
    /*
    * Making ajax request to save values.
    */
    jQuery.ajax({
      url: mif.ajax_url,
      type: 'post',
      data: data,
      dataType: 'json',
      success: function(response) {

        if (response.success) {

          jQuery('#mif-cache .collection-item.' + response.data['1']).slideUp();

          jQuery('#mif-cache .collection-item.' + response.data['1']).remove();

          var slug = '#mif-cache .' + collection_class + ' .collection-item';

          if (jQuery(slug).length == 0) {
            jQuery('#mif-cache .' + collection_class).slideUp('slow');
          }
          esfShowNotification(response.data['0'], 4000);
        }
        else {
          esfShowNotification(response.data, 4000);
          jQuery('#toast-container').addClass('esf-failed-notification');
        }

      },

    });/* Ajax func ends here. */

  });

  jQuery(document).on('click', '.clear-all-cache', function($) {

    const data = {
      action: 'mif_clear_all_cache',
      mif_nonce: mif.nonce,
    };
    /*
    * Making ajax request to save values.
    */
    jQuery.ajax({
      url: mif.ajax_url,
      type: 'post',
      data: data,
      dataType: 'json',
      success: function(response) {
        esfShowNotification(response.data, 4000);
        if (response.success) {
          jQuery('#mif-cache .collection').slideUp();
          jQuery('#mif-cache .clear-all-cache').slideUp();
        }
        else {
          jQuery('#toast-container').addClass('esf-failed-notification');
        }
      }
    });

  });

  jQuery('select').on('change', function() {

    jQuery('.esf-modal.open').removeClass('open');

    var selected_val = this.value;

    if (selected_val === 'free-masonry' || selected_val === 'free-carousel' ||
        selected_val === 'free-half_width' || selected_val ===
        'free-full_width') {
      jQuery('#mif-' + selected_val + '-upgrade').addClass('open');
    }

  });

    /*
    * Hiding the create new button to make look and feel awesome.
    */
    var skin_id = new ClipboardJS('.esf_insta_copy_skin_id');
    skin_id.on('success', function() {
      esfShowNotification(mif.copied, 4000);
    });
    skin_id.on('error', function() {
      esfShowNotification(mif.error, 4000);
    });

    /*
    * Hiding the create new button to make look and feel awesome.
    */
    var mif_copy_shortcode = new ClipboardJS('.mif_copy_shortcode');
    mif_copy_shortcode.on('success', function() {
      esfShowNotification(mif.copied, 4000);
    });

    mif_copy_shortcode.on('error', function() {
      esfShowNotification(mif.error, 4000);
    });


  jQuery(document).on('click', '.esf_insta_skin_redirect', function(event) {

    /*
    * Disabaling the deafult event.
    */
    event.preventDefault();

    var skin_id = $(this).data('skin_id');
    var select_id = '.mif_selected_account_' + skin_id;
    var selectedVal = $(select_id + ' option').filter(':selected').val();
    var page_id = $(this).data('page_id');

    /*
    * Collecting data for ajax call.
    */
    var data = {
      action: 'esf_insta_create_skin_url',
      selectedVal: selectedVal,
      skin_id: skin_id,
      page_id: page_id,
      mif_nonce: mif.nonce,
    };
    /*
    * Making ajax request to save values.
    */
    jQuery.ajax({
      url: mif.ajax_url,
      type: 'post',
      data: data,
      dataType: 'json',
      success: function(response) {

        if (response.success) {
          esfShowNotification(response.data['0'], 4000);
          window.location.href = response.data['1'];
        }
        else {
          esfShowNotification(response.data, 4000);
        }

      },

    });/* Ajax func ends here. */

  });/* mif_create_skin func ends here. */

  /**
   * Show multifeed upgrade popup
   *
   * @since 6.2.0
   */
  jQuery("#mif_user_id").change(function(){

    if( this.value === 'multifeed-upgrade'){
      jQuery('.modal.open').modal('close');
      jQuery('#esf-insta-addon-upgrade').addClass('open');
    }
  });

  /*
 * Getting the form submitted value from shortcode generator.
 */
  jQuery('.mif_shortcode_submit').click(function(event) {

    /*
* Prevnting to reload the page.
*/
    event.preventDefault();

    var mif_hashtag = ' ';

    /*
 * Getting mif_user_id
 */
    var mif_user_id = $('#mif_user_id').val();

    var profile_picture = $('#profile_picture').val();

    if (profile_picture) {
      profile_picture = ' profile_picture="' + profile_picture + '"';
    }
    else {
      profile_picture = '';
    }

    /*
* Getting Feeds Per Page
*/
    var mif_feeds_per_page = $('#mif_feeds_per_page').val();

    /*
* Getting Caption Words
*/
    var mif_caption_words = $('#mif_caption_words').val();

    /*
* Getting Wrap Class
*/
    var mif_wrap_class = $('#mif_wrap_class').val();

    /*
 * Getting cache unit
 */
    var mif_cache_unit = $('#mif_cache_unit').val();

    /*
    * Getting cache duration
    */
    var mif_cache_duration = $('#mif_cache_duration').val();

    var mif_hashtag = $('#esf-insta-hashtag').val();

    if (mif_hashtag) {
      mif_hashtag = ' hashtag="' + mif_hashtag + '"';
    }
    else {
      mif_hashtag = '';
    }

    /*
* Getting Skin ID
*/
    var mif_skin_id = $('#mif_skin_id').val();

    var mif_multiple_users = null;

    if (mif_user_id) {
      mif_user_id_attr = ' user_id="' + mif_user_id + '"';
    }
    else {
      mif_user_id = '';
      mif_user_id_attr = '';
    }

    if (mif_skin_id == 'free-masonry' || mif_skin_id === 'free-carousel' ||
        mif_skin_id === 'free-half_width' || mif_skin_id == 'free-full_width' ) {
      jQuery('#mif-' + mif_skin_id + '-upgrade').addClass('open');
      mif_skin_id = mif.default_skin_id;
    }

    if (mif_skin_id) {
      mif_skin_id = ' skin_id="' + mif_skin_id + '"';
    }
    else {
      mif_skin_id = '';
    }


    if (mif_feeds_per_page) {
      mif_feeds_per_page = ' feeds_per_page="' + mif_feeds_per_page + '"';
    }
    else {
      mif_feeds_per_page = '';
    }

    if (mif_wrap_class) {
      mif_wrap_class = ' wrapper_class="' + mif_wrap_class + '"';
    }
    else {
      mif_wrap_class = '';
    }

    if (mif_caption_words) {
      mif_caption_words = ' caption_words="' + mif_caption_words + '"';
    }
    else {
      mif_caption_words = '';
    }

    if (mif_cache_unit) {
      mif_cache_unit = ' cache_unit="' + mif_cache_unit + '"';
    }
    else {
      mif_cache_unit = '';
    }

    if (mif_cache_duration) {
      mif_cache_duration = ' cache_duration="' + mif_cache_duration + '"';
    }
    else {
      mif_cache_duration = '';
    }

    if( mif_user_id === 'multifeed-upgrade'){
      mif_user_id = jQuery('#mif_user_id').find("option:first-child").val();
      mif_user_id_attr = ' user_id="' + mif_user_id + '"';
    }

    if (jQuery('#esf_insta_link_new_tab').is(':checked')) {
      esf_insta_link_new_tab = ' links_new_tab="1" ';
    }
    else {
      esf_insta_link_new_tab = ' links_new_tab="0" ';
    }

    if (jQuery('#esf_insta_load_more').is(':checked')) {
      esf_insta_load_more = ' load_more="1" ';
    }
    else {
      esf_insta_load_more = ' load_more="0" ';
    }

    if (jQuery('#esf_insta_show_stories').is(':checked')) {
      esf_insta_show_stories = ' show_stories="1" ';
    }
    else {
      esf_insta_show_stories = ' show_stories="0" ';
    }

    var shortcode_html = '[my-instagram-feed ' + mif_user_id_attr + '' + profile_picture + '' +
        mif_hashtag + '' + mif_skin_id + '' + mif_feeds_per_page + '' +
        mif_wrap_class + '' + mif_caption_words + '' + mif_cache_unit + '' +
        mif_cache_duration + esf_insta_load_more + esf_insta_link_new_tab + esf_insta_show_stories +']';

    jQuery('.mif_generated_shortcode blockquote').html(' ');

    jQuery('.mif_generated_shortcode blockquote').append(shortcode_html);

    jQuery('.mif_generated_shortcode .mif_shortcode_generated_final').
        attr('data-clipboard-text', shortcode_html);

    jQuery('.mif_generated_shortcode').slideDown();

  });/* Generated shortcode func ends here. */

  jQuery(document).on('click', '.mif-connect-manually', function(event) {
    jQuery('.mif-connect-manually-wrap').slideToggle('slow');
  });

  function mif_get_moderate_feed(){

    const user_id = $('#mif_moderate_user_id').val();
    esfShowNotification(mif.moderate_wait, 400000);
    var data = {
      action: 'mif_get_moderate_feed',
      user_id: user_id,
      mif_nonce: mif.nonce,
    };

    jQuery.ajax({
      url: mif.ajax_url,
      type: 'post',
      data: data,
      dataType: 'json',
      success: function(response) {
        esfRemoveNotification();
        if (response.success) {
          jQuery('#mif-moderate-wrap .mif-moderate-visual-wrap').html(' ').append(response.data).slideDown('slow');
        }
        else {
          esfShowNotification(response.data, 4000);
        }

      },

    });
  }

  jQuery(document).on('click', '.mif-get-moderate-feed', function(event) {

    event.preventDefault();
    mif_get_moderate_feed();
  });

  

  function MIFremoveURLParameter(url, parameter) {
    //prefer to use l.search if you have a location/link object
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {

      var prefix = encodeURIComponent(parameter) + '=';
      var pars = urlparts[1].split(/[&;]/g);

      //reverse iteration as may be destructive
      for (var i = pars.length; i-- > 0;) {
        //idiom for string.startsWith
        if (pars[i].lastIndexOf(prefix, 0) !== -1) {
          pars.splice(i, 1);
        }
      }

      url = urlparts[0] + '?' + pars.join('&');
      return url;
    }
    else {
      return url;
    }
  }

  jQuery('.mif-authentication-modal .mif_info_link').
      click(function(event) {
        event.preventDefault();
        jQuery(this).next().slideToggle();
      });

  jQuery('input[type=radio][name=mif_login_type]').change(function() {

    jQuery('.mif-authentication-modal .mif-auth-modal-btn').
        attr('href', jQuery(this).data('url'));

  });

  jQuery('#mif-remove-at .mif_delete_at_confirmed').click(function(event) {

    event.preventDefault();

    jQuery(this).next('.mif-revoke-access-steps').slideToggle();

    esfRemoveNotification();
    esfShowNotification(mif.deleting, 40000);

    var data = {
      action: 'mif_remove_access_token',
      mif_nonce: mif.nonce,
    };

    jQuery.ajax({

      url: mif.ajax_url,
      type: 'post',
      data: data,
      dataType: 'json',
      success: function(response) {

       esfRemoveNotification();

        if (response.success) {
          esfShowNotification(response.data, 4000);
          jQuery('.efbl_all_pages').slideUp('slow').remove();
          jQuery('.fta_noti_holder').fadeIn('slow');
        }
        else {
          esfShowNotification(response.data, 4000);
        }
      },
    });

  });

});