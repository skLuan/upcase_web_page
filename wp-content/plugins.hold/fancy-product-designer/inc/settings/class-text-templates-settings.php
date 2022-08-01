<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly


if( !class_exists('FPD_Settings_Text_Templates') ) {

	class FPD_Settings_Text_Templates {

		public static function get_options() {

			return apply_filters('fpd_text_templates_settings', array(

				'tt-general' => array(

					array(
						'id' 		=> 'fpd_text_templates',
						'default'	=> '[]',
						'type' 		=> 'text-templates',
						'fullwidth'	=> true,
						'fonts' 	=> array(

						),
					),

				),

			));
		}

	}

}

?>