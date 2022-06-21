<?php
/**
 * Server-side rendering of the `core/image` block.
 *
 * @package WordPress
 */

/**
 * Renders the `core/image` block on the server,
 * adding a data-id attribute to the element if core/gallery has added on pre-render.
 *
<<<<<<< HEAD
 * @param  array $attributes The block attributes.
 * @param  array $content    The block content.
=======
 * @param  array  $attributes The block attributes.
 * @param  string $content    The block content.
>>>>>>> main
 * @return string Returns the block content with the data-id attribute added.
 */
function render_block_core_image( $attributes, $content ) {
	if ( isset( $attributes['data-id'] ) ) {
		// Add the data-id="$id" attribute to the img element
		// to provide backwards compatibility for the Gallery Block,
		// which now wraps Image Blocks within innerBlocks.
		// The data-id attribute is added in a core/gallery `render_block_data` hook.
		$data_id_attribute = 'data-id="' . esc_attr( $attributes['data-id'] ) . '"';
<<<<<<< HEAD
		if ( ! strpos( $content, $data_id_attribute ) ) {
=======
		if ( false === strpos( $content, $data_id_attribute ) ) {
>>>>>>> main
			$content = str_replace( '<img', '<img ' . $data_id_attribute . ' ', $content );
		}
	}
	return $content;
}


/**
 * Registers the `core/image` block on server.
 */
function register_block_core_image() {
	register_block_type_from_metadata(
		__DIR__ . '/image',
		array(
			'render_callback' => 'render_block_core_image',
		)
	);
}
add_action( 'init', 'register_block_core_image' );
