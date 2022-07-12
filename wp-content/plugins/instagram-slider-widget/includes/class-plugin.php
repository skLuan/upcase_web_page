<?php

// Exit if accessed directly

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Основной класс плагина Social Slider Feed
 *
 * @author        Artem Prihodko <webtemyk@yandex.ru>
 * @copyright (c) 2019 Webraftic Ltd
 * @version       1.0
 */
class WIS_Plugin extends \Wbcr_Factory453_Plugin {

	/**
	 * @see self::app()
	 * @var \Wbcr_Factory453_Plugin
	 */
	private static $app;

	/**
	 * @var array Список слайдеров
	 */
	public $sliders = [];

	/**
	 * Статический метод для быстрого доступа к интерфейсу плагина.
	 *
	 * Позволяет разработчику глобально получить доступ к экземпляру класса плагина в любом месте
	 * плагина, но при этом разработчик не может вносить изменения в основной класс плагина.
	 *
	 * Используется для получения настроек плагина, информации о плагине, для доступа к вспомогательным
	 * классам.
	 *
	 * @return \Wbcr_Factory453_Plugin
	 */
	public static function app() {
		return self::$app;
	}

	/**
	 * Статический метод для быстрого доступа к классу соцсети.
	 *
	 * @param string $class
	 *
	 * @return $class
	 */
	public static function social( $class ) {
		return new $class;
	}

	/**
	 * Конструктор
	 *
	 * Подробнее о свойстве $app см. self::app()
	 *
	 * @param string $plugin_path
	 * @param array $data
	 *
	 * @throws \Exception
	 */
	public function __construct( $plugin_path, $data ) {
		$this->load_components();

		parent::__construct( $plugin_path, $data );
		self::$app = $this;

		if ( is_admin() ) {
			// Регистрации класса активации/деактивации плагина
			$this->init_activation();

			// Инициализация скриптов для бэкенда
			$this->admin_scripts();

			//Подключение файла проверки лицензии
			require( WIS_PLUGIN_DIR . '/admin/ajax/check-license.php' );
		} else {
			$this->front_scripts();
		}

		$this->global_scripts();
	}

	protected function init_activation() {
		include_once( WIS_PLUGIN_DIR . '/admin/class-wis-activation.php' );
		$this->registerActivation( 'WIS_Activation' );
	}

	public function load_components() {
		$components = scandir( WIS_COMPONENTS_DIR );
		foreach ( $components as $key => $value ) {
			if ( ! in_array( $value, [ ".", ".." ] ) ) {
				$comp = WIS_COMPONENTS_DIR . "/" . $value;
				if ( is_dir( $comp ) ) {
					if ( file_exists( $comp . "/load.php" ) ) {
						require_once $comp . "/load.php";
					}
				}
			}
		}
	}

	/**
	 * Регистрирует классы страниц в плагине
	 */
	private function register_pages() {
		require_once WIS_PLUGIN_DIR . '/admin/class-page.php';

		self::app()->registerPage( 'WIS_FeedsPage', WIS_PLUGIN_DIR . '/admin/pages/feeds.php' );
		self::app()->registerPage( 'WIS_ProfilesPage', WIS_PLUGIN_DIR . '/admin/pages/profiles.php' );
		self::app()->registerPage( 'WIS_LicensePage', WIS_PLUGIN_DIR . '/admin/pages/license.php' );
		self::app()->registerPage( 'WIS_LogPage', WIS_PLUGIN_DIR . '/admin/pages/log.php' );
		self::app()->registerPage( 'Manual', WIS_PLUGIN_DIR . '/admin/pages/manual.php' );

		self::app()->registerPage( 'WIS_AboutPage', WIS_PLUGIN_DIR . '/admin/pages/about.php' );

	}

	/**
	 * Выполняет php сценарии, когда все Wordpress плагины будут загружены
	 *
	 * @throws \Exception
	 * @since  1.0.0
	 * @author Alexander Kovalev <alex.kovalevv@gmail.com>
	 */
	public function plugins_loaded() {
		if ( is_admin() ) {
			$this->register_pages();
		}
	}

	/**
	 * Код для админки
	 */
	private function admin_scripts() {
		add_action( 'plugins_loaded', [ $this, 'plugins_loaded' ] );

		add_action( 'admin_enqueue_scripts', [ $this, 'admin_enqueue_assets' ] );
		add_action( 'admin_notices', [ $this, 'new_api_admin_notice' ] );
		add_action( 'admin_notices', [ $this, 'check_token_admin_notice' ] );
	}

