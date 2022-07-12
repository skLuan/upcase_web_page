<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class WIS_Instagram_Profiles extends WIS_Profiles {
	/**
	 * @var string
	 */
	public $social = 'instagram';

	/**
	 * @var string
	 */
	public $profiles_option_name = WIG_PROFILES_OPTION;

	/**
	 * @var string
	 */
	public $profiles_business_option_name = WIG_BUSINESS_PROFILES_OPTION;

	/**
	 * WIS_Facebook_Profiles constructor.
	 *
	 * @param $page WIS_ProfilesPage
	 */
	public function __construct( $page = null ) {
		if ( $page ) {
			parent::__construct( $page );
		}

		add_action( 'wp_ajax_wis_add_account_by_token', [ $this, 'add_account_by_token' ] );
	}

	/**
	 * Ajax Call to add BUSINESS account by token
	 *
	 * @return void
	 * @throws \Exception
	 */
	public function add_account_by_token() {
		if ( isset( $_POST['account'] ) && ! empty( $_POST['account'] ) && isset( $_POST['_ajax_nonce'] ) ) {
			if ( ! current_user_can( 'manage_options' ) ) {
				wp_die( - 2 );
			} else {
				wp_verify_nonce( $_POST['_ajax_nonce'], 'addAccountByToken' );

				$account      = json_decode( stripslashes( $_POST['account'] ), true );
				$user_profile = array();
				$user_profile = apply_filters( 'wis/account/profiles', $user_profile, true );

				if ( ! WIS_Plugin::app()->is_premium() && $this->count_accounts() >= 1 ) {
					wp_die( 'No premium' );
				}

				$user_profile[ $account['username'] ] = $account;
				WIS_Plugin::app()->updateOption( 'account_profiles_new', $user_profile );

				wp_die( 'Ok' );
			}
		} elseif ( isset( $_POST['token'] ) && ! empty( $_POST['token'] ) && isset( $_POST['_ajax_nonce'] ) ) {
			if ( ! current_user_can( 'manage_options' ) ) {
				wp_die( - 2 );
			} else {
				wp_verify_nonce( $_POST['_ajax_nonce'], 'addAccountByToken' );

				$token = $_POST['token'];
				$this->update_account_profiles( $token );

				wp_die( '1' );
			}
		}
	}

	/**
	 * @param string $token
	 * @param string $is_business
	 * @param string $username
	 *
	 * @return bool|array
	 */
	public function update_account_profiles( $token, $is_business = false, $username = "" ) {
		if ( $is_business ) {
			//Получаем аккаунты привязанные к фейсбуку
			$args     = [
				'access_token' => $token,
				'fields'       => 'instagram_business_account',
				'limit'        => 200,
			];
			$url      = WFB_FACEBOOK_SELF_URL . "me/accounts";
			$response = wp_remote_get( add_query_arg( $args, $url ) );
			if ( 200 == wp_remote_retrieve_response_code( $response ) ) {
				$pages = json_decode( wp_remote_retrieve_body( $response ), true );
				//$username = $result['data'][0]['name'];
				$html  = "";
				$users = [];
				foreach ( $pages['data'] as $key => $r ) {
					if ( isset( $r['instagram_business_account'] ) && isset( $r['instagram_business_account']['id'] ) ) {
						$args     = [
							'fields'       => 'username,id,followers_count,follows_count,media_count,name,profile_picture_url',
							'access_token' => $token,
						];
						$url      = WFB_FACEBOOK_SELF_URL . $r['instagram_business_account']['id'];
						$response = wp_remote_get( add_query_arg( $args, $url ) );
						if ( 200 == wp_remote_retrieve_response_code( $response ) ) {
							$result          = json_decode( wp_remote_retrieve_body( $response ), true );
							$result['token'] = $token;
							$users[]         = $result;
							$html            .= "<div class='wis-row wis-row-style' id='wis-instagram-row' data-account='" . json_encode( $result ) . "'>";
							$html            .= "<div class='wis-col-1 wis-col1-style'><img src='{$result['profile_picture_url']}' width='50' alt='{$result['username']}'></div>";
							$html            .= "<div class='wis-col-2 wis-col2-style'>{$result['name']}<br>@{$result['username']}</div>";
							$html            .= "</div>";
						}
						if ( "" !== $username && $username == $result['username'] ?? '' ) {
							$user_profile = [];
							$user_profile = apply_filters( 'wis/account/profiles', $user_profile, true );

							$user_profile[ $result['username'] ] = $result;
							WIS_Plugin::app()->updateOption( WIG_BUSINESS_PROFILES_OPTION, $user_profile );
						}
					}
				}

				return [ $html, $users ];
			}
		} else {
			$expires  = 0;
			$profiles = WIS_Plugin::app()->getOption( WIG_PROFILES_OPTION, [] );
			foreach ( $profiles as $profile ) {
				if ( $profile['token'] == $token ) {
					if ( $profile['expires'] <= time() ) {
						$new     = $this->refresh_token( $token );
						$token   = $new['access_token'];
						$expires = $new['expires_in']; //5183944 sec
					}
					break;
				}
			}

			$args = [
				'fields'       => 'id,media_count,username',
				'access_token' => $token,
			];

			$url      = WIG_USERS_SELF_URL;
			$url      = add_query_arg( $args, $url );
			$response = wp_remote_get( $url );
			if ( 200 == wp_remote_retrieve_response_code( $response ) ) {
				$user = json_decode( wp_remote_retrieve_body( $response ), true );
				if ( ! isset( $user['id'] ) || empty( $user['id'] ) ) {
					return false;
				}

				$user['token'] = $token;
				if ( $expires > 0 ) {
					$user['expires'] = time() + ( $expires - 86344 );
				} //= 5097600 sec = 59 days
				else {
					$user['expires'] = isset( $profiles[ $user['username'] ]['expires'] ) ? $profiles[ $user['username'] ]['expires'] : time() + 5097600;
				}
				$user_profile = [];
				$user_profile = apply_filters( 'wis/account/profiles', $user_profile );

				if ( ! WIS_Plugin::app()->is_premium() && $this->count_accounts() >= 1 ) {
					return [];
				}

				$user_profile[ $user['username'] ] = $user;
				WIS_Plugin::app()->updateOption( WIG_PROFILES_OPTION, $user_profile );

				return $user;
			}
		}

		return false;
	}

	/**
	 * @param string $token
	 *
	 * @return array
	 */
	public function refresh_token( $token ) {
		$args = [
			'grant_type'   => 'ig_refresh_token',
			'access_token' => $token,
		];

		$url      = WIG_USERS_SELF_MEDIA_URL . 'refresh_access_token';
		$url      = add_query_arg( $args, $url );
		$response = wp_remote_get( $url );
		if ( 200 == wp_remote_retrieve_response_code( $response ) ) {
			$new = json_decode( wp_remote_retrieve_body( $response ), true );
			if ( is_array( $new ) ) {
				return $new;
			}
		}

		return [];
	}

	/**
	 * Логика на вкладке facebook
	 *
	 * @return string
	 */
	public function content() {
		if ( isset( $_GET['tab'] ) && 'instagram' === $_GET['tab'] ) {
			if ( isset( $_GET['type'] ) && 'business' === $_GET['type'] ) {
				if ( isset( $_GET['token_error'] ) ) {
					$token_error = wp_strip_all_tags( $_GET['token_error'] );
					echo '<div class="notice notice-error"><p>' . $token_error . '</p></div>';
					$_SERVER['REQUEST_URI'] = str_replace( '#_', '', remove_query_arg( 'token_error' ) );
				} else {
					if ( isset( $_GET['access_token'] ) ) {
						$token                  = $_GET['access_token'];
						$result                 = $this->update_account_profiles( $token, true );
						$_SERVER['REQUEST_URI'] = remove_query_arg( 'access_token' );
						?>
                        <div id="wis_accounts_modal" class="wis_accounts_modal">
                            <div class="wis_modal_header">
                                Choose Account:
                            </div>
                            <div class="wis_modal_content">
								<?php echo $result[0]; ?>
                            </div>
                        </div>
                        <div id="wis_modal_overlay" class="wis_modal_overlay"></div>
                        <span class="wis-overlay-spinner is-active">&nbsp;</span>
						<?php
					}
				}
			} else {
				if ( isset( $_GET['token_error'] ) ) {
					$token_error = wp_strip_all_tags( $_GET['token_error'] );
					echo '<div class="notice notice-error"><p>' . $token_error . '</p></div>';
					$_SERVER['REQUEST_URI'] = str_replace( '#_', '', remove_query_arg( 'token_error' ) );
				} else {
					if ( isset( $_GET['access_token'] ) ) {
						$token                  = $_GET['access_token'];
						$result                 = $this->update_account_profiles( $token );
						$_SERVER['REQUEST_URI'] = str_replace( '#_', '', remove_query_arg( 'access_token' ) );
					}
				}
			}
		}
		$authorize_url_instagram = "https://api.instagram.com/oauth/authorize?" . http_build_query( [
				"client_id"     => WIS_INSTAGRAM_CLIENT_ID,
				"redirect_uri"  => "https://instagram.cm-wp.com/basic-api",
				"scope"         => "user_profile,user_media",
				"response_type" => "code",
				"state"         => $this->getSocialUrl(),
			] );

		$authorize_url_business = "https://instagram.cm-wp.com/api/?" . http_build_query( [
				"app_id" => WIS_FACEBOOK_CLIENT_ID,
				"state"  => $this->getSocialUrl() . '&type=business',
			] );

		$accounts          = WIS_Plugin::app()->getPopulateOption( WIG_PROFILES_OPTION, [] );
		$accounts_business = WIS_Plugin::app()->getPopulateOption( WIG_BUSINESS_PROFILES_OPTION, [] );


		$data   = [
			'is_premium'              => WIS_Plugin::app()->is_premium(),
			'authorize_url_instagram' => $authorize_url_instagram,
			'authorize_url_business'  => $authorize_url_business,
			'accounts'                => $accounts,
			'accounts_business'       => $accounts_business,
			'social'                  => $this->social,
		];
		$result = $this->page->render( WIG_COMPONENT_VIEWS_DIR . '/accounts', $data );

		return $result;
	}

	/**
	 * Get count of accounts
	 *
	 * @return int
	 */
	public function count_accounts() {
		$account          = WIS_Plugin::app()->getOption( $this->profiles_option_name, [] );
		$account_business = WIS_Plugin::app()->getOption( $this->profiles_business_option_name, [] );

		return count( $account + $account_business );
	}

	public function delete_account( $name, $is_business ) {
		$option_name = $is_business ? $this->profiles_business_option_name : $this->profiles_option_name;

		$accounts = WIS_Plugin::app()->getOption( $option_name, [] );
		if ( isset( $accounts[ $name ] ) ) {
			unset( $accounts[ $name ] );
		}
		WIS_Plugin::app()->updateOption( $option_name, $accounts );
	}
}