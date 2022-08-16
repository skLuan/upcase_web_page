<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="<?php bloginfo('charset') ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri()?>/assets/favicon.ico" type="image/x-icon">

    <?php wp_head(); ?>
</head>

<body style=" background-color: #F8F8F8;">
    <?php wp_body_open() ?>
    <!-- ------------------------------------------------------------------- Info superior -->
    <div class="container-fluid px-0" id="container-info-asambleas">
        <div class="container">
            <!--  ----------------------------------------------------------------location destop -->
            <div class="row align-items-center py-2" id="locacion-desktop">
                <div class="col-sm-1">
                    <img class="" style="height: 24px;" src="http://asamblea-virtual.com/wp-content/uploads/sites/57/2021/12/icon-phone.png" alt="Telefono">
                </div>
                <div class="col-sm-2">
                    <a href="https://wa.me/573052245126" target="_blank" class="">+57-3052245126</a>

                </div>
                <div class="col-sm-1">
                    <img class="" style="height: 24px;" src="http://asamblea-virtual.com/wp-content/uploads/sites/57/2021/12/icon-email.png" alt="Correo">
                </div>
                <div class="col-sm-3 col-md-4">
                    <a class="" target="_blank" href="mailto:comercial@asamblea-virtual.com">comercial@asamblea-virtual.com</a>
                </div>
                <div class=" offset-md-2 col-sm-2">
                    <a href="<?php echo home_url() ?>/pa">
                        <img class="ms-md-4" src="http://asamblea-virtual.com/wp-content/uploads/sites/57/2021/12/icon-Pan.png" alt="Locación">
                    </a>
                    <a href="<?php echo home_url() ?>">
                        <img class="" src="http://asamblea-virtual.com/wp-content/uploads/sites/57/2021/12/icon-col.png" alt="Locación">
                    </a>
                </div>
            </div>

            <!--  ----------------------------------------------------------------location mobile -->
            <div class="row py-2" id="locacion-mobile">
                <div class="col-sm-12">
                    <div class="container-locaciones d-flex justify-content-between">
                        <div class="sub-container-locaciones align-items-start">
                            <a href="<?php echo home_url()?>">
                            <img class="mx-3" src="http://asamblea-virtual.com/wp-content/uploads/sites/57/2021/12/icon-col.png" alt="Locación">
                            </a>
                            <a href="<?php echo home_url() ?>/pa">
                                <img class="mx-3" src="http://asamblea-virtual.com/wp-content/uploads/sites/57/2021/12/icon-Pan.png" alt="Locación">
                            </a>
                        </div>
                        <nav class="navbar navbar-dark p-0 align-items-end">
                            <a id="btn-navbar" class="navbar-toggler" data-bs-toggle="offcanvas" href="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                <span class="navbar-toggler-icon"></span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ------------------------------------------------------------------- Nav bar -->
    <nav class="navbar navbar-light p-0 border-0">
        <!-- --------------------------------------------------- mobile -->
        <div class="container-fluid" id="nav-bar-mobile">

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close btn-close-white ms-auto me-5 text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                    </button>

                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" id="nav-bar-links-mobile">
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="<?php echo home_url() ?>/#container-servicios-mobile">Nuestro
                                Servicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="<?php echo home_url() ?>/#container-como-ayudamos-mobile">¿Cómo
                                ayudamos?</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="<?php echo home_url() ?>/#container-preguntas">Preguntas
                                frecuentes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="<?php echo home_url() ?>/blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="<?php echo home_url() ?>/#container-contactanos">Contáctanos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- --------------------------------------------------- desktop -->
        <div class="container-fluid py-1" id="nav-bar-desktop">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-sm-2">
                        <a href="<?php echo home_url() ?>">
                            <img class="my-3" src="http://asamblea-virtual.com/wp-content/uploads/sites/57/2021/12/AV-logo.png" alt="Logo Asambleas Virtuales" id="logo-av">
                        </a>
                    </div>
                    <div class="col-sm-10">
                        <div class="d-flex justify-content-end" id="nav-bar-links">
                            <a class="nav-link mx-2 py-3" aria-current="page" href="<?php echo home_url() ?>/#container-servicios">Nuestro
                                Servicio</a>
                            <a class="nav-link mx-2 py-3" aria-current="page" href="<?php echo home_url() ?>/#container-como-ayudamos">¿Cómo
                                ayudamos?</a>
                            <a class="nav-link mx-2 py-3" aria-current="page" href="#container-preguntas-frecuentes">Preguntas frecuentes</a>
                            <a class="nav-link mx-2 py-3" aria-current="page" href="<?php echo home_url() ?>/#container-precio">Precio</a>
                            <a class="nav-link mx-2 py-3" aria-current="page" href="<?php echo home_url() ?>/blog">Blog</a>
                            <a class="nav-link-contactanos mx-2 py-3" aria-current="<?php echo home_url() ?>/page" href="#container-contactanos">Contáctanos</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>