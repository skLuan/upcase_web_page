<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class ISWUpdate020000 extends Wbcr_Factory453_Update {

	public function install() {
		require_once WIS_PLUGIN_DIR . "/includes/class-feeds.php";
		require_once WIG_COMPONENT_DIR . "/includes/class-instagram-feed.php";
		require_once WYT_COMPONENT_DIR . "/includes/class-youtube-feed.php";

		$this->backup_widgets();
		$this->migrate_instagram();
		$this->migrate_youtube();
	}

	public function backup_widgets() {
		$instagram = get_option( 'widget_jr_insta_slider' );
		$youtube   = get_option( 'widget_wyoutube_feed' );

		set_transient( 'wis_instagram_widget_195', $instagram, 30 * DAY_IN_SECONDS );
		set_transient( 'wis_youtube_widget_195', $youtube, 30 * DAY_IN_SECONDS );
	}

	public function migrate_instagram() {
		$feeds = new WIS_Feeds( 'instagram' );

		$widgets = get_option( 'widget_jr_insta_slider' );

		foreach ( $widgets as $num => $options ) {
			if ( '_multiwidget' == $num ) {
				$new_widgets[ $num ] = $options;
				continue;
			}

			$feed                = new WIS_Instagram_Feed( $options );
			$feed_id             = $feeds->add_feed( $feed );
			$new_widgets[ $num ] = [
				'title'   => $feed->title,
				'feed_id' => $feed_id,
			];
		}

		update_option( 'widget_jr_insta_slider', $new_widgets );
	}

	public function migrate_youtube() {
		$accounts = get_option( 'wis_account', [] );
		if ( ! empty( $accounts ) ) {
			update_option( 'wis_youtube_account', $accounts );
		}

		$feeds = new WIS_Feeds( 'youtube' );

		$widgets = get_option( 'widget_wyoutube_feed' );

		foreach ( $widgets as $num => $options ) {
			if ( '_multiwidget' == $num ) {
				$new_widgets[ $num ] = $options;
				continue;
			}

			$feed                = new WIS_Youtube_Feed( $options );
			$feed_id             = $feeds->add_feed( $feed );
			$new_widgets[ $num ] = [
				'title'   => $feed->title,
				'feed_id' => $feed_id,
			];
		}

		update_option( 'widget_wyoutube_feed', $new_widgets );
	}
}