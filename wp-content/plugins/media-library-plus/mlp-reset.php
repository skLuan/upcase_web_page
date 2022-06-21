<?php
/*
Plugin Name: Media Library Folders Reset
Plugin URI: http://maxgalleria.com
Description: Plugin for reseting Media Library Folders
Author: Max Foundry
Author URI: http://maxfoundry.com
Version: 7.1.1
Copyright 2015-2021 Max Foundry, LLC (http://maxfoundry.com)
Text Domain: mlp-reset
*/

if(!defined("MAXGALLERIA_MEDIA_LIBRARY_FOLDER_TABLE"))
  define("MAXGALLERIA_MEDIA_LIBRARY_FOLDER_TABLE", "mgmlp_folders");

if(!defined("MAXGALLERIA_MEDIA_LIBRARY_UPLOAD_FOLDER_ID"))
  define("MAXGALLERIA_MEDIA_LIBRARY_UPLOAD_FOLDER_ID", "mgmlp_upload_folder_id");

function mlp_reset_menu() {
  add_menu_page(esc_html__('Media Library Folders Reset','mlp-reset'), esc_html__('Media Library Folders Reset','mlp-reset'), 'manage_options', 'mlp-reset', 'mlp_reset' );
  add_submenu_page('mlp-reset', esc_html__('Display Attachment URLs','mlp-reset'), esc_html__('Display Attachment URLs','mlp-reset'), 'manage_options', 'mlpr-show-attachments', 'mlpr_show_attachments');
  add_submenu_page('mlp-reset', esc_html__('Display Folder Data','mlp-reset'), esc_html__('Display Folder Data','mlp-reset'), 'manage_options', 'mlpr-show-folders', 'mlpr_show_folders');
  add_submenu_page('mlp-reset', esc_html__('Check for Folders Without Parent IDs','mlp-reset'), esc_html__('Check for Folders Without Parent IDs','mlp-reset'), 'manage_options', 'mlpr-folders-no-ids', 'mlpr_folders_no_ids');
  add_submenu_page('mlp-reset', esc_html__('Reset Database','mlp-reset'), esc_html__('Reset Database','mlp-reset'), 'manage_options', 'clean_database', 'clean_database');
}
add_action('admin_menu', 'mlp_reset_menu');

function load_mlfr_textdomain() {
  load_plugin_textdomain('mlp-reset', false, dirname(plugin_basename(__FILE__)) . '/languages/');
}

add_action('plugins_loaded', 'load_mlfr_textdomain');

function mlp_reset() {

	echo "<h3>" . esc_html__('Media Library Folders Reset Instructions','mlp-reset') . "</h3>";
  echo "<h4>" . esc_html__('If you need to rescan your database, please deactivate the Media Library Folders plugin and then click Media Library Folders Reset->Reset Database to erase the folder data. Then deactivate Media Library Folders Reset and reactivate Media Library Folders which will perform a fresh scan of your database.','mlp-reset') . "</h4>";
  
}

function clean_database() {  
    global $wpdb;
    
    $sql = "delete from $wpdb->prefix" . "options where option_name = 'mgmlp_upload_folder_name'";
    $wpdb->query($sql);
    
    $sql = "delete from $wpdb->prefix" . "options where option_name = 'mgmlp_upload_folder_id'";
    $wpdb->query($sql);
		
    $sql = "delete from $wpdb->prefix" . "options where option_name = 'mgmlp_database_checked'";
    $wpdb->query($sql);
		
    $sql = "delete from $wpdb->prefix" . "options where option_name = 'mgmlp_postmeta_updated'";
    $wpdb->query($sql);
				        
    echo esc_html__('Deleteing mgmlp_folders','mlp-reset')  . "<br>";
    
    $sql = "TRUNCATE TABLE $wpdb->prefix" . "mgmlp_folders";
    $wpdb->query($sql);
    
    $sql = "DROP TABLE $wpdb->prefix" . "mgmlp_folders";    
    $wpdb->query($sql);
		
    $sql = "select ID from {$wpdb->prefix}posts where post_type = 'mgmlp_media_folder'";
		
    $rows = $wpdb->get_results($sql);
		if($rows) {
      foreach($rows as $row) {
				delete_post_meta($row->ID, '_wp_attached_file');				
			}
		}
				    
    echo esc_html__('Removing mgmlp_media_folder posts','mlp-reset')  . "<br>";
    $sql = "delete from $wpdb->prefix" . "posts where post_type = 'mgmlp_media_folder'";
    $wpdb->query($sql);
    
    echo esc_html__('Done. You can now reactivate Media Library Folders.','mlp-reset')  . "<br>";
  
}

