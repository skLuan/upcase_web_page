<?php

if ( ! empty( $atts['hover_bgcolor'] ) || ! empty( $atts['hover_padding'] ) || ! empty( $atts['hover_halign'] ) || ! empty( $atts['hover_valign'] ) ) {
	echo porto_filter_output( $atts['selector'] ) . '{';
	if ( ! empty( $atts['hover_halign'] ) ) {
		echo 'align-items:' . sanitize_text_field( $atts['hover_halign'] ) . ';';
	}
	if ( ! empty( $atts['hover_valign'] ) ) {
		echo 'justify-content:' . sanitize_text_field( $atts['hover_valign'] ) . ';';
	}
	if ( ! empty( $atts['hover_bgcolor'] ) ) {
		echo 'background-color:' . sanitize_text_field( $atts['hover_bgcolor'] ) . ';';
	}
	if ( ! empty( $atts['hover_padding'] ) ) {
		if ( ! empty( $atts['hover_padding']['top'] ) && ! empty( $atts['hover_padding']['right'] ) && ! empty( $atts['hover_padding']['bottom'] ) && ! empty( $atts['hover_padding']['left'] ) ) {
			echo 'padding:' . sanitize_text_field( $atts['hover_padding']['top'] . ' ' . $atts['hover_padding']['right'] . ' ' . $atts['hover_padding']['bottom'] . ' ' . $atts['hover_padding']['left'] ) . ';';
		} else {
			if ( ! empty( $atts['hover_padding']['top'] ) ) {
				echo 'padding-top:' . sanitize_text_field( $atts['hover_padding']['top'] ) . ';';
			}
			if ( ! empty( $atts['hover_padding']['right'] ) ) {
				echo 'padding-right:' . sanitize_text_field( $atts['hover_padding']['right'] ) . ';';
			}
			if ( ! empty( $atts['hover_padding']['bottom'] ) ) {
				echo 'padding-bottom:' . sanitize_text_field( $atts['hover_padding']['bottom'] ) . ';';
			}
			if ( ! empty( $atts['hover_padding']['left'] ) ) {
				echo 'padding-left:' . sanitize_text_field( $atts['hover_padding']['left'] ) . ';';
			}
		}
	}
	echo '}';
}
