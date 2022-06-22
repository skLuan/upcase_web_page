<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package storefront
 */

?>

		</div><!-- .col-full -->
	</div><!-- #content -->

	<?php do_action( 'storefront_before_footer' ); ?>

	<footer id="colophon" class="bg-purple-darkest text-white" role="contentinfo">
		<div class="col-full">

			<?php
			/**
			 * Functions hooked in to storefront_footer action
			 *
			 * @hooked storefront_footer_widgets - 10
			 * @hooked storefront_credit         - 20
			 */
			// do_action( 'storefront_footer_widgets' );
			?>
				<ul class="list-none flex flex-col lg:flex-row justify-center mx-0 mb-0 pt-14 pb-20">
				<li class="flex flex-col py-4 lg:mx-12 lg:py-0">
					<a href="" class="text-white font-medium text-xl">Como personalizar</a>
					<a href="" class="text-white/70 font-normal text-lg">Referencias</a>
					<a href="" class="text-white/70 font-normal text-lg">El editor</a>
				</li>
				<li class="flex flex-col py-4 lg:mx-12 lg:py-0">
					<a href="" class="text-white font-medium text-xl">Servicio al cliente</a>
					<a href="" class="text-white/70 font-normal text-lg">Rastrea tu pedido</a>
					<a href="" class="text-white/70 font-normal text-lg">Preguntas frecuentes</a>
					<a href="" class="text-white/70 font-normal text-lg">Contacto</a>
					<a href="" class="text-white/70 font-normal text-lg">Escríbenos</a>
				</li>
				<li class="flex flex-col pt-4 lg:mx-12 lg:py-0">
					<a href="" class="text-white font-medium text-xl">Terminos y condiciones</a>
					<a href="" class="text-white/70 font-normal text-lg">Envíos</a>
					<a href="" class="text-white/70 font-normal text-lg">Devoluciones</a>
					<a href="" class="text-white/70 font-normal text-lg">¿Cuanto me cuesta?</a>
				</li>
				</ul>
				<div class="list-none flex flex-row justify-center mt-0 mb-7">
					<a href="" class="text-white mx-2 font-medium text-xl">wp</a>
					<a href="" class="text-white mx-2 font-medium text-xl">ins</a>
					<a href="" class="text-white mx-2 font-medium text-xl">fb</a>
				</div>
		</div><!-- .col-full -->
		<div class="w-full border-t border-b border-yellow/25 text-center"><span class="inline-block py-4 font-normal text-sm text-white/80">@Upcase 2022 &bull; Design by Luane</span></div>
		<div class="w-full text-center"><span class=" inline-block py-3 font-normal text-sm text-white/80">Politíca de privacidad</span></div>
	</footer><!-- #colophon -->

	<?php do_action( 'storefront_after_footer' ); ?>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
