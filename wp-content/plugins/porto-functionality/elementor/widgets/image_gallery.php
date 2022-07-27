<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Porto Image Gallery widget
 *
 * @since 2.2.0
 */

use Elementor\Controls_Manager;

class Porto_Elementor_Image_Gallery_Widget extends \Elementor\Widget_Base {

	public function get_name() {
		return 'porto_image_gallery';
	}

	public function get_title() {
		return __( 'Porto Image Gallery', 'porto-functionality' );
	}

	public function get_categories() {
		return array( 'porto-elements' );
	}

	public function get_keywords() {
		return array( 'image', 'gallery', 'slider', 'carousel', 'masonry', 'grid' );
	}

	public function get_icon() {
		return 'eicon-photo-library';
	}

	public function get_script_depends() {
		if ( ( isset( $_REQUEST['action'] ) && 'elementor' == $_REQUEST['action'] ) || isset( $_REQUEST['elementor-preview'] ) ) {
			if ( ! wp_style_is( 'jquery-hoverdir', 'registered' ) ) {
				wp_register_script( 'jquery-hoverdir', PORTO_SHORTCODES_URL . 'assets/js/jquery.hoverdir.min.js', array( 'jquery-core', 'modernizr' ), PORTO_SHORTCODES_VERSION, true );
			}
			return array( 'porto-elementor-widgets-js', 'isotope', 'modernizr', 'jquery-hoverdir' );
		} else {
			return array();
		}
	}

