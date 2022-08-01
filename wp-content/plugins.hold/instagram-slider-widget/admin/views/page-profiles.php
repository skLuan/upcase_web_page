<?php
/**
 * @var array $data
 * @var array $socials
 */

$socials = $socials ?? [];
?>
<div class="wisw-container">
	<?php foreach ( $socials as $social ): ?>
        <div class="wisw-social">
            <div class="wbcr-factory-page-group-header">
                <strong><?php echo $social['title']; ?></strong>
                <p><?php echo $social['description']; ?></p>
            </div>
            <div class="wisw-social-content">
                <?php echo $social['content']; ?>
            </div>
        </div>
	<?php endforeach; ?>
</div>