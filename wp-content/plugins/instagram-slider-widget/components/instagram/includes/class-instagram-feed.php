<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @property int|string id
 * @property int|string title
 * @property int|string search_for
 * @property int|string account
 * @property int|string account_business
 * @property int|string username
 * @property int|string hashtag
 * @property int|string blocked_users
 * @property int|string blocked_words
 * @property int|string allowed_words
 * @property int|string attachment
 * @property int|string template
 * @property int|string images_link
 * @property int|string custom_url
 * @property int|string orderby
 * @property int|string images_number
 * @property int|string columns
 * @property int|string refresh_hour
 * @property int|string slick_img_size
 * @property int|string image_size
 * @property int|string image_link_rel
 * @property int|string image_link_class
 * @property int|string no_pin
 * @property int|string controls
 * @property int|string animation
 * @property int|string caption_words
 * @property int|string shopifeed_phone
 * @property int|string shopifeed_color
 * @property int|string shopifeed_columns
 * @property int|string slidespeed
 * @property string description
 * @property int|string support_author
 * @property int|string gutter
 * @property int|string masonry_image_width
 * @property int|string slick_slides_to_show
 * @property int|string slick_sliding_speed
 * @property int|string enable_control_buttons
 * @property int|string keep_ratio
 * @property int|string enable_ad
 * @property int|string enable_icons
 * @property int|string slick_slides_padding
 * @property int|string show_feed_header
 * @property int|string enable_stories
 * @property int|string highlight_offset
 * @property int|string highlight_pattern
 * @property int|string masonry_lite_cols
 * @property int|string masonry_lite_gap
 * @property int|string m_template
 * @property int|string m_images_number
 * @property int|string m_columns
 * @property int|string m_shopifeed_phone
 * @property int|string m_shopifeed_color
 * @property int|string m_shopifeed_columns
 * @property int|string m_controls
 * @property int|string m_animation
 * @property int|string m_slidespeed
 * @property string m_description
 * @property int|string m_caption_words
 * @property int|string m_enable_control_buttons
 * @property int|string m_show_feed_header
 * @property int|string m_enable_stories
 * @property int|string m_keep_ratio
 * @property int|string m_slick_img_size
 * @property int|string m_slick_slides_to_show
 * @property int|string m_slick_sliding_speed
 * @property int|string m_slick_slides_padding
 * @property int|string m_gutter
 * @property int|string m_masonry_image_width
 * @property int|string m_masonry_lite_cols
 * @property int|string m_masonry_lite_gap
 * @property int|string m_highlight_offset
 * @property int|string m_highlight_pattern
 * @property int|string m_enable_ad
 * @property int|string m_enable_icons
 * @property int|string m_orderby
 * @property int|string m_images_link
 * @property int|string m_blocked_words
 * @property int|string m_allowed_words
 * @property int|string m_powered_by_link
 */
class WIS_Instagram_Feed extends WIS_Feed {

	public $social = 'instagram';

	/**
	 * @var string
	 */
	protected $component_dir = WIG_COMPONENT_DIR;

	/**
	 * @var WIS_Instagram_Profiles
	 */
	public $profiles;

	const USERNAME_URL = 'https://www.instagram.com/{username}/';
	const TAG_URL = 'https://www.instagram.com/explore/tags/{tag}/?__a=1';
	const USERS_SELF_URL = 'https://graph.instagram.com/me';
	const USERS_SELF_MEDIA_URL = 'https://graph.instagram.com/';
	const USERS_SELF_URL_NEW = 'https://graph.facebook.com/';

	/**
	 * Instagram feed constructor.
	 */
	public function __construct( $feed = [] ) {
		parent::__construct( $feed );

		$this->profiles = new WIS_Instagram_Profiles();
	}

	/**
	 * Enqueue public-facing Scripts and style sheet.
	 */
	public function widget_scripts_enqueue() {
		wp_enqueue_style( 'jr-insta-styles' );
		wp_enqueue_style( WIS_Plugin::app()->getPrefix() . 'font-awesome' );
		wp_enqueue_style( WIS_Plugin::app()->getPrefix() . 'instag-slider' );
		wp_enqueue_style( WIS_Plugin::app()->getPrefix() . 'wis-header' );

		$ajax = json_encode( [
			'url'   => admin_url( 'admin-ajax.php' ),
			'nonce' => wp_create_nonce( 'addAccountByToken' ),
		] );
		wp_add_inline_script( WIS_Plugin::app()->getPrefix() . 'jr-insta', "var ajax = $ajax;" );

		wp_enqueue_script( WIS_Plugin::app()->getPrefix() . 'jquery-pllexi-slider' );
	}

