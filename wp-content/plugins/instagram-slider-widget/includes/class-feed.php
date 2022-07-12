<?php

abstract class WIS_Feed {

	/**
	 * @var string
	 */
	protected $component_dir;

	/**
	 * @var array
	 */
	public $instance = [];

	/**
	 * @var array
	 */
	protected $defaults = [];

	/**
	 * @var array
	 */
	protected $templates = [];

	/**
	 * @var array
	 */
	protected $linkto = [];

	/**
	 * @var bool
	 */
	protected $is_mobile = false;

	/**
	 * WIS_Feed constructor.
	 *
	 * @param array $feed
	 */
	public function __construct( $feed = [] ) {
		$this->setDefaults();
		$this->is_mobile = self::isMobile();
		$this->instance  = wp_parse_args( $feed, $this->defaults );
	}

	/**
	 * Get feed option
	 *
	 * @param $name
	 *
	 * @return mixed|null
	 */
	public function __get( $name ) {
		if ( isset( $this->instance[ $name ] ) ) {
			return $this->instance[ $name ];
		}

		return null;
	}

	public function __sleep() {
		return [ 'instance' ];
	}

	public function __wakeup() {
		$this->setDefaults();
		$this->instance  = wp_parse_args( $this->instance, $this->defaults );
		$this->is_mobile = self::isMobile();
	}

	public function updateDefaults( $key, $value ) {
		$this->defaults[ $key ] = $value;
	}

	/**
	 * Set default values
	 */
	protected function setDefaults() { }

	/**
	 * @return array
	 */
	public function getTemplates() {
		return $this->templates;
	}

	/**
	 * @return array
	 */
	public function getLinkto() {
		return $this->linkto;
	}

	public static function isMobile() {
		return preg_match( '/(android|ios|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i', $_SERVER['HTTP_USER_AGENT'] );
	}

	/**
	 * Get feed option (mobile or desktop)
	 *
	 * @param $name
	 *
	 * @return mixed|null
	 */
	public function get( $name ) {
		if ( $this->is_mobile ) {
			if ( isset( $this->instance["m_{$name}"] ) ) {
				return $this->instance["m_{$name}"];
			}
		}

		return $this->__get( $name );
	}

	/**
	 * Get feed options (mobile or desktop)
	 *
	 * @return array
	 */
	public function getAdaptiveInstance() {
		$new_instance = [];
		foreach ( $this->instance as $key => $item ) {
			$new_instance[ $key ] = $this->get( $key );
		}

		return $new_instance;
	}

	/**
	 * Trigger refresh for new data
	 *
	 * @param bool $instaData
	 * @param array $old_args
	 * @param array $new_args
	 *
	 * @return bool
	 */
	public function trigger_refresh_data( $instaData, $old_args, $new_args ) {

		$trigger = 0;

		if ( defined( 'WIS_PLUGIN_DEV' ) && WIS_PLUGIN_DEV ) {
			return true;
		}

		if ( defined( 'DOING_AJAX' ) && DOING_AJAX ) {
			return false;
		}

		if ( false === $instaData ) {
			$trigger = 1;
		}

		if ( isset( $old_args['saved_images'] ) ) {
			unset( $old_args['saved_images'] );
		}

		if ( isset( $old_args['deleted_images'] ) ) {
			unset( $old_args['deleted_images'] );
		}

		if ( is_array( $old_args ) && is_array( $new_args ) && array_diff( $old_args, $new_args ) !== array_diff( $new_args, $old_args ) ) {
			$trigger = 1;
		}

		if ( 1 === $trigger ) {
			return true;
		}

		return false;
	}

	/**
	 * Method renders layout template
	 *
	 * @param string $template_name Template name without ".php"
	 * @param array $args Template arguments
	 *
	 * @return false|string
	 */
	protected function render_template( $template_name, $args ) {
		$path           = '';
		$path_component = $this->component_dir . "/html_templates/$template_name.php";
		if ( file_exists( $path_component ) ) {
			$path = $path_component;
		}

		if ( $path ) {
			ob_start();
			include $path;
			extract( $args ); // @codingStandardsIgnoreLine

			return ob_get_clean();
		} else {
			return 'This template does not exist!';
		}
	}

	/**
	 * Render feed form
	 */
	abstract public function form();
}