	/**
	 * Код для админки и фронтенда
	 */
	private function global_scripts() {
		/**
		 * On widgets Init register Widget
		 */
		add_action( 'plugins_loaded', function () {
			add_action( 'widgets_init', [ 'WIG_Widget', 'register_widget' ] );
			add_action( 'widgets_init', [ 'WFB_Widget', 'register_widget' ] );
			add_action( 'widgets_init', [ 'WYT_Widget', 'register_widget' ] );
		} );
	}

	/**
	 * Код для фронтенда
	 */
	private function front_scripts() {
		add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_assets' ] );
	}

	public function admin_enqueue_assets( $hook ) {
		if ( 'widgets.php' == $hook || 'post.php' == $hook ) {
			//wp_enqueue_style( 'jr-insta-admin-styles', WIS_PLUGIN_URL . '/admin/assets/css/jr-insta-admin.css', array(), WIS_PLUGIN_VERSION );
			//wp_enqueue_script( 'jr-insta-admin-script', WIS_PLUGIN_URL . '/admin/assets/js/jr-insta-admin.js', array( 'jquery' ), WIS_PLUGIN_VERSION, true );
			wp_enqueue_script( 'jr-tinymce-button', WIS_PLUGIN_URL . '/admin/assets/js/tinymce_button.js', [ 'jquery' ], WIS_PLUGIN_VERSION, false );

			$wis_shortcodes = json_encode( $this->get_isw_widgets() );
			wp_add_inline_script( 'jr-tinymce-button', "var wis_shortcodes = $wis_shortcodes;" );

			/*
			$account_nonce = json_encode( [ 'nonce' => wp_create_nonce( "addAccountByToken" ) ] );
			$wis_nonce     = json_encode( [
				'nonce'          => wp_create_nonce( 'wis_nonce' ),
				'remove_account' => __( 'Are you sure want to delete this account?', 'instagram-slider-widget' ),
			] );
			wp_add_inline_script( 'jr-insta-admin-script', "var add_account_nonce = $account_nonce; var wis = $wis_nonce;" );
			*/
		}

	}

	public function enqueue_assets() {

	}

	/**
	 * Метод проверяет активацию премиум плагина и наличие действующего лицензионного ключа
	 *
	 * @return bool
	 */
	public function is_premium() {
		if ( $this->premium->is_active() && $this->premium->is_activate() //&& is_plugin_active( "{$this->premium->get_setting('slug')}/{$this->premium->get_setting('slug')}.php" )
		) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Получает все виджеты этого плагина
	 *
	 * @return array
	 */
	public function get_isw_widgets() {
		$settings = WIG_Widget::app()->get_settings();
		$result   = [];
		foreach ( $settings as $key => $widget ) {
			$result[] = [
				'title' => $widget['title'],
				'id'    => $key,
			];
		}

		return $result;
	}

	/**
	 * Выводит нотис о том, что изменилось в новой версии
	 *
	 */
	public function new_api_admin_notice() {
		$text     = "";
		$accounts = $this->getOption( WIG_PROFILES_OPTION, [] );
		if ( count( $accounts ) ) {
			foreach ( $accounts as $account ) {
				if ( strlen( $account['token'] ) < 55 ) {
					$text .= "<p><b>@" . $account['username'] . "</b></p>";
				}
			}
		}
		if ( ! empty( $text ) ) {
			?>
            <div class="notice notice-info is-dismissible">
                <p>
                    <b>Social Slider Feed:</b><br>
                    The plugin has moved to the new Instagram Basic Display API.<br>
                    To make your widgets work again, reconnect your instagram accounts in the plugin settings.
                    <a href="https://cm-wp.com/important-update-social-slider-widget/" class="">Read more about the
                        changes</a>
                </p>
            </div>
			<?php
		}
	}

	/**
	 * Выводит нотис о том, что нужно обновить токены
	 *
	 */
	public function check_token_admin_notice() {
		$text     = "";
		$accounts = $this->getOption( WIG_PROFILES_OPTION, [] );
		if ( count( $accounts ) ) {
			foreach ( $accounts as $account ) {
				if ( strlen( $account['token'] ) < 55 ) {
					$text .= "<p><b>@" . $account['username'] . "</b></p>";
				}
			}
		}
		if ( ! empty( $text ) ) {
			echo '<div class="notice notice-warning">
					<p><b>Social Slider Feed:</b><br>You need to reconnect this accounts in the <a href="' . admin_url( "admin.php?page=settings-wisw&tab=instagram" ) . '">plugin settings</a>' . $text . '</p>
				  </div>';
		}
	}
}
