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
class WIS_FeedsPage extends WIS_Page {

	/**
	 * Тип страницы
	 *
	 * @var string
	 */
	public $type = 'page';

	/**
	 * The id of the page in the admin menu.
	 *
	 * @var string
	 */
	public $id;

	/**
	 * @var string
	 */
	public $template_name = 'feeds';

	/**
	 * @var string
	 */
	public $page_menu_dashicon = 'dashicons-slides';

	/**
	 * Заголовок страницы, также использует в меню, как название закладки
	 *
	 * @var bool
	 */
	public $show_page_title = true;

	/**
	 * @var bool
	 */
	public $show_right_sidebar = true;

	/**
	 * @var int
	 */
	public $page_menu_position = 15;

	/**
	 * @param WIS_Plugin $plugin
	 */
	public function __construct( $plugin ) {
		$this->id             = 'feeds';
		$this->page_title     = __( 'Social Slider Feeds', 'instagram-slider-widget' );
		$this->menu_title     = __( 'Social Slider Feeds', 'instagram-slider-widget' );
		$this->menu_sub_title = __( 'Feeds', 'instagram-slider-widget' );
		$this->menu_tab_title = __( 'Feeds', 'instagram-slider-widget' );
		$this->menu_icon      = '~/admin/assets/img/wis.png';
		$this->capabilitiy    = 'manage_options';

		parent::__construct( $plugin );

		$this->plugin = $plugin;
	}

	public function assets( $scripts, $styles ) {
		parent::assets( $scripts, $styles );

		//$this->styles->required = [];
		$this->styles->add( WIS_PLUGIN_URL . '/admin/assets/css/feeds.css', [], 'wis-feeds-style', WIS_PLUGIN_VERSION );
		//$this->styles->add( WIS_PLUGIN_URL . "/admin/assets/css/spectre.css", [], 'wis-feeds-forms', WIS_PLUGIN_VERSION );
		$this->scripts->add( WIS_PLUGIN_URL . '/admin/assets/js/feeds.js', [ 'jquery' ], 'wis-feeds-script', WIS_PLUGIN_VERSION );
		$this->scripts->localize( 'wis_feeds', [
			'add_account_nonce'   => wp_create_nonce( 'addAccountByToken' ),
			'wis_nonce'           => wp_create_nonce( 'addAccountByToken' ),
			'remove_account'      => __( 'Are you sure want to delete this feed?', 'instagram-slider-widget' ),
			'nonce'               => wp_create_nonce( 'wis_nonce' ),
			'modal_close_confirm' => __( "You haven't finished adding the feed. Are you sure you want to close the window?", 'instagram-slider-widget' ),
			'hide_show_fields'    => $this->get_hideShow_fields(),
		] );
	}

	/**
	 * @inerhitDoc
	 */
	public function showPageContent() {
		if ( isset( $_GET['action'] ) && isset( $_GET['social'] ) ) {
			$social = sanitize_text_field( $_GET['social'] );

			switch ( sanitize_text_field( $_GET['action'] ) ) {
				case 'add':
					$this->edit_action( $social );

					return;
				case 'edit':
					if ( isset( $_GET['feed'] ) ) {
						$this->edit_action( $social, $_GET['feed'] );
					}

					return;
				case 'delete':
					if ( isset( $_GET['feed'] ) ) {
						$this->delete_action( $social, $_GET['feed'] );
					}

					return;
				default:
					unset( $_GET['action'] );
					$this->showPageContent();

					return;
			}
		}

		$socials = [
			'instagram' => [
				'title'       => __( 'Instagram feeds', 'instagram-slider-widget' ),
				'description' => __( 'Manage Instagram feeds', 'instagram-slider-widget' ),
				'content'     => $this->instagram(),
			],
			'facebook'  => [
				'title'       => __( 'Facebook feeds', 'instagram-slider-widget' ),
				'description' => __( 'Manage Facebook feeds', 'instagram-slider-widget' ),
				'content'     => $this->facebook(),
			],
			'youtube'   => [
				'title'       => __( 'Youtube feeds', 'instagram-slider-widget' ),
				'description' => __( 'Manage Youtube feeds', 'instagram-slider-widget' ),
				'content'     => $this->youtube(),
			],
		];

		$data = [
			'socials' => $socials,
		];

		echo $this->render( $this->template_name, $data ); // @codingStandardsIgnoreLine
	}

