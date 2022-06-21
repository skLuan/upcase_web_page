<?php get_header() ?>

<div class="container-fluid" id="container-header-blog">
<div class="container">
<div class="row">
<div class="mx-auto col-lg-9 col-sm-10 my-5"><img alt="Logo Asambleas Virtuales" class="mx-auto my-3" src="http://staging.ventas-por-internet.com/wp-content/uploads/sites/57/2021/12/AV-logo.png" id="logo-av-seccion1">
<h2>Política de Privacidad para Clientes Asambleas Virtuales</h2>
</div>
</div>
</div>
</div>
<div class="container">
<div class="row">
<div class="mx-auto col-12 col-lg-8 pt-5">


<?php while(have_posts()) {
    the_post();
    the_content();
} ?>

</div>
</div>
</div>

<?php get_footer() ?>
