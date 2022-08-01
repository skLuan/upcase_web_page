<?php

use WIS\Facebook\Includes\Api\FacebookAccount;
use WIS\Facebook\Includes\Api\WFB_Facebook_API;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @property string title
 * @property int|string show_feed_header
 * @property string template
 * @property string account
 * @property int refresh_hour
 * @property int images_number
 * @property int|string enable_stories
 * @property int title_words
 * @property string orderby
 * @property string fbimages_link
 * @property string blocked_words
 * @property int gutter
 * @property int masonry_post_width
 *
 * @property string m_title
 * @property int|string m_show_feed_header
 * @property string m_template
 * @property string m_account
 * @property int m_refresh_hour
 * @property int m_images_number
 * @property int|string m_enable_stories
 * @property int m_title_words
 * @property string m_orderby
 * @property string m_fbimages_link
 * @property string m_blocked_words
 * @property int m_gutter
 * @property int m_masonry_post_width
 */
class WIS_Facebook_Feed extends WIS_Feed {

	public $social = 'facebook';

	/**
	 * @var string
	 */
	protected $component_dir = WFB_COMPONENT_DIR;

	/**
	 * Facebook feed constructor.
	 */
	public function __construct( $feed = [] ) {
		parent::__construct( $feed );
	}

	/**
	 * Set default values
	 */
	protected function setDefaults() {
		$this->templates = apply_filters( 'wis/facebook/sliders', [
			'masonry' => 'Masonry',
		] );

		$this->linkto = apply_filters( 'wis/facebook/options/link_to', [
			'fb_popup' => 'Popup',
			'fb_link'  => 'Facebook link',
			'fb_none'  => 'None',
		] );

		$this->defaults = [
			'id'                 => null,
			'title'              => __( 'Facebook feed', 'instagram-slider-widget' ),
			'show_feed_header'   => 0,
			'template'           => 'masonry',
			'account'            => '',
			'refresh_hour'       => 5,
			'images_number'      => 20,
			'enable_stories'     => 0,
			'title_words'        => 5,
			'orderby'            => 'rand',
			'fbimages_link'      => 'post_page',
			'blocked_words'      => '',
			'gutter'             => 5,
			'masonry_post_width' => 200,

			'm_images_number'      => 20,
			'm_title_words'        => 5,
			'm_orderby'            => 'rand',
			'm_fbimages_link'      => 'post_page',
			'm_show_feed_header'   => 0,
			'm_template'           => 'masonry',
			'm_gutter'             => 5,
			'm_masonry_post_width' => 200,
		];
	}

	/**
	 * @return array
	 */
	public function getTemplates() {
		return apply_filters( 'wis/facebook/sliders', $this->templates );
	}

	/**
	 * @return array
	 */
	public function getLinkto() {
		return apply_filters( 'wis/facebook/options/link_to', $this->linkto );
	}

	private function getAccounts() {
		$accounts = WIS_Plugin::app()->getPopulateOption( WIS_FACEBOOK_ACCOUNT_PROFILES_OPTION_NAME, [] );
		if ( ! is_array( $accounts ) ) {
			$accounts = [];
		}

		return $accounts;
	}

	/**
	 * Enqueue public-facing Scripts and style sheet.
	 */
	public function public_enqueue() {
		wp_enqueue_style( WIS_Plugin::app()->getPrefix() . 'wfb-font-awesome' );
		wp_enqueue_style( WIS_Plugin::app()->getPrefix() . 'wfb-masonry-view-css' );

		wp_enqueue_script( 'masonry' );
		wp_enqueue_script( WIS_Plugin::app()->getPrefix() . 'wfb-premium-imagesloaded' );
		wp_enqueue_script( WIS_Plugin::app()->getPrefix() . 'wfb-masonry-view-js' );
	}

	public function popup_script_enqueue() {
		wp_enqueue_style( WIS_Plugin::app()->getPrefix() . 'wfb-remodal-css' );
		wp_enqueue_style( WIS_Plugin::app()->getPrefix() . 'wfb-remodal-theme-css' );
		wp_enqueue_style( WIS_Plugin::app()->getPrefix() . 'wfb-remodal-view-css' );

		wp_enqueue_script( WIS_Plugin::app()->getPrefix() . 'wfb-remodal-min-js' );
		wp_enqueue_script( WIS_Plugin::app()->getPrefix() . 'wfb-remodal-view-js' );
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

		echo WIS_Page::instance()->render( WFB_COMPONENT_VIEWS_DIR . '/form-feed', $args );
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
	public function feed_query( $search_for, $cache_hours, $nr_images ) {
		$fb_api = new WFB_Facebook_API();

		return $fb_api->get_data( $search_for, $cache_hours, $nr_images * 2, $this );
	}

	/**
	 * Runs the query for images and returns the html
	 *
	 * @return string
	 */
	public function display_images() {
		$this->public_enqueue();
		$output = '';

		$args = $this->getAdaptiveInstance();

		if ( ! $args['account'] ) {
			return $output;
		}

		$accounts = $this->getAccounts();
		$account  = ( new FacebookAccount() )->fromArray( $accounts[ $args['account'] ] );

		$account_posts = $this->feed_query( $account, $args['refresh_hour'], $args['images_number'] * 2 );

		if ( empty( $account_posts ) ) {
			return __( 'No posts found', 'instagram-slider-widget' );
		}

		$orderby = $args['orderby'];
		if ( 'rand' == $orderby ) {
			shuffle( $account_posts );
		} else {
			$orderby = explode( '-', $orderby );
			if ( 'date' == $orderby[0] ) {
				$func = 'sort_timestamp_' . $orderby[1];
			} else {
				$func = 'sort_popularity_' . $orderby[1];
			}

			usort( $account_posts, [ $this, $func ] );
		}

		$args['posts'] = $account_posts;

		if ( $args['show_feed_header'] ) {
			$args['account'] = $account;
		}

		if ( 'fb_popup' == $args['fbimages_link'] && WIS_Plugin::app()->is_premium() ) {
			$this->popup_script_enqueue();
			$args['account'] = $account;
			$output         .= $this->render_template( 'popup', $args );
		}

		$output .= $this->render_template( $args['template'], $args );

		return $output;
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
