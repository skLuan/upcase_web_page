<?php


/**
 * WIG_Widget Class
 */
class WIG_Widget extends WP_Widget {

	/**
	 * Social name
	 *
	 * @var string
	 */
	public $social = 'instagram';

	private static $app;

	/**
	 * @var WIS_Plugin
	 */
	public $WIS;

	public $show_instance_in_rest = true;

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
		parent::__construct( 'jr_insta_slider', __( 'Social Slider - Instagram', 'instagram-slider-widget' ), [
			'show_instance_in_rest' => true,
			'classname'             => 'jr-insta-slider',
			'description'           => __( 'A widget that displays a slider with instagram images ', 'instagram-slider-widget' ),
		] );

		$this->WIS   = WIS_Plugin::app();
		$this->feeds = new WIS_Feeds( $this->social );

		$this->defaults = [
			'title'   => __( 'Instagram feed', 'instagram-slider-widget' ),
			'feed_id' => null,
		];

		// Instagram Action to display images
		add_action( 'jr_instagram', [ $this, 'print_jr_instagram' ] );

		// Enqueue Plugin Styles and scripts
		add_action( 'wp_enqueue_scripts', function () {
			wp_enqueue_script( 'jquery' );
		} );
		add_action( 'wp_enqueue_scripts', [ $this, 'feed_assets_register' ] );
	}

	/**
	 * Enqueue public-facing Scripts and style sheet.
	 */
	public function feed_assets_register() {
		wp_register_style( 'jr-insta-styles', WIG_COMPONENT_URL . '/assets/css/jr-insta.css', [], WIG_COMPONENT_VERSION );
		wp_register_style( WIS_Plugin::app()->getPrefix() . 'instag-slider', WIG_COMPONENT_URL . '/assets/css/instag-slider.css', [], WIG_COMPONENT_VERSION );
		wp_register_style( WIS_Plugin::app()->getPrefix() . 'font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' );
		wp_register_style( WIS_Plugin::app()->getPrefix() . 'wis-header', WIG_COMPONENT_URL . '/assets/css/wis-header.css', [], WIG_COMPONENT_VERSION );

		wp_register_script( WIS_Plugin::app()->getPrefix() . 'jquery-pllexi-slider', WIG_COMPONENT_URL . '/assets/js/jquery.flexslider-min.js', [ 'jquery' ], WIG_COMPONENT_VERSION, false );
		//wp_enqueue_script( WIS_Plugin::app()->getPrefix() . 'jr-insta', WIG_COMPONENT_URL.'/assets/js/jr-insta.js', [], WIG_COMPONENT_VERSION, false );
	}

	/**
	 * Register widget on widgets init
	 */
	public static function register_widget() {
		register_widget( __CLASS__ );
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

		do_action( 'jr_instagram', $instance );

		echo $args['after_widget'];
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
	 * Echoes the Display Instagram Images method
	 *
	 * @param array $args
	 *
	 * @return void
	 */
	public function print_jr_instagram( $args ) {
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
		//WIS_Plugin::app()->logger->info( "*** Display widget: " . $args['title'] );

		$feed_id = absint( $args['feed_id'] );
		/** @var WIS_Instagram_Feed $feed */
		$feed = $this->feeds->get_feed( $feed_id );

		return $feed ? $feed->display( true ) : __( 'No feed', 'instagram-slider-widget' );
	}

	/**
	 * Method renders layout template
	 *
	 * @param string $template_name Template name without ".php"
	 * @param array $args Template arguments
	 *
	 * @return false|string
	 */
	private function render_template( $template_name, $args ) {
		$path           = "";
		$path_component = WIG_COMPONENT_DIR . "/html_templates/$template_name.php";
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