	protected function setDefaults() {
		$this->profiles = new WIS_Instagram_Profiles();

		$this->templates = apply_filters( 'wis/sliders', [
			'slider'           => 'Slider - Normal',
			'slider-overlay'   => 'Slider - Overlay Text',
			'thumbs'           => 'Thumbnails',
			'thumbs-no-border' => 'Thumbnails - Without Border',
		] );

		$this->linkto = apply_filters( 'wis/options/link_to', [
			'image_link' => 'Instagram Image',
			'image_url'  => 'Image URL',
			'custom_url' => 'Custom Link',
			'none'       => 'None',
		] );

		$this->defaults = [
			'id'                     => null,
			'title'                  => __( 'Social Slider', 'instagram-slider-widget' ),
			'search_for'             => 'account',
			'account'                => '',
			'account_business'       => '',
			'username'               => '',
			'hashtag'                => '',
			'blocked_users'          => '',
			'blocked_words'          => '',
			'allowed_words'          => '',
			'attachment'             => 0,
			'template'               => 'slider',
			'images_link'            => 'image_link',
			'custom_url'             => '',
			'orderby'                => 'rand',
			'images_number'          => 20,
			'columns'                => 4,
			'refresh_hour'           => 5,
			'slick_img_size'         => 300,
			'image_size'             => 'standard',
			'image_link_rel'         => '',
			'image_link_class'       => '',
			'no_pin'                 => 0,
			'controls'               => 'prev_next',
			'animation'              => 'slide',
			'caption_words'          => 20,
			'shopifeed_phone'        => '',
			'shopifeed_color'        => '#DA004A',
			'shopifeed_columns'      => 3,
			'slidespeed'             => 7000,
			'description'            => [],
			'support_author'         => 0,
			'gutter'                 => 0,
			'masonry_image_width'    => 200,
			'slick_slides_to_show'   => 3,
			'slick_sliding_speed'    => 5000,
			'enable_control_buttons' => 0,
			'keep_ratio'             => 0,
			'enable_ad'              => 0,
			'enable_icons'           => 0,
			'slick_slides_padding'   => 0,
			'show_feed_header'       => 0,
			'enable_stories'         => 0,
			'highlight_offset'       => 1,
			'highlight_pattern'      => 6,
			'masonry_lite_cols'      => 4,
			'masonry_lite_gap'       => 10,

			'm_template'               => 'slider',
			'm_images_number'          => 20,
			'm_columns'                => 4,
			'm_shopifeed_phone'        => '',
			'm_shopifeed_color'        => '#DA004A',
			'm_shopifeed_columns'      => 3,
			'm_controls'               => 'prev_next',
			'm_animation'              => 'slide',
			'm_slidespeed'             => 7000,
			'm_description'            => [],
			'm_caption_words'          => 20,
			'm_enable_control_buttons' => 0,
			'm_show_feed_header'       => 0,
			'm_enable_stories'         => 0,
			'm_keep_ratio'             => 0,
			'm_slick_img_size'         => 300,
			'm_slick_slides_to_show'   => 3,
			'm_slick_sliding_speed'    => 5000,
			'm_slick_slides_padding'   => 0,
			'm_gutter'                 => 0,
			'm_masonry_image_width'    => 200,
			'm_highlight_offset'       => 1,
			'm_highlight_pattern'      => 6,
			'm_enable_ad'              => 0,
			'm_enable_icons'           => 0,
			'm_orderby'                => 'rand',
			'm_images_link'            => 'image_link',
			'm_blocked_words'          => '',
			'm_allowed_words'          => '',
			'm_powered_by_link'        => '',
			'm_masonry_lite_cols'      => 2,
			'm_masonry_lite_gap'       => 5,
		];
	}

	/**
	 * @return array
	 */
	public function getTemplates() {
		return apply_filters( 'wis/sliders', $this->templates );
	}

	/**
	 * @return array
	 */
	public function getLinkto() {
		return apply_filters( 'wis/options/link_to', $this->linkto );
	}

	/**
	 * @inerhitDoc
	 */
	public function form( $feed_id = 0 ) {
		$feeds             = new WIS_Feeds( $this->social );
		$accounts          = $this->getAccounts();
		$accounts_business = $this->getAccountsBusiness();

		if ( count( $accounts ) ) {
			$s_for = 'account';
		} elseif ( count( $accounts_business ) ) {
			$s_for = 'account_business';
		} else {
			$s_for = 'username';
		}
		$this->updateDefaults( 'search_for', $s_for );

		$args = [
			'_this'             => $this,
			'is_update'         => (bool) $feed_id,
			'add_link'          => WIS_Page::instance()->getActionUrl( 'add' ),
			'feeds'             => $feeds->feeds,
			'instance'          => $this->instance,
			'accounts'          => $accounts,
			'accounts_business' => $accounts_business,
			'sliders'           => $this->getTemplates(),
			'options_linkto'    => $this->getLinkto(),
		];
		echo WIS_Page::instance()->render( WIG_COMPONENT_VIEWS_DIR . '/form-feed', $args ); // phpcs:ignore
	}

	/**
	 * Selected array function echoes selected if in array
	 *
	 * @param array $haystack The array to search in
	 * @param string $current The string value to search in array;
	 */
	public function selected( $haystack, $current ) {

		if ( is_array( $haystack ) && in_array( $current, $haystack ) ) {
			selected( 1, 1, true );
		}
	}

	private function getAccounts() {
		$accounts = WIS_Plugin::app()->getPopulateOption( WIG_PROFILES_OPTION, [] );
		if ( ! is_array( $accounts ) ) {
			$accounts = [];
		}

		return $accounts;
	}

	private function getAccountsBusiness() {
		$accounts_business = WIS_Plugin::app()->getPopulateOption( WIG_BUSINESS_PROFILES_OPTION, [] );
		if ( ! is_array( $accounts_business ) ) {
			$accounts_business = [];
		}

		return $accounts_business;
	}

