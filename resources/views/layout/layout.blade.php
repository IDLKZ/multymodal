<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href={{asset("/assets/css/bootstrap.min.css")}}>
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
    <link rel="stylesheet" href="{{asset("/assets/css/mystyle.css")}}">


    <title>{{isset($title) ? $title :"Первая мультимодальная компания"}}</title>


</head>
<body>
{{--NavBar section--}}
<section>
    <div class="col-md-12 text-md-right header text-white py-2">
       <span class="mr-md-2"><a class="nav-link text-white" href="tel:+7-701-000-00-00">+7-701-000-00-00</a></span>
        <span class="mr-md-4"><a>salem@pmk.kz</a></span>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light bg-white">
        <a class="navbar-brand" href="/">
          <img class="header-img" src="{{asset("/assets/images/logo.png")}}">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto m-auto">
                <li class="nav-item mr-md-3 header-li">
                    <a class="nav-link header-link text-black text-uppercase" href="#company">О компании</a>
                </li>
                <li class="nav-item mr-md-3 header-li">
                    <a class="nav-link header-link text-black text-uppercase" href="#direction">Услуги</a>
                </li>
                <li class="nav-item mr-md-3 header-li">
                    <a class=" nav-link header-link text-black text-uppercase" href="#management">Руководство</a>
                </li>
                <li class="nav-item mr-md-3 header-li">
                    <a class="nav-link header-link text-black text-uppercase" href="#documents">Документы</a>
                </li>
                <li class="nav-item mr-md-3 header-li">
                    <a class="nav-link header-link text-black text-uppercase" href="#contact">Контакты</a>
                </li>
                <li class="nav-item mr-md-3 header-li">
                   <a href="#contact" class="btn btn-info btn-l header-lig py-3 px-3 header-button text-uppercase">Связаться с нами</a>
                </li>



            </ul>
        </div>
    </nav>
</section>
{{--End of NavBar section--}}
@yield("content")
{{--Footer Section--}}
<section class="footer">
<div class="container">
    <div class="row">
        <div class="col-md-4">
            <a class="navbar-brand" href="/">
                <img src="{{asset("/assets/images/footer-logo.png")}}" width="230" height="70">
            </a>
        </div>
        <div class="col-md-8 d-flex">
            <ul class="navbar-nav mr-auto m-auto list-group-horizontal footer-ul">
                <li class="nav-item mr-md-4 header-li">
                    <a class="nav-link header-link text-white text-uppercase" href="#company">О компании</a>
                </li>
                <li class="nav-item mr-md-4 header-li">
                    <a class="nav-link header-link text-white text-uppercase" href="#direction">Услуги</a>
                </li>
                <li class="nav-item mr-md-4 header-li">
                    <a class=" nav-link header-link text-white text-uppercase" href="#management">Руководство</a>
                </li>
                <li class="nav-item mr-md-4 header-li">
                    <a class="nav-link header-link text-white text-uppercase" href="#documents">Документы</a>
                </li>
                <li class="nav-item mr-md-4 header-li">
                    <a class="nav-link header-link text-white text-uppercase" href="#contact">Контакты</a>
                </li>

            </ul>
        </div>
    </div>
</div>
</section>
{{--EndFooter Section--}}

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="{{asset("/assets/js/jquery.js")}}"></script>
<script src="{{asset("/assets/js/popper.js")}}"></script>
<script src="{{asset("/assets/js/bootstrap.min.js")}}"></script>
<script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
<script src="{{asset("/assets/js/my_script.js")}}"></script>

</body>
</html>
