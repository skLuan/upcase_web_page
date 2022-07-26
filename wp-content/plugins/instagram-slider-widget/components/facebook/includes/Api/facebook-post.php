<?php

namespace WIS\Facebook\Includes\Api;

/**
 * Class WFB_Facebook_Post
 *
 * @property string $id
 * @property string $message
 * @property string $created_time
 * @property int $shares_count
 * @property int $likes_count
 * @property int $comments_count
 * @property string $full_picture
 * @property WFB_Facebook_Post $shared_post
 * @property string $picture
 * @property WFB_Post_Attachment[] $attachments
 *
 * @package WIS\Facebook\Includes\Api
 */
class WFB_Facebook_Post{

	/**
     * @param $post
     *
     * @return $this
     */
    public function get_facebook_post_from_object($post)
    {
        $this->id             = $post->id;
        $this->message        = $post->message ?? '';
        $this->created_time   = $post->created_time;
        $this->shares_count   = $post->shares->count ?? 0;
        $this->likes_count    = $post->likes->summary->total_count ?? 0;
	    $this->comments_count = isset($post->comments) ? count($post->comments->data) : 0;
	    $this->full_picture   = $post->full_picture ?? '';
	    $this->picture        = $post->picture ?? '';

	    if(isset($post->sharedposts)){
	    	$sharedpost = $post->sharedposts->data[0];

	    	$this->shared_post          = new WFB_Facebook_Post();
		    $this->shared_post->id      = $sharedpost->id ?? '';
		    $this->shared_post->message = $sharedpost->message ?? '';
		    $this->shared_post->picture = $sharedpost->full_picture ?? '';
			$this->shared_post->created_time = $sharedpost->created_time ?? '';
	    }

	    if (isset($post->attachments))
            foreach ($post->attachments->data as $attachment)
            	$this->attachments[] = (new WFB_Post_Attachment())->get_attachment_from_object($attachment);


        return $this;
    }
}
