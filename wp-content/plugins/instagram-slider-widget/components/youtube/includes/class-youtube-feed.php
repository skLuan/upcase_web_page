<?php
/**
 * @property string title
 * @property string search
 * @property int refresh_hour
 * @property string blocked_words
 * @property string template
 * @property string yimages_link
 * @property string custom_url
 * @property string request_by
 * @property string orderby
 * @property int images_number
 * @property string title_words
 * @property int columns
 * @property string m_title
 * @property string m_search
 * @property int m_refresh_hour
 * @property string m_blocked_words
 * @property string m_template
 * @property string m_yimages_link
 * @property string m_custom_url
 * @property string m_request_by
 * @property string m_orderby
 * @property int m_images_number
 * @property string m_title_words
 * @property int m_columns
 */

use YoutubeFeed\Api\YoutubeApi;

class WIS_Youtube_Feed extends WIS_Feed {

	public $social = 'youtube';

	/**
	 * @var string
	 */
	protected $component_dir = WYT_COMPONENT_DIR;

	/**
	 * @var YoutubeApi
	 */
	public $api;

	/**
	 * Instagram feed constructor.
	 */
	public function __construct( $feed = [] ) {
		parent::__construct( $feed );

		$this->api = new YoutubeApi();
	}

	/**
	 * Set default values
	 */
	protected function setDefaults() {
		$this->templates = apply_filters( 'wis/youtube/sliders', [
			"default" => 'Default',
		] );

		$this->linkto = apply_filters( 'wis/youtube/options/link_to', [
			"yt_link"    => __( 'Youtube link', 'instagram-slider-widget' ),
			"custom_url" => __( 'Custom URL', 'instagram-slider-widget' ),
			"none"       => __( 'None', 'instagram-slider-widget' ),
		] );

		$this->defaults = [
			'title'            => __( 'Youtube feed', 'instagram-slider-widget' ),
			'search'           => '',
			'refresh_hour'     => 5,
			'blocked_words'    => '',
			'template'         => 'slider',
			'yimages_link'     => 'post_page',
			'custom_url'       => '',
			'request_by'       => YoutubeApi::orderByRelevance,
			'orderby'          => 'rand',
			'images_number'    => 20,
			'title_words'      => 50,
			'columns'          => 2,
			'show_feed_header' => 0,

			'm_images_number'    => 20,
			'm_title_words'      => 50,
			'm_request_by'       => YoutubeApi::orderByRelevance,
			'm_orderby'          => 'rand',
			'm_yimages_link'     => 'post_page',
			'm_custom_url'       => '',
			'm_blocked_words'    => '',
			'm_template'         => 'slider',
			'm_columns'          => 2,
			'm_show_feed_header' => 1,
		];
	}

	/**
	 * @return array
	 */
	public function getTemplates() {
		return apply_filters( 'wis/youtube/sliders', $this->templates );
	}

	/**
	 * @return array
	 */
	public function getLinkto() {
		return apply_filters( 'wis/youtube/options/link_to', $this->linkto );
	}

	/**
	 * @inerhitDoc
	 */
	public function form( $feed_id = 0 ) {
		$feeds    = new WIS_Feeds( $this->social );
		$accounts = $this->getAccounts();

		$args = [
			'is_update'      => $feed_id ? true : false,
			'add_link'       => WIS_Page::instance()->getActionUrl( 'add' ),
			'feeds'          => $feeds->feeds,
			'instance'       => $this->instance,
			'accounts'       => $accounts,
			'sliders'        => $this->getTemplates(),
			'options_linkto' => $this->getLinkto(),
		];

		echo WIS_Page::instance()->render( WYT_COMPONENT_VIEWS_DIR . '/form-feed', $args );
	}

	/**
	 * Selected array function echoes selected if in array
	 *
	 * @param array $haystack The array to search in
	 * @param string $current The string value to search in array;
	 *
	 */
	public function selected( $haystack, $current ) {
		if ( is_array( $haystack ) && in_array( $current, $haystack ) ) {
			selected( 1, 1, true );
		}
	}

	/**
	 * Display feed
	 *
	 * @param bool $return Return result or echo
	 *
	 * @return string|bool
	 */
	public function display( $return = false ) {
		$data = $this->display_videos();

		if ( $return ) {
			return $data;
		} else {
			echo $data;
		}

		return true;
	}