	/**
	 * Display feed
	 *
	 * @param bool $return Return result or echo
	 *
	 * @return string|bool
	 */
	public function display( $return = false ) {
		$data = $this->display_images();

		if ( $return ) {
			return $data;
		} else {
			echo $data; // @codingStandardsIgnoreLine
		}

		return true;
	}

	/**
	 * Stores the fetched data from instagram in WordPress DB using transients
	 *
	 * @param $search_for
	 * @param $cache_hours
	 * @param $nr_images
	 *
	 * @return array|string of localy saved instagram data
	 */
	public function feed_query( $search_for, $cache_hours, $nr_images ) {
		//$nr_images = $nr_images <= 12 ? $nr_images : 12;
		if ( isset( $search_for['account'] ) && ! empty( $search_for['account'] ) ) {
			$search        = 'account';
			$search_string = $search_for['account'];
		} elseif ( isset( $search_for['account_business'] ) && ! empty( $search_for['account_business'] ) ) {
			$search        = 'account_business';
			$search_string = $search_for['account_business'];
		} elseif ( isset( $search_for['username'] ) && ! empty( $search_for['username'] ) ) {
			$search        = 'user';
			$search_string = $search_for['username'];
		} elseif ( isset( $search_for['hashtag'] ) && ! empty( $search_for['hashtag'] ) ) {
			$search              = 'hashtag';
			$search_string       = $search_for['hashtag'];
			$blocked_users       = isset( $search_for['blocked_users'] ) && ! empty( $search_for['blocked_users'] ) ? str_replace( '@', '', $search_for['blocked_users'] ) : false;
			$blocked_users_array = $blocked_users ? $this->get_ids_from_usernames( $blocked_users ) : [];
		} else {
			return __( 'Nothing to search for', 'instagram-slider-widget' );
		}

		$blocked_users = isset( $blocked_users ) ? $blocked_users : '';
		$blocked_words = isset( $search_for['blocked_words'] ) && ! empty( $search_for['blocked_words'] ) ? $search_for['blocked_words'] : '';
		$allowed_words = isset( $search_for['allowed_words'] ) && ! empty( $search_for['allowed_words'] ) ? $search_for['allowed_words'] : '';

		//песочница
		if ( isset( $_GET['access_token'] ) && isset( $_GET['id'] ) ) {
			$search        = 'account';
			$search_string = htmlspecialchars( $_GET['access_token'] );
		}

		$feed_id   = $this->instance['id'];
		$opt_name  = "jr_insta_{$feed_id}_" . md5( $search . '_' . $search_string );
		$instaData = get_transient( $opt_name );
		$old_opts  = get_option( $opt_name, [] );
		$new_opts  = [
			'search'        => $search,
			'search_string' => $search_string,
			'blocked_users' => $blocked_users,
			'cache_hours'   => $cache_hours,
			'nr_images'     => $nr_images,
		];

		if ( true === $this->trigger_refresh_data( $instaData, $old_opts, $new_opts ) ) {
			$instaData = [];

			if ( 'account' == $search || 'account_business' == $search ) {
				$is_business_api = 'account_business' == $search ? true : false;
				$nr_images       = ! WIS_Plugin::app()->is_premium() && $nr_images > 20 ? 20 : $nr_images;
				//песочница
				if ( isset( $_GET['access_token'] ) && isset( $_GET['id'] ) ) {
					if ( isset( $_COOKIE['wis-demo-account-data'] ) ) {
						$account = json_decode( stripslashes( $_COOKIE['wis-demo-account-data'] ), true );
					} else {
						$account = $this->get_user_by_token( $_GET['access_token'] );
					}
				} else {
					$account = $this->getAccountById( $search_string, $is_business_api );
				}

				if ( $is_business_api ) {
					if ( ! isset( $_GET['access_token'] ) && ! isset( $_GET['id'] ) ) {
						//Обновляем данные профиля: подписчики, количество постов
						$this->profiles->update_account_profiles( $account['token'], true, $account['username'] );
					}

					$args = [
						'access_token' => $account['token'],
						'fields'       => 'id,username,caption,comments_count,like_count,media_type,media_url,permalink,timestamp,children{media_url,media_type},owner,thumbnail_url',
						'limit'        => 50,
					];

					$url      = WFB_FACEBOOK_SELF_URL . $account['id'] . '/media';
					$response = wp_remote_get( add_query_arg( $args, $url ) );
					if ( 200 == wp_remote_retrieve_response_code( $response ) ) {
						$media   = json_decode( wp_remote_retrieve_body( $response ), true );
						$results = $media['data'];

						$stories_url      = WFB_FACEBOOK_SELF_URL . $account['id'] . '/stories';
						$url              = add_query_arg( [
							'access_token' => $account['token'],
							'fields'       => 'media_type,media_url,permalink,timestamp',
						], $stories_url );
						$stories_response = wp_remote_get( $url );
						if ( 200 == wp_remote_retrieve_response_code( $stories_response ) ) {
							$stories            = json_decode( wp_remote_retrieve_body( $stories_response ), true );
							$results['stories'] = $stories['data'];
						}
						$results     = apply_filters( 'wis/images/count', $results, $media, $nr_images, true );
						$next_max_id = null;
						if ( ! empty( $media['pagination'] ) ) {
							$next_max_id = $media['pagination']['next_max_id'];
						}
						if ( ! count( $results ) ) {
							return [ 'error' => __( 'There are no publications in this account yet', 'instagram-slider-widget' ) ];
						}
					} else {
						if ( $instaData ) {
							$results = $instaData;
						}
					}
				} else {
					if ( ! isset( $_GET['access_token'] ) ) {
						//Обновляем данные профиля: подписчики, количество постов
						$this->profiles->update_account_profiles( $account['token'] );
					}

					$args     = [
						'fields'       => 'id,username,media{id,username,caption,media_type,media_url,permalink,thumbnail_url,timestamp,children{id,media_type,media_url,thumbnail_url}}',
						'limit'        => 50,
						'access_token' => $account['token'],
					];
					$url      = self::USERS_SELF_MEDIA_URL . $account['id'];
					$response = wp_remote_get( add_query_arg( $args, $url ) );
					if ( 200 == wp_remote_retrieve_response_code( $response ) ) {
						$media   = json_decode( wp_remote_retrieve_body( $response ), true );
						$results = $media['media']['data'];
						$results = apply_filters( 'wis/images/count', $results, $media, $nr_images, false );
						if ( ! is_array( $results ) || ! count( $results ) ) {
							return [ 'error' => __( 'There are no publications in this account yet', 'instagram-slider-widget' ) ];
						}
					} else {
						if ( $instaData ) {
							$results = $instaData;
						}
					}
				}
			} else { //hashtag
				$account = $this->getAccountForHashtag();
				//$account = false;
				if ( $account ) {
					$args     = [
						'access_token' => $account['token'],
						'user_id'      => $account['id'],
						'q'            => $search_string,
					];
					$url      = WFB_FACEBOOK_SELF_URL . 'ig_hashtag_search';
					$response = wp_remote_get( add_query_arg( $args, $url ) );
					if ( 200 == wp_remote_retrieve_response_code( $response ) ) {
						$media    = json_decode( wp_remote_retrieve_body( $response ), true );
						$args     = [
							'access_token' => $account['token'],
							'user_id'      => $account['id'],
							//,timestamp
							'fields'       => 'id,caption,media_type,media_url,comments_count,like_count,permalink,children{media_type,media_url}',
							'limit'        => 50,
						];
						$url      = WFB_FACEBOOK_SELF_URL . $media['data'][0]['id'] . '/recent_media';
						$response = wp_remote_get( add_query_arg( $args, $url ) );
						if ( 200 == wp_remote_retrieve_response_code( $response ) ) {
							$media            = json_decode( wp_remote_retrieve_body( $response ), true );
							$media['hashtag'] = true;
							$results          = $media;

						}
					}
				} else {
					$url                     = str_replace( '{tag}', urlencode( trim( $search_string ) ), self::TAG_URL );
					$response                = wp_remote_get( $url, [
						'sslverify' => false,
						'timeout'   => 60,
					] );
					$results                 = json_decode( $response['body'], true );
					$hashtag_response_status = $response['response']['code'];
				}
			}

			if ( isset( $results ) && is_array( $results ) ) {
				if ( 'user' == $search ) {
					$entry_data = isset( $results['entry_data']['ProfilePage'][0]['graphql']['user']['edge_owner_to_timeline_media']['edges'] ) ? $results['entry_data']['ProfilePage'][0]['graphql']['user']['edge_owner_to_timeline_media']['edges'] : [];
				} elseif ( 'account' == $search || 'account_business' == $search ) {
					$entry_data = $results;
				} elseif ( 'hashtag' == $search ) {
					if ( isset( $results['hashtag'] ) ) {
						$entry_data = $results['data'];
					} else {
						$entry_data = isset( $results['graphql']['hashtag']['edge_hashtag_to_media']['edges'] ) ? $results['graphql']['hashtag']['edge_hashtag_to_media']['edges'] : [];
					}
				}

				if ( empty( $entry_data ) ) {
					return [ 'error' => __( 'No images found', 'instagram-slider-widget' ) ];
				}

				$i = 0;
				foreach ( $entry_data as $current => $result ) {
					if ( ! isset( $result['caption'] ) ) {
						$result['caption'] = '';
					}

					if ( $i >= $nr_images ) {
						if ( isset( $entry_data['stories'] ) ) {
							$instaData['stories'] = $entry_data['stories'];
						}
						break;
					} else {
						$i ++;
					}

					if ( 'hashtag' == $search ) {

						//TODO: Доделать черный список с новым API
						//Чёрный список не работает, так как API не отдает имя пользователя, который создал пост
						if ( isset( $results['hashtag'] ) ) {
							$result['fbapi'] = true;
							if ( isset( $result['media_type'] ) && 'VIDEO' === $result['media_type'] ) {
								//$nr_images++;
								continue;
							}
						} else {
							$result = $result['node'];
							if ( in_array( $result['owner']['id'], $blocked_users_array ) ) {
								$nr_images ++;
								continue;
							}
						}
					}

					if ( 'account' == $search ) {
						$image_data = $this->to_media_model_from_account( $result );
					} elseif ( 'account_business' == $search ) {
						$image_data = $this->to_media_model_from_account_business( $result );
					} elseif ( 'hashtag' == $search && $results['hashtag'] ) {
						$image_data = $this->to_media_model_from_hashtag( $result );
					}

					if ( $this->is_blocked_by_word( $blocked_words, $image_data['caption'] ) ) {
						$nr_images ++;
						continue;
					}

					if ( ! $this->is_allowed_by_word( $allowed_words, $image_data['caption'] ) ) {
						$nr_images ++;
						continue;
					}

					$instaData[] = $image_data;
				} // end -> foreach
			} elseif ( isset( $hashtag_response_status ) && 429 == $hashtag_response_status && is_user_logged_in() && 'hashtag' === $search ) {
				return [ 'error' => __( "Can't receive images by hashtag. Please connect a business account and try again.", 'instagram-slider-widget' ) ];
			}

			update_option( $opt_name, $new_opts );

			$insta_imgs_cache = 'insta_imgs_cache';
			if ( is_array( $instaData ) && ! empty( $instaData ) ) {
				set_transient( $opt_name, $instaData, $cache_hours * 60 * 60 );
				WIS_Plugin::app()->updateoption( $insta_imgs_cache, $instaData );
			} else {
				$instaData = WIS_Plugin::app()->getOption( $insta_imgs_cache, [] );
				WIS_Plugin::app()->logger->error( 'Feed query failed! Try reconnecting your account in the plugin settings.' );
			}
		}

		return $instaData;
	}

