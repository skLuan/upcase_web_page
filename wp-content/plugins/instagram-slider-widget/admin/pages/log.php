<?php
// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once WIS_PLUGIN_DIR . '/admin/class-page-logger.php';

/**
 * Класс отвечает за работу страницы логов.
 *
 * @author        Artem Prihodko <webtemyk@yandex.ru>
 * @copyright (c) 2021, Webcraftic
 * @version       1.0
 */
class WIS_LogPage extends WIS_Page_Logger {

	/**
	 * {@inheritdoc}
	 */
	public $id;

	/**
	 * Тип страницы
	 * options - предназначена для создании страниц с набором опций и настроек.
	 * page - произвольный контент, любой html код
	 *
	 * @var string
	 */
	public $type = 'page';

	/**
	 * @var string
	 */
	public $page_menu_dashicon = 'dashicons-list-view';

	/**
	 * Menu position (only if a page is placed as a main menu).
	 * @link http://codex.wordpress.org/Function_Reference/add_menu_page
	 * @var string
	 */
	public $menu_position = 58;

	/**
	 * @var bool
	 */
	public $internal = false;

	/**
	 * Заголовок страницы, также использует в меню, как название закладки
	 *
	 * @var bool
	 */
	public $show_page_title = true;

	/**
	 * @var int
	 */
	public $page_menu_position = 300;

	/**
	 * {@inheritdoc}
	 */
	public $available_for_multisite = false;

	/**
	 * {@inheritdoc}
	 */
	public $show_right_sidebar_in_options = false;

	/**
	 * @param WIS_Plugin $plugin
	 */
	public function __construct( WIS_Plugin $plugin ) {
		$this->id          = 'log';
		$this->menu_target = "feeds-" . $plugin->getPluginName();
		$this->page_title  = __( 'Plugin logs', 'instagram-slider-widget' );
		$this->menu_title  = $this->getMenuTitle();

		$this->plugin = $plugin;

		parent::__construct( $plugin );
	}

	/**
	 * {@inheritdoc}
	 */
	public function getMenuTitle() {
		return __( 'Logs', 'instagram-slider-widget' );
	}

	/**
	 * {@inheritdoc}
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function assets( $scripts, $styles ) {
		parent::assets( $scripts, $styles );
	}
}
