<?php
/**
 * Porto Elementor Single Builder Image Widget
 *
 * @author     P-THEMES
 * @since      2.3.0
 */
defined( 'ABSPATH' ) || die;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Border;

class Porto_Elementor_Single_Image_Widget extends \Elementor\Widget_Base {

	public function get_name() {
		return 'porto_single_image';
	}

	public function get_title() {
		return esc_html__( 'Post Featured Image', 'porto-functionality' );
	}

	public function get_icon() {
		return 'eicon-image';
	}

	public function get_categories() {
		return array( 'porto-single' );
	}

	public function get_keywords() {
		return array( 'single', 'custom', 'layout', 'post', 'image', 'thumbnail', 'gallery', 'member', 'portfolio', 'event', 'fap' );
	}

	public function get_script_depends() {
		if ( ( isset( $_REQUEST['action'] ) && 'elementor' == $_REQUEST['action'] ) || isset( $_REQUEST['elementor-preview'] ) ) {
			return array( 'porto-elementor-widgets-js' );
		} else {
			return array();
		}
	}

	protected function register_controls() {

		$this->start_controls_section(
			'section_single_image',
			array(
				'label' => esc_html__( 'Featured Media', 'porto-functionality' ),
			)
		);

		$this->add_control(
			'follow_meta',
			array(
				'type'  => Controls_Manager::SWITCHER,
				'label' => __( 'Follow Post Meta Box', 'porto-functionality' ),
			)
		);

		$this->add_control(
			'meta',
			array(
				'type'            => Controls_Manager::RAW_HTML,
				'raw'             => __( 'To set Single Post Meta options.', 'porto-functionality' ),
				'content_classes' => 'elementor-panel-alert elementor-panel-alert-info',
				'description'     => __( 'To check this option, image depends on Meta Options.', 'porto-functionality' ),
				'condition'       => array(
					'follow_meta' => 'yes',
				),
			)
		);
			$this->add_control(
				'show_type',
				array(
					'type'        => Controls_Manager::SELECT,
					'label'       => __( 'Slideshow Type', 'porto-functionality' ),
					'options'     => array(
						'grid'   => __( 'Grid', 'porto-functionality' ),
						'images' => __( 'Images', 'porto-functionality' ),
						'video'  => __( 'Video', 'porto-functionality' ),
					),
					'description' => __( 'To choose the way to show type.', 'porto-functionality' ),
					'default'     => 'images',
					'condition'   => array(
						'follow_meta' => '',
					),
				)
			);

			$this->add_group_control(
				Elementor\Group_Control_Image_Size::get_type(),
				array(
					'name'      => 'thumbnail',
					'exclude'   => array( 'custom' ),
					'default'   => 'full',
					'condition' => array(
						'follow_meta' => '',
						'show_type'   => 'images',
					),
				)
			);

			$this->add_control(
				'popup',
				array(
					'type'        => Controls_Manager::SWITCHER,
					'label'       => __( 'Popup Image', 'porto-functionality' ),
					'condition'   => array(
						'follow_meta' => '',
						'show_type'   => 'images',
					),
					'description' => __( 'To control this option with the widget, disable "Image Lightbox" of Theme Option', 'porto-functionality' ),
				)
			);

			$this->add_control(
				'share_position',
				array(
					'type'        => Controls_Manager::SWITCHER,
					'label'       => __( 'Advanced Post Share?', 'porto-functionality' ),
					'description' => __( 'To show Share Icons near the image.', 'porto-functionality' ),
					'condition'   => array(
						'follow_meta' => '',
						'show_type'   => 'images',
					),
				)
			);

			$this->add_control(
				'image_radius',
				array(
					'type'        => Controls_Manager::SLIDER,
					'label'       => __( 'Border Radius', 'porto-functionality' ),
					'selectors'   => array(
						'.elementor-element-{{ID}} img' => 'border-radius: {{SIZE}}px;',
					),
					'condition'   => array(
						'follow_meta' => '',
						'show_type'   => 'images',
					),
					'description' => __( 'Control the border radius of image.', 'porto-functionality' ),
				)
			);

		$this->end_controls_section();
	}

	protected function render() {
		$atts                 = $this->get_settings_for_display();
		$atts['page_builder'] = 'elementor';
		echo PortoBuildersSingle::get_instance()->shortcode_single_image( $atts );
	}
}