	/**
	 * Runs the query for images and returns the html
	 *
	 * @return string
	 */
	public function display_images() {
		$this->widget_scripts_enqueue();

		$feed_id          = $this->id;
		$searchfor        = $this->search_for;
		$account          = $this->account;
		$account_business = $this->account_business;
		$username         = $this->username;
		$hashtag          = $this->hashtag;
		$refresh_hour     = $this->refresh_hour;
		$template         = $this->get( 'template' );
		$images_number    = $this->get( 'images_number' );
		$blocked_words    = $this->get( 'blocked_words' );
		$allowed_words    = $this->get( 'allowed_words' );
		$blocked_users    = $this->get( 'blocked_users' );
		$enable_ad        = $this->get( 'enable_ad' );
		$orderby          = $this->get( 'orderby' );

		if ( 'hashtag' === $searchfor ) {
			$search_for['hashtag'] = $hashtag;
		} elseif ( 'account' === $searchfor ) {
			$search_for['account'] = $account;
		} elseif ( 'account_business' === $searchfor ) {
			$search_for['account_business'] = $account_business;
		} else {
			$search_for['username'] = $username;
		}
		$search_for['blocked_users'] = $blocked_users;
		$search_for['blocked_words'] = $blocked_words;
		$search_for['allowed_words'] = $allowed_words;

		$args = $this->getAdaptiveInstance();
		//WIS_Plugin::app()->logger->info( "Feed options: " . json_encode( $args ) );

		$is_business = ( 'account_business' === $searchfor );
		if ( $is_business ) {
			$accounts = $this->getAccountsBusiness();
		} else {
			$accounts = $this->getAccounts();
		}

		if ( $template == 'slick_slider' || $template == 'masonry_lite' || $template == 'masonry' || $template == 'highlight' || $template == 'showcase' ) {
			if ( defined( 'WISP_PLUGIN_ACTIVE' ) && WISP_PLUGIN_ACTIVE == true ) {
				return apply_filters( 'wis/pro/display_images', '', $args, $this );
			}
		}

		$output = '';
		//WIS_Plugin::app()->logger->info( "Feed query: " . json_encode( [ $search_for, $refresh_hour, $images_number ] ) );
		$images_data = $this->feed_query( $search_for, $refresh_hour, $images_number );
		//WIS_Plugin::app()->logger->info( "Feed images: " . json_encode( $images_data ) );

		if ( isset( $images_data['error'] ) ) {
			return $images_data['error'];
		}

		if ( $args['show_feed_header'] && $is_business ) {
			$account_data = $accounts[ $images_data[0]['username'] ] ?? [];
			//WIS_Plugin::app()->logger->info( "Account data: " . json_encode( $account_data ) );

			if ( WIS_Plugin::app()->is_premium() ) {
				$output .= WIS_Premium::app()->display_header_with_stories( $account, $account_data, $images_data['stories'], $args['enable_stories'] );
			} else {
				$output .= $this->render_template( 'templates/feed_header', $account_data );
			}
		}

		if ( ! empty( $args['description'] ) && ! is_array( $args['description'] ) ) {
			$args['description'] = explode( ',', $args['description'] );
		}

		if ( isset( $images_data['stories'] ) ) {
			unset( $images_data['stories'] );
		}

		if ( 'rand' == $orderby ) {
			shuffle( $images_data );
		} else {
			$orderby = explode( '-', $orderby );
			if ( 'date' == $orderby[0] ) {
				$func = 'sort_timestamp_' . $orderby[1];
			} else {
				$func = $is_business ? 'sort_popularity_' . $orderby[1] : 'sort_timestamp_' . $orderby[1];
			}

			usort( $images_data, [ $this, $func ] );
		}

		foreach ( $images_data as $key => &$image_data ) {
			if ( 'stories' === $key ) {
				continue;
			}

			$images_link = $args['images_link'];
			if ( 'image_link' == $images_link || 'popup' == $images_link ) {
				$image_data['link_to'] = $image_data['link'] ?? '';
			} elseif ( 'user_url' == $images_link ) {
				$image_data['link_to'] = 'https://www.instagram.com/' . $username . '/';
			} elseif ( 'image_url' == $images_link ) {
				$image_data['link_to'] = $image_data['url'];
			} elseif ( 'custom_url' == $images_link ) {
				$image_data['link_to'] = $args['custom_url'];
			}

			$image_data['caption'] = wp_trim_words( $image_data['caption'], $args['caption_words'], '' );
		}

		$template_args = [
			'template_args' => $args,
			'images'        => $images_data,
			'feed_id'       => $feed_id,
		];

		$output .= $this->render_template( "templates/{$template}", $template_args );

		if ( $enable_ad && ! defined( 'WISP_PLUGIN_ACTIVE' ) ) {
			$output .= '
                <div class="wis-template-ad" style="font-size: 1.0rem; margin-top: 2%; text-align: center; color: rgba(22,22,22,0.72);" >
                    <a target="_blank" style="color: rgba(22,22,22,0.72); text-decoration: none" href="https://cm-wp.com/instagram-slider-widget/" >
                    Powered by Social Slider Feed
                    </a >
                </div >
                ';
		}

		return $output;

	}

