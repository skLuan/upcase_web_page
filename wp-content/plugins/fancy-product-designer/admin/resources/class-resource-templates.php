<?php

if( !class_exists('FPD_Resource_Templates') ) {

	class FPD_Resource_Templates {

		public static function get_product_templates() {

			return FPD_Template::get_library_templates();

		}

	}

}

?>