<?php
add_shortcode( 'jr_instagram', 'jr_instagram_shortcode' );
/**
 * Add shortcode function
 *
 * @param array $atts shortcode attributes
 *
 * @return string
 */
function jr_instagram_shortcode( $atts ) {
	$atts = shortcode_atts( [ 'id' => '' ], $atts, 'jr_instagram' );

	$feeds = new WIS_Feeds( 'instagram' );
	$feed  = $feeds->get_feed( $atts['id'] );

	if ( $feed ) {
		return $feed->display_images();
	}

	return "";
}

