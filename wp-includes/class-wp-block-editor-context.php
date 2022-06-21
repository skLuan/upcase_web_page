<?php
/**
 * Blocks API: WP_Block_Editor_Context class
 *
 * @package WordPress
 * @since 5.8.0
 */

/**
<<<<<<< HEAD
 * Class representing a current block editor context.
 *
 * The expectation is that block editor can have a different set
 * of requirements on every screen where it is used. This class
 * allows to define supporting settings that can be used with filters.
=======
 * Contains information about a block editor being rendered.
>>>>>>> main
 *
 * @since 5.8.0
 */
final class WP_Block_Editor_Context {
	/**
<<<<<<< HEAD
	 * Post being edited. Optional.
=======
	 * String that identifies the block editor being rendered. Can be one of:
	 *
	 * - `'core/edit-post'`         - The post editor at `/wp-admin/edit.php`.
	 * - `'core/edit-widgets'`      - The widgets editor at `/wp-admin/widgets.php`.
	 * - `'core/customize-widgets'` - The widgets editor at `/wp-admin/customize.php`.
	 * - `'core/edit-site'`         - The site editor at `/wp-admin/site-editor.php`.
	 *
	 * Defaults to 'core/edit-post'.
	 *
	 * @since 6.0.0
	 *
	 * @var string
	 */
	public $name = 'core/edit-post';

	/**
	 * The post being edited by the block editor. Optional.
>>>>>>> main
	 *
	 * @since 5.8.0
	 *
	 * @var WP_Post|null
	 */
	public $post = null;

	/**
	 * Constructor.
	 *
	 * Populates optional properties for a given block editor context.
	 *
	 * @since 5.8.0
	 *
	 * @param array $settings The list of optional settings to expose in a given context.
	 */
	public function __construct( array $settings = array() ) {
<<<<<<< HEAD
=======
		if ( isset( $settings['name'] ) ) {
			$this->name = $settings['name'];
		}
>>>>>>> main
		if ( isset( $settings['post'] ) ) {
			$this->post = $settings['post'];
		}
	}
}
