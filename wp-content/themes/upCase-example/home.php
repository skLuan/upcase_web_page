<?php get_header() ?>

<div id="container-header-blog" class="container-fluid">
<div class="container">
<div class="row">
<div class="col-sm-10 offset-sm-1"><img id="logo-av-seccion1" class="mx-auto my-3" src="http://asamblea-virtual.com/wp-content/uploads/sites/57/2021/12/AV-logo.png" alt="Logo Asambleas Virtuales"><p></p>
<h2>Blog</h2>
<p class="breadCrumbs-blog-fidelio"><a href="https://asamblea-virtual.com/">Home</a> &gt; <a href="https://asamblea-virtual.com/Blog"> Blog</a></p>
</div>
</div>
</div>
</div>

<div class="container">
<div class="row">
<div class="one-post col-12 col-lg-7 offset-lg-1 mb-5 pb-5 pt-5">
<?php while(have_posts()) {
    the_post();
    the_content();
} ?>

</div>
</div>
</div>

<?php get_footer() ?>