	/**
	 * Логика на вкладке Инстаграма
	 *
	 * @return string
	 */
	public function instagram() {
		$instagram = new WIS_Feeds( 'instagram' );
		$data      = [
			'social' => 'instagram',
			'feeds'  => $instagram->feeds,
		];
		$result    = $this->render( WIG_COMPONENT_VIEWS_DIR . '/feeds', $data );

		return $result;
	}

	/**
	 * Логика на вкладке Facebook
	 *
	 * @return string
	 */
	public function facebook() {
		$facebook = new WIS_Feeds( 'facebook' );
		$data     = [
			'social' => 'facebook',
			'feeds'  => $facebook->feeds,
		];
		$result   = $this->render( WFB_COMPONENT_VIEWS_DIR . '/feeds', $data );

		return $result;
	}

	/**
	 * Логика на вкладке Youtube
	 *
	 * @return string
	 */
	public function youtube() {
		$youtube = new WIS_Feeds( 'youtube' );
		$data    = [
			'social' => 'youtube',
			'feeds'  => $youtube->feeds,
		];
		$result  = $this->render( WYT_COMPONENT_VIEWS_DIR . '/feeds', $data );

		return $result;
	}

	/**
	 * @param $social
	 * @param array $data
	 *
	 * @return WIS_Facebook_Feed|WIS_Instagram_Feed|WIS_Youtube_Feed|null
	 */
	private function getSocialClass( $social, $data = [] ) {
		switch ( $social ) {
			case 'instagram':
				return new WIS_Instagram_Feed( $data );
			case 'facebook':
				return new WIS_Facebook_Feed( $data );
			case 'youtube':
				return new WIS_Youtube_Feed( $data );
			default:
				return null;
		}

	}

	public function edit_action( $social, $feed_id = 0 ) {
		$feeds = new WIS_Feeds( $social );

		// ADD/EDIT Action
		if ( isset( $_POST['wis-feed-save-action'] ) ) {
			unset( $_POST['wis-feed-save-action'] );

			$feed = $this->getSocialClass( $social, $_POST );

			if ( $feed_id ) {
				$feeds->update_feed( $feed_id, $feed );
				//$_SERVER['REQUEST_URI'] = remove_query_arg( 'action' );
				//$_SERVER['REQUEST_URI'] = remove_query_arg( 'feed' );
			} else {
				$feeds->add_feed( $feed );
				$_SERVER['REQUEST_URI'] = remove_query_arg( 'action' );
			}

			//wp_redirect( $_SERVER['REQUEST_URI'] );
		}

		// FORM
		$this->styles->required = [];
		$this->styles->add( WIS_PLUGIN_URL . '/admin/assets/css/spectre.css', [], 'wis-feeds-forms', WIS_PLUGIN_VERSION );

		if ( $feed_id ) {
			$feed = $feeds->get_feed( $feed_id );
		} else {
			$feed = $this->getSocialClass( $social );
		}

		$feed->form( $feed_id );
	}

	public function delete_action( $social, $feed_id = 0 ) {
		$feeds = new WIS_Feeds( $social );

		if ( $feed_id ) {
			$feeds->delete_feed( $feed_id );
		}

		$_SERVER['REQUEST_URI'] = remove_query_arg( 'action' );
		$_SERVER['REQUEST_URI'] = remove_query_arg( 'feed' );
		wp_safe_redirect( $_SERVER['REQUEST_URI'] );
	}

	public function get_hideShow_fields() {
		return [
			'account',
			'account_business',
			'username',
			'hashtag',
		];
	}
}
