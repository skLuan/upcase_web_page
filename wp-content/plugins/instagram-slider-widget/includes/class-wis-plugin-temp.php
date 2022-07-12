<?php

namespace Instagram\Includes;

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/*
 * Temporary class to migrate to 2.0.0
 * */

class WIS_Plugin {

	public static function app() {
		return \WIS_Plugin::app();
	}

	/**
	 * Метод проверяет активацию премиум плагина и наличие действующего лицензионного ключа
	 *
	 * @return bool
	 */
	public function is_premium() {
		if ( \WIS_Plugin::app()->premium->is_active() && \WIS_Plugin::app()->premium->is_activate() //&& is_plugin_active( "{$this->premium->get_setting('slug')}/{$this->premium->get_setting('slug')}.php" )
		) {
			return true;
		} else {
			return false;
		}
	}
}
