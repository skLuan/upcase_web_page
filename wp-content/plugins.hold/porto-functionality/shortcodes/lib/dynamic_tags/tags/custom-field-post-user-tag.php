<?php
/**
 * Porto Dynamic Post Author Field Tags class
 *
 * @author     P-THEMES
 * @version    2.3.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Porto_El_Custom_Field_Post_User_Tag extends Elementor\Core\DynamicTags\Tag {

	public function get_name() {
		return 'porto-custom-field-post-user';
	}

	public function get_title() {
		return esc_html__( 'Post / Author', 'porto-functionality' );
	}

	public function get_group() {
		return Porto_El_Dynamic_Tags::PORTO_GROUP;
	}

	public function get_categories() {
		return array(
			Porto_El_Dynamic_Tags::TEXT_CATEGORY,
			Porto_El_Dynamic_Tags::NUMBER_CATEGORY,
			Porto_El_Dynamic_Tags::POST_META_CATEGORY,
			Porto_El_Dynamic_Tags::COLOR_CATEGORY,
		);
	}

	public function is_settings_required() {
		return true;
	}

	protected function register_controls() {
		$this->add_control(
			'dynamic_field_post_object',
			array(
				'label'   => esc_html__( 'Object Field', 'porto-functionality' ),
				'type'    => Elementor\Controls_Manager::SELECT,
				'default' => 'post_title',
				'groups'  => Porto_Func_Dynamic_Tags_Content::get_instance()->get_dynamic_post_object_fields(),
			)
		);
	}

	public function render() {
		if ( is_404() ) {
			return;
		}
		do_action( 'porto_dynamic_before_render' );
		$post_id  = get_the_ID();
		$atts     = $this->get_settings();
		$property = $atts['dynamic_field_post_object'];
		$ret      = (string) Porto_Func_Dynamic_Tags_Content::get_instance()->get_dynamic_post_field_prop( $property );
		if ( 'post_content' === $property ) {
			if ( Elementor\Plugin::$instance->db->is_built_with_elementor( $post_id ) ) {

				$editor       = Elementor\Plugin::$instance->editor;
				$is_edit_mode = $editor->is_edit_mode();

				$editor->set_edit_mode( false );

				global $post;
				$temp = $post;
				$post = '';
				$ret  = Elementor\Plugin::$instance->frontend->get_builder_content_for_display( $post_id, $is_edit_mode );
				$post = $temp;

				$editor->set_edit_mode( $is_edit_mode );

			} else {
				$ret = apply_filters( 'the_content', $ret );
			}
		}
		$ret = Porto_Func_Dynamic_Tags_Content::get_instance()->get_dynamic_post_field( $ret );
		echo porto_strip_script_tags( $ret );
		do_action( 'porto_dynamic_after_render' );
	}

}
