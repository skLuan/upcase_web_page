(function ($) {
    $(document).ready(function ($) {
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

        jQuery('.wis_modal_content #wis-instagram-row').on('click', function (e) {
            modal.toggleClass("wis_closed");
            spinOverlay.addClass('is-active');
            wis_account = $(this).attr('data-account');
            jQuery.post(ajaxurl, {
                action: 'wis_add_account_by_token',
                account: wis_account,
                _ajax_nonce: wig.nonce
            }).done(function (html) {
                //console.log(html);
                window.location.reload();
            });
        });

        /*
        * Chose API to add account
        * */
        var modal2 = jQuery('#wis_add_account_modal');
        var modal2Overlay = jQuery('#wis_add_account_modal_overlay');
        modal2Overlay.on("click", function () {
            var conf = confirm("You haven't finished adding an account. Are you sure you want to close the window?");
            if (conf) {
                modal2.toggleClass("wis_closed");
                modal2Overlay.toggleClass("wis_closed");
            }
        });

        jQuery('#wis-add-account-button .wis-btn-instagram-account').on('click', function (e) {
            e.preventDefault();
            modal2.removeClass('wis_closed');
            modal2Overlay.removeClass('wis_closed');
        });
    }); // Document Ready
})(jQuery);