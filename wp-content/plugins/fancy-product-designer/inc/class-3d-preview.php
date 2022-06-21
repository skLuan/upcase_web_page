<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if( !class_exists('FPD_3D_Preview') ) {

	class FPD_3D_Preview {

		public static $root_dir = FPD_WP_CONTENT_DIR . '/uploads/fpd_3d/';

		public function __construct() {

			if( !is_admin() && !empty(self::get_models_configs()) ) {

				add_action( 'wp_head', array( &$this, 'head_frontend') );

			}

		}

		public function head_frontend() {

			global $post;

			if( $post ) {

				$product_settings = new FPD_Product_Settings( $post->ID );

				add_action( 'fpd_after_product_designer', array( &$this, 'after_product_designer' ) );

				$placement = $product_settings->get_option('3d_preview_placement');

				if( $placement == 'before_fpd' )
					add_action( 'fpd_before_product_designer', array( &$this, 'add_placeholder') );
				else if( $placement == 'after_fpd' )
					add_action( 'fpd_after_product_designer', array( &$this, 'add_placeholder' ) );
				else if( $placement == 'before_single_product_summary' )
					add_action( 'woocommerce_before_single_product_summary', array( &$this, 'add_placeholder') );
				else if( $placement == 'shortcode' )
					add_shortcode( 'fpd_3d_preview', array( &$this, 'add_placeholder_shortcode') );

			}

		}

		public function add_placeholder() {

			echo '<div id="fpd-3d-preview-placeholder"></div>';

		}

		public function add_placeholder_shortcode() {

			return '<div id="fpd-3d-preview-placeholder"></div>';

		}

		public function after_product_designer() {

			global $post;

			$product_settings = new FPD_Product_Settings( $post->ID );

			?>
			<script type="text/javascript">
				var fpd3dPreviewConfig = {
					path: "<?php echo content_url('/uploads/fpd_3d/'); ?>",
					placement: "<?php echo $product_settings->get_option('3d_preview_placement'); ?>"
				};
			</script>
			<script type="module" src="<?php echo plugins_url('/assets/js/3dpreview/threejs-preview.js', FPD_PLUGIN_ROOT_PHP); ?>"></script>
			<?php

		}

		public static function get_models_configs() {

			$configs = array();

			if( file_exists(self::$root_dir) ) {

				$scan = scandir(self::$root_dir);
				foreach($scan as $file) {

					if (is_dir(self::$root_dir.$file)) {

						$config_file = self::$root_dir.$file."/config.json";

						if( file_exists($config_file) ) {

							$config = fpd_admin_get_file_content( $config_file );

							if( $config !== false)
								array_push( $configs, json_decode( $config, true) );

						}


				   	}

				}

			}

			return $configs;

		}

	}

}

new FPD_3D_Preview();

?>