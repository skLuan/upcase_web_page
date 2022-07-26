(function ($) {
    let search_for_items = wis_feeds.hide_show_fields;

    function modifySettings(this_object, is_mob) {
        var template = $(this_object);
        var prefix = "";
        if (is_mob) {
            prefix = "m_";
        }
        if (template.val() === 'thumbs' || template.val() === 'thumbs-no-border') {
            showSelector(template, '.' + prefix + 'thumbs_settings');
        } else {
            hideSelector(template, '.' + prefix + 'thumbs_settings');
        }

        if (template.val() !== 'masonry') {
            hideSelector(template, '.' + prefix + 'masonry_settings');
            hideSelector(template, '.' + prefix + 'masonry_notice');
        } else {
            showSelector(template, '.' + prefix + 'masonry_settings');
            showSelector(template, '.' + prefix + 'masonry_notice');
        }

        if (template.val() !== 'masonry_lite') {
            hideSelector(template, '.' + prefix + 'masonry_lite_settings');
        } else {
            showSelector(template, '.' + prefix + 'masonry_lite_settings');
        }

        if (template.val() !== 'slick_slider') {
            hideSelector(template, '.' + prefix + 'slick_settings');
        } else {
            showSelector(template, '.' + prefix + 'slick_settings');
        }

        if (template.val() !== 'highlight') {
            hideSelector(template, '.' + prefix + 'highlight_settings');
        } else {
            showSelector(template, '.' + prefix + 'highlight_settings');
        }

        if (template.val() !== 'showcase') {
            hideSelector(template, '.' + prefix + 'shopifeed_settings');
            $('.isw-linkto').animate({
                opacity: 'show',
                height: 'show'
            }, 200);
        } else {
            showSelector(template, '.' + prefix + 'shopifeed_settings');
            $('.isw-linkto').animate({
                opacity: 'hide',
                height: 'hide'
            }, 200);
        }

        if (template.val() !== 'slider' && template.val() !== 'slider-overlay') {
            hideSelector(template, '.' + prefix + 'slider_normal_settings');
        } else {
            showSelector(template, '.' + prefix + 'slider_normal_settings');
        }
        if (template.val() === 'highlight' || template.val() === 'slick_slider' || template.val() === 'thumbs' || template.val() === 'thumbs-no-border') {
            hideSelector(template, '.' + prefix + 'words_in_caption');
        } else {
            showSelector(template, '.' + prefix + 'words_in_caption');
        }

        if (template.val() === 'thumbs' || template.val() === 'thumbs-no-border' || template.val() === 'slider' || template.val() === 'slider-overlay') {
            hideSelector(template, 'select[id$="' + prefix + 'images_link"] option[value="popup"]');

            window.image_link_val = template.closest('.jr-container').find('select[id$="' + prefix + 'images_link"]').val();
        } else {
            showSelector(template, 'select[id$="' + prefix + 'images_link"] option[value="popup"]');
        }
    }

    function showSelector(closestFor, selector) {
        closestFor.closest('.jr-container').find(selector).animate({
            opacity: 'show',
            height: 'show'
        }, 200);
    }

    function hideSelector(closestFor, selector) {
        closestFor.closest('.jr-container').find(selector).animate({
            opacity: 'hide',
            height: 'hide'
        }, 200);
    }

    function hideField(closestFor, fieldName) {
        closestFor.closest('.jr-container').find('#wis-field-' + fieldName).animate({
            opacity: 'hide',
            height: 'hide'
        }, 200);
    }

    function showField(closestFor, fieldName) {
        closestFor.closest('.jr-container').find('#wis-field-' + fieldName).animate({
            opacity: 'show',
            height: 'show'
        }, 200);
    }

    function showSearchForSetting(show = '') {
        Object.entries(search_for_items).forEach(function (search, i, arr) {
            item = search[1];

            if (show === item) {
                $('#wis-feed-' + item).animate({
                    opacity: 'show',
                    height: 'show'
                }, 150);
            } else {
                $('#wis-feed-' + item).animate({
                    opacity: 'hide',
                    height: 'hide'
                }, 150);
            }
        });
    }

    $('input[name="savewidget"]').on('click', function () {
        setTimeout(function () {
            $(".isw-tabs").lightTabs();
        }, 1500);

    })

    $(document).bind('DOMSubtreeModified', function () {
        showPage = function (i, device) {
            if (device === 'desk') {
                $('#desk_tab_content_' + i).show();
                $('#desk_tab_' + i).addClass("active");

                $('#mob_tab_content_' + i).hide();
                $('#mob_tab_' + i).removeClass("active");
            }

            if (device === 'mob') {
                $('#mob_tab_content_' + i).show();
                $('#mob_tab_' + i).addClass("active");

                $('#desk_tab_content_' + i).hide();
                $('#desk_tab_' + i).removeClass("active");
            }
        }

        jQuery.fn.lightTabs = function (options) {
            var createTabs = function () {
                tabs = this;
                data_widget_id = tabs.getAttribute("data-widget-id")
                slider_id = data_widget_id.split('-')[1]
                i = slider_id;

                showPage(i, 'desk');
            };
            return this.each(createTabs);
        };

        jQuery(document).find(".desk_tab").click(function () {
            let mob_tab_id = this.getAttribute('data-tab-id');
            showPage(mob_tab_id, 'desk')
        });
        jQuery(document).find(".mob_tab").click(function () {
            let mob_tab_id = this.getAttribute('data-tab-id');
            showPage(mob_tab_id, 'mob')
        });
    });

    $(document).ready(function ($) {
        showPage = function (i, device) {
            if (device === 'desk') {
                $('#desk_tab_content_' + i).show();
                $('#desk_tab_' + i).addClass("active");

                $('#mob_tab_content_' + i).hide();
                $('#mob_tab_' + i).removeClass("active");
            }

            if (device === 'mob') {
                $('#mob_tab_content_' + i).show();
                $('#mob_tab_' + i).addClass("active");

                $('#desk_tab_content_' + i).hide();
                $('#desk_tab_' + i).removeClass("active");
            }
        }

        jQuery.fn.lightTabs = function (options) {
            var createTabs = function () {
                tabs = this;
                data_widget_id = tabs.getAttribute("data-widget-id")
                slider_id = data_widget_id.split('-')[1]
                i = slider_id;

                showPage(i, 'desk');
            };
            return this.each(createTabs);
        };

        jQuery(document).find(".desk_tab").click(function () {
            let mob_tab_id = this.getAttribute('data-tab-id');
            showPage(mob_tab_id, 'desk')
        });
        jQuery(document).find(".mob_tab").click(function () {
            let mob_tab_id = this.getAttribute('data-tab-id');
            showPage(mob_tab_id, 'mob')
        });

        $(".isw-tabs-content").lightTabs();

        $('.wis-not-working').on('click', function (e) {
            e.preventDefault();
            $('#wis-add-token').animate({opacity: 'show', height: 'show'}, 200)
        });

        var template = $('.jr-container select[id$="template"]')
        if (template.val() === 'thumbs' || template.val() === 'thumbs-no-border' || template.val() === 'slider' || template.val() === 'slider-overlay') {
            hideSelector(template, 'select[id$="images_link"] option[value="popup"]');
        } else {
            showSelector(template, 'select[id$="images_link"] option[value="popup"]');
        }

        // Hide Custom Url if image link is not set to custom url
        $('body').on('change', '.jr-container select[id$="images_link"]', function (e) {
            var images_link = $(this);
            if (images_link.val() !== 'custom_url') {
                images_link.closest('.jr-container').find('input[id$="custom_url"]').val('').parent().animate({
                    opacity: 'hide',
                    height: 'hide'
                }, 200);
            } else {
                images_link.closest('.jr-container').find('input[id$="custom_url"]').parent().animate({
                    opacity: 'show',
                    height: 'show'
                }, 200);
            }
        });

        $('body').on('change', '.jr-container input[id$="keep_ratio"]', function (e) {
            var keep_ratio = $(this);
            if (keep_ratio.is(":checked")) {
                showSelector(keep_ratio, '.slick_img_size');
            } else {
                hideSelector(keep_ratio, '.slick_img_size');
            }
        });

        $('body').on('change', '.jr-container input[id$="m_keep_ratio"]', function (e) {
            var keep_ratio = $(this);
            if (keep_ratio.is(":checked")) {
                showSelector(keep_ratio, '.m_slick_img_size');
            } else {
                hideSelector(keep_ratio, '.m_slick_img_size');
            }
        });

        // Modify options based on template selections
        $('body').on('change', '.jr-container .desk_settings select[id$="template"]', function () {
            modifySettings(this, false);
        });
        $('body').on('change', '.jr-container .mob_settings select[id$="m_template"]', function () {
            modifySettings(this, true);
        });

        // Modfiy options when search for is changed
        $(document).on('change', '.jr-container input:radio[id$="search_for"]', function (e) {
            var search_for = $(this);
            var img_to_show = $('#img_to_show');
            showSearchForSetting(search_for.val());

            switch (search_for.val()) {
                case 'account':
                    hideSelector(search_for, 'select[id$="images_link"] option[value="user_url"]');
                    hideSelector(search_for, 'select[id$="images_link"] option[value="attachment"]');
                    hideSelector(search_for, 'select[id$="description"] option[value="username"]');
                    hideSelector(search_for, 'select[id$="orderby"] option[value="popular-ASC"]');
                    hideSelector(search_for, 'select[id$="orderby"] option[value="popular-DESC"]');

                    hideField(search_for, "blocked_users");
                    hideField(search_for, "show_feed_header");
                    hideField(search_for, "enable_stories");
                    showField(search_for, "blocked_words");

                    img_to_show.animate({opacity: 'show', height: 'show'}, 200);
                    break;
                case 'account_business':
                    hideSelector(search_for, 'select[id$="images_link"] option[value="user_url"]');
                    hideSelector(search_for, 'select[id$="images_link"] option[value="attachment"]');
                    hideSelector(search_for, 'select[id$="description"] option[value="username"]');
                    showSelector(search_for, 'select[id$="orderby"] option[value="popular-ASC"]');
                    showSelector(search_for, 'select[id$="orderby"] option[value="popular-DESC"]');

                    hideField(search_for, "blocked_users");
                    showField(search_for, "show_feed_header");
                    showField(search_for, "enable_stories");
                    showField(search_for, "blocked_words");

                    img_to_show.animate({opacity: 'show', height: 'show'}, 200);
                    break;
                case 'username':
                    showSelector(search_for, 'select[id$="images_link"] option[value="user_url"]');
                    showSelector(search_for, 'select[id$="images_link"] option[value="attachment"]');
                    showSelector(search_for, 'select[id$="description"] option[value="username"]');

                    hideField(search_for, "blocked_users");
                    showField(search_for, "show_feed_header");
                    hideField(search_for, "enable_stories");
                    showField(search_for, "blocked_words");

                    img_to_show.animate({opacity: 'hide', height: 'hide'}, 200);
                    break;
                case 'hashtag':
                    hideSelector(search_for, 'select[id$="images_link"] option[value="user_url"]');
                    hideSelector(search_for, 'select[id$="images_link"] option[value="attachment"]');
                    hideSelector(search_for, 'select[id$="description"] option[value="username"]');

                    showField(search_for, "blocked_users");
                    hideField(search_for, "show_feed_header");
                    hideField(search_for, "enable_stories");
                    hideField(search_for, "blocked_words");

                    img_to_show.animate({opacity: 'hide', height: 'hide'}, 200);
                    break;
            }

        });

        // Toggle advanced options
        $('body').on('click', '.jr-advanced', function (e) {
            e.preventDefault();
            var advanced_container = $(this).parent().next();

            if (advanced_container.is(':hidden')) {
                $(this).html('[ - Close ]');
            } else {
                $(this).html('[ + Open ]');
            }
            advanced_container.toggle();
        });

        jQuery('span.wis_demo_pro').on('click', function (e) {
            e.preventDefault();
            window.open('https://cm-wp.com/instagram-slider-widget/pricing/', '_blank');
        });

    }); // Document Ready

})(jQuery);
