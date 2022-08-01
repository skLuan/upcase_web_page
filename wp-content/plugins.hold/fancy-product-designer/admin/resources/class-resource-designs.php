<?php

if( !class_exists('FPD_Resource_Designs') ) {

	class FPD_Resource_Designs {

		public static function get_design_categories() {

			$categories = FPD_Designs::get_categories();
			return $categories;

		}

		public static function create_design_category( $title ) {

			$result = FPD_Designs::create( $title );

			if( isset( $result['error'] ) )
				return new WP_Error(
					'design-category-create-fail',
					$result['error']
				);
			else
				return $result;

		}

		public static function get_single_category( $category_id ) {

			return array(
				'category_data' => FPD_Designs::get_category_data( $category_id ),
				'designs' => FPD_Designs::get_category_designs( $category_id )
			);

		}

		public static function update_design_category( $category_id, $args ) {

			$result = FPD_Designs::update_design_category( $category_id, $args );

			if( isset( $result['error'] ) )
				return new WP_Error(
					'design-category-update-fail',
					$result['error']
				);
			else
				return $result;

		}

		public static function delete_design_category( $category_id ) {

			$result = FPD_Designs::delete_design_category( $category_id );

			if( isset( $result['error'] ) )
				return new WP_Error(
					'design-category-delete-fail',
					$result['error']
				);
			else
				return $result;

		}

	}

}

?>