<?php

namespace WIS\Facebook\Includes\Api;

/**
 * Class Account
 * @property string $name
 * @property string $avatar
 * @property int $id
 * @property string $token
 */
class FacebookAccount {
	public $name;
	public $avatar;
	public $id;
	public $token;
	public $is_me;

	/**
	 * @param $account_array
	 *
	 * @return FacebookAccount
	 */
	public function fromArray( $account_array ) {
		$this->name   = $account_array['name'];
		$this->avatar = $account_array['avatar'];
		$this->id     = $account_array['id'];
		$this->token  = $account_array['token'];
		$this->is_me  = $account_array['is_me'];

		return $this;
	}
}