function mlfr_table_exist($table) {

  global $wpdb;

  $sql = "SHOW TABLES LIKE '{$table}'";
  
  $rows = $wpdb->get_results($sql);
  
  if($rows) 
    return true;
  else
    return false;
}

function mlpr_show_attachments () {
  global $wpdb;
  
  if(!mlfr_table_exist($wpdb->prefix . 'mgmlp_folders')) {
    echo "<p>" . esc_html__("The mgmlp_folders table does not exists. Please activate Media Library Folders to create the table.",'mlp-reset') . "</p>";
    return;
  }
  
  $sql = "select count(*) from {$wpdb->prefix}posts where post_type = 'attachment' ";
  
  $count = $wpdb->get_var($sql);  
		
  $uploads_path = wp_upload_dir();
	
  $sql = "SELECT ID, pm.meta_value as attached_file, folder_id
FROM {$wpdb->prefix}posts
LEFT JOIN {$wpdb->prefix}postmeta AS pm ON pm.post_id = {$wpdb->prefix}posts.ID
LEFT JOIN {$wpdb->prefix}mgmlp_folders ON ({$wpdb->prefix}posts.ID = {$wpdb->prefix}mgmlp_folders.post_id)
WHERE post_type = 'attachment' 
AND pm.meta_key = '_wp_attached_file'
ORDER by folder_id";
		
	echo '<h2>' . esc_html__('Attachment URLs','mlp-reset') . '</h2>';

  echo '<p>' . esc_html( __('Number of attachments','mlp-reset') . " $count") . "</p>";

  $rows = $wpdb->get_results($sql);
	?>
	<table>
		<tr>
			<th><?php esc_html_e('Attachment ID','mlp-reset'); ?></th>
			<th><?php esc_html_e('Attachment URL','mlp-reset'); ?></th>
			<th><?php esc_html_e('Folder ID','mlp-reset'); ?></th>
		</tr>	
    
  <?php  
  
  foreach($rows as $row) {
		$image_location = $uploads_path['baseurl'] . "/" . $row->attached_file;
	  ?>
		<tr>
			<td><?php echo esc_html($row->ID); ?></td>	
			<td><?php echo esc_html($image_location); ?></td>	
			<td><?php echo esc_html($row->folder_id); ?></td>	
		</tr>
    <?php				
  }    
	?>
	</table>
  <?php
}

