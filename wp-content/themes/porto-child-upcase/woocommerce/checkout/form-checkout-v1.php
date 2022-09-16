<?php
/**
 * Checkout Form V1
 *
 * @version     3.5.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$porto_woo_version = porto_get_woo_version_number();
$checkout          = WC()->checkout();

// filter hook for include new pages inside the payment method
$get_checkout_url = wc_get_checkout_url();
?>

<form name="checkout" method="post" class="checkout woocommerce-checkout" action="<?php echo esc_url( $get_checkout_url ); ?>" enctype="multipart/form-data">

	<?php if ( sizeof( $checkout->checkout_fields ) > 0 ) : ?>

		<?php do_action( 'woocommerce_checkout_before_customer_details' ); ?>

		<div class="row" id="customer_details">
			<div class="hint border-1 border-color-quaternary">
				<?php
				$date = date_create('l n');
				$threeDays = new DateInterval("P3D");
				date_add($date, $threeDays);
				
				$format = datefmt_create('es_CO',
					\IntlDateFormatter::FULL,
					\IntlDateFormatter::FULL,
					pattern: 'eee, d MMM yy'
	);
				switch(date_format($date, 'N')){
					case 6:
						date_add($date, new DateInterval("P2D"));
					break;
					case 7:
						date_add($date, new DateInterval("P1D"));
					break;
				}
			$preString = "Comprando hoy  antes del medio día tu pedido puede tardar hasta el <b>";
				// echo $preString . date_format($date, 'j D M y') . "</b> "
				echo $preString . datefmt_format($format, $date) . "</b> "
				?>	
			</div>
			<div class="col-lg-7">
				<div class="align-left">
					<div class="box-content">
						<?php do_action( 'woocommerce_checkout_billing' ); ?>
						<?php do_action( 'woocommerce_checkout_shipping' ); ?>
					</div>
				</div>
			</div>
			<div class="col-lg-5">
				<div class="align-left">
					<div class="checkout-order-review align-left">
						<div class="box-content featured-boxes">
							<h3 id="order_review_heading" class="text-md text-uppercase"><?php esc_html_e( 'Your order', 'woocommerce' ); ?></h3>

							<?php do_action( 'woocommerce_checkout_before_order_review' ); ?>

							<div id="order_review" class="woocommerce-checkout-review-order">
								<?php do_action( 'woocommerce_checkout_order_review' ); ?>
							</div>

							<?php do_action( 'woocommerce_checkout_after_order_review' ); ?>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php do_action( 'woocommerce_checkout_after_customer_details' ); ?>				
	<?php endif; ?>
</form>