	protected function register_controls() {

		$slider_options = porto_update_vc_options_to_elementor( porto_vc_product_slider_fields() );

		$slider_options['nav_pos2']['condition']['navigation']       = 'yes';
		$slider_options['nav_type']['condition']['navigation']       = 'yes';
		$slider_options['autoplay_timeout']['condition']['autoplay'] = 'yes';

		$this->start_controls_section(
			'section_image_gallery',
			array(
				'label' => __( 'Image Gallery', 'porto-functionality' ),
			)
		);

		$this->add_control(
			'images',
			array(
				'label'       => esc_html__( 'Add Images', 'porto-functionality' ),
				'type'        => Controls_Manager::GALLERY,
				'default'     => array(),
				'show_label'  => false,
				'description' => esc_html__( 'Select images from media library.', 'porto-functionality' ),
			)
		);

		$this->add_control(
			'view',
			array(
				'label'              => __( 'Layout', 'porto-functionality' ),
				'type'               => Controls_Manager::CHOOSE,
				'options'            => array(
					'grid'     => array(
						'title' => __( 'Grid', 'porto-functionality' ),
						'icon'  => 'eicon-gallery-grid',
					),
					'slider'   => array(
						'title' => __( 'Slider', 'porto-functionality' ),
						'icon'  => 'eicon-media-carousel',
					),
					'masonry'  => array(
						'title' => __( 'Masonry Grid', 'porto-functionality' ),
						'icon'  => 'eicon-gallery-masonry',
					),
					'creative' => array(
						'title' => __( 'Pre defined Grid', 'porto-functionality' ),
						'icon'  => 'eicon-gallery-justified',
					),
				),
				'default'            => 'grid',
				'frontend_available' => true,
			)
		);

		$this->add_control(
			'image_size',
			array(
				'type'      => Controls_Manager::SELECT,
				'label'     => __( 'Image Size', 'porto-functionality' ),
				'options'   => array_combine( array_values( porto_sh_commons( 'image_sizes' ) ), array_keys( porto_sh_commons( 'image_sizes' ) ) ),
				'default'   => '',
				'condition' => array(
					'view' => array( 'grid', 'slider', 'masonry' ),
				),
			)
		);

		$this->add_control(
			'grid_layout',
			array(
				'label'     => __( 'Grid Layout', 'porto-functionality' ),
				'type'      => 'image_choose',
				'default'   => '1',
				'options'   => array_combine( array_values( porto_sh_commons( 'masonry_layouts' ) ), array_keys( porto_sh_commons( 'masonry_layouts' ) ) ),
				'condition' => array(
					'view' => 'creative',
				),
			)
		);

		$this->add_control(
			'grid_height',
			array(
				'label'     => __( 'Grid Height', 'porto-functionality' ),
				'type'      => Controls_Manager::TEXT,
				'default'   => '600px',
				'condition' => array(
					'view' => 'creative',
				),
			)
		);

		$this->add_control(
			'spacing',
			array(
				'type'               => Controls_Manager::SLIDER,
				'label'              => __( 'Column Spacing (px)', 'porto-functionality' ),
				'range'              => array(
					'px' => array(
						'step' => 1,
						'min'  => 0,
						'max'  => 100,
					),
				),
				'default'            => array(
					'unit' => 'px',
				),
				'render_type'        => 'template',
				'frontend_available' => true,
				'selectors'          => array(
					'.elementor-element-{{ID}} .porto-gallery' => '--porto-el-spacing: {{SIZE}}px;',
				),
			)
		);

		$this->add_responsive_control(
			'columns',
			array(
				'type'        => Controls_Manager::SELECT,
				'label'       => esc_html__( 'Columns', 'porto-functionality' ),
				'options'     => array(
					'1' => 1,
					'2' => 2,
					'3' => 3,
					'4' => 4,
					'5' => 5,
					'6' => 6,
					'7' => 7,
					'8' => 8,
					'9' => 9,
				),
				'default'     => '4',
				'description' => esc_html__( 'Select number of columns to display.', 'porto-functionality' ),
				'condition'   => array(
					'view!' => 'creative',
				),
			)
		);

		$this->add_control(
			'columns_min',
			array(
				'label'       => esc_html__( 'Columns ( < 576px )', 'porto-functionality' ),
				'type'        => Controls_Manager::SELECT,
				'options'     => array(
					'1' => 1,
					'2' => 2,
					'3' => 3,
					'4' => 4,
					''  => esc_html__( 'Default', 'porto-functionality' ),
				),
				'description' => esc_html__( 'Select the number of columns to display on mobile ( < 576px ). ', 'porto-functionality' ),
				'condition'   => array(
					'view!' => 'creative',
				),
			)
		);

		$this->add_control(
			'v_align',
			array(
				'label'       => esc_html__( 'Vertical Align', 'porto-functionality' ),
				'type'        => Controls_Manager::CHOOSE,
				'options'     => array(
					'start'   => array(
						'title' => esc_html__( 'Top', 'porto-functionality' ),
						'icon'  => 'eicon-v-align-top',
					),
					'center'  => array(
						'title' => esc_html__( 'Middle', 'porto-functionality' ),
						'icon'  => 'eicon-v-align-middle',
					),
					'end'     => array(
						'title' => esc_html__( 'Bottom', 'porto-functionality' ),
						'icon'  => 'eicon-v-align-bottom',
					),
					'stretch' => array(
						'title' => esc_html__( 'Stretch', 'porto-functionality' ),
						'icon'  => 'eicon-v-align-stretch',
					),
				),
				'description' => esc_html__( 'Choose from top, middle, bottom and stretch in grid layout.', 'porto-functionality' ),
				'condition'   => array(
					'view' => array( 'grid', 'slider' ),
				),
			)
		);

		$this->add_control(
			'click_action',
			array(
				'type'        => Controls_Manager::SELECT,
				'label'       => __( 'On click image', 'porto-functionality' ),
				'description' => __( 'Select action for click on image.', 'porto-functionality' ),
				'options'     => array(
					''         => __( 'None', 'porto-functionality' ),
					'imgurl'   => __( 'Link to large image', 'porto-functionality' ),
					'lightbox' => __( 'Open Lightbox', 'porto-functionality' ),
				),
				'default'     => '',
				'condition'   => array(
					'images!' => '',
				),
			)
		);

		$this->add_control(
			'hover_effect',
			array(
				'type'      => Controls_Manager::SELECT,
				'label'     => esc_html__( 'Hover Effect', 'porto-functionality' ),
				'options'   => array(
					''          => esc_html__( 'None', 'porto-functionality' ),
					'zoom'      => esc_html__( 'Zoom', 'porto-functionality' ),
					'fadein'    => esc_html__( 'Fade In', 'porto-functionality' ),
					'overlay'   => esc_html__( 'Add Overlay', 'porto-functionality' ),
					'boxshadow' => esc_html__( 'Add Box Shadow', 'porto-functionality' ),
					'effect-1'  => esc_html__( 'Effect 1', 'porto-functionality' ),
					'effect-2'  => esc_html__( 'Effect 2', 'porto-functionality' ),
					'effect-3'  => esc_html__( 'Effect 3', 'porto-functionality' ),
					'effect-4'  => esc_html__( 'Effect 4', 'porto-functionality' ),
					'hoverdir'  => esc_html__( 'Hoverdir', 'porto-functionality' ),
				),
				'default'   => '',
				'condition' => array(
					'images!' => '',
				),
			)
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_style_options',
			array(
				'label' => __( 'Style Options', 'porto-functionality' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_control(
			'overlay_bgc',
			array(
				'label'     => __( 'Overlay Background Color', 'porto-functionality' ),
				'type'      => Controls_Manager::COLOR,
				'condition' => array(
					'images!'      => '',
					'hover_effect' => array( 'fadein', 'overlay', 'hoverdir' ),
				),
				'selectors' => array(
					'.elementor-element-{{ID}} .porto-ig-fadein figure:before, .elementor-element-{{ID}} .porto-ig-overlay figure:before, .elementor-element-{{ID}} .hover-effect-dir .fill' => 'background-color: {{VALUE}};',
				),
			)
		);

		$this->add_control(
			'icon_cl',
			array(
				'type'                   => Controls_Manager::ICONS,
				'label'                  => __( 'Overlay Icon', 'porto-functionality' ),
				'fa4compatibility'       => 'icon',
				'skin'                   => 'inline',
				'exclude_inline_options' => array( 'svg' ),
				'condition'              => array(
					'images!'       => '',
					'hover_effect'  => array( 'hoverdir' ),
					'click_action!' => '',
				),
			)
		);

		$this->add_control(
			'icon_size',
			array(
				'type'       => Controls_Manager::SLIDER,
				'label'      => __( 'Icon Size', 'porto-functionality' ),
				'range'      => array(
					'px'  => array(
						'step' => 1,
						'min'  => 0,
						'max'  => 100,
					),
					'em'  => array(
						'step' => 0.1,
						'min'  => 0,
						'max'  => 10,
					),
					'rem' => array(
						'step' => 0.1,
						'min'  => 0,
						'max'  => 10,
					),
				),
				'default'    => array(
					'unit' => 'px',
				),
				'size_units' => array(
					'px',
					'em',
					'rem',
				),
				'condition'  => array(
					'images!'       => '',
					'hover_effect'  => array( 'hoverdir' ),
					'click_action!' => '',
				),
				'selectors'  => array(
					'.elementor-element-{{ID}} .fill .centered-icon' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}}; line-height: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_control(
			'icon_fs',
			array(
				'type'       => Controls_Manager::SLIDER,
				'label'      => __( 'Icon Font Size', 'porto-functionality' ),
				'range'      => array(
					'px'  => array(
						'step' => 1,
						'min'  => 0,
						'max'  => 50,
					),
					'em'  => array(
						'step' => 0.1,
						'min'  => 0,
						'max'  => 5,
					),
					'rem' => array(
						'step' => 0.1,
						'min'  => 0,
						'max'  => 5,
					),
				),
				'default'    => array(
					'unit' => 'px',
				),
				'size_units' => array(
					'px',
					'em',
					'rem',
				),
				'condition'  => array(
					'images!'       => '',
					'hover_effect'  => array( 'hoverdir' ),
					'click_action!' => '',
				),
				'selectors'  => array(
					'.elementor-element-{{ID}} .fill .centered-icon' => 'font-size: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_control(
			'icon_bgc',
			array(
				'label'     => __( 'Overlay Icon Background Color', 'porto-functionality' ),
				'type'      => Controls_Manager::COLOR,
				'condition' => array(
					'images!'       => '',
					'hover_effect'  => array( 'hoverdir' ),
					'click_action!' => '',
				),
				'selectors' => array(
					'.elementor-element-{{ID}} .fill .centered-icon' => 'background-color: {{VALUE}};',
				),
			)
		);

		$this->add_control(
			'icon_clr',
			array(
				'label'     => __( 'Overlay Icon Color', 'porto-functionality' ),
				'type'      => Controls_Manager::COLOR,
				'condition' => array(
					'images!'       => '',
					'hover_effect'  => array( 'hoverdir' ),
					'click_action!' => '',
				),
				'selectors' => array(
					'.elementor-element-{{ID}} .fill .centered-icon' => 'color: {{VALUE}};',
				),
			)
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_slider_options',
			array(
				'label'     => __( 'Slider Options', 'porto-functionality' ),
				'tab'       => Controls_Manager::TAB_STYLE,
				'condition' => array(
					'view' => 'slider',
				),
			)
		);

		foreach ( $slider_options as $key => $opt ) {
			unset( $opt['condition']['view'] );
			$this->add_control( $key, $opt );
		}

		$this->end_controls_section();
	}

	protected function render() {
		$atts = $this->get_settings_for_display();

		if ( $template = porto_shortcode_template( 'porto_image_gallery' ) ) {
			$atts['columns'] = array(
				'xl'  => isset( $atts['columns_xl'] ) ? (int) $atts['columns_xl'] : ( isset( $atts['columns'] ) ? (int) $atts['columns'] : 0 ),
				'lg'  => isset( $atts['columns'] ) ? (int) $atts['columns'] : 0,
				'md'  => isset( $atts['columns_tablet'] ) ? (int) $atts['columns_tablet'] : 0,
				'sm'  => isset( $atts['columns_mobile'] ) ? (int) $atts['columns_mobile'] : 0,
				'min' => isset( $atts['columns_min'] ) ? (int) $atts['columns_min'] : 0,
			);
			if ( ! empty( $atts['spacing'] ) ) {
				$atts['spacing'] = $atts['spacing']['size'];
			}
			if ( isset( $atts['icon_cl'] ) && isset( $atts['icon_cl']['value'] ) ) {
				$atts['icon_cl'] = $atts['icon_cl']['value'];
			}

			include $template;
		}
	}

}
