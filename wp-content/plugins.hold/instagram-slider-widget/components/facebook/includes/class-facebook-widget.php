<?php


use WIS\Facebook\Includes\Api\FacebookAccount;
use WIS\Facebook\Includes\Api\WFB_Facebook_API;

/**
 * Facebook widget Class
 */
class WFB_Widget extends WP_Widget {

	/**
	 * Social name
	 *
	 * @var string
	 */
	public $social = 'facebook';

	private static $app;

	/**
	 * @var WIS_Plugin
	 */
	public $plugin;

	/**
	 * @var WIS_Facebook
	 */
	public $fb;

	/**
	 * @var array
	 */
	public $defaults;

	/**
	 * @var WIS_Feeds
	 */
	public $feeds;

	public static function app() {
		return self::$app;
	}

	/**
	 * Initialize the plugin by registering widget and loading public scripts
	 *
	 */
	public function __construct() {
		self::$app = $this;

		// Widget ID and Class Setup
		parent::__construct( 'wfacebook_feed', __( 'Social Slider - Facebook', 'instagram-slider-widget' ), [
			'show_instance_in_rest' => true,
			'classname'             => 'wfacebook-feed',
			'description'           => __( 'A widget that displays a Facebook posts ', 'instagram-slider-widget' ),
		] );

		$this->plugin = WIS_Plugin::app();
		$this->feeds  = new WIS_Feeds( $this->social );

		$this->defaults = [
			'title'   => __( 'Facebook feed', 'instagram-slider-widget' ),
			'feed_id' => null,
		];

		// Action to display posts
		add_action( 'wfacebook_feed', [ $this, 'display_posts' ] );

		// Enqueue Plugin Styles and scripts
		add_action( 'wp_enqueue_scripts', [ $this, 'public_register' ] );
	}

	/**
	 * Register widget on widgets init
	 */
	public static function register_widget() {
		register_widget( __CLASS__ );
	}

	public function public_register() {
		wp_register_style( WIS_Plugin::app()->getPrefix() . 'wfb-font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' );
		wp_register_style( WIS_Plugin::app()->getPrefix() . 'wfb-masonry-view-css', WFB_COMPONENT_URL . '/assets/css/wbfb_masonry_view.css', [], WFB_COMPONENT_VERSION );
		wp_register_style( WIS_Plugin::app()->getPrefix() . 'wfb-remodal-css', WFB_COMPONENT_URL . '/assets/css/remodal.css', [], WFB_COMPONENT_VERSION );
		wp_register_style( WIS_Plugin::app()->getPrefix() . 'wfb-remodal-theme-css', WFB_COMPONENT_URL . '/assets/css/remodal-default-theme.css', [], WFB_COMPONENT_VERSION );
		wp_register_style( WIS_Plugin::app()->getPrefix() . 'wfb-remodal-view-css', WFB_COMPONENT_URL . '/assets/css/remodal-view.css', [], WFB_COMPONENT_VERSION );

		$ajax = json_encode( [
			'url'   => admin_url( 'admin-ajax.php' ),
			'nonce' => wp_create_nonce( "addAccountByToken" ),
		] );
		wp_add_inline_script( WIS_Plugin::app()->getPrefix() . 'wfacebook', "var ajax = $ajax;" );
		wp_register_script( WIS_Plugin::app()->getPrefix() . 'wfb-masonry-view-js', WFB_COMPONENT_URL . '/assets/js/wbfb_masonry_view.js', [], WFB_COMPONENT_VERSION );
		wp_register_script( WIS_Plugin::app()->getPrefix() . 'wfb-premium-imagesloaded', WFB_COMPONENT_URL . '/assets/js/libs/imagesloaded.pkgd.min.js', [], WFB_COMPONENT_VERSION, true );
		wp_register_script( WIS_Plugin::app()->getPrefix() . 'wfb-remodal-min-js', WFB_COMPONENT_URL . '/assets/js/libs/remodal.min.js', [], WFB_COMPONENT_VERSION, true );
		wp_register_script( WIS_Plugin::app()->getPrefix() . 'wfb-remodal-view-js', WFB_COMPONENT_URL . '/assets/js/remodal-view.js', [], WFB_COMPONENT_VERSION, true );
	}

	/**
	 * The Public view of the Widget
	 *
	 */
	public function widget( $args, $instance ) {
		//Our variables from the widget settings.
		$title = apply_filters( 'widget_title', $instance['title'] );

		echo $args['before_widget'];

		// Display the widget title
		if ( $title ) {
			echo $args['before_title'] . $title . $args['after_title'];
		}

		do_action( 'wfacebook_feed', $instance );

		echo $args['after_widget'];
	}

	/**
	 * Widget Settings Form
	 *
	 */
	public function form( $instance ) {
		$instance = wp_parse_args( (array) $instance, $this->defaults );

		$args = [
			'widget'   => &$this,
			'instance' => $instance,
			'feeds'    => $this->feeds,
		];

		echo $this->render_template( 'widget_settings', $args );
	}

	/**
	 * Update the widget settings
	 *
	 * @param array $new_instance New instance values
	 * @param array $instance Old instance values
	 *
	 * @return array
	 */
	public function update( $new_instance, $instance ) {
		$new_instance = wp_parse_args( (array) $new_instance, $this->defaults );

		foreach ( $new_instance as $key => &$item ) {
			switch ( $key ) {
				case 'title':
					$item = sanitize_text_field( $item );
					break;
				case 'feed_id':
					$item = absint( $item );
					break;
			}
		}

		return $new_instance;
	}

	/**
	 * Echoes the Display Instagram Images method
	 *
	 * @param array $args
	 *
	 * @return void
	 */
	public function display_posts( $args ) {
		echo $this->display_images( $args );
	}

	/**
	 * Runs the query for images and returns the html
	 *
	 * @param array $args
	 *
	 * @return string
	 */
	private function display_images( $args ) {
		$feed_id = absint( $args['feed_id'] );
		/** @var WIS_Facebook_Feed $feed */
		$feed = $this->feeds->get_feed( $feed_id );

		return $feed ? $feed->display( true ) : __( 'No feed', 'instagram-slider-widget' );
	}

	/**
	 * Method renders layout template
	 *
	 * @param string $template_name Template name without ".php"
	 *
	 * @param array $args Template arguments
	 *
	 * @return false|string
	 */
	private function render_template( $template_name, $args ) {
		$path           = "";
		$path_component = WFB_COMPONENT_DIR . "/html_templates/$template_name.php";
		if ( file_exists( $path_component ) ) {
			$path = $path_component;
		}

		if ( $path ) {
			ob_start();
			include $path;
			extract( $args );

			return ob_get_clean();
		} else {
			return 'This template does not exist!';
		}
	}
}

?>
