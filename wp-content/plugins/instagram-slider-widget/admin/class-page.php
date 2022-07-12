<?php

use WBCR\Factory_Templates_106\ImpressiveLite;

/**
 * Class of plugin page. Must be registered in file admin/class-prefix-page.php
 *
 * @author        Webcraftic <wordpress.webraftic@gmail.com>
 * @copyright (c) 02.12.2018, Webcraftic
 * @see           ImpressiveLite
 *
 * @version       1.0.0
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class WIS_Page extends ImpressiveLite {

	/**
	 * Name of the template to get content of. It will be based on plugins /admin/views/ dir.
	 * /admin/views/tab-{$template_name}.php
	 *
	 * @var string
	 */
	public $template_name = "main";

	/**
	 * @var string
	 */
	public $custom_target = "admin.php";

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
	 * {@inheritdoc}
	 */
	public $show_right_sidebar_in_options = false;

	/**
	 * {@inheritdoc}
	 */
	public $show_search_options_form = false;

	/**
	 * Show this page in tabs?
	 * default: true
	 */
	public $show_menu_tab = true;

	/**
	 * Title for tab in menu
	 */
	public $menu_tab_title;

	/**
	 * @see self::app()
	 * @var self
	 */
	private static $instance;

	/**
	 * @return self
	 */
	public static function instance() {
		return self::$instance;
	}

	public function __construct( $plugin ) {
		$this->menu_tab_title = $this->menu_tab_title ?? $this->menu_title;
		$this->template_name  = 'page-' . $this->template_name;

		parent::__construct( $plugin );

		self::$instance = $this;
	}

	public function assets( $scripts, $styles ) {
		parent::assets( $scripts, $styles );

		/*$this->scripts->request( [
			'control.checkbox',
			'control.dropdown',
			'control.integer',
			'plugin.nouislider',
			'bootstrap.dropdown'
		], 'bootstrap' );

		$this->styles->request( [
			'bootstrap.core',
			'bootstrap.form-group',
			'bootstrap.separator',
			'control.dropdown',
			'control.checkbox',
			'control.integer',
			'plugin.nouislider',
		], 'bootstrap' );*/

		$this->styles->add( WIS_PLUGIN_URL . '/admin/assets/css/admin-style.css', [], WIS_PLUGIN_VERSION );
		$this->scripts->add( WIS_PLUGIN_URL . '/admin/assets/js/admin-script.js', [ 'jquery' ], WIS_PLUGIN_VERSION );
	}

	protected function isShowRightSidebar() {
		return $this->show_right_sidebar && ! $this->plugin->is_premium();
	}

	public function showRightSidebar() {
		if ( ! $this->plugin->is_premium() ) {
			$this->plugin->get_adverts_manager()->render_placement( 'right_sidebar' );
		}
	}

	/**
	 * Render and return content of the template.
	 * /admin/views/tab-{$template_name}.php
	 *
	 * @param string $name
	 * @param array $args
	 *
	 * @return mixed Content of the page
	 */
	public function render( $name = '', $args = [] ) {
		if ( '' == $name ) {
			$name = $this->template_name;
		}
		ob_start();
		if ( is_callable( $name ) ) {
			echo call_user_func( $name );
		} else if ( strpos( $name, DIRECTORY_SEPARATOR ) !== false && ( is_file( $name ) || is_file( $name . '.php' ) ) ) {
			if ( is_file( $name ) ) {
				$path = $name;
			} else {
				$path = $name . '.php';
			}
		} else {
			$path = WIS_PLUGIN_DIR . "/admin/views/{$name}.php";
		}
		if ( ! is_file( $path ) ) {
			ob_end_clean();

			return 'Template not found';
		}
		extract( $args );
		include $path;
		$content = ob_get_contents();
		ob_end_clean();

		return $content;
	}

	public function getPluginTitle() {
		$logo = "<div class='wisw-logo-title'>&nbsp;</div>";

		return $logo . $this->plugin->getPluginTitle();
	}

	/**
	 * Show rendered template - $template_name
	 */
	public function showPageContent() {
		echo $this->render();
	}

	public function getPluginSlug() {
		$plugin_slug = $this->plugin->getPluginInfoAttr( 'updates_settings' );

		return $plugin_slug['slug'] ?? WAPT_PLUGIN_SLUG;
	}

	/**
	 * @param string $position
	 *
	 * @return mixed|void
	 */
	protected function getPageWidgets( $position = 'bottom' ) {
		$widgets = [];

		if ( 'bottom' == $position ) {
			$widgets['rating_widget']  = $this->getRatingWidget( [] );
			$widgets['support_widget'] = $this->getSupportWidget();
		}

		/**
		 * @since 3.8.2 - добавлен
		 */
		$widgets = apply_filters( 'wbcr/factory/pages/impressive_lite/widgets', $widgets, $position, $this->plugin, $this );

		return $widgets;
	}

	/**
	 * Создает html разметку виджета рейтинга
	 *
	 * @param array $args
	 *
	 * @author Artem Prihodko <webtemyk@yandex.ru>
	 */
	public function showRatingWidget( array $args ) {
		$plugin_slug = $this->getPluginSlug();

		if ( ! isset( $args[0] ) || empty( $args[0] ) ) {
			$page_url = "https://wordpress.org/support/plugin/{$plugin_slug}/reviews/#new-post";
		} else {
			$page_url = $args[0];
		}

		$page_url = apply_filters( 'wbcr_factory_pages_452_implite_rating_widget_url', $page_url, $this->plugin->getPluginName(), $this->getResultId() );

		?>
        <div class="wbcr-factory-sidebar-widget">
            <p>
                <strong><?php _e( 'Do you want the plugin to improved and update?', 'wbcr_factory_templates_106' ); ?></strong>
            </p>
            <p><?php _e( 'Help the author, leave a review on wordpress.org. Thanks to feedback, I will know that the plugin is really useful to you and is needed.', 'wbcr_factory_templates_106' ); ?></p>
            <p><?php _e( 'And also write your ideas on how to extend or improve the plugin.', 'wbcr_factory_templates_106' ); ?></p>
            <p>
                <i class="wbcr-factory-icon-5stars"></i>
                <a href="<?php echo $page_url; ?>" title="Go rate us" target="_blank">
                    <strong><?php _e( 'Go rate us and push ideas', 'wbcr_factory_templates_106' ); ?></strong>
                </a>
            </p>
        </div>
		<?php
	}

	/**
	 * Создает html разметку виджета поддержки
	 *
	 * @author @author Artem Prihodko <webtemyk@yandex.ru>
	 */
	public function showSupportWidget() {
		$plugin_slug = $this->getPluginSlug();

		$free_support_url = "https://wordpress.org/support/plugin/{$plugin_slug}";
		$hot_support_url  = $this->plugin->get_support()->get_contacts_url();

		?>
        <div id="wbcr-clr-support-widget" class="wbcr-factory-sidebar-widget">
            <p><strong><?php _e( 'Having Issues?', 'wbcr_factory_templates_106' ); ?></strong></p>
            <div class="wbcr-clr-support-widget-body">
                <p>
					<?php _e( 'We provide free support for this plugin. If you are pushed with a problem, just create a new ticket. We will definitely help you!', 'wbcr_factory_templates_106' ); ?>
                </p>
                <ul>
                    <li><span class="dashicons dashicons-sos"></span>
                        <a href="<?php echo $free_support_url; ?>" target="_blank"
                           rel="noopener"><?php _e( 'Get starting free support', 'wbcr_factory_templates_106' ); ?></a>
                    </li>
                    <li style="margin-top: 15px;background: #fff4f1;padding: 10px;color: #a58074;">
                        <span class="dashicons dashicons-warning"></span>
						<?php printf( __( 'If you find a php error or a vulnerability in plugin, you can <a href="%s" target="_blank" rel="noopener">create ticket</a> in hot support that we responded instantly.', 'wbcr_factory_templates_106' ), $hot_support_url ); ?>
                    </li>
                </ul>
            </div>
        </div>
		<?php
	}

	/**
	 * @return string
	 */
	public function getMenuSubTitle() {
		$menu_title = $this->menu_tab_title ?? $this->menu_title ?? $this->page_title;

		return apply_filters( 'wbcr/factory/pages/impressive_lite/menu_title', $menu_title, $this->plugin->getPluginName(), $this->id );
	}

}


