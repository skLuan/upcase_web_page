<?php

// ------------------------ Breadcrumbs
function uc_breadcrumbs_links($output)
{
    global $porto_settings;
    $delimiter = '<i class="delimiter' . ($porto_settings['breadcrumbs-delimiter'] ? ' ' . esc_attr($porto_settings['breadcrumbs-delimiter']) : '') . '"></i>';
    $before    = '<li>';
    $after     = '</li>';
    return $before . $output . 'atun' . $after;
}

function uc_breadcrumbs_link($title, $link = '')
{

    global $porto_settings;

    $microdata = (isset($porto_settings['rich-snippets']) && $porto_settings['rich-snippets']) ? true : false;

    $microdata_itemscope = $microdata_url = $microdata_title = $microdata_position = $separator_markup = '';
    $microdata_itemscope = (!is_front_page() && 'Home' == $title) ? ' class="home"' : '';
    if ($microdata) {
        $microdata_itemscope .= ' itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem"';
        $microdata_url        = 'itemscope itemtype="https://schema.org/Thing" itemprop="item"';
        $microdata_title      = 'itemprop="name"';
        $microdata_position   = '<meta itemprop="position" content="' . Porto_Breadcrumbs_Link_Position::$position . '" />';
        Porto_Breadcrumbs_Link_Position::$position++;
    }

    $output    = sprintf('<span %s>%s</span>', $microdata_title, $title);
    $delimiter = '';
    if ($link) {
        if ($microdata) {
            $microdata_url = 'itemprop="item"';
        }
        $output    = sprintf('<a %s href="%s"%s>%s</a>%s', $microdata_url, esc_url($link), ('Home' == $title) ? ' title="' . esc_attr__('Go to Home Page', 'porto') . '"' : '', $output, $microdata_position);
        $before    = sprintf('<li%s>', $microdata_itemscope);
        !is_singular() ? $delimiter = '<i class="delimiter' . ($porto_settings['breadcrumbs-delimiter'] ? ' ' . esc_attr($porto_settings['breadcrumbs-delimiter']) : '') . '"></i>' : $delimiter = '';
    } else {
        //$before = '<li>';
        $output     .= $microdata_position;
        $current_url = esc_url(home_url(add_query_arg(array())));
        $output     .= sprintf('<meta %s content="%s">', $microdata_url, $current_url);
        $before      = sprintf('<li%s>', $microdata_itemscope);
    }
    $after = '</li>';

    return $before . $output . $delimiter . $after;
}

