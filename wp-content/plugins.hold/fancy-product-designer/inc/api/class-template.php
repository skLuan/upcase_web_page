<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if( !class_exists('FPD_Template') ) {

	class FPD_Template {

		const FREE_PATH = '/assets/objects-library/products/';
		const PREMIUM_PATH = '/uploads/fpd_product_templates/';

		public static function get_library_templates(  ) {

			$free_templates_dir = FPD_PLUGIN_DIR . self::FREE_PATH;
			$premium_templates_dir = WP_CONTENT_DIR . self::PREMIUM_PATH;

			$templates_json = fpd_admin_get_file_content( FPD_PLUGIN_DIR . '/assets/json/product_templates.json' );
			$templates_json = json_decode($templates_json);

			foreach($templates_json as $catKey => $templatesCat) {

				foreach($templatesCat->templates as $templateKey => $template) {

					if( isset($template->free) ) {

						$template->installed = true;
						$template->file_path = $free_templates_dir.$template->file;
						$template->file_url = plugins_url( self::FREE_PATH.$template->file, FPD_PLUGIN_ROOT_PHP );

					}
					else {

						$template->installed = file_exists($premium_templates_dir.$template->file);
						$template->file_path = $premium_templates_dir.$template->file;
						$template->file_url = content_url( self::PREMIUM_PATH.$template->file );

					}

					$preview_images = is_array($template->images) ? $template->images : array($template->images);
					array_walk($preview_images, function(&$value, $key) { $value = plugins_url($value, FPD_PLUGIN_ADMIN_DIR); } );
					$template->images = $preview_images;

				}

			}

			return $templates_json;

		}

	}

}

?>