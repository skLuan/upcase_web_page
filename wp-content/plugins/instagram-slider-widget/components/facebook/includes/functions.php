<?php
add_shortcode( 'cm_facebook_feed', 'cm_facebook_feed_shortcode' );
/**
 * Add shortcode function
 *
 * @param array $atts shortcode attributes
 *
 * @return string
 */
function cm_facebook_feed_shortcode( $atts ) {
	$atts = shortcode_atts( [ 'id' => '' ], $atts, 'cm_facebook_feed' );

	$feeds = new WIS_Feeds( 'facebook' );
	$feed  = $feeds->get_feed( $atts['id'] );

	if ( $feed ) {
		return $feed->display_images();
	}

	return "";
}

