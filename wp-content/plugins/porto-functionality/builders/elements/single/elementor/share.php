<?php
/**
 * Porto Elementor Single Post Share Widget
 *
 * @author     P-THEMES
 * @since      2.3.0
 */
defined( 'ABSPATH' ) || die;

use Elementor\Controls_Manager;
use Elementor\Core\Schemes\Color;
use Elementor\Group_Control_Typography;

class Porto_Elementor_Single_Share_Widget extends \Elementor\Widget_Base {

	public function get_name() {
		return 'porto_single_sharen';
	}

	public function get_title() {
		return esc_html__( 'Post Share', 'porto-functionality' );
	}

	public function get_icon() {
		return 'Simple-Line-Icons-share';
	}

	public function get_categories() {
		return array( 'porto-single' );
	}

	public function get_keywords() {
		return array( 'single', 'share', 'social', 'icon', 'post', 'meta' );
	}

	protected function register_controls() {

		$this->start_controls_section(
			'section_single_share',
			array(
				'label' => esc_html__( 'Style', 'porto-functionality' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_control(
			'share',
			array(
				'type'  => Controls_Manager::HEADING,
				'label' => __( 'This widget is unfit to realize the single one except the single post.', 'porto-functionality' ),
			)
		);

		$this->add_control(
			'with_icon',
			array(
				'type'        => Controls_Manager::SWITCHER,
				'description' => __( 'To hide the heading icon', 'porto-functionality' ),
				'label'       => __( 'Without Icon?', 'porto-functionality' ),
			)
		);

		$this->add_control(
			'share_heading_style',
			array(
				'label' => esc_html__( 'Share Title', 'porto-functionality' ),
				'type'  => Controls_Manager::HEADING,
			)
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'        => 'share_heading',
				'description' => __( 'To control the heading', 'porto-functionality' ),
				'selector'    => '.elementor-element-{{ID}} .post-share h3',
			)
		);

		$this->add_control(
			'title_space',
			array(
				'label'       => esc_html__( 'Title Spacing', 'porto-functionality' ),
				'type'        => Controls_Manager::SLIDER,
				'size_units'  => array(
					'px',
					'rem',
					'em',
				),
				'description' => __( 'To control the space between the icon and title', 'porto-functionality' ),
				'selectors'   => array(
					'.elementor-element-{{ID}} .post-share h3' => 'margin-bottom: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_control(
			'share_icon_style',
			array(
				'label'     => esc_html__( 'Share Icons', 'porto-functionality' ),
				'type'      => Controls_Manager::HEADING,
				'separator' => 'before',
			)
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			array(
				'name'        => 'share_icons',
				'description' => __( 'To control the typography of the social icons', 'porto-functionality' ),
				'selector'    => '.elementor-element-{{ID}} .share-links a',
			)
		);

		$this->add_control(
			'share_width',
			array(
				'label'      => esc_html__( 'Share Width', 'porto-functionality' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array(
					'px',
					'rem',
					'em',
				),
				'selectors'  => array(
					'.elementor-element-{{ID}} .share-links a' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->add_control(
			'share_space',
			array(
				'label'      => esc_html__( 'Share Spacing', 'porto-functionality' ),
				'type'       => Controls_Manager::SLIDER,
				'size_units' => array(
					'px',
					'rem',
					'em',
				),
				'selectors'  => array(
					'.elementor-element-{{ID}} .share-links a + a' => 'margin-' . ( is_rtl() ? 'right' : 'left' ) . ': {{SIZE}}{{UNIT}};',
				),
			)
		);

		$this->end_controls_section();
	}

	protected function render() {
		$atts                 = $this->get_settings_for_display();
		$atts['page_builder'] = 'elementor';
		echo PortoBuildersSingle::get_instance()->shortcode_single_share( $atts );
	}
}
