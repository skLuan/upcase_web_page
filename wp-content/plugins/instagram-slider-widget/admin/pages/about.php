<?php


// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The page Settings.
 *
 * @since 1.0.0
 */
class WIS_AboutPage extends WIS_Page {

	/**
	 * Тип страницы
	 * options - предназначена для создании страниц с набором опций и настроек.
	 * page - произвольный контент, любой html код
	 *
	 * @var string
	 */
	public $type = 'page';

	/**
	 * Page content template
	 *
	 * @var string
	 */
	public $template_name = 'about';

	/**
	 * Menu icon (only if a page is placed as a main menu).
	 * For example: '~/assets/img/menu-icon.png'
	 * For example dashicons: '\f321'
	 * @var string
	 */
	public $menu_icon = '';

	/**
	 * @var string
	 */
	public $page_menu_dashicon = "dashicons-info-outline";

	/**
	 * @var string
	 */
	public $menu_position = 60;

	/**
	 * @var int
	 */
	public $page_menu_position = 40;

	/**
	 * {@inheritdoc}
	 */
	public $show_menu_tab = false;

	/**
	 * @param WIS_Plugin $plugin
	 */
	public function __construct( $plugin ) {
		$this->id          = "about";
		$this->menu_target = "feeds-" . $plugin->getPluginName();
		$this->page_title  = __( 'About ' . $plugin->getPluginTitle(), 'instagram-slider-widget' );
		$this->menu_title  = __( 'About', 'instagram-slider-widget' );

		parent::__construct( $plugin );

		$this->plugin = $plugin;
	}
}