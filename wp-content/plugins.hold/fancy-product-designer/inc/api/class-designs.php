<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly


if( !class_exists('FPD_Designs') ) {

	class FPD_Designs {

		public $category_ids;
		public $default_image_options;

		private $designs_json = array();

		public function __construct( $category_ids = array(), $default_image_options = array() ) {

			$this->category_ids = $category_ids;
			$this->default_image_options = $default_image_options;

		}

		public static function create( $title, $options = '', $thumbnail = '', $designs = '', $parent_id = 0 ) {

			if( empty($title) )
				return false;

			global $wpdb;
			$charset_collate = $wpdb->get_charset_collate();

			//create products table if necessary
			if( !fpd_table_exists(FPD_DESIGNS_TABLE) ) {

				require_once(ABSPATH . 'wp-admin/includes/upgrade.php');

				//create products table
				$products_sql_string = "ID BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
				              title TEXT COLLATE utf8_general_ci NOT NULL,
				              options TEXT COLLATE utf8_general_ci NULL,
				              thumbnail TEXT COLLATE utf8_general_ci NULL,
				              designs LONGTEXT COLLATE utf8_general_ci NULL,
				              parent_id BIGINT(20) UNSIGNED NULL DEFAULT '0',
							  PRIMARY KEY (ID)";

				$sql = "CREATE TABLE ".FPD_DESIGNS_TABLE." ($products_sql_string) $charset_collate;";
				dbDelta($sql);

			}

			$inserted = $wpdb->insert(
				FPD_DESIGNS_TABLE,
				array(
					'title' 	=> $title,
					'options' 	=> $options,
					'thumbnail' => $thumbnail,
					'designs' 	=> $designs,
					'parent_id' 	=> $parent_id
				),
				array( '%s', '%s', '%s', '%s', '%d' )
			);

			if( $inserted === false ) {

				return array(
					'error' => __('Something went wrong. Please try again!', 'radykal')
				);

			}
			else {

				return array(
					'ID' => $wpdb->insert_id,
					'message' => __('Category successfully created!', 'radykal'),
				);

			}

		}

		public static function get_categories( $only_root=false ) {

			global $wpdb;

			$result = array();

			if( fpd_table_exists(FPD_DESIGNS_TABLE) ) {

				$sql = "SELECT ID, title, thumbnail, parent_id FROM ".FPD_DESIGNS_TABLE;

				if( $only_root )
					$sql .= ' WHERE parent_id=0';

				$cats = $wpdb->get_results( $sql );

				if( !$only_root )
					self::make_hierarchy( $cats, $result );
				else
					return $cats;


			}

			return $result;

		}

		public static function get_category_data( $category_id ) {

			global $wpdb;

			$row = $wpdb->get_row(
				$wpdb->prepare( "SELECT ID, title, options, thumbnail, parent_id FROM ".FPD_DESIGNS_TABLE. " WHERE ID=%d", $category_id )
			, ARRAY_A);

			$row['parameters'] = json_decode( fpd_strip_multi_slahes( $row['options'] ), true );

			unset($row['options']);

			return $row;

		}

		public static function update_design_category( $category_id, $fields = array()) {


			global $wpdb;

			$success = false;
			$columns = array();
			$colum_formats = array();

			if( isset( $fields['title'] ) ) {
				$columns['title'] = $fields['title'];
				array_push($colum_formats, '%s');
			}

			if( isset( $fields['options'] ) ) {
				$columns['options'] = is_array( $fields['options'] ) ? json_encode($fields['options']) : $fields['options'];
				array_push($colum_formats, '%s');
			}

			if( isset( $fields['thumbnail'] ) ) {
				$columns['thumbnail'] = $fields['thumbnail'];
				array_push($colum_formats, '%s');
			}

			if( isset( $fields['parent_id'] ) ) {
				$columns['parent_id'] = $fields['parent_id'];
				array_push($colum_formats, '%d');
			}

			if( isset( $fields['designs'] ) && is_array( $fields['designs'] ) ) {

				$columns['designs'] = json_encode($fields['designs']);
				array_push($colum_formats, '%s');
			}

			if( !empty($columns) ) {

				$success = $wpdb->update(
				 	FPD_DESIGNS_TABLE,
				 	$columns, //what
				 	array('ID' => intval($category_id)), //where
				 	$colum_formats, //format what
				 	array('%d') //format where
				);

			}

			if( $success === false ) {

				return array(
					'error' => __('Something went wrong. Please try again!', 'radykal')
				);

			}
			else {

				return array(
					'message' => __('Category successfully updated!', 'radykal'),
				);

			}

		}

		public static function delete_design_category( $category_id ) {

			global $wpdb;

			try {

				$wpdb->query( $wpdb->prepare("DELETE FROM ".FPD_DESIGNS_TABLE." WHERE ID=%d", $category_id) );

				return array(
					'message' => __('Category successfully deleted!', 'radykal'),
				);

			}
			catch(Exception $e) {

				return array(
					'error' => $result->get_error_message()
				);

			}

		}

		public static function get_category_designs( $category_id ) {

			global $wpdb;

			$result = array();

			if( fpd_table_exists(FPD_DESIGNS_TABLE) ) {

				$row = $wpdb->get_row( $wpdb->prepare( "SELECT designs FROM ".FPD_DESIGNS_TABLE. " WHERE ID=%d", $category_id ) );

				if( $row )
					$result = json_decode( fpd_strip_multi_slahes($row->designs), true );

			}

			return empty($result) ? array() : $result;

		}

		public function get_json() {

			global $wpdb;

			$designs_json = array();

			if( fpd_table_exists(FPD_DESIGNS_TABLE) ) {

				$sql = "SELECT * FROM " . FPD_DESIGNS_TABLE;
				$cats = $wpdb->get_results( $sql );

				$sorted_cats = array();
				self::make_hierarchy( $cats, $sorted_cats );

				if( !empty($this->category_ids) ) {

					$this->category_ids = is_string($this->category_ids) ? explode(',', $this->category_ids) : $this->category_ids;

					foreach($sorted_cats as $key => $sorted_cat) {

						if( !in_array($sorted_cat->ID, $this->category_ids) )
							unset($sorted_cats[$key]);
					}

				}


				$designs_json = $this->category_loop( $sorted_cats );

			}


			if( !is_array($designs_json) )
				$designs_json = array();

			return json_encode( $designs_json, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES );

		}

		private function category_loop( $categories, $next_category=array() ) {

			foreach( $categories as $category ) {

				$category_obj = array(
					'title' => $category->title,
					'thumbnail' => $category->thumbnail
				);

				if( isset($category->children) && sizeof($category->children) ) {

					$category_obj['category'] = array();
					$category_obj['category'] = $this->category_loop( $category->children, $category_obj['category'] );

				}
				else {

					$category_obj['designs'] = array();
					$designs = json_decode( $category->designs, true );

					//category parameters
					$category_parameters_array = json_decode( $category->options, true );

					//category parameters disabled
					if( !isset($category_parameters_array['enabled']) || !$category_parameters_array['enabled'] ) {
						$category_parameters_array = array();
					}

					if( is_array($designs) ) {

						foreach( $designs as $design ) {

							//merge general parameters with category parameters
							$final_parameters = array_merge( $this->default_image_options, $category_parameters_array );

							//single element parameters
							$single_design_parameters_array = $design['parameters'];

							//replace with sinlge parameters if enabled
							if( isset($single_design_parameters_array['enabled']) && $single_design_parameters_array['enabled'] )
								$final_parameters = $single_design_parameters_array;

							$design_thumbnail = $design['image'];
							if( isset($design['thumbnail']) && !empty($design['thumbnail']) )
								$design_thumbnail = $design['thumbnail'];

							$category_obj['designs'][] = array(
								'source' => $design['image'],
								'title' => $design['title'],
								'thumbnail' => $design_thumbnail,
								'parameters' => FPD_Parameters::to_json($final_parameters, 'image', false)
							);

						}

					}

				}

				array_push($next_category, $category_obj);

			}

			return $next_category;

		}

		private static function make_hierarchy( Array &$cats, Array &$into, $parent_id = 0 ) {

			foreach ($cats as $i => $cat) {

		        if ($cat->parent_id == $parent_id) {
		            $into[$cat->ID] = $cat;
		            unset($cats[$i]);
		        }

		    }

		    foreach ($into as $top_cat) {

		        $top_cat->children = array();
		        self::make_hierarchy($cats, $top_cat->children, $top_cat->ID);

		    }

		}

	}

}