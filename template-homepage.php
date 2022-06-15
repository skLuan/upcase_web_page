<?php
/**
 * The template for displaying the homepage.
 *
 * This page template will display any functions hooked into the `homepage` action.
 * By default this includes a variety of product displays and the page content itself. To change the order or toggle these components
 * use the Homepage Control plugin.
 * https://wordpress.org/plugins/homepage-control/
 *
 * Template name: Homepage
 *
 * @package storefront
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<section id="descripcion">
				<!------------------------- Titles -->
				<div class="mt-24">
					<h4 class="pb-0 mb-0 text-2xl font-normal tracking-tight text-center">Personalizalos</h4>
					<h3 class="text-4xl font-bold tracking-tight text-center">Como quieras</h3>
				</div>
				<!------------------------- container fundas -->
				<div class="relative pr-6 fundas-container col-full mt-28">
					<div class="px-8 mr-28 bg-white-true rounded-l-3xl rounded-r-[100px] drop-shadow-md py-7">
						<h2 class="text-2xl font-bold tracking-tight">Fundas</h2>
						<p class="mb-10 w-[55%] text-base font-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
						<a class="text-base mx-[25%] font-bold underline text-purple-default" href="">Ver colecciones</a>
					</div>
					<picture class="absolute right-0 -top-[40%] m-auto">
						<img src=" <?php echo get_stylesheet_directory_uri() .'/assets/images/upcase/home/funda.png' ?>" alt="">
					</picture>
				</div>
				<!------------------------- button -->
				<div class="flex mt-14">
					<a class="px-5 py-3 mx-auto text-lg font-semibold rounded-lg drop-shadow-md bg-yellow text-blackTxt" href="">Personalizar funda</a>
				</div>
				<!------------------------- Trabajo con marcas -->
				<div class="flex flex-col justify-center py-32">
					<p class="m-0 text-center">Trabajamos con las siguientes marcas</p>
					<picture class="mx-auto">
						<img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/upcase/home/marcas.png' ?>" alt="Apple, Xiaomi, Samsumg, Huawei">
					</picture>
				</div>
				<!------------------------- container stikers -->
				<div class="relative pl-6 fundas-container col-full mt-28">
					<div class="pr-12 pl-40 ml-16 bg-white-true rounded-r-3xl rounded-l-[100px] drop-shadow-md py-7">
						<h2 class="mb-4 text-2xl font-bold tracking-tight text-center">Stikers</h2>
						<!-- ------------- 4cm -->
						<div class="flex flex-row items-center ml-auto">
							<img src="<?php echo get_stylesheet_directory_uri() .'/assets/images/upcase/home/stiker4cm.png' ?>" alt="">
							<span class="pl-9">
								<a class="mb-4 text-lg font-bold text-purple-default" href="">Para fundas</a>
								<p class="mb-0 text-base font-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
							</span>
						</div>
						<!-- ------------- 6cm -->
						<div class="flex flex-row items-center my-16 ml-auto">
							<img src="<?php echo get_stylesheet_directory_uri() .'/assets/images/upcase/home/stiker6cm.png' ?>" alt="">
							<span class="pl-9">
								<a class="mb-4 text-lg font-bold text-purple-default" href="">Exteriores</a>
								<p class="mb-0 text-base font-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
							</span>
						</div>
					</div>
					<picture class="absolute left-0 bottom-[17%] m-auto">
						<img src=" <?php echo get_stylesheet_directory_uri() .'/assets/images/upcase/home/funda-stikers.png' ?>" alt="">
					</picture>
				</div>
				<!------------------------- button -->
							<div class="flex mt-14">
								<a class="py-3 mx-auto text-lg font-semibold rounded-lg px-7 drop-shadow-md bg-yellow text-blackTxt" href="">Explorar stikers</a>
							</div>
				
			</section>
			<?php
			// the_content();
			/**		
			 * Functions hooked in to homepage action
			 *
			 * @hooked storefront_homepage_content      - 10
			 * @hooked storefront_product_categories    - 20
			 * @hooked storefront_recent_products       - 30
			 * @hooked storefront_featured_products     - 40
			 * @hooked storefront_popular_products      - 50
			 * @hooked storefront_on_sale_products      - 60
			 * @hooked storefront_best_selling_products - 70
			 */
			// do_action( 'homepage' );
			?>

		</main><!-- #main -->
	</div><!-- #primary -->
<?php
get_footer();
