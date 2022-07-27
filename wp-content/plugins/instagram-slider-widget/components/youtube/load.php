<?php
global $wis_compatibility;

define( 'WYT_COMPONENT_VERSION', $wis_compatibility->get_plugin_version() );
define( 'WYT_COMPONENT_URL', WIS_COMPONENTS_URL . '/youtube' );
define( 'WYT_COMPONENT_DIR', WIS_COMPONENTS_DIR . '/youtube' );
define( 'WYT_COMPONENT_VIEWS_DIR', WYT_COMPONENT_DIR . '/html_templates' );
/*
 * Константа определяет какое имя опции для хранения данных.
 * Нужно для отладки и последующего бесшовного перехода
 */
define( 'WYT_ACCOUNT_OPTION_NAME', 'youtube_account' );
define( 'WYT_API_KEY_OPTION_NAME', 'yt_api_key' );

require_once WYT_COMPONENT_DIR . '/includes/functions.php';
require_once WYT_COMPONENT_DIR . '/includes/helpers.php';
require_once WYT_COMPONENT_DIR . '/includes/Api/load.php';
require_once WYT_COMPONENT_DIR . "/includes/class-youtube-feed.php";
require_once WYT_COMPONENT_DIR . "/includes/class-youtube-profiles.php";
require_once WYT_COMPONENT_DIR . "/includes/class-youtube-widget.php";