	/**
	 * Sanitize 4-byte UTF8 chars; no full utf8mb4 support in drupal7+mysql stack.
	 * This solution runs in O(n) time BUT assumes that all incoming input is
	 * strictly UTF8.
	 *
	 * @param string $input The input to be sanitised
	 *
	 * @return string sanitized input
	 */
	private function sanitize( $input ) {

		if ( ! empty( $input ) ) {
			$utf8_2byte       = 0xC0; /*1100 0000*/
			$utf8_2byte_bmask = 0xE0; /*1110 0000*/
			$utf8_3byte       = 0xE0; /*1110 0000*/
			$utf8_3byte_bmask = 0XF0; /*1111 0000*/
			$utf8_4byte       = 0xF0; /*1111 0000*/
			$utf8_4byte_bmask = 0xF8; /*1111 1000*/

			$sanitized = '';
			$len       = strlen( $input );
			for ( $i = 0; $i < $len; ++ $i ) {

				$mb_char = $input[ $i ]; // Potentially a multibyte sequence
				$byte    = ord( $mb_char );

				if ( ( $byte & $utf8_2byte_bmask ) == $utf8_2byte ) {
					$mb_char .= $input[ ++ $i ];
				} elseif ( ( $byte & $utf8_3byte_bmask ) == $utf8_3byte ) {
					$mb_char .= $input[ ++ $i ];
					$mb_char .= $input[ ++ $i ];
				} elseif ( ( $byte & $utf8_4byte_bmask ) == $utf8_4byte ) {
					// Replace with ? to avoid MySQL exception
					$mb_char = '';
					$i       += 3;
				}

				$sanitized .= $mb_char;
			}

			$input = $sanitized;
		}

		return $input;
	}

