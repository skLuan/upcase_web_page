<?php
/**
 * Porto Elementor Single Post Meta Widget
 *
 * @author     P-THEMES
 * @since      2.3.0
 */
defined( 'ABSPATH' ) || die;

use Elementor\Controls_Manager;
use Elementor\Core\Schemes\Color;
use Elementor\Group_Control_Typography;

class Porto_Elementor_Single_Meta_Widget extends \Elementor\Widget_Base {

	public function get_name() {
		return 'porto_single_meta';
	}

	public function get_title() {
		return esc_html__( 'Post Meta', 'porto-functionality' );
	}

	public function get_icon() {
		return 'eicon-post-info';
	}

	public function get_categories() {
		return array( 'porto-single' );
	}

	public function get_keywords() {
		return array( 'single', 'custom', 'layout', 'post', 'meta', 'date', 'author', 'category', 'tags', 'comments', 'like' );
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
			'section_single_meta',
			array(
				'label' => esc_html__( 'Style', 'porto-functionality' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			)
		);

		$this->add_control(
			'meta',
			array(
				'type'  => Controls_Manager::HEADING,
				'label' => __( 'This widget is unfit to realize the single one except the single post.', 'porto-functionality' ),
			)
		);

			$this->add_control(
				'show_divider',
				array(
					'type'        => Controls_Manager::SWITCHER,
					'description' => __( 'To show divider between the post metas.', 'porto-functionality' ),
					'label'       => __( 'Show Divider', 'porto-functionality' ),
					'default'     => '',
				)
			);

			$this->add_control(
				'hide_icon',
				array(
					'type'        => Controls_Manager::SWITCHER,
					'description' => __( 'To hide icon of metas except the date.', 'porto-functionality' ),
					'label'       => __( 'Hide Icon', 'porto-functionality' ),
				)
			);
			$this->add_control(
				'hide_by',
				array(
					'type'        => Controls_Manager::SWITCHER,
					'description' => __( 'To hide by of author meta.', 'porto-functionality' ),
					'label'       => __( 'Hide by of author', 'porto-functionality' ),
					'default'     => '',
				)
			);
			$this->add_control(
				'post-metas',
				array(
					'type'     => Controls_Manager::SELECT2,
					'label'    => __( 'Show Post Metas', 'porto-functionality' ),
					'options'  => array(
						'date'     => 'Date',
						'author'   => 'Author',
						'cats'     => 'Category',
						'tags'     => 'Tags',
						'comments' => 'Comments',
						'like'     => 'Like',
					),
					'multiple' => true,
					'default'  => '',
				)
			);
			$this->add_control(
				'meta_align',
				array(
					'label'       => esc_html__( 'Align', 'porto-functionality' ),
					'type'        => Controls_Manager::CHOOSE,
					'description' => esc_html__( 'Controls metas alignment. Choose from Left, Center, Right.', 'porto-functionality' ),
					'options'     => array(
						'left'   => array(
							'title' => esc_html__( 'Left', 'porto-functionality' ),
							'icon'  => 'eicon-text-align-left',
						),
						'center' => array(
							'title' => esc_html__( 'Center', 'porto-functionality' ),
							'icon'  => 'eicon-text-align-center',
						),
						'right'  => array(
							'title' => esc_html__( 'Right', 'porto-functionality' ),
							'icon'  => 'eicon-text-align-right',
						),
					),
					'selectors'   => array(
						'.elementor-element-{{ID}} .post-meta' => 'text-align: {{VALUE}}',
					),
				)
			);

			$this->add_control(
				'meta_space',
				array(
					'label'       => esc_html__( 'Meta Spacing', 'porto-functionality' ),
					'description' => esc_html__( 'Set custom space of metas.', 'porto-functionality' ),
					'type'        => Controls_Manager::SLIDER,
					'description' => __( 'To control the space between post metas.', 'porto-functionality' ),
					'size_units'  => array(
						'px',
						'rem',
						'em',
					),
					'selectors'   => array(
						'.elementor-element-{{ID}} .post-meta > span:not(:first-child)' => 'margin-' . ( is_rtl() ? 'right' : 'left' ) . ': {{SIZE}}{{UNIT}};',
					),
				)
			);

			$this->add_group_control(
				Group_Control_Typography::get_type(),
				array(
					'name'     => 'meta_style',
					'selector' => '.elementor-element-{{ID}} .post-meta',
				)
			);

			$this->add_control(
				'link_color',
				array(
					'label'     => esc_html__( 'Color', 'porto-functionality' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						'.elementor-element-{{ID}} .post-meta,
						.elementor-element-{{ID}} .post-meta i, 
						.elementor-element-{{ID}} .post-meta a' => 'color: {{VALUE}}',
					),
				)
			);

			$this->add_control(
				'link_hover_color',
				array(
					'label'     => esc_html__( 'Hover Color', 'porto-functionality' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						'.elementor-element-{{ID}} .post-meta a:hover,.elementor-element-{{ID}} .post-meta a:focus' => 'color: {{VALUE}}',
					),
				)
			);

			$this->add_control(
				'divider_color',
				array(
					'label'     => esc_html__( 'Divider Color', 'porto-functionality' ),
					'type'      => Controls_Manager::COLOR,
					'selectors' => array(
						'.elementor-element-{{ID}} .post-meta > span:after' => 'color: {{VALUE}}',
					),
					'condition' => array(
						'show_divider' => 'yes',
					),
				)
			);

			$this->add_control(
				'divider_space',
				array(
					'label'       => esc_html__( 'Divider Spacing', 'porto-functionality' ),
					'type'        => Controls_Manager::SLIDER,
					'description' => __( 'To control the space between meta and divider.', 'porto-functionality' ),
					'size_units'  => array(
						'px',
						'rem',
						'em',
					),
					'selectors'   => array(
						'.elementor-element-{{ID}} .post-meta > span:after' => 'margin-' . ( is_rtl() ? 'right' : 'left' ) . ': {{SIZE}}{{UNIT}};',
					),
					'condition'   => array(
						'show_divider' => 'yes',
					),
				)
			);
		$this->end_controls_section();
	}

	protected function render() {
		$atts                 = $this->get_settings_for_display();
		$atts['page_builder'] = 'elementor';
		echo PortoBuildersSingle::get_instance()->shortcode_single_meta( $atts );
	}
}