	/**
	 * Stores the fetched data from facebook
	 *
	 * @return array|string of localy saved facebook data
	 * @throws \Exception
	 */
	public function feed_query( $search ) {
		$this->api = new YoutubeApi();

		$cache_hours   = $search['refresh_hour'];
		$images_number = $search['images_number'];
		$search_type   = 'channel';
		$search_name   = $search['account']->snippet->title;

		$blocked_users = isset( $search['blocked_users'] ) ? $search['blocked_users'] : '';
		$blocked_words = isset( $search['blocked_words'] ) ? $search['blocked_words'] : '';

		if ( ! isset( $search ) || empty( $search ) ) {
			return __( 'Nothing to search for', 'instagram-slider-widget' );
		}


		$opt_name   = "wyoutube_{$search_type}-{$search_name}";
		$resultData = get_transient( $opt_name );
		$old_opts   = get_option( $opt_name, [] );
		$new_opts   = [
			'search'        => $search_name,
			'blocked_users' => $blocked_users,
			'blocked_words' => $blocked_words,
			'cache_hours'   => $cache_hours,
			'images_number' => $images_number,
		];

		if ( $this->trigger_refresh_data( $resultData, $old_opts, $new_opts ) || ( defined( 'WYT_ENABLE_CACHING' ) && ! WYT_ENABLE_CACHING ) ) {
			$resultData                = [];
			$old_opts['search']        = $search_name;
			$old_opts['blocked_users'] = $blocked_users;
			$old_opts['blocked_words'] = $blocked_words;
			$old_opts['cache_hours']   = $cache_hours;
			$old_opts['images_number'] = $images_number;

			$images_number = ! WIS_Plugin::app()->is_premium() && $images_number > 20 ? 20 : $images_number;

			$response = $this->api->getVideos( $search['search'], $images_number, $search['request_by'] );
			//$response = new \YoutubeFeed\Api\Video\YoutubeVideosResponse('{"kind":"youtube#searchListResponse","etag":"hXs_uL18ouAw3nGoc9-If1nP4fA","nextPageToken":"CAUQAA","regionCode":"RU","pageInfo":{"totalResults":102,"resultsPerPage":5},"items":[{"kind":"youtube#searchResult","etag":"TOnHNzr7OAV_KWMqm_GSriLU5NI","id":{"kind":"youtube#video","videoId":"S93c2zix5L4"},"snippet":{"publishedAt":"2019-08-28T08:54:23Z","channelId":"UCDLBW2M4KsUF7A7aHT8mxHw","title":"\u00ab\u0416\u0438\u0432\u043e\u0435\u00bb. \u041e\u0431\u0437\u043e\u0440 \u00ab\u041a\u0440\u0430\u0441\u043d\u043e\u0433\u043e \u0426\u0438\u043d\u0438\u043a\u0430\u00bb","description":"https:\/\/www.patreon.com\/user?u=5206451 \u2014 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0430 \u041f\u0430\u0442\u0440\u0435\u043e\u043d\u0435 http:\/\/redcynic.com https:\/\/vk.com\/public_redcynic - \u0433\u0440\u0443\u043f\u043f\u0430 \u00ab\u0412 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435\u00bb \u041d\u0435\u0442 \u043f\u0440\u0435\u0434\u0435\u043b\u0430 ...","thumbnails":{"default":{"url":"https:\/\/i.ytimg.com\/vi\/S93c2zix5L4\/default.jpg","width":120,"height":90},"medium":{"url":"https:\/\/i.ytimg.com\/vi\/S93c2zix5L4\/mqdefault.jpg","width":320,"height":180},"high":{"url":"https:\/\/i.ytimg.com\/vi\/S93c2zix5L4\/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Red Cynic","liveBroadcastContent":"none","publishTime":"2019-08-28T08:54:23Z"}},{"kind":"youtube#searchResult","etag":"jvhpQC20dPda3rXtdKVDY0cB8co","id":{"kind":"youtube#video","videoId":"dW5O5sBUdpE"},"snippet":{"publishedAt":"2017-02-18T12:02:29Z","channelId":"UCDLBW2M4KsUF7A7aHT8mxHw","title":"\u00ab\u0427\u0443\u0436\u043e\u0439 \u043f\u0440\u043e\u0442\u0438\u0432 \u0425\u0438\u0449\u043d\u0438\u043a\u0430\u00bb. \u041e\u0431\u0437\u043e\u0440 \u00ab\u041a\u0440\u0430\u0441\u043d\u043e\u0433\u043e \u0426\u0438\u043d\u0438\u043a\u0430\u00bb","description":"https:\/\/www.patreon.com\/user?u=5206451 \u2014 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0430 \u041f\u0430\u0442\u0440\u0435\u043e\u043d\u0435 http:\/\/redcynic.com https:\/\/vk.com\/public_redcynic - \u0433\u0440\u0443\u043f\u043f\u0430 \u00ab\u0412 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435\u00bb \u0421\u043a\u0440\u0430\u0448\u0438\u0432\u0430\u044f ...","thumbnails":{"default":{"url":"https:\/\/i.ytimg.com\/vi\/dW5O5sBUdpE\/default.jpg","width":120,"height":90},"medium":{"url":"https:\/\/i.ytimg.com\/vi\/dW5O5sBUdpE\/mqdefault.jpg","width":320,"height":180},"high":{"url":"https:\/\/i.ytimg.com\/vi\/dW5O5sBUdpE\/hqdefault.jpg","width":480,"height":360}},"channelTitle":"Red Cynic","liveBroadcastContent":"none","publishTime":"2017-02-18T12:02:29Z"}}]}');

			$videos_ids = [];
			foreach ( $response->items as $video ) {
				$videos_ids[] = $video->id->videoId;
			}

			$videosData = $this->api->getVideosData( $videos_ids );
			//$videosData = new \YoutubeFeed\Api\Video\YoutubeVideosResponse('{"kind": "youtube#videoListResponse","etag": "lzaBG4KxOEt-ECGeWDUuOR2MXfo","items": [{"kind": "youtube#video","etag": "c9XEcFkuSZuBLtF1d5or492heB8","id": "S93c2zix5L4","snippet": {"publishedAt": "2019-08-28T08:54:23Z","channelId": "UCDLBW2M4KsUF7A7aHT8mxHw","title": "«Живое». Обзор «Красного Циника»","description": "https://www.patreon.com/user?u=5206451 — страница на Патреоне\nhttp://redcynic.com \nhttps://vk.com/public_redcynic - группа «В контакте»\n\nНет предела человеческому уму и... глупости. Уже не первый раз мы сталкиваемся с сюжетом о неведомой космической чуде-юде, встречающейся с толпой людей в экстремальной ситуации. Причём, как правило, люди эти все как один опупенные специалисты. Фильм «Живое» тоже посвящён такому. И если уж исследовать подобные истории, то с целью найти идеальный вариант. Ума или глупости... \n\n*****\n\nПатреон: \nhttps://www.patreon.com/bePatron?u=5206451\n\nhttp://www.donationalerts.ru/r/redcynic\n\nКошельки:\n\nWebMoney: \nR223381292090; \nZ222361875129. \n\nYandex.Money: \n410011854513048.","thumbnails": {"default": {"url": "https://i.ytimg.com/vi/S93c2zix5L4/default.jpg","width": 120,"height": 90},"medium": {"url": "https://i.ytimg.com/vi/S93c2zix5L4/mqdefault.jpg","width": 320,"height": 180},"high": {"url": "https://i.ytimg.com/vi/S93c2zix5L4/hqdefault.jpg","width": 480,"height": 360},"standard": {"url": "https://i.ytimg.com/vi/S93c2zix5L4/sddefault.jpg","width": 640,"height": 480}},"channelTitle": "Red Cynic","tags": ["Живое","Джейк Джилленхол","Ребекка Фергюсон","Райан Рейнольдс","Видеорецензия","Рецензия","Обзор","Подкаст","Красный Циник","Циник","Life","Jake Gyllenhaal","Rebecca Ferguson","Ryan Reynolds","Red Cynic","Videoreview","Review","Redcynic","Video Review","Podcast"],"categoryId": "1","liveBroadcastContent": "none","localized": {"title": "«Живое». Обзор «Красного Циника»","description": "https://www.patreon.com/user?u=5206451 — страница на Патреоне\nhttp://redcynic.com \nhttps://vk.com/public_redcynic - группа «В контакте»\n\nНет предела человеческому уму и... глупости. Уже не первый раз мы сталкиваемся с сюжетом о неведомой космической чуде-юде, встречающейся с толпой людей в экстремальной ситуации. Причём, как правило, люди эти все как один опупенные специалисты. Фильм «Живое» тоже посвящён такому. И если уж исследовать подобные истории, то с целью найти идеальный вариант. Ума или глупости... \n\n*****\n\nПатреон: \nhttps://www.patreon.com/bePatron?u=5206451\n\nhttp://www.donationalerts.ru/r/redcynic\n\nКошельки:\n\nWebMoney: \nR223381292090; \nZ222361875129. \n\nYandex.Money: \n410011854513048."}},"statistics": {"viewCount": "286389","likeCount": "25552","dislikeCount": "438","favoriteCount": "0","commentCount": "1302"}},{"kind": "youtube#video","etag": "Pos6oFmOSFs6i4nmag9vcT7k-xo","id": "dW5O5sBUdpE","snippet": {"publishedAt": "2017-02-18T12:02:29Z","channelId": "UCDLBW2M4KsUF7A7aHT8mxHw","title": "«Чужой против Хищника». Обзор «Красного Циника»","description": "https://www.patreon.com/user?u=5206451 — страница на Патреоне\nhttp://redcynic.com \nhttps://vk.com/public_redcynic - группа «В контакте»\n\nСкрашивая ваше ожидание большого обзора, мы рассмотрим начало противоречивого подфранчайза, фильм \"Чужой против Хищника\".\n\n*****\n\nЕсли хотите финансово помочь каналу, то мы будем очень благодарны. \n\nКошельки:\n\nWebMoney: \nR223381292090; \nZ222361875129. \n\nYandex.Money: \n410011854513048.","thumbnails": {"default": {"url": "https://i.ytimg.com/vi/dW5O5sBUdpE/default.jpg","width": 120,"height": 90},"medium": {"url": "https://i.ytimg.com/vi/dW5O5sBUdpE/mqdefault.jpg","width": 320,"height": 180},"high": {"url": "https://i.ytimg.com/vi/dW5O5sBUdpE/hqdefault.jpg","width": 480,"height": 360},"standard": {"url": "https://i.ytimg.com/vi/dW5O5sBUdpE/sddefault.jpg","width": 640,"height": 480}},"channelTitle": "Red Cynic","tags": ["Хищник","Хищники","Чужой","Чужие","Пол Андерсон","Видеорецензия","Рецензия","Обзор","Подкаст","Красный Циник","Циник","Predator","Predators","Alien","Aliens","Paul W. S. Anderson","Red Cynic","Videoreview","Review","Redcynic","Video Review","Podcast"],"categoryId": "1","liveBroadcastContent": "none","defaultLanguage": "ru","localized": {"title": "«Чужой против Хищника». Обзор «Красного Циника»","description": "https://www.patreon.com/user?u=5206451 — страница на Патреоне\nhttp://redcynic.com \nhttps://vk.com/public_redcynic - группа «В контакте»\n\nСкрашивая ваше ожидание большого обзора, мы рассмотрим начало противоречивого подфранчайза, фильм \"Чужой против Хищника\".\n\n*****\n\nЕсли хотите финансово помочь каналу, то мы будем очень благодарны. \n\nКошельки:\n\nWebMoney: \nR223381292090; \nZ222361875129. \n\nYandex.Money: \n410011854513048."},"defaultAudioLanguage": "ru-Latn"},"statistics": {"viewCount": "300141","likeCount": "20796","dislikeCount": "435","favoriteCount": "0","commentCount": "890"}}],"pageInfo": {"totalResults": 5,"resultsPerPage": 5}}');

			foreach ( $response->items as $key => $video ) {
				$video->snippet    = $videosData->items[ $key ]->snippet;
				$video->statistics = $videosData->items[ $key ]->statistics;
				$video->comments   = $this->api->getCommentsByVideoId( $video->id->videoId );
			}

			$this->filter_response_by_words( $response, $blocked_words );

			if ( $response ) {
				if ( ! is_array( $response->items ) || ! count( $response->items ) ) {
					return [ 'error' => __( 'There are no publications in this account yet', 'instagram-slider-widget' ) ];
				}
				$results = $response;
			} else {
				if ( $resultData ) {
					$results = $resultData;
				}
			}

			if ( empty( $results ) ) {
				return [ 'error' => __( 'No images found', 'instagram-slider-widget' ) ];
			}

			foreach ( $results->items as $item ) {
				$resultData[] = $item;
			} // end -> foreach

			update_option( $opt_name, $old_opts );

			if ( is_array( $resultData ) && ! empty( $resultData ) ) {
				set_transient( $opt_name, $resultData, $cache_hours * 60 * 60 );
			}

		}

		return $resultData;
	}