	/**
	 * Get data from instagram by username
	 *
	 * @param string $username
	 *
	 * @return array
	 */
	private function get_data_by_username( $username ) {

		$url      = str_replace( '{username}', urlencode( trim( $username ) ), self::USERNAME_URL );
		$response = wp_remote_get( $url, [
			'sslverify' => false,
			'timeout'   => 60,
		] );

		if ( strstr( $response['body'], '-cx-PRIVATE-Page__main' ) ) {
			return [ 'error' => __( 'Account not found or for this account there are restrictions on Instagram by age', 'instagram-slider-widget' ) ];
		}

		$json = str_replace( 'window._sharedData = ', '', strstr( $response['body'], 'window._sharedData = ' ) );

		// Compatibility for version of php where strstr() doesnt accept third parameter
		if ( version_compare( PHP_VERSION, '5.3.0', '>=' ) ) {
			$json = strstr( $json, '</script>', true );
		} else {
			$json = substr( $json, 0, strpos( $json, '</script>' ) );
		}
		$json = rtrim( $json, ';' );

		// Function json_last_error() is not available before PHP * 5.3.0 version
		if ( function_exists( 'json_last_error' ) ) {

			( $results = json_decode( $json, true ) ) && json_last_error() == JSON_ERROR_NONE;

		} else {
			$results = json_decode( $json, true );
		}

		return $results;
	}

	/**
	 * Get Instagram Ids from Usernames into array
	 *
	 * @param string $usernames Comma separated string with instagram users
	 *
	 * @return array            An array with instagram ids
	 */
	private function get_ids_from_usernames( $usernames ) {

		$users      = explode( ',', trim( $usernames ) );
		$user_ids   = (array) get_transient( 'jr_insta_user_ids' );
		$return_ids = [];

		if ( is_array( $users ) && ! empty( $users ) ) {

			foreach ( $users as $user ) {

				if ( isset( $user_ids[ $user ] ) ) {
					continue;
				}

				$results = $this->get_data_by_username( $user );
				if ( $results && is_array( $results ) ) {

					$results = $results['entry_data']['ProfilePage']['0']['graphql']['user'];
					$user_id = isset( $results['id'] ) ? $results['id'] : false;

					if ( $user_id ) {

						$user_ids[ $user ] = $user_id;

						set_transient( 'jr_insta_user_ids', $user_ids );
					}
				}
			}
		}

		foreach ( $users as $user ) {
			if ( isset( $user_ids[ $user ] ) ) {
				$return_ids[] = $user_ids[ $user ];
			}
		}

		return $return_ids;
	}