function mlpr_show_folders() {
  global $wpdb;
  
  if(!mlfr_table_exist($wpdb->prefix . 'mgmlp_folders')) {
    echo "<p>" . esc_html__("The mgmlp_folders table does not exists. Please activate Media Library Folders to create the table.",'mlp-reset') . "</p>"; 
    return;
  }  
	
  $sql = "select count(*) from {$wpdb->prefix}posts where post_type = 'mgmlp_media_folder' ";
  
  $count = $wpdb->get_var($sql);    
	
	echo '<h2>' . esc_html__('Folder URLs','mlp-reset') . '</h2>';
  
  $upload_dir = wp_upload_dir();  
  
  $upload_dir1 = $upload_dir['basedir'];
  
  echo esc_html__('Uploads folder: ','mlp-reset') . $upload_dir1 . '<br>';
        
  echo esc_html__('Uploads URL: ','mlp-reset') . $upload_dir['baseurl'] . '<br>';
  
  echo esc_html__('Number of folders: ','mlp-reset') . $count . '<br><br>';

  $folder_table = $wpdb->prefix . MAXGALLERIA_MEDIA_LIBRARY_FOLDER_TABLE;
            	
  $sql = "select distinct ID, post_title, $folder_table.folder_id, pm.meta_value as attached_file
from $wpdb->prefix" . "posts
LEFT JOIN $folder_table ON ($wpdb->prefix" . "posts.ID = $folder_table.post_id)
LEFT JOIN {$wpdb->prefix}postmeta AS pm ON pm.post_id = {$wpdb->prefix}posts.ID
where post_type = 'mgmlp_media_folder' 
order by ID";
		  
  $rows = $wpdb->get_results($sql);
	
	?>
	<table>
		<tr>
			<th><?php esc_html_e('Folder ID','mlp-reset'); ?></th>
			<th><?php esc_html_e('Folder Name','mlp-reset'); ?></th>
			<th><?php esc_html_e('Folder URL','mlp-reset'); ?></th>
			<th><?php esc_html_e('Parent ID','mlp-reset'); ?></th>
		</tr>	
    
  <?php  
  foreach($rows as $row) {
		$image_location = $upload_dir['baseurl'] . "/" . $row->attached_file;
	  ?>
		<tr>
			<td><?php esc_html_e($row->ID); ?></td>	
			<td><?php esc_html_e($row->post_title); ?></td>	
			<td><?php esc_html_e($image_location); ?></td>	
			<td><?php esc_html_e($row->folder_id); ?></td>	
		</tr>
    <?php		
  }	
	?>
	</table>
  <br><br>
  <?php
	
  echo "<br><br>" . esc_html($folder_table) . "<br><br>";
  
  $sql = "select distinct post_id, folder_id from $folder_table order by post_id";
  
  $rows = $wpdb->get_results($sql);
  
  foreach($rows as $row) {
    echo esc_html("$row->post_id $row->folder_id") . "<br>";
  }
  		  
}

function get_parent_by_name($sub_folder) {

  global $wpdb;

  $sql = "SELECT post_id FROM {$wpdb->prefix}postmeta where meta_key = '_wp_attached_file' and `meta_value` = '$sub_folder'";

  return $wpdb->get_var($sql);
}

function add_new_folder_parent($record_id, $parent_folder) {

  global $wpdb;    
  $table = $wpdb->prefix . MAXGALLERIA_MEDIA_LIBRARY_FOLDER_TABLE;

  $new_record = array( 
    'post_id'   => $record_id, 
    'folder_id' => $parent_folder 
  );

  $wpdb->insert( $table, $new_record );

}

function mlpr_folders_no_ids() {
  
  global $wpdb;
  ?>
    <h3><?php echo esc_html__('Checking for files without folder IDs','mlp-reset') ?></h3>
  <?php
  
  $uploads_folder_id = get_option(MAXGALLERIA_MEDIA_LIBRARY_UPLOAD_FOLDER_ID );

  $folders = $wpdb->prefix . MAXGALLERIA_MEDIA_LIBRARY_FOLDER_TABLE;
  
  $sql = "SELECT ID, pm.meta_value AS attached_file FROM {$wpdb->prefix}posts
 LEFT JOIN $folders ON {$wpdb->prefix}posts.ID = {$folders}.post_id
 JOIN {$wpdb->prefix}postmeta AS pm ON pm.post_id = {$wpdb->prefix}posts.ID
 WHERE post_type = 'attachment' 
 AND folder_id IS NULL
 AND pm.meta_key = '_wp_attached_file'";
  
  $rows = $wpdb->get_results($sql);
  if($rows) {
    ?>
      <p><?php esc_html_e('The following files with missing folder IDs were found:','mlp-reset') ?></p>
      <ul>
    <?php  
    foreach($rows as $row) {
      // get the parent ID
      $folder_path = dirname($row->attached_file);
      if($folder_path != "")
        $folder_id = get_parent_by_name($folder_path);
      else
        $folder_id = $uploads_folder_id;
      if($folder_id !== NULL) {
        // if parent ID is found
        add_new_folder_parent($row->ID, $folder_id);
        echo "<li>{$row->attached_file} " . esc_html__('Fixed','mlp-reset') . "</li>" . PHP_EOL;
      } else {
        echo "<li>{$row->attached_file} " . esc_html__(' Parent folder not found.','mlp-reset') . "</li>" . PHP_EOL;        
      }  
    }
    ?>
      </ul>
    <?php
  } else {
    ?>
      <p><?php esc_html_e('No files with missing folder IDs were found.','mlp-reset') ?></p>
    <?php
  }  
}
