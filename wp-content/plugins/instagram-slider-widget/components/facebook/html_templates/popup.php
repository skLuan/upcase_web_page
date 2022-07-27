<?php
/** @var WIS\Facebook\Includes\Api\FacebookAccount $account */
$account = $args['account'];


?>


<?php
    /** @var \WIS\Facebook\Includes\Api\WFB_Facebook_Post $post */
foreach ($args['posts'] as $post): ?>
<div class="remodal" data-remodal-id="<?= $post->id ?>">
	<div class="wfb-remodal-container">
        <div class="wfb-remodal-pic">
            <img src="<?= $post->full_picture ?>" alt="">
        </div>
        <div class="wfb-remodal-data">
            <div class="wfb-remodal-header">
                    <div class="wbfb_profile_pic">
                        <img src="<?= $account->avatar ?>" alt="" width="50" height="50" style="border-radius: 50px">
                    </div>
                    <div class="wbfb_profile_data">
                        <div class="wbfb_profile_data_name"><a href="https://facebook.com/<?= $account->id ?>"
                                                               target="_blank"><?= $account->name ?></a></div>
                        <div class="wbfb_post_data"><?= time_elapsed_string($post->created_time) ?></div>
                    </div>
            </div>
            <div class="wfb-remodal-text">
                <?= $post->message ?>
            </div>
            <div class="wfb-remodal-stats">
                <div class="wbfb_masonry_post_footer">
                    <div class="wbfb_masonry_post_share">
                        <a href="https://facebook.com/<?= $post->id ?>" target="_blank">View on Facebook</a> | <a href="">Share</a>
                    </div>
                    <div class="wbfb_masonry_post_stats">
                        <ul class="wfb-meta wfb-light">
                            <li class="wfb-likes">
				            <span class="wfb-icon wfb-like">
					        <svg width="24px" height="24px" role="img" aria-hidden="true" aria-label="Like" alt="Like"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path
                                d="M496.656 285.683C506.583 272.809 512 256 512 235.468c-.001-37.674-32.073-72.571-72.727-72.571h-70.15c8.72-17.368 20.695-38.911 20.695-69.817C389.819 34.672 366.518 0 306.91 0c-29.995 0-41.126 37.918-46.829 67.228-3.407 17.511-6.626 34.052-16.525 43.951C219.986 134.75 184 192 162.382 203.625c-2.189.922-4.986 1.648-8.032 2.223C148.577 197.484 138.931 192 128 192H32c-17.673 0-32 14.327-32 32v256c0 17.673 14.327 32 32 32h96c17.673 0 32-14.327 32-32v-8.74c32.495 0 100.687 40.747 177.455 40.726 5.505.003 37.65.03 41.013 0 59.282.014 92.255-35.887 90.335-89.793 15.127-17.727 22.539-43.337 18.225-67.105 12.456-19.526 15.126-47.07 9.628-69.405zM32 480V224h96v256H32zm424.017-203.648C472 288 472 336 450.41 347.017c13.522 22.76 1.352 53.216-15.015 61.996 8.293 52.54-18.961 70.606-57.212 70.974-3.312.03-37.247 0-40.727 0-72.929 0-134.742-40.727-177.455-40.727V235.625c37.708 0 72.305-67.939 106.183-101.818 30.545-30.545 20.363-81.454 40.727-101.817 50.909 0 50.909 35.517 50.909 61.091 0 42.189-30.545 61.09-30.545 101.817h111.999c22.73 0 40.627 20.364 40.727 40.727.099 20.363-8.001 36.375-23.984 40.727zM104 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"></path></svg><span
                                        class="wfb-count"><?= $post->likes_count ?></span>
                            </li>
                            <li class="wfb-shares">
				            <span class="wfb-icon wfb-share">
					        <svg width="24px" height="24px" role="img" aria-hidden="true" aria-label="Share" alt="Share"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path
                                        d="M564.907 196.35L388.91 12.366C364.216-13.45 320 3.746 320 40.016v88.154C154.548 130.155 0 160.103 0 331.19c0 94.98 55.84 150.231 89.13 174.571 24.233 17.722 58.021-4.992 49.68-34.51C100.937 336.887 165.575 321.972 320 320.16V408c0 36.239 44.19 53.494 68.91 27.65l175.998-184c14.79-15.47 14.79-39.83-.001-55.3zm-23.127 33.18l-176 184c-4.933 5.16-13.78 1.73-13.78-5.53V288c-171.396 0-295.313 9.707-243.98 191.7C72 453.36 32 405.59 32 331.19 32 171.18 194.886 160 352 160V40c0-7.262 8.851-10.69 13.78-5.53l176 184a7.978 7.978 0 0 1 0 11.06z"></path></svg>
                                <span class="wfb-count"><?= $post->shares_count ?></span>
                            </li>
                            <li class="wfb-comments">
				            <span class="wfb-icon wfb-comment">
					        <svg width="24px" height="24px" role="img" aria-hidden="true" aria-label="Comment" alt="Comment"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm32 352c0 17.6-14.4 32-32 32H293.3l-8.5 6.4L192 460v-76H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288z"></path></svg>
                                <span class="wfb-count"><?= $post->comments_count ?></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

	</div>
</div>
<?php endforeach; ?>