	public function get_user_by_token( $token ) {
		$args = [
			'fields'       => 'id,media_count,username',
			'access_token' => $token,
		];

		$url      = WIG_USERS_SELF_URL;
		$url      = add_query_arg( $args, $url );
		$response = wp_remote_get( $url );
		if ( 200 == wp_remote_retrieve_response_code( $response ) ) {
			$user          = json_decode( wp_remote_retrieve_body( $response ), true );
			$user['token'] = $token;

			return $user;
		}

		return false;
	}

	/**
	 * Get Account data by USERNAME from option in wp_options
	 *
	 * @param string $name
	 * @param bool $is_business
	 *
	 * @return array
	 */
	public function getAccountById( $name, $is_business = false ) {
		if ( $is_business ) {
			$token = WIS_Plugin::app()->getOption( WIG_BUSINESS_PROFILES_OPTION );
		} else {
			$token = WIS_Plugin::app()->getOption( WIG_PROFILES_OPTION );
		}

		return $token[ $name ];
	}

	/**
	 * Get first Account data from option in wp_options
	 *
	 * @return bool|array
	 */
	public function getAccountForHashtag() {
		$token = WIS_Plugin::app()->getOption( WIG_BUSINESS_PROFILES_OPTION, false );
		if ( $token && is_array( $token ) && ! empty( $token ) ) {
			return array_shift( $token );
		} else {
			return false;
		}
	}

	/**
	 * Media Model from account
	 *
	 * @param array $media From API
	 *
	 * @return array To plugin format
	 */
	public function to_media_model_from_account( $media ) {

		$m = [];
		switch ( $media['media_type'] ) {
			case 'IMAGE':
				$m['type']  = 'GraphImage';
				$m['image'] = $media['media_url'];
				break;
			case 'VIDEO':
				$m['type']      = 'GraphVideo';
				$m['video']     = $media['media_url'];
				$m['thumbnail'] = $media['thumbnail_url'];
				$m['image']     = $media['thumbnail_url'];
				break;
			case 'CAROUSEL_ALBUM':
				$m['type'] = 'GraphSidecar';
				$res       = [];
				foreach ( $media['children']['data'] as $v ) {
					$type                            = 'images';
					$t['standard_resolution']['url'] = $v['media_url'];
					$size                            = getimagesize( $v['media_url'] );
					if ( is_array( $size ) ) {
						$t['standard_resolution']['height'] = $size[1];
						$t['standard_resolution']['width']  = $size[0];
					} else {
						$type = 'videos';
					}
					$res[][ $type ] = $t;

				}
				$m['sidecar_media'] = $res;
				$m['image']         = $media['media_url'];
				break;
		}

		$m['id']        = $media['id'];
		$m['username']  = $media['username'];
		$m['caption']   = $this->sanitize( $media['caption'] );
		$m['link']      = $media['permalink'];
		$m['timestamp'] = strtotime( $media['timestamp'] );
		$m['url']       = $media['media_url'];

		if ( 'VIDEO' == $media['media_type'] ) {
			$size = getimagesize( $media['thumbnail_url'] );
		} else {
			$size = getimagesize( $media['media_url'] );
		}
		if ( is_array( $size ) ) {
			$m['height'] = $size[1];
			$m['width']  = $size[0];
		}

		$m['popularity'] = 0;

		return $m;
	}

	/**
	 * Media Model from account
	 *
	 * @param array $media From API
	 *
	 * @return array To plugin format
	 */
	public function to_media_model_from_account_business( $media ) {

		$m = [];
		switch ( $media['media_type'] ) {
			case 'IMAGE':
				$m['type']  = 'GraphImage';
				$m['image'] = $media['media_url'];
				break;
			case 'VIDEO':
				$m['type']      = 'GraphVideo';
				$m['video']     = $media['media_url'];
				$m['thumbnail'] = $media['thumbnail_url'];
				$m['image']     = $media['thumbnail_url'];
				break;
			case 'CAROUSEL_ALBUM':
				$m['type'] = 'GraphSidecar';
				$res       = [];
				foreach ( $media['children']['data'] as $v ) {
					$type                            = 'images';
					$t['standard_resolution']['url'] = $v['media_url'];
					$size                            = getimagesize( $v['media_url'] );
					if ( is_array( $size ) ) {
						$t['standard_resolution']['height'] = $size[1];
						$t['standard_resolution']['width']  = $size[0];
					} else {
						$type = 'videos';
					}
					$res[][ $type ] = $t;
				}
				$m['sidecar_media'] = $res;
				$m['image']         = $media['media_url'];
				break;
		}

		$m['id']        = $media['id'];
		$m['username']  = $media['username'];
		$m['caption']   = $this->sanitize( $media['caption'] );
		$m['link']      = $media['permalink'];
		$m['user_id']   = $media['owner']['id'];
		$m['timestamp'] = strtotime( $media['timestamp'] );
		$m['url']       = $media['media_url'];
		$m['comments']  = $media['comments_count'];
		$m['likes']     = $media['like_count'];

		if ( 'VIDEO' == $media['media_type'] ) {
			$size = getimagesize( $media['thumbnail_url'] );
		} else {
			$size = getimagesize( $media['media_url'] );
		}
		if ( is_array( $size ) ) {
			$m['height'] = $size[1];
			$m['width']  = $size[0];
		}

		if ( isset( $m['comments'] ) && isset( $m['likes'] ) ) {
			$m['popularity'] = (int) ( $m['comments'] ) + ( $m['likes'] );
		}

		return $m;
	}

