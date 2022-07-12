(function ($) {

    $(document).ready(function ($) {
        /*
        * FACEBOOK API modal
        */

        var modal = jQuery('#wis_accounts_modal');
        var modalOverlay = jQuery('#wis_modal_overlay');
        var spinOverlay = jQuery('.wis-overlay-spinner');

        modalOverlay.on("click", function () {
            var conf = confirm("You haven't finished adding an account. Are you sure you want to close the window?");
            if (conf) {
                modal.toggleClass("wis_closed");
                modalOverlay.toggleClass("wis_closed");
                spinOverlay.toggleClass("is-active");
            }
        });

        jQuery('.wis_modal_content #wis-facebook-row').on('click', function (e) {
            modal.toggleClass("wis_closed");
            spinOverlay.addClass('is-active');
            wfb_account = $(this).attr('data-account');
            console.log(wfb.nonce);
            jQuery.post(ajaxurl, {
                action: 'wfb_add_account_by_token',
                account: wfb_account,
                _ajax_nonce: wfb.nonce
            }).done(function (html) {
                window.location.reload();
            });
        });

    }); // Document Ready
})(jQuery);
