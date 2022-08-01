<?php
if ( ! defined( 'ABSPATH' ) ) {
	die();
}

/**
 *
 * Register elementor custom addons for elements and widgets.
 *
 * @since 2.2.0
 */

use Elementor\Controls_Manager;

/* Mouse Parallax Options */
if ( ! function_exists( 'porto_elementor_mpx_controls' ) ) :
	function porto_elementor_mpx_controls( $self ) {
		$self->start_controls_section(
			'_porto_section_floating_effect',
			array(
				'label' => __( 'Floating Effects', 'porto-functionality' ),
				'tab'   => Porto_Elementor_Editor_Custom_Tabs::TAB_CUSTOM,
			)
		);
			$self->add_control(
				'mouse_parallax',
				array(
					'label'       => esc_html__( 'Mouse Parallax?', 'porto-functionality' ),
					'type'        => Controls_Manager::SWITCHER,
					'description' => esc_html__( 'Animate your elements chasing your mouse move.', 'porto-functionality' ),
				)
			);

			$self->add_control(
				'mouse_parallax_inverse',
				array(
					'label'       => esc_html__( 'Mouse Parallax Inverse?', 'porto-functionality' ),
					'type'        => Controls_Manager::SWITCHER,
					'description' => esc_html__( 'Animate your elements inversely chasing your mouse move.', 'porto-functionality' ),
					'condition'   => array(
						'mouse_parallax' => 'yes',
					),
				)
			);

			$self->add_control(
				'mouse_parallax_speed',
				array(
					'label'       => esc_html__( 'Mouse Parallax Speed', 'porto-functionality' ),
					'type'        => Controls_Manager::SLIDER,
					'description' => esc_html__( 'Control your elements mouse chasing speed.', 'porto-functionality' ),
					'default'     => array(
						'size' => '0.5',
					),
					'range'       => array(
						'' => array(
							'step' => 0.1,
							'min'  => 0,
							'max'  => 5,
						),
					),
					'condition'   => array(
						'mouse_parallax' => 'yes',
					),
				)
			);

		$self->end_controls_section();

		if ( class_exists( 'Porto_Elementor_Section' ) && $self instanceof Porto_Elementor_Section ) {
			//$self->get_data( 'isInner' )
			$self->start_controls_section(
				'_porto_section_scroll_parallax_effect',
				array(
					'label' => __( 'Scroll Parallax', 'porto-functionality' ),
					'tab'   => Porto_Elementor_Editor_Custom_Tabs::TAB_CUSTOM,
				)
			);

			$self->add_control(
				'scroll_parallax',
				array(
					'label'       => esc_html__( 'Scroll Parallax?', 'porto-functionality' ),
					'type'        => Controls_Manager::SWITCHER,
					'description' => esc_html__( 'Section\'s width changes when scrolling page.', 'porto-functionality' ),
				)
			);

			$self->add_control(
				'scroll_unit',
				array(
					'label'     => __( 'CSS Unit', 'porto-functionality' ),
					'type'      => Controls_Manager::SELECT,
					'options'   => array(
						'vw' => 'vw',
						'%'  => '%',
					),
					'default'   => 'vw',
					'condition' => array(
						'scroll_parallax' => 'yes',
					),
				)
			);

			$self->add_control(
				'scroll_parallax_width',
				array(
					'label'     => esc_html__( 'Start Width', 'porto-functionality' ),
					'type'      => Controls_Manager::SLIDER,
					'default'   => array(
						'unit' => '',
						'size' => 40,
					),
					'range'     => array(
						'' => array(
							'step' => 1,
							'min'  => 20,
							'max'  => 90,
						),
					),
					'condition' => array(
						'scroll_parallax' => 'yes',
					),
				)
			);

			$self->end_controls_section();

			$self->start_controls_section(
				'_porto_section_particles_effect',
				array(
					'label' => __( 'Particles Effect', 'porto-functionality' ),
					'tab'   => Porto_Elementor_Editor_Custom_Tabs::TAB_CUSTOM,
				)
			);

			$self->add_control(
				'particles_img',
				array(
					'type'    => Controls_Manager::MEDIA,
					'label'   => __( 'Particles Image', 'porto-functionality' ),
					'dynamic' => array(
						'active' => true,
					),
				)
			);

			$self->add_control(
				'particles_hover_effect',
				array(
					'label'     => __( 'Hover Effect', 'porto-functionality' ),
					'type'      => Controls_Manager::SELECT,
					'options'   => array(
						''        => __( 'None', 'porto' ),
						'grab'    => __( 'Grab', 'porto' ),
						'bubble'  => __( 'Bubble', 'porto' ),
						'repulse' => __( 'Repulse', 'porto' ),
					),
					'default'   => '',
					'condition' => array(
						'particles_img[id]!' => '',
					),
				)
			);

			$self->add_control(
				'particles_click_effect',
				array(
					'label'     => __( 'Click Effect', 'porto-functionality' ),
					'type'      => Controls_Manager::SELECT,
					'options'   => array(
						''        => __( 'None', 'porto' ),
						'grab'    => __( 'Grab', 'porto' ),
						'bubble'  => __( 'Bubble', 'porto' ),
						'repulse' => __( 'Repulse', 'porto' ),
						'push'    => __( 'Push', 'porto' ),
						'remove'  => __( 'Remove', 'porto' ),
					),
					'default'   => '',
					'condition' => array(
						'particles_img[id]!' => '',
					),
				)
			);

			$self->end_controls_section();
		}
	}
endif;
