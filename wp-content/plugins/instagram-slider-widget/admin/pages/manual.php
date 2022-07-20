<?php




class Manual extends WIS_Page {
	/**
	 * Тип страницы
	 * options - предназначена для создании страниц с набором опций и настроек.
	 * page - произвольный контент, любой html код
	 *
	 * @var string
	 */
	public $type = 'page';

	/**
	 * @var bool
	 */
	public $internal = true;

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
	public $page_menu_dashicon;

	/**
	 * @param WIS_Plugin $plugin
	 */
	public function __construct( $plugin ) {
		$this->internal      = true;
		$this->id            = "manual";
		$this->show_menu_tab = false;
		$this->menu_target   = "feeds-" . $plugin->getPluginName();
		$this->page_title    = __( 'How to get Youtube API key', 'instagram-slider-widget' );
		$this->template_name = "manual";

		parent::__construct( $plugin );

		$this->plugin = $plugin;
	}


	public function assets( $scripts, $styles ) {
		parent::assets( $scripts, $styles );
		wp_enqueue_style( WIS_Plugin::app()->getPrefix() . 'wyoutube-admin', WIS_PLUGIN_URL . '/components/youtube/admin/assets/css/wyoutube-admin.css' );
	}
}