function uc_breadcrumbs_terms_link()
{

    global $porto_settings;

    $output = '';
    $post   = isset($GLOBALS['post']) ? $GLOBALS['post'] : null;

    if (!(isset($porto_settings['breadcrumbs-categories']) && $porto_settings['breadcrumbs-categories'])) {
        return $output;
    }

    if ('post' == $post->post_type) {
        $taxonomy = 'category';
    } elseif ('portfolio' == $post->post_type) {
        $taxonomy = 'portfolio_cat';
    } elseif ('member' == $post->post_type) {
        $taxonomy = 'member_cat';
    } elseif ('faq' == $post->post_type) {
        $taxonomy = 'faq_cat';
    } elseif ('product' == $post->post_type && class_exists('WooCommerce') && is_woocommerce()) {
        $taxonomy = 'product_cat';
    } else {
        return $output;
    }

    $terms = wp_get_object_terms($post->ID, $taxonomy, array('orderby' => 'term_id'));

    if (empty($terms)) {
        return $output;
    }

    $terms_by_id = array();
    foreach ($terms as $term) {
        $terms_by_id[$term->term_id] = $term;
    }

    foreach ($terms as $term) {
        unset($terms_by_id[$term->parent]);
    }

    if (count($terms_by_id) == 1) {
        unset($terms);
        $terms[0] = array_shift($terms_by_id);
    }

    if (count($terms) == 1) {
        $term_parent = $terms[0]->parent;

        if ($term_parent) {
            $term_tree   = get_ancestors($terms[0]->term_id, $taxonomy);
            $term_tree   = array_reverse($term_tree);
            $term_tree[] = get_term($terms[0]->term_id, $taxonomy);

            $i = 0;
            foreach ($term_tree as $term_id) {
                $term_object = get_term($term_id, $taxonomy);
                if (0 == $i++) {
                    $output .= porto_breadcrumbs_simple_link($term_object->name, get_term_link($term_object));
                } else {
                    $output .= ', ' . porto_breadcrumbs_simple_link($term_object->name, get_term_link($term_object));
                }
            }
            $output = uc_breadcrumbs_links($output);
        } else {
            $output = uc_breadcrumbs_link($terms[0]->name, get_term_link($terms[0]));
        }
    } else {
        $output = porto_breadcrumbs_simple_link($terms[0]->name, get_term_link($terms[0]));
        array_shift($terms);
        foreach ($terms as $term) {
            $output .= ', ' . porto_breadcrumbs_simple_link($term->name, get_term_link($term));
        }
        $output = uc_breadcrumbs_links($output);
    }

    return $output;
}
function uc_breadcrumbs()
{

    // use yoast breadcrumbs if enabled
    if (function_exists('yoast_breadcrumb')) {
        $yoast_breadcrumbs = yoast_breadcrumb('', '', false);
        if ($yoast_breadcrumbs) {
            return $yoast_breadcrumbs;
        }
    }

    global $porto_settings;

    $post   = isset($GLOBALS['post']) ? $GLOBALS['post'] : null;
    $output = '';

    // add breadcrumbs prefix
    if (!is_front_page()) {
        if (isset($porto_settings['breadcrumbs-prefix']) && $porto_settings['breadcrumbs-prefix']) {
            $output .= '<span class="breadcrumbs-prefix">' . esc_html($porto_settings['breadcrumbs-prefix']) . '</span>';
        }
    }

    // breadcrumbs start wrap
    $output .= '<ul class="breadcrumb"' . (isset($porto_settings['rich-snippets']) && $porto_settings['rich-snippets'] ? ' itemscope itemtype="https://schema.org/BreadcrumbList"' : '') . '>';

    // add home link
    if (!is_front_page()) {
        $output .= porto_breadcrumbs_link(__('Home', 'porto'), apply_filters('woocommerce_breadcrumb_home_url', home_url()));
    } elseif (is_home()) {
        $output .= porto_breadcrumbs_link(isset($porto_settings['blog-title']) ? $porto_settings['blog-title'] : esc_html__('Blog', 'porto'));
    }

    // add woocommerce shop page link
    if (class_exists('WooCommerce') && (!isset($porto_settings['breadcrumbs-shop-link']) || $porto_settings['breadcrumbs-shop-link']) && ((is_woocommerce() && is_archive() && !is_shop()) || is_product() || is_cart() || is_checkout() || is_account_page())) {
        $output .= porto_breadcrumbs_shop_link();
    }

    if (is_singular()) {
        if (isset($post->post_type) && 'post' == $post->post_type && get_option('show_on_front') == 'page' && (isset($porto_settings['breadcrumbs-blog-link']) && $porto_settings['breadcrumbs-blog-link'])) {
            $output .= porto_breadcrumbs_link(get_the_title(get_option('page_for_posts', true)), get_permalink(get_option('page_for_posts')));
        } elseif (isset($post->post_type) && 'product' !== $post->post_type && get_post_type_archive_link($post->post_type) && (isset($porto_settings['breadcrumbs-archives-link']) && $porto_settings['breadcrumbs-archives-link'])) {
            $output .= porto_breadcrumbs_archive_link();
        }

        if (isset($post->post_parent) && 0 == $post->post_parent) {
            $output .= uc_breadcrumbs_terms_link();
        } else {
            $output .= porto_breadcrumbs_ancestors_link();
        }

        // $output .= porto_breadcrumb_leaf();
    } else {
        if (is_post_type_archive()) {
            if (is_search()) {
                $output .= porto_breadcrumbs_archive_link();
                $output .= porto_breadcrumb_leaf('search');
            } else {
                $output .= porto_breadcrumbs_archive_link(false);
            }
        } elseif (is_tax() || is_tag() || is_category()) {
            $html  = porto_breadcrumbs_taxonomies_link();
            $html .= porto_breadcrumb_leaf('term');

            if (is_tag()) {
                if (get_option('show_on_front') == 'page' && (isset($porto_settings['breadcrumbs-blog-link']) && $porto_settings['breadcrumbs-blog-link'])) {
                    $output .= porto_breadcrumbs_link(get_the_title(get_option('page_for_posts', true)), get_permalink(get_option('page_for_posts')));
                }
                /* translators: %s: Tag name */
                $output .= sprintf('<li>' . esc_html__('Tag', 'porto') . '&nbsp;-&nbsp;%s</li>', $html);
            } elseif (is_tax('product_tag')) {
                /* translators: %s: Tag name */
                $output .= sprintf('<li>' . esc_html__('Product Tag', 'porto') . '&nbsp;-&nbsp;%s</li>', $html);
            } else {
                if (is_category() && get_option('show_on_front') == 'page' && (isset($porto_settings['breadcrumbs-blog-link']) && $porto_settings['breadcrumbs-blog-link'])) {
                    $output .= porto_breadcrumbs_link(get_the_title(get_option('page_for_posts', true)), get_permalink(get_option('page_for_posts')));
                }
                if (is_tax('portfolio_cat') || is_tax('portfolio_skills')) {
                    $output .= porto_breadcrumbs_link(porto_breadcrumbs_archive_name('portfolio'), get_post_type_archive_link('portfolio'));
                }
                if (is_tax('member_cat')) {
                    $output .= porto_breadcrumbs_link(porto_breadcrumbs_archive_name('member'), get_post_type_archive_link('member'));
                }
                if (is_tax('faq_cat')) {
                    $output .= porto_breadcrumbs_link(porto_breadcrumbs_archive_name('faq'), get_post_type_archive_link('faq'));
                }
                $output .= $html;
            }
        } elseif (is_date()) {
            global $wp_locale;

            if (get_option('show_on_front') == 'page' && (isset($porto_settings['breadcrumbs-blog-link']) && $porto_settings['breadcrumbs-blog-link'])) {
                $output .= porto_breadcrumbs_link(get_the_title(get_option('page_for_posts', true)), get_permalink(get_option('page_for_posts')));
            }

            $year = esc_html(get_query_var('year'));
            if (is_month() || is_day()) {
                $month      = get_query_var('monthnum');
                $month_name = $wp_locale->get_month($month);
            }

            if (is_year()) {
                $output .= porto_breadcrumb_leaf('year');
            } elseif (is_month()) {
                $output .= porto_breadcrumbs_link($year, get_year_link($year));
                $output .= porto_breadcrumb_leaf('month');
            } elseif (is_day()) {
                $output .= porto_breadcrumbs_link($year, get_year_link($year));
                $output .= porto_breadcrumbs_link($month_name, get_month_link($year, $month));
                $output .= porto_breadcrumb_leaf('day');
            }
        } elseif (is_author()) {
            $output .= porto_breadcrumb_leaf('author');
        } elseif (is_search()) {
            $output .= porto_breadcrumb_leaf('search');
        } elseif (is_404()) {
            $output .= porto_breadcrumb_leaf('404');
        } elseif (class_exists('WeDevs_Dokan')) {
            $arr   = apply_filters('woocommerce_get_breadcrumb', array());
            $index = 0;
            foreach ($arr as $crumb) {
                if ($index == count($arr) - 1) {
                    $output .= esc_html($crumb[0]);
                } else {
                    $output .= porto_breadcrumbs_link($crumb[0], $crumb[1]);
                }
                $index++;
            }
        } else {
            if (is_home() && !is_front_page()) {
                if (get_option('show_on_front') == 'page') {
                    $output .= porto_breadcrumbs_link(get_the_title(get_option('page_for_posts', true)));
                } else {
                    $output .= porto_breadcrumbs_link(isset($porto_settings['blog-title']) ? $porto_settings['blog-title'] : esc_html__('Blog', 'porto'));
                }
            }
        }
    }

    // breadcrumbs end wrap
    $output .= '</ul>';

    return apply_filters('uc_breadcrumbs', $output);
}