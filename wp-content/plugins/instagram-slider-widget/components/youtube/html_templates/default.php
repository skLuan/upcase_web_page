<?php

/* @var $args array */

/* @var $account \YoutubeFeed\Api\Channel\YoutubeChannelSnippet */
$account = $args['account'];

/* @var $videos \YoutubeFeed\Api\Video\YoutubeVideo[] */
$videos = $args['posts'];

$width = 100/$args['columns'];

$yt_link = "https://www.youtube.com/watch?v=";
?>

<div class='wyoutube-videos-container'>
    <?php foreach ($videos as $video): ?>
        <?= 'yt_link' == $args['yimages_link'] ?  sprintf('<a href="%s%s" target="_blank" style="text-decoration: none;">', $yt_link, $video->id->videoId) : ''?>
                <div class="wyoutube-video-container" data-remodal-target="<?= $video->id->videoId ?>"
                     style="margin-top: 10px; width: <?=$width-2?>%; <?= 'ypopup' == $args['yimages_link'] ? 'cursor: pointer' : ''?> ">
                    <img src="<?= $video->snippet->thumbnails->medium->url ?>" alt="">
                    <div class="wyoutuve-video-title ellipsis-2-lines">
                        <?= $video->snippet->title ?>
                    </div>
                    <div class="woutube-video-specs">
                        <div class="wyoutube-video-watches">
                            <?= sprintf("%s %s", $video->statistics->viewCount, __('views', 'instagram-slider-widget'))?>
                        </div>
                        <div class="wyoutube-video-publish">
                            <?= time_elapsed_string($video->snippet->publishedAt) ?>
                        </div>
                    </div>
                </div>
	    <?= 'yt_link' == $args['yimages_link'] ? "</a>" : ''?>
    <?php endforeach; ?>
</div>
