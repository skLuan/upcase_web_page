<?php
global $wis_compatibility;

define( 'WFB_COMPONENT_VERSION', $wis_compatibility->get_plugin_version() );
define( 'WFB_COMPONENT_URL', WIS_COMPONENTS_URL . '/facebook' );
define( 'WFB_COMPONENT_DIR', WIS_COMPONENTS_DIR . '/facebook' );
define( 'WFB_COMPONENT_VIEWS_DIR', WFB_COMPONENT_DIR . '/html_templates' );

define( 'WIS_FACEBOOK_ACCOUNT_PROFILES_OPTION_NAME', 'facebook_account_profiles' );

define( 'WFB_FACEBOOK_SELF_URL', 'https://graph.facebook.com/' );

require_once WFB_COMPONENT_DIR . "/includes/functions.php";
require_once WFB_COMPONENT_DIR . "/includes/Api/facebook-account.php";
require_once WFB_COMPONENT_DIR . "/includes/Api/facebook-api.php";
require_once WFB_COMPONENT_DIR . "/includes/Api/facebook-post.php";
require_once WFB_COMPONENT_DIR . "/includes/Api/facebook-post-attachment.php";
require_once WFB_COMPONENT_DIR . "/includes/class-facebook-feed.php";
require_once WFB_COMPONENT_DIR . "/includes/class-facebook-profiles.php";
require_once WFB_COMPONENT_DIR . "/includes/class-facebook-widget.php";

