<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if(!class_exists('FPD_Install')) {

	class FPD_Install {

		const VERSION_NAME = 'fancyproductdesigner_version';
		const UPDATE_VERSIONS = array(
			'3.4.0' ,'3.4.3', '4.0.6', '4.1.0', '4.2.0', '4.6.2', '4.6.3', '4.6.4', '4.6.8'
		);
		const UPDATE_LANG_VERSION = '4.6.8';

		public function __construct() {

			register_activation_hook( FPD_PLUGIN_ROOT_PHP, array( &$this, 'activate_plugin' ) );
            //Uncomment this line to delete all database tables when deactivating the plugin
            //register_deactivation_hook( FPD_PLUGIN_ROOT_PHP, array( &$this,'deactive_plugin' ) );
            add_action( 'init', array( &$this,'check_version' ), 20 );
            add_action( 'wp_initialize_site', array( &$this, 'new_site'), 20, 2 );

		}

		public function check_version() {

			if( is_admin() && get_option(self::VERSION_NAME) != Fancy_Product_Designer::VERSION)
				$this->upgrade();

		}

		//install when a new network site is added
		public function new_site( $new_site, $args ) {

			if ( ! function_exists( 'is_plugin_active_for_network' ) )
				require_once( ABSPATH . '/wp-admin/includes/plugin.php' );

		    global $wpdb;

		    if ( is_plugin_active_for_network('fancy-product-designer/fancy-product-designer.php') ) {

		        $old_blog = $wpdb->blogid;
		        switch_to_blog($new_site->blog_id);
		        $this->activate_plugin();
		        switch_to_blog($old_blog);

		    }

		}

		public function activate_plugin() {

		   if(version_compare(PHP_VERSION, '5.6.0', '<')) {

			  deactivate_plugins(FPD_PLUGIN_ROOT_PHP); // Deactivate plugin
			  wp_die("Sorry, but you can't run this plugin, it requires PHP 5.6 or higher.");
			  return;

			}

			global $wpdb;

			if ( is_multisite() ) {

	    		if (isset($_GET['networkwide']) && ($_GET['networkwide'] == 1)) {

	                $current_blog = $wpdb->blogid;
	    			// Get all blog ids
	    			$blogids = $wpdb->get_col( "SELECT blog_id FROM $wpdb->blogs");
	    			foreach ($blogids as $blog_id) {
	    				switch_to_blog($blog_id);
	    				$this->install();
	    			}

	    			switch_to_blog($current_blog);
	    			return;

	    		}

	    	}

			$this->install();

		}

		public function deactive_plugin($networkwide) {

			global $wpdb;

		    if (is_multisite()) {

		        if ($networkwide) {

		            $old_blog = $wpdb->blogid;
		            // Get all blog ids
		            $blogids = $wpdb->get_col("SELECT blog_id FROM $wpdb->blogs");
		            foreach ($blogids as $blog_id) {
		                switch_to_blog($blog_id);
		                $this->deinstall();
		            }

		            switch_to_blog($old_blog);
		            return;

		        }

		    }

		    $this->deinstall();

		}

		//all things that need to be installed on activation
		private function install() {

			//if version name option does not exist, its a new installation
			if( get_option(self::VERSION_NAME) === false ) {

				update_option(self::VERSION_NAME, Fancy_Product_Designer::VERSION);
				update_option('fpd_plugin_activated', true);

			}

		}

		private function deinstall() {

			global $wpdb;

			$wpdb->query("SET FOREIGN_KEY_CHECKS=0;");

			if( fpd_table_exists(FPD_CATEGORIES_TABLE) )
				$wpdb->query( "DROP TABLE ".FPD_CATEGORIES_TABLE);

			if( fpd_table_exists(FPD_PRODUCTS_TABLE) )
				$wpdb->query( "DROP TABLE ".FPD_PRODUCTS_TABLE);

			if( fpd_table_exists(FPD_CATEGORY_PRODUCTS_REL_TABLE) )
				$wpdb->query( "DROP TABLE ".FPD_CATEGORY_PRODUCTS_REL_TABLE);

			if( fpd_table_exists(FPD_VIEWS_TABLE) )
				$wpdb->query( "DROP TABLE ".FPD_VIEWS_TABLE);

			if( fpd_table_exists(FPD_DESIGNS_TABLE) )
				$wpdb->query( "DROP TABLE ".FPD_DESIGNS_TABLE);

			$wpdb->query("SET FOREIGN_KEY_CHECKS=1;");

			$wpdb->query( "DELETE FROM $wpdb->options WHERE option_name LIKE 'fpd_%'");

		}

		public function upgrade() {

			$current_version = get_option(self::VERSION_NAME);

			foreach(self::UPDATE_VERSIONS as $update_version) {

				if( version_compare($current_version, $update_version, '<') ) {
					self::do_upgrade($update_version);
				}

			}

			update_option(self::VERSION_NAME, Fancy_Product_Designer::VERSION);
			update_option( 'fpd_update_notice', true );

		}

		public static function do_upgrade( $to_version ) {

			global $wpdb;

			if ( !class_exists('FPD_Settings_Labels') )
				require_once(FPD_PLUGIN_DIR.'/inc/settings/class-labels-settings.php');

			if( $to_version == self::UPDATE_LANG_VERSION )
				FPD_Settings_Labels::update_all_languages();


			if($to_version === '3.2.1') {

				if( file_exists(FPD_WP_CONTENT_DIR . '/uploads/fpd_patterns/') )
					rename(FPD_WP_CONTENT_DIR . '/uploads/fpd_patterns/', FPD_WP_CONTENT_DIR . '/uploads/fpd_patterns_text/');

			}
			else if($to_version === '3.2.2') {

				delete_option('fpd_lang_default');

				$all_cats = get_terms( 'fpd_design_category', array(
				 	'hide_empty' => false,
				 	'orderby' 	 => 'name',
				));

				foreach($all_cats as $cat) {

					$all_designs = get_posts(array(
						'posts_per_page' => -1,
						'post_type' => 'attachment',
						'tax_query' => array(
								array(
									'taxonomy' => 'fpd_design_category',
									'field'    => 'slug',
									'terms' => $cat->slug,
							),
						),
					));

					if(sizeof($all_designs) > 0) {

						foreach($all_designs as $design) {
							update_post_meta( $design->ID, $cat->slug.'_order', $design->menu_order );
						}

					}
				}

			}
			else if($to_version === '3.4.3') {

				update_option( 'fpd_instagram_redirect_uri', plugins_url( '/assets/templates/instagram_auth.php', FPD_PLUGIN_ROOT_PHP ) );

			}
			else if($to_version === '3.4.3') {

				update_option( 'order:_view_customized_product', get_option( 'order:_email_view_customized_product', 'View Customized Product' ) );

			}
			else if($to_version === '4.0.6') {

				update_option( 'fpd_customization_required', get_option('fpd_customization_required', 'no') == 'no' ? 'none' : 'any'  );

			}
			else if($to_version === '4.1.0') {

				if( fpd_table_exists(FPD_PRODUCTS_TABLE) ) {
					$wpdb->query( "UPDATE ".FPD_PRODUCTS_TABLE." SET options = REPLACE(options, 'stage_width', 'stageWidth')");
					$wpdb->query( "UPDATE ".FPD_PRODUCTS_TABLE." SET options = REPLACE(options, 'stage_height', 'stageHeight')");
				}

				if( fpd_table_exists(FPD_VIEWS_TABLE) ) {
					$wpdb->query( "UPDATE ".FPD_VIEWS_TABLE." SET options = REPLACE(options, 'stage_width', 'stageWidth')");
					$wpdb->query( "UPDATE ".FPD_VIEWS_TABLE." SET options = REPLACE(options, 'stage_height', 'stageHeight')");
				}

			}
			else if($to_version === '4.2.0') {
				update_option( 'fpd_react_enabled', 'yes' );
			}
			else if($to_version === '4.6.4') {

				if( fpd_table_exists(FPD_DESIGNS_TABLE) )
					$wpdb->query( "DROP TABLE ".FPD_DESIGNS_TABLE);

				register_taxonomy( 'fpd_design_category', 'attachment', array(
					'public' => true,
					'show_ui' => false,
					'hierarchical' => true,
					'sort' => true,
					'show_tagcloud' => false,
					'capabilities' => array(Fancy_Product_Designer::CAPABILITY),
				) );

				$categories = get_terms('fpd_design_category', array(
					'hide_empty' => false,
				));

				if( empty($categories) ) return;

				$old_new_ids = array(); //key=old_id, value=new_id
				foreach($categories as $category) {

					$category_parameters = get_option( 'fpd_category_parameters_'.$category->slug, '' );
					$category_parameters_array = array();
					parse_str($category_parameters, $category_parameters_array);

					$category_parameters_array = (object) $category_parameters_array;

					foreach($category_parameters_array as $key => $parameter) {

						if($parameter === '1' || $parameter === 'yes')
							$category_parameters_array->$key = 1;
						else if($parameter === '0' || $parameter === 'no')
							$category_parameters_array->$key = 0;

					}

					$category_thumbnail = get_option( 'fpd_category_thumbnail_url_'.$category->term_id, '' );

					$category_designs_data = array();

					$args = array(
						'posts_per_page' => -1,
						'post_type' => 'attachment',
						'orderby' => 'menu_order',
						'order' => 'ASC',
						'tax_query' => array(
							array(
								'taxonomy' 			=> 'fpd_design_category',
								'include_children' 	=> false,
								'field' 			=> 'term_id',
								'terms' 			=> $category->term_id
							)
						)
					);

					$category_designs = get_posts( $args );

					foreach( $category_designs as $category_design ) {

						$origin_image = wp_get_attachment_image_src( $category_design->ID, 'full' );
						$origin_image = $origin_image[0] ? $origin_image[0] : $category_design->guid;

						$parameters = get_post_meta($category_design->ID, 'fpd_parameters', true);

						if( is_string($parameters) )
							parse_str( $parameters, $parameters );

						$parameters = (object) $parameters;

						foreach($parameters as $key => $parameter) {

							if($parameter === '1' || $parameter === 'yes')
								$parameters->$key = 1;
							else if($parameter === '0' || $parameter === 'no')
								$parameters->$key = 0;

						}

						$design_props = array(
							'ID' => $category_design->ID,
							'title' => $category_design->post_title,
							'image' => $origin_image,
							'thumbnail' => get_post_meta($category_design->ID, 'fpd_thumbnail', true),
							'parameters' => $parameters
						);

						array_push( $category_designs_data, $design_props );

					}

					$cat_obj = FPD_Designs::create(
						$category->name,
						json_encode($category_parameters_array),
						$category_thumbnail,
						json_encode($category_designs_data),
						$category->parent
					);

					$old_new_ids[$category->term_id] = $cat_obj['ID'];

				}

				if( fpd_table_exists(FPD_DESIGNS_TABLE) ) {

					//update parent ids
					$children_cats = $wpdb->get_results( "SELECT ID, parent_id FROM ".FPD_DESIGNS_TABLE." WHERE parent_id NOT LIKE 0");
					foreach($children_cats as $children_cat) {

						if( isset($old_new_ids[$children_cat->parent_id]) ) {

							$new_parent_id = intval($old_new_ids[$children_cat->parent_id]);

							$wpdb->update(
							 	FPD_DESIGNS_TABLE,
							 	array('parent_id' => $new_parent_id), //what
							 	array('ID' => $children_cat->ID), //where
							 	array('%d'), //format what
							 	array('%d') //format where
							);

						}


					}

				}

			}

			FPD_Product::columns_exist();
			FPD_View::columns_exist();
			FPD_Category::columns_exist();

		}
	}
}

new FPD_Install();

?>