	/**
	 * Media Model from hashtag
	 *
	 * @param array $media From API
	 *
	 * @return array To plugin format
	 */
	public function to_media_model_from_hashtag( $media ) {

		$m = [];
		if ( isset( $media['fbapi'] ) ) {
			$value = $media;
			switch ( $value['media_type'] ) {
				case 'IMAGE':
					$m['type']  = 'GraphImage';
					$m['image'] = $value['media_url'];
					break;
				case 'VIDEO':
					$m['type']      = 'GraphVideo';
					$m['video']     = $value['media_url'];
					$m['thumbnail'] = $value['thumbnail_url'];
					$m['image']     = $value['thumbnail_url'];
					break;
				case 'CAROUSEL_ALBUM':
					$m['type'] = 'GraphSidecar';
					$res       = [];
					foreach ( $value['children']['data'] as $v ) {
						$t['standard_resolution']['url'] = $v['media_url'];
						$res[]['images']                 = $t;
					}
					$m['sidecar_media'] = $res;
					$m['image']         = $value['children']['data'][0]['media_url'];
					break;
			}

			$media_url = isset( $value['media_url'] ) ? $value['media_url'] : $value['children']['data'][0]['media_url'];

			$m['id']            = $value['id'];
			$m['caption']       = $this->sanitize( $value['caption'] );
			$m['link']          = $value['permalink'];
			$m['comment_count'] = $value['comments_count'];
			$m['url']           = $media_url;
			$m['likes_count']   = $value['like_count'];

			$m['sizes']['thumbnail'] = $media_url;
			$m['sizes']['low']       = $media_url;
			$m['sizes']['standard']  = $media_url;
			$m['sizes']['full']      = $media_url;

			if ( 'VIDEO' == $media['media_type'] ) {
				$size = getimagesize( $value['thumbnail_url'] );
			} else {
				$size = getimagesize( $media_url );
			}
			if ( is_array( $size ) ) {
				$m['height'] = $size[1];
				$m['width']  = $size[0];
			}

			$m['popularity'] = (int) ( $m['comment_count'] ) + ( $m['likes_count'] );
		} else {
			$value        = $media;
			$m['type']    = $value['__typename'];
			$m['id']      = $value['id'];
			$m['code']    = $value['shortcode'];
			$m['link']    = 'https://www.instagram.com/p/' . $value['shortcode'] . '/';
			$m['user_id'] = $value['owner']['id'];

			$m['caption'] = isset( $value['edge_media_to_caption']['edges'][0]['node']['text'] ) ? $value['edge_media_to_caption']['edges'][0]['node']['text'] : '';

			$m['timestamp']     = $value['taken_at_timestamp'];
			$m['url']           = $value['display_url'];
			$m['likes_count']   = $value['edge_liked_by']['count'];
			$m['comment_count'] = $value['edge_media_to_comment']['count'];
			$m['sizes']         = $this->get_thumbnail_urls( $value['thumbnail_resources'] );
			$m['image']         = $value['thumbnail_src'];

			if ( isset( $m['comment_count'] ) && isset( $m['likes_count'] ) ) {
				$m['popularity'] = (int) ( $m['comment_count'] ) + ( $m['likes_count'] );
			}
		}

		return $m;
	}

	/**
	 * This post is blocked by words?
	 *
	 * @param string $words
	 * @param string $text
	 *
	 * @return bool
	 */
	public function is_blocked_by_word( $words, $text ) {
		if ( empty( $words ) || empty( $text ) ) {
			return false;
		}
		$words_array = explode( ',', $words );
		foreach ( $words_array as $word ) {
			$pos = stripos( $text, trim( $word ) );
			if ( $pos !== false ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * This post is allowed by words?
	 *
	 * @param string $words
	 * @param string $text
	 *
	 * @return bool
	 */
	public function is_allowed_by_word( $words, $text ) {
		if ( empty( $words ) ) {
			return true;
		}
		if ( empty( $text ) ) {
			return false;
		}

		$words_array = explode( ',', $words );
		foreach ( $words_array as $word ) {
			if ( strripos( $text, $word ) !== false ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Sort Function for timestamp Ascending
	 */
	public function sort_timestamp_ASC( $a, $b ) {
		$a = $a['timestamp'] ?? 0;
		$b = $b['timestamp'] ?? 0;

		return $a > $b;
	}

	/**
	 * Sort Function for timestamp Descending
	 */
	public function sort_timestamp_DESC( $a, $b ) {
		$a = $a['timestamp'] ?? 0;
		$b = $b['timestamp'] ?? 0;

		return $a < $b;
	}

	/**
	 * Sort Function for popularity Ascending
	 */
	public function sort_popularity_ASC( $a, $b ) {
		return $a['popularity'] > $b['popularity'];
	}

	/**
	 * Sort Function for popularity Descending
	 */
	public function sort_popularity_DESC( $a, $b ) {
		return $a['popularity'] < $b['popularity'];
	}

}
