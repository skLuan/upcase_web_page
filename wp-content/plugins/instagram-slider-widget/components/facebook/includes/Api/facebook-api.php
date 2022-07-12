<?php

namespace WIS\Facebook\Includes\Api;

use PHPMailer\PHPMailer\Exception;
use WIS\Facebook\Includes\Api\FacebookAccount;

class WFB_Facebook_API {

	const FACEBOOK_SELF_URL = 'https://graph.facebook.com/';


	/**
	 * Stores the fetched data from Facebook in WordPress DB using transients
	 *
	 * @param FacebookAccount $account Facebook page name to fetch
	 * @param string $cache_hours Cache hours for transient
	 * @param string $nr_images Nr of images to fetch
	 * @param \WIS_Facebook_Feed $widget
	 *
	 * @return string|array of localy saved facebook data
	 */
	public function get_data( $account, $cache_hours, $nr_images, $feed ) {

		$opt_name = 'jr_facebook_' . md5( $account->id );
		$fbData   = get_transient( $opt_name );
		$old_opts = (array) get_option( $opt_name );
		$new_opts = [
			'search_string' => $account->id,
			'cache_hours'   => $cache_hours,
			'nr_images'     => $nr_images,
		];

		if ( true === $feed->trigger_refresh_data( $fbData, $old_opts, $new_opts ) ) {
			//if ( true ) {
			$old_opts['search_string'] = $account->id;
			$old_opts['cache_hours']   = $cache_hours;
			$old_opts['nr_images']     = $nr_images;
			$nr_images                 = ! \WIS_Plugin::app()->is_premium() && $nr_images > 20 ? 20 : $nr_images;

			$fields = "id,created_time,child_attachments,shares,sharedposts{message,full_picture,created_time},comments{comments_count},message,full_picture,picture,attachments{media_type,media,title,type,url}"; //,comments.summary(true)

			if ( ! $account->is_me ) {
				$fields .= ",likes.summary(true)";
			}

			$args = [
				'access_token' => $account->token,
				'fields'       => $fields,
				'limit'        => $nr_images,
			];

			$url      = WFB_FACEBOOK_SELF_URL . $account->id . "/feed";
			$response = wp_remote_get( add_query_arg( $args, $url ) );
			if ( is_wp_error( $response ) ) {
				return [ 'error' => __( 'Something went wrong', 'instagram-slider-widget' ) ];
			}
			if ( 200 == wp_remote_retrieve_response_code( $response ) ) {
				try {
					$entry_data = $this->get_posts_from_json( $response['body'] );
				} catch ( Exception $exception ) {
					error_log( "SSW ERROR: " . $exception->getTraceAsString() );

					return [ 'error' => __( 'API ERROR: Failed to parse data.', 'instagram-slider-widget' ) ];
				}

				update_option( $opt_name, $old_opts );
				set_transient( $opt_name, $entry_data, $cache_hours * 60 * 60 );
			} else {
				return [ 'error' => __( 'Something went wrong. API error', 'instagram-slider-widget' ) ];
			}
		}

		return $entry_data;
	}

	/**
	 * @param string $json
	 *
	 * @return \WIS\Facebook\Includes\Api\WFB_Facebook_Post[]
	 */
	public function get_posts_from_json( $json ) {
		$posts = [];

		$json_posts = json_decode( $json );

		foreach ( $json_posts->data as $json_post ) {
			$post               = ( new WFB_Facebook_Post() )->get_facebook_post_from_object( $json_post );
			$posts[ $post->id ] = $post;
		}

		return $posts;
	}
}
