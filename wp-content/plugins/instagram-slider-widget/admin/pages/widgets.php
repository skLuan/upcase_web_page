<?php

// Exit if accessed directly


if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The page Settings.
 *
 * @since 1.0.0
 */
class WIS_WidgetsPage extends WIS_Page {

	/**
	 * The id of the page in the admin menu.
	 *
	 * @var string
	 */
	public $id;

	/**
	 * Тип страницы
	 *
	 * @var string
	 */
	public $type = 'page';

	/**
	 * Page content template
	 *
	 * @var string
	 */
	public $template_name = 'widgets';

	/**
	 * @var string
	 */
	public $menu_icon;

	/**
	 * @var string
	 */
	public $page_menu_dashicon = 'dashicons-welcome-widgets-menus';

	/**
	 * @var string
	 */
	public $menu_position = 58;

	/**
	 * @var string
	 */
	public $menu_post_type = null;

	/**
	 * @var string
	 */
	public $page_title;

	/**
	 * @var string
	 */
	public $menu_title;

	/**
	 * @var string
	 */
	public $menu_sub_title;

	/**
	 *
	 * @var
	 */
	public $page_menu_short_description;

	/**
	 * Заголовок страницы, также использует в меню, как название закладки
	 *
	 * @var bool
	 */
	public $show_page_title = true;

	/**
	 * @var int
	 */
	public $page_menu_position = 20;

	/**
	 * @param WIS_Plugin $plugin
	 */
	public function __construct( $plugin ) {
		$this->id             = "widgets";
		$this->page_title     = __( 'Social Slider Feeds', 'instagram-slider-widget' );
		$this->menu_title     = __( 'Social Slider Feeds', 'instagram-slider-widget' );
		$this->menu_sub_title = __( 'Widgets', 'instagram-slider-widget' );
		$this->menu_tab_title = __( 'Widgets', 'instagram-slider-widget' );
		$this->menu_icon      = '~/admin/assets/img/wis.png';
		$this->capabilitiy    = "manage_options";

		parent::__construct( $plugin );

		add_filter( 'dynamic_sidebar_params', [ $this, 'pro_stick_on_premium_widgets' ] );
		$this->plugin = $plugin;
	}

	public function assets( $scripts, $styles ) {
		parent::assets( $scripts, $styles );

		//Widgets scripts
		$this->scripts->request( 'admin-widgets' );

		if ( wp_is_mobile() ) {
			$this->scripts->request( 'jquery-touch-punch' );
		}

	}

	/**
	 * @param $params
	 */
	public function pro_stick_on_premium_widgets( $params ) {
		return $params;
	}

	/**
	 * Show rendered template - $template_name
	 */
	public function showPageContent() {
		$sidebars_widgets = get_option( 'sidebars_widgets', [] );
		$insta_widgets    = get_option( 'widget_jr_insta_slider', [] );
		$youtube_widgets  = get_option( 'widget_wyoutube_feed', [] );
		$facebook_widgets = get_option( 'widget_wfacebook_feed', [] );
		$demo_widgets     = include WIS_PLUGIN_DIR . "/includes/demo_widgets.php";
		$account          = $this->get_current_account();

		if ( isset( $_GET['do'] ) && 'add_demo' === $_GET['do'] ) {
			if ( isset( $sidebars_widgets['jr-insta-shortcodes'] ) && ! empty( $account ) ) {
				$next_id = $this->get_next_widget_id( $insta_widgets );

				foreach ( $demo_widgets as $demo_widget ) {
					$insta_widgets[ $next_id ]                     = $demo_widget;
					$insta_widgets[ $next_id ]['search_for']       = $account['type'];
					$insta_widgets[ $next_id ][ $account['type'] ] = $account['username'];
					$sidebars_widgets['jr-insta-shortcodes'][]     = "jr_insta_slider-{$next_id}";
					$next_id ++;
				}
				update_option( 'sidebars_widgets', $sidebars_widgets );
				update_option( 'widget_jr_insta_slider', $insta_widgets );
			}

			$_SERVER['REQUEST_URI'] = remove_query_arg( 'do' );
			wp_redirect( $_SERVER['REQUEST_URI'] );
		}

		/*************************/
		ob_start();
		require_once ABSPATH . "wp-admin/includes/widgets.php";
		$sidebars_widgets = wp_get_sidebars_widgets();
		global $wp_registered_widgets, $wp_registered_sidebars;
		$isset_widgets = false;
		wp_nonce_field( 'save-sidebar-widgets', '_wpnonce_widgets' );
		if ( ! empty( $sidebars_widgets ) ) {
			foreach ( $sidebars_widgets as $key => $sidebar ) {
				foreach ( $sidebar as $widget ) {
					if ( strstr( $widget, 'jr_insta_slider' ) || strstr( $widget, 'wyoutube_feed' ) || strstr( $widget, 'wfacebook_feed' ) ) {
						wp_list_widget_controls( $key, $wp_registered_sidebars[ $key ]['name'] );
						$isset_widgets = true;
						break;
					}
				}
			}
		}
		if ( ! $isset_widgets ) {
			echo "<h2>" . sprintf( __( "You don't have any Social Slider Feeds. Go to the Wordpress <a href='%1s'>Widgets</a> page and add it.", 'instagram-slider-widget' ), admin_url( 'widgets.php' ) ) . "</h2>";
		}
		$widgets = ob_get_contents();
		ob_end_clean();

		$data = [
			'content'          => $widgets,
			'insta_widgets'    => $insta_widgets,
			'demo_widgets'     => $demo_widgets,
			'youtube_widgets'  => $youtube_widgets,
			'facebook_widgets' => $facebook_widgets
		];
		echo $this->render( '', $data );
	}

	/**
	 * @param $widgets
	 *
	 * @return int
	 */
	public function get_next_widget_id( $widgets ) {
		$i = 0;
		foreach ( $widgets as $key => $widget ) {
			if ( '_multiwidget' !== $key ) {
				$i = $key;
			}
		}

		return ++ $i;
	}

	/**
	 *
	 * @return array
	 */
	public function get_current_account() {
		$accounts     = WIS_Plugin::app()->getOption( WIG_PROFILES_OPTION );
		$accounts_new = WIS_Plugin::app()->getOption( WIG_BUSINESS_PROFILES_OPTION );
		$result       = array();

		if ( is_array( $accounts_new ) && ! empty( $accounts_new ) ) {
			$key                = $this->wis_array_key_first( $accounts_new );
			$result['type']     = 'account_business';
			$result['username'] = $accounts_new[ $key ]['username'];

		} else if ( is_array( $accounts ) && ! empty( $accounts ) ) {
			$key                = $this->wis_array_key_first( $accounts );
			$result['type']     = 'account';
			$result['username'] = $accounts[ $key ]['username'];
		}

		return $result;
	}

	/**
	 *
	 * @return string|int
	 */
	public function wis_array_key_first( $array ) {
		foreach ( $array as $key => $item ) {
			return $key;
		}

		return '';
	}
}
