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
class WIS_ProfilesPage extends WIS_Page {

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
	public $template_name = 'profiles';

	/**
	 * @var string
	 */
	public $page_menu_dashicon = 'dashicons-admin-users';

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
	public $page_menu_position = 10;

	/**
	 * @var WIS_Facebook_Profiles
	 */
	public $facebook;

	/**
	 * @var WIS_Instagram_Profiles
	 */
	public $instagram;

	/**
	 * @var WIS_Youtube_Profiles
	 */
	public $youtube;

	/**
	 * @param WIS_Plugin $plugin
	 */
	public function __construct( $plugin ) {
		$this->id          = "settings";
		$this->page_title  = __( 'Social profiles', 'instagram-slider-widget' );
		$this->menu_title  = __( 'Profiles', 'instagram-slider-widget' );
		$this->menu_target = "feeds-" . $plugin->getPluginName();

		parent::__construct( $plugin );

		$this->plugin = $plugin;

		$this->instagram = new WIS_Instagram_Profiles( $this );
		$this->facebook  = new WIS_Facebook_Profiles( $this );
		$this->youtube   = new WIS_Youtube_Profiles( $this );

	}

	/**
	 * @return string|null
	 */
	public static function get_page_hook() {
		return get_plugin_page_hook( 'settings-wisw', 'admin.php' );
	}

	public function assets( $scripts, $styles ) {
		parent::assets( $scripts, $styles );

		$this->scripts->request( 'jquery' );

		$this->scripts->request( [
			'control.checkbox',
			'control.dropdown',
		], 'bootstrap' );

		$this->styles->request( [
			'bootstrap.core',
			'bootstrap.form-group',
			'bootstrap.separator',
			'control.dropdown',
			'control.checkbox',
		], 'bootstrap' );

		wp_enqueue_style( 'wyoutube-admin-styles', WYT_COMPONENT_URL . '/admin/assets/css/wyoutube-admin.css', [], WYT_COMPONENT_VERSION );
		wp_enqueue_script( 'wyoutube-admin-script', WYT_COMPONENT_URL . '/admin/assets/js/wyoutube-admin.js', [ 'jquery' ], WYT_COMPONENT_VERSION, true );
		wp_enqueue_script( 'wfacebook-admin-script', WFB_COMPONENT_URL . '/assets/admin/js/wfacebook-admin.js', [ 'jquery' ], WFB_COMPONENT_VERSION, true );
		wp_enqueue_script( 'winstagram-admin-script', WIG_COMPONENT_URL . '/assets/admin/js/instagram-scripts.js', [ 'jquery' ], WIG_COMPONENT_VERSION, true );

		$wyt = json_encode( [
			'nonce'          => wp_create_nonce( 'wyt_nonce' ),
			'remove_account' => __( 'Are you sure want to delete this account?', 'instagram-slider-widget' ),
		] );
		wp_add_inline_script( 'wyoutube-admin-script', "var wyt = $wyt;" );

		$wfb = json_encode( [
			'nonce'          => wp_create_nonce( 'wfb_nonce' ),
			'remove_account' => __( 'Are you sure want to delete this account?', 'instagram-slider-widget' ),
		] );
		wp_add_inline_script( 'wfacebook-admin-script', "var wfb = $wfb;" );

		$wig = json_encode( [
			'nonce'          => wp_create_nonce( 'wig_nonce' ),
			'remove_account' => __( 'Are you sure want to delete this account?', 'instagram-slider-widget' ),
		] );
		wp_add_inline_script( 'winstagram-admin-script', "var wig = $wig;" );
	}

	/**
	 * @param $social
	 *
	 * @return string
	 */
	public function getSocialUrl( $social = '' ) {
		$args = [
			'page' => $this->id . "-" . WIS_Plugin::app()->getPluginName(),
		];
		if ( $social ) {
			$args['tab'] = sanitize_text_field( $social );
		}

		return admin_url( "admin.php?" ) . http_build_query( $args );
	}

	public function showPageContent() {
		if ( isset( $_GET['action'] ) && isset( $_GET['social'] ) ) {
			$social = sanitize_text_field( $_GET['social'] );

			switch ( sanitize_text_field( $_GET['action'] ) ) {
				case 'delete':
					if ( isset( $_GET['account'] ) ) {
						$this->delete_action( $social, sanitize_text_field( $_GET['account'] ) );
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
				'title'       => __( 'Instagram', 'instagram-slider-widget' ),
				'description' => __( 'Manage Instagram accounts', 'instagram-slider-widget' ),
				'content'     => $this->instagram->content(),
			],
			'facebook'  => [
				'title'       => __( 'Facebook', 'instagram-slider-widget' ),
				'description' => __( 'Manage Facebook accounts', 'instagram-slider-widget' ),
				'content'     => $this->facebook->content(),
			],
			'youtube'   => [
				'title'       => __( 'Youtube', 'instagram-slider-widget' ),
				'description' => __( 'Manage Youtube accounts', 'instagram-slider-widget' ),
				'content'     => $this->youtube->content(),
			],
		];

		$data = [
			'socials' => $socials,
		];
		echo $this->render( $this->template_name, $data );
	}

	public function delete_action( $social, $account ) {
		switch ( $social ) {
			case 'instagram':
				$profiles    = new WIS_Instagram_Profiles();
				$is_business = isset( $_GET['business'] ) && $_GET['business'];
				if ( $account ) {
					$profiles->delete_account( $account, $is_business );
				}
				break;
			case 'facebook':
				$profiles = new WIS_Facebook_Profiles();
				if ( $account ) {
					$profiles->delete_account( $account );
				}
				break;
			case 'youtube':
				$profiles = new WIS_Youtube_Profiles();
				if ( $account ) {
					$profiles->delete_account( $account );
				}
				break;
		}

		$_SERVER['REQUEST_URI'] = remove_query_arg( 'action' );
		$_SERVER['REQUEST_URI'] = remove_query_arg( 'account' );
		$_SERVER['REQUEST_URI'] = remove_query_arg( 'social' );
		$_SERVER['REQUEST_URI'] = remove_query_arg( 'business' );
		wp_redirect( $_SERVER['REQUEST_URI'] );
	}

}
