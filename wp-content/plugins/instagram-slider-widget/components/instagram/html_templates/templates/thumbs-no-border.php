<?php
/** @var array $args account data */

$images       = $args['images'];
$feed_id      = $args['feed_id'];
$args         = $args['template_args'];
$enable_icons = $args['enable_icons'] ? "" : " no-isw-icons";
?>
<div class='jr-insta-thumb'>
    <ul class='no-bullet thumbnails no-border jr_col_<?php echo $args['columns']; ?>' id='wis-slides'>
		<?php foreach ( $images as $key => $data ) {
			$image_url = $data['image'];
			$nopin     = ( 1 == $args['no_pin'] ) ? 'nopin="nopin"' : '';

			$clean_image_url = WIG_COMPONENT_URL . "/assets/img/image.png";
			$image_src       = "<img alt='" . $data['caption'] . "' src='{$clean_image_url}' $nopin class='{$data['type']}' style='opacity: 0;'>";
			$image_output    = $image_src;

			if ( $data['link_to'] && $args['images_link'] != 'none' ) {
				$image_output = "<a href='{$data['link_to']}' target='_blank' rel='nofollow noreferrer'";

				if ( ! empty( $args['link_rel'] ) ) {
					$image_output .= " rel={$args['link_rel']}";
				}

				if ( ! empty( $args['link_class'] ) ) {
					$image_output .= " class={$args['link_class']}";
				}
				$image_output .= "> $image_src</a>";
			}
			?>
            <li class='<?php echo $enable_icons; ?>'>
                <div style='background: url(<?php echo $image_url; ?>) no-repeat center center; background-size: cover;'><?php echo $image_output; ?></div>
            </li>
		<?php } ?>
    </ul>
</div>