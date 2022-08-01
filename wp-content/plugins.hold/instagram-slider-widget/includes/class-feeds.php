<?php


class WIS_Feeds {

	/**
	 * Social name
	 *
	 * @var string
	 */
	public $social;

	/**
	 * Array of feeds
	 *
	 * @var WIS_Feed[]
	 */
	public $feeds = [];

	/**
	 * Latest fedd id
	 *
	 * @var int
	 */
	private $last_id;

	/**
	 * Current social feeds option name
	 *
	 * @var string
	 */
	private $option_name;

	/**
	 * Feeds constructor.
	 *
	 * @param string $social_name
	 */
	public function __construct( $social_name ) {
		if ( empty( $social_name ) ) {
			return null;
		}

		$this->social      = $social_name;
		$this->option_name = WIS_FEEDS_OPTION . '_' . $social_name;
		$this->last_id     = WIS_Plugin::app()->getPopulateOption( WIS_FEEDS_OPTION . '_last_id', 0 );
		$this->get_feeds();
	}

	/**
	 * Get social feeds
	 *
	 * @return WIS_Feed[]
	 */
	public function get_feeds() {
		$this->feeds = WIS_Plugin::app()->getPopulateOption( $this->option_name, [] );

		return $this->feeds;
	}

	/**
	 * Get social feeds
	 *
	 * @return WIS_Feed|false
	 */
	public function get_feed( $feed_id ) {
		$this->feeds = WIS_Plugin::app()->getPopulateOption( $this->option_name, [] );

		return $this->feeds[ $feed_id ] ?? false;
	}

	/**
	 * Update social feeds
	 *
	 * @param WIS_Feed $feed
	 *
	 * @return int
	 */
	public function add_feed( $feed ) {
		$this->last_id ++;
		$feed->instance['id'] = $this->last_id;

		$this->feeds[ $this->last_id ] = $feed;
		WIS_Plugin::app()->updatePopulateOption( $this->option_name, $this->feeds );
		WIS_Plugin::app()->updatePopulateOption( WIS_FEEDS_OPTION . '_last_id', $this->last_id );

		return $this->last_id;
	}

	/**
	 * Update social feeds
	 *
	 * @param array $feeds
	 */
	public function update_feeds( $feeds ) {
		$this->feeds = $feeds;
		WIS_Plugin::app()->updatePopulateOption( $this->option_name, $feeds );
	}

	/**
	 * Update social feeds
	 *
	 * @param array $feeds
	 */
	public function update_feed( $feed_id, $feed ) {
		$feed->instance['id']    = $feed_id;
		$this->feeds[ $feed_id ] = $feed;
		WIS_Plugin::app()->updatePopulateOption( $this->option_name, $this->feeds );
	}

	/**
	 * Delete social feeds
	 *
	 * @param $id
	 */
	public function delete_feed( $id ) {
		$feeds = $this->get_feeds();
		unset( $feeds[ $id ] );
		$this->update_feeds( $feeds );
	}

	/**
	 * Delete social feeds
	 */
	public function delete_feeds() {
		$this->feeds = [];
		WIS_Plugin::app()->deletePopulateOption( $this->option_name );
	}
}
