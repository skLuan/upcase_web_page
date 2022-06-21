<?php

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

if( !class_exists('FPD_Admin_Import') ) {

	class FPD_Admin_Import {

		private $extracted_dir_url;
		private $add_to_media_library = false;
		private $allowed_zip_files = array('json', 'jpg', 'jpeg', 'svg', 'png');
		public $error = null;

		public function __construct() {

			if( $_FILES && isset($_FILES['fpd_import_file']) ) {

				$zip_name = $_FILES["fpd_import_file"]["name"];

				$upload_dir = wp_upload_dir();
				$upload_dir = $upload_dir['basedir'];
				$extract_to_dir = $upload_dir . '/fpd_imports/';
				$local_zip_path = $extract_to_dir . $zip_name;

				if( !file_exists($extract_to_dir) )
					wp_mkdir_p( $extract_to_dir );

				move_uploaded_file($_FILES['fpd_import_file']['tmp_name'], $local_zip_path);

				$result = $this->extract_zip($local_zip_path, $extract_to_dir, $zip_name, isset($_POST['fpd_import_to_library']));

				@unlink($local_zip_path); //delete uploaded zip file

				if($this->error !== null)
					echo '<div class="error"><p>'.$this->error.'</p></div>';

			}

		}

		public function extract_zip( $local_zip_path, $extract_to_dir, $zip_name, $add_to_media_library ) {

			$this->add_to_media_library = $add_to_media_library;

			wp_mkdir_p( $extract_to_dir ); //imports folder

			$zip = new ZipArchive;
			$res = $zip->open($local_zip_path);

			if ($res === true) {

				$extracted_dir = $extract_to_dir . basename( $zip_name, '.zip');

				//check if folder exists in imports folder, otherwise create another one
				$dir_count = 1;
				$temp_extracted_dir = $extracted_dir;
				while(	file_exists($temp_extracted_dir)	) {
					$temp_extracted_dir = $extracted_dir . '_' . strval($dir_count);
					$dir_count++;
				}

				$extracted_dir = $temp_extracted_dir;

				for ($i = 0; $i < $zip->numFiles; $i++) {

				     $path_info = pathinfo($zip->getNameIndex($i));

				     if( $path_info['dirname'] == '.' &&
				     	 isset($path_info['extension']) &&
				     	 in_array( strtolower($path_info['extension']), $this->allowed_zip_files )
				     ) {
				        $zip->extractTo($extracted_dir, $zip->getNameIndex($i));
				     }

				}

				$zip->close();

				$product_id = $this->read_json($extracted_dir);

				return $product_id;

			}
			else {

				switch($res) {

			        case ZipArchive::ER_NOZIP:
			            $this->error = __('Not a zip archive.', 'radykal');
			        break;
			        case ZipArchive::ER_INCONS :
			           $this->error = __('Consistency check failed.', 'radykal');
			        break;
			        case ZipArchive::ER_CRC :
			            $this->error = __('Checksum failed.', 'radykal');
			        break;
			        default:
			            $this->error = __('error ', 'radykal') . $res;

			    }

			    return false;

			}

		}

		private function read_json( $dir ) {

			if( !file_exists($dir . '/product.json') ) {
				$this->error = __('Zip does not contain the necessary product.json.', 'radykal');
				return false;
			}

			$json_content = fpd_admin_get_file_content($dir . '/product.json' );
			$json_content = json_decode($json_content);

			$uploads_dir_url = wp_upload_dir();
			$uploads_dir_url = $uploads_dir_url['baseurl'];
			$this->extracted_dir_url = $uploads_dir_url . '/fpd_imports/' . basename( $dir ) . '/';

			$fp_id = FPD_Product::create(
				$json_content->title,
				//? V3.4.2 or lower it was a string : V3.4.2+ is array
				is_string($json_content->options) ?  htmlspecialchars_decode($json_content->options) : json_encode($json_content->options),
				$this->import_image( $json_content->thumbnail )
			);

			if( $fp_id !== false ) {

				$fp = new FPD_Product($fp_id);

				$json_views = $json_content->views;
				$view_count = 0;

				foreach($json_views as $view) {

					$elements = $view->elements;
					foreach($elements as $element) {

						if($element->type == 'image') {
							$element->source = $this->import_image( $element->source );
						}

					}

					$view_options = $view->options;

					if( isset($view_options->mask) && isset($view_options->mask->url) ) {
						$view_options->mask->url = $this->import_image( $view_options->mask->url );
					}

					$fp->add_view(
						$view->title,
						$view->elements,
						$this->import_image( $view->thumbnail ),
						$view_count,
						$view_options
					);

					$view_count++;

				}

			}

			if( $this->add_to_media_library ) //only remove extraced dir when image are added to media library
				fpd_admin_delete_directory($dir);

			return $fp_id;

		}

		private function import_image( $image ) {

			if( is_null($image) )
				return '';

			if( $this->add_to_media_library ) {
				return fpd_admin_upload_image_media( $this->extracted_dir_url . $image );
			}
			else {
				return $this->extracted_dir_url . $image;
			}

		}

	}
}

new FPD_Admin_Import();

?>