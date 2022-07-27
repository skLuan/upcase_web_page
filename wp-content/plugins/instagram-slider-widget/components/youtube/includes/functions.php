<?php
add_shortcode( 'cm_youtube_feed', 'cm_youtube_feed_shortcode' );
/**
 * Add shortcode function
 *
 * @param array $atts shortcode attributes
 *
 * @return string
 */
function cm_youtube_feed_shortcode( $atts ) {
	$atts = shortcode_atts( [ 'id' => '' ], $atts, 'cm_youtube_feed' );

	$feeds = new WIS_Feeds( 'youtube' );
	$feed  = $feeds->get_feed( $atts['id'] );

	if ( $feed ) {
		return $feed->display_videos();
	}

	return "";
}

