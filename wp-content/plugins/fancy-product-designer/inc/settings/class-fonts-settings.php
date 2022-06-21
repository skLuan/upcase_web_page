<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly


if( !class_exists('FPD_Settings_Fonts') ) {

	class FPD_Settings_Fonts {

		public static function get_options() {

			return apply_filters('fpd_fonts_settings', array(

				'fonts' => array(

					array(
						'title' 		=> __( 'System Fonts', 'radykal' ),
						'description' 	=> 'Enter system fonts separated by comma, which are installed on all operating system, e.g. Arial.',
						'id' 			=> 'fpd_common_fonts',
						'css' 			=> 'width: 100%;',
						'type' 			=> 'text',
						'default'		=> '',
						'value' 		=> 'Arial,Helvetica,Times New Roman,Verdana,Geneva'
					),

					array(
						'title' 		=> __( 'Google Webfonts', 'radykal' ),
						'description' 	=> __( "Choose fonts from Google Webfonts. Please be aware that too many fonts from Google may increase the loading time of the website. ", 'radykal' ),
						'id' 			=> 'fpd_google_webfonts',
						'css' 			=> 'width: 100%;',
						'default'		=> '',
						'type' 			=> 'multiselect',
						'options' 		=> self::get_google_webfonts()
					),

					array(
						'title' 		=> __( 'Custom Fonts', 'radykal' ),
						'id' 			=> 'fonts_custom_manager',
						'type'			=> 'button',
						'placeholder' 		=> __( 'Custom Fonts Manager', 'radykal' ),
					),

					array(
						'title' 		=> '',
						'description' 	=> __( "Select the custom fonts your customer can choose from.", 'radykal' ),
						'id' 			=> 'fpd_fonts_directory',
						'css' 			=> 'width: 100%;',
						'default'		=> '',
						'type' 			=> 'multiselect',
						'options' 		=> self::get_custom_fonts(),
						'unbordered' => true
					),

				)

			));

		}

		/**
		 * Get google webfonts fonts
		 *
		 * @return array
		 */
		public static function get_google_webfonts() {

			//load fonts from google webfonts
			//delete_transient('fpd_google_webfonts');
			$optimised_google_webfonts = get_transient( 'fpd_google_webfonts' );
			if ( empty( $optimised_google_webfonts ) )	{

				$google_webfonts = file_get_contents(FPD_PLUGIN_DIR.'/assets/json/google_webfonts.json');

				if($google_webfonts !== false ) {

					$google_webfonts = json_decode($google_webfonts);
					$optimised_google_webfonts = array();

					if( isset($google_webfonts->items) ) {
						foreach($google_webfonts->items as $item) {
							foreach($item->variants as $variant) {
								if($variant == 'regular') {
									$key = str_replace(' ', '+', $item->family).':'.$variant;
									$optimised_google_webfonts[$key] = $item->family;
								}

							}
						}
					}

				}


				//no webfonts could be loaded, try again in one min otherwise store them for one month
				set_transient('fpd_google_webfonts', $optimised_google_webfonts, !is_array($optimised_google_webfonts) ? 3600 : (604800 * 4) );

			}


			return is_array($optimised_google_webfonts) ? $optimised_google_webfonts : array();

		}

		/**
		 * Get TTF fonts
		 *
		 * @return array
		 */
		public static function get_custom_fonts( $exclude_variants = true ) {

			$font_files = array();

			if( file_exists(FPD_FONTS_DIR) ) {

				$files = scandir(FPD_FONTS_DIR);
				foreach($files as $file) {
					if( preg_match("/.(ttf|TTF)/", strtolower($file)) ) {

						$count = 0;

						if( $exclude_variants )
							str_replace(array('__bold', '__italic', '__bolditalic'), '', $file, $count);

						//replace white in key, replace underscore with whitespace in value
						if($count == 0)
							$font_files[str_replace(' ', '_', $file)] = str_replace('_', ' ', preg_replace("/\\.[^.\\s]{3,4}$/", "", $file) );
					}
				}

			}

			return $font_files;

		}

	}

}