	/**
	 * Runs the query for images and returns the html
	 *
	 * @return string
	 */
	public function display_videos() {
		$this->public_enqueue();
		$output = "";

		$args = $this->getAdaptiveInstance();

		if ( ! empty( $args['description'] ) && ! is_array( $args['description'] ) ) {
			$args['description'] = explode( ',', $args['description'] );
		}

		if ( $args['search'] ) {
			$account_data = $this->get_youtube_feeds( $args['search'] );
			/**
			 * @var $account_data \YoutubeFeed\Api\Channel\YoutubeChannelItem
			 */
			$account_data    = $account_data[ $args['search'] ];
			$args['account'] = $account_data;
			$template_args   = $args;

			$images_data = $this->feed_query( $args );

			if ( is_array( $images_data ) && ! empty( $images_data ) ) {
				if ( isset( $images_data['error'] ) ) {
					return $images_data['error'];
				}

				if ( $args['orderby'] != 'rand' ) {
					$args['orderby'] = explode( '-', $args['orderby'] );
					if ( 'date' == $args['orderby'][0] ) {
						$func = 'sort_timestamp_' . $args['orderby'][1];
					} else {
						$func = 'sort_popularity_' . $args['orderby'][1];
					}
					usort( $images_data, [ $this, $func ] );
				} else {
					shuffle( $images_data );
				}

				/* @var $images_data \YoutubeFeed\Api\Video\YoutubeVideo[] */
				foreach ( $images_data as $image_data ) {
					$template_args['posts'][] = $image_data;
				}

				if ( $args['show_feed_header'] ) {
					$output .= $this->render_template( 'feed_header_template', [
						'account' => $account_data,
					] );
				}

				if ( 'ypopup' == $args['yimages_link'] && WIS_Plugin::app()->is_premium() ) {
					$output .= apply_filters( 'wyt/pro/display', $args, $images_data );
				}

				$output .= $this->render_template( $args['template'], $template_args );

				return $output;
			} else {
				return __( 'No videos found', 'youtube-feed' );
			}
		}

		return "&nbsp;";
	}

	private function getAccounts() {
		$accounts = WIS_Plugin::app()->getPopulateOption( WYT_ACCOUNT_OPTION_NAME, [] );
		if ( ! is_array( $accounts ) ) {
			$accounts = [];
		}

		return $accounts;
	}

	/**
	 * Enqueue public-facing Scripts and style sheet.
	 */
	public function public_enqueue() {
		wp_enqueue_style( WIS_Plugin::app()->getPrefix() . 'wyt-font-awesome' );
		wp_enqueue_style( WIS_Plugin::app()->getPrefix() . 'wyt-instag-slider' );
		wp_enqueue_style( WIS_Plugin::app()->getPrefix() . 'wyt-header' );
	}

	/**
	 * Get feeds or feed from database
	 *
	 * @param $id
	 *
	 * @return array
	 */
	public function get_youtube_feeds( $id = 0 ) {
		if ( $id ) {
			$feeds = WIS_Plugin::app()->getOption( WYT_ACCOUNT_OPTION_NAME, [] );
			if ( is_array( $feeds ) && ! empty( $feeds ) ) {
				foreach ( $feeds as $feed ) {
					if ( isset( $feed->channelId ) && $feed->channelId == $id ) {
						return $feed;
					}
				}
			}
		}

		return WIS_Plugin::app()->getOption( WYT_ACCOUNT_OPTION_NAME, [] );
	}

	/**
	 * @param $response      \YoutubeFeed\Api\Video\YoutubeVideosResponse
	 * @param $blocked_words string
	 */
	private function filter_response_by_words( &$response, $blocked_words = '' ) {
		if ( empty( $blocked_words ) ) {
			return;
		} else {
			$blocked_words = explode( ',', $blocked_words );
		}
		foreach ( $response->items as $key => $video ) {
			foreach ( $blocked_words as $blocked_word ) {
				$title = $video->snippet->title;
				if ( stripos( $title, $blocked_word ) ) {
					unset( $response->items[ $key ] );
				}
			}
		}
	}

	/**
	 * Sort Function for timestamp Ascending
	 */
	public function sort_timestamp_ASC( $a, $b ) {
		return $a->snippet->publishedAt > $b->snippet->publishedAt;
	}

	/**
	 * Sort Function for timestamp Descending
	 */
	public function sort_timestamp_DESC( $a, $b ) {
		return $a->snippet->publishedAt < $b->snippet->publishedAt;
	}

	/**
	 * Sort Function for popularity Ascending
	 */
	public function sort_popularity_ASC( $a, $b ) {
		return $a->statistics->viewCount > $b->statistics->viewCount;
	}

	/**
	 * Sort Function for popularity Descending
	 */
	public function sort_popularity_DESC( $a, $b ) {
		return $a->statistics->viewCount < $b->statistics->viewCount;
	}

}