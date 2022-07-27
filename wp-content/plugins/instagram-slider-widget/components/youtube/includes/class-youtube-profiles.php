<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class WIS_Youtube_Profiles extends WIS_Profiles {
	/**
	 * @var string
	 */
	public $social = 'youtube';

	/**
	 * @var string
	 */
	public $profiles_option_name = WYT_ACCOUNT_OPTION_NAME;

	/**
	 * @var \YoutubeFeed\Api\YoutubeApi
	 */
	public $youtube_api;

	/**
	 * WIS_Facebook_Profiles constructor.
	 *
	 * @param $page WIS_ProfilesPage
	 */
	public function __construct( $page = null ) {
		if ( $page ) {
			parent::__construct( $page );
		}

		$this->youtube_api = new \YoutubeFeed\Api\YoutubeApi();

		//AJAX
		add_action( 'wp_ajax_wyt_add_account_by_token', [ $this, 'add_account_by_token' ] );
	}

	public function update_youtube_api_key( $api_key ) {
		if ( $api_key ) {
			$this->youtube_api->setApiKey( $api_key );

			return WIS_Plugin::app()->updateOption( WYT_API_KEY_OPTION_NAME, $api_key );
		}

		return false;
	}

	public function update_youtube_feed( $profile ) {
		if ( $profile ) {
			$pro = WIS_Plugin::app()->getOption( WYT_ACCOUNT_OPTION_NAME, [] );
			if ( ! is_array( $pro ) ) {
				$pro = [];
			}
			$pro[ $profile->snippet->channelId ] = $profile;

			return WIS_Plugin::app()->updateOption( WYT_ACCOUNT_OPTION_NAME, $pro );
		}

		return false;
	}

	/**
	 * Логика на вкладке youtube
	 *
	 * @return string
	 */
	public function content() {
		if ( isset( $_POST['wyt_api_key'] ) && $_POST['wyt_api_key'] != null ) {
			$this->update_youtube_api_key( $_POST['wyt_api_key'] );
		}

		if ( isset( $_POST['wyt_feed_link'] ) && $_POST['wyt_feed_link'] != null ) {

			$link              = $_POST['wyt_feed_link'];
			$start_with_string = 'youtube.com/channel/';

			if ( stripos( $link, $start_with_string ) === false ) {
				return false;
			}

			$id = explode( '/channel/', $link )[1];
			$id = explode( '/', $id )[0];

			$profile                     = $this->youtube_api->getUserById( $id )->items[0];
			$profile->snippet->channelId = $id;
			$this->update_youtube_feed( $profile );
		}

		$accounts = WIS_Plugin::app()->getPopulateOption( WYT_ACCOUNT_OPTION_NAME, [] );
		$data     = [
			'is_premium' => WIS_Plugin::app()->is_premium(),
			'accounts'   => $accounts,
			'social'     => $this->social,
		];
		$result   = $this->page->render( WYT_COMPONENT_VIEWS_DIR . '/accounts', $data );

		return $result;
	}

	/**
	 * Get count of accounts
	 *
	 * @return int
	 */
	public function count_accounts() {
		$account = WIS_Plugin::app()->getOption( WYT_ACCOUNT_OPTION_NAME, [] );

		return count( $account );
	}

	public function delete_account( $name ) {
		$accounts = WIS_Plugin::app()->getOption( $this->profiles_option_name, [] );
		if ( isset( $accounts[ $name ] ) ) {
			unset( $accounts[ $name ] );
		}
		WIS_Plugin::app()->updateOption( $this->profiles_option_name, $accounts );
	}


}