<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

abstract class WIS_Profiles {
	public $social;

	public $page;

	public $profiles_option_name;

	/**
	 * WIS_Profiles constructor.
	 *
	 * @param $page WIS_ProfilesPage
	 */
	public function __construct( $page ) {
		$this->page = $page;
	}

	/**
	 * @return string
	 */
	abstract public function content();

	/**
	 * @param $social
	 *
	 * @return string
	 */
	public function getSocialUrl() {
		$args = [
			'page' => "settings-" . WIS_Plugin::app()->getPluginName(),
		];
		if ( $this->social ) {
			$args['tab'] = sanitize_text_field( $this->social );
		}

		return admin_url( "admin.php?" ) . http_build_query( $args );
	}


	/**
	 * Get count of accounts
	 *
	 * @return int
	 */
	public function count_accounts() {
		$account = WIS_Plugin::app()->getOption( $this->profiles_option_name, [] );

		return count( $account );
	}
}