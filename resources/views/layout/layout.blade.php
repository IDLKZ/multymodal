<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="{{isset($data["seo"]) ? ($data["seo"] ? $data["seo"]->description : "Первая мультимодальная компания") :"Первая мультимодальная компания"}}">
    <meta name="keywords" content="{{isset($data["seo"]) ? ($data["seo"] ? $data["seo"]->keywords : "Первая мультимодальная компания") :"Первая мультимодальная компания"}}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href={{asset("/assets/css/bootstrap.min.css")}}>
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="{{asset("/assets/css/mystyle.css")}}">


    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">




    <title>{{isset($data["seo"]) ? ($data["seo"] ? $data["seo"]->title : "Первая мультимодальная компания") :"Первая мультимодальная компания"}}</title>


</head>
<body>

{{--NavBar section--}}
<section>
    <div class="col-md-12 text-md-right header header-nav text-white py-2">
        @if($data["header"]["phone"])
            @foreach($data["header"]["phone"] as $phone)
            <span class="mr-md-2 {{$loop->iteration == 1 ? "ml-auto" : "" }}"><a class="nav-link text-white" href="tel:{{$phone}}">{{$phone}}</a></span>
            @endforeach
        @endif
            @if($data["header"]["email"])
                @foreach($data["header"]["email"] as $email)
                    <span class="mr-md-2">{{$email}}</span>
                @endforeach
            @endif
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

    <a class="btn btn-labeled btn-info float-button1 rounded" href="#contact">
        <span class="btn-label"><i class="fas fa-comment"></i></span>Написать нам</a>

    <a class="btn btn-labeled btn-info float-button2 rounded" href="tel:{{isset($data["header"]["phone"][0]) ? $data["header"]["phone"][0]  : "+77172611630" }}">
        <span class="btn-label"><i class="fas fa-phone"></i></span>Позвонить</a>



{{--EndFooter Section--}}

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="{{asset("/assets/js/jquery.js")}}"></script>
<script src="{{asset("/assets/js/popper.js")}}"></script>
<script src="{{asset("/assets/js/bootstrap.min.js")}}"></script>
<script src="https://unpkg.com/swiper/swiper-bundle.js"></script>
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
<script src="{{asset("/assets/js/my_script.js")}}"></script>
@stack("scripts")

</body>
</html>
