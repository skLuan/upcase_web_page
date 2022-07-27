<?php

class WIS_Helper {

	/**
	 * Get social feeds
	 *
	 * @return array
	 */
	public static function get_feeds(): array {
		return WIS_Plugin::app()->getPopulateOption( WIS_FEEDS_OPTION, [] );
	}
}