<?php
/**
 * @var WIS_FeedsPage $this
 * @var array $data
 * @var array $feeds
 * @var string $social
 */
?>
<div class="wisw-social-content">
    <div class="wisw-container-row">
        <a href="<?php echo $this->getActionUrl( 'add', [ 'social' => $social ] ); ?>"
           class="button action wis-add-feed-button"><?php _e( 'Add feed', 'instagram-slider-widget' ); ?></a>
    </div>

    <div class="wisw-container-row">
        <table class="widefat wis-table wis-personal-status">
            <thead>
            <tr>
                <th class="wis-profile-name"><?php echo __( 'Name', 'instagram-slider-widget' ); ?></th>
                <th class="wis-profile-shortcode"><label for="wis_youtube_shortcode"><?php echo __( 'Shortcode', 'instagram-slider-widget' ); ?></label></th>
                <th class="wis-profile-actions"><?php echo __( 'Action', 'instagram-slider-widget' ); ?></th>
            </tr>
            </thead>
            <tbody>
			<?php
			if ( count( $feeds ) ) :
				foreach ( $feeds as $feed_id => $feed ) {
					$edit_link   = $this->getActionUrl( 'edit', [ 'social' => $social, 'feed' => $feed_id ] );
					$delete_link = $this->getActionUrl( 'delete', [ 'social' => $social, 'feed' => $feed_id ] );
					?>
                    <tr>
                        <td class="wis-profile-name">
                            <a href="<?php echo $edit_link; ?>">
								<?php echo $feed->title; ?>
                            </a>
                        </td>
                        <td class="wis-profile-shortcode">
                            <input id="wis_youtube_shortcode" onclick="this.setSelectionRange(0, this.value.length)" type="text" class="form-input wis-shortcode-input"
                                   value="[cm_youtube_feed id=&quot;<?php echo $feed_id ?>&quot;]" readonly="readonly">
                        </td>
                        <td class="wis-profile-actions">
                            <a href="<?php echo $edit_link; ?>" class="btn btn-primary">
                                <span class="dashicons dashicons-edit"></span>
                            </a>
                            <a href="<?php echo $delete_link; ?>" class="btn btn-danger">
                                <span class="dashicons dashicons-trash"></span>
                            </a>
                        </td>
                    </tr>
					<?php
				}
				?>
			<?php else: ?>
                <tr>
                    <td class="wis-profile-nofeed" colspan="3"><?php echo __( 'No feeds', 'instagram-slider-widget' ); ?></td>
                </tr>
			<?php endif; ?>
            </tbody>
        </table>
    </div>
</div>
