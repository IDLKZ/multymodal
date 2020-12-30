@extends("layout.layout")


@section("content")
    <section id="company">
    <div class="container-fluid pa-0 ma-0 overflow-hidden">
        <div class="row pa-0 ma-0 fill-current parallax d-flex justify-content-center align-items-center" style="background-image:linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('assets/images/bg1.png')">

                    <div class="col-md-8 text-center text-white">
                        <h1 class="header1 text-uppercase">
                            Первая Мультимодальная Компания
                        </h1>
                        <p class="subheading text-uppercase pt-2">
                            Надежный оператор вагонов
                        </p>
                        <a href="#contact" class="btn blue-btn py-3 px-3">
                            ОСТАВИТЬ ЗАЯВКУ
                        </a>
                    </div>
        </div>
    </div>
    </section>

    <section class="mt-5" id="direction">
      <div class="container">
          <div class="row">
              <div class="col-md-12 text-center text-black">
                  <h2 class="header2 text-uppercase">
                      Направления
                  </h2>
                  <p class="subheading2 text-uppercase pt-2">
                      У нас есть удивительное предложение специализированных запчастей на продажу и в аренду.
                      Мы также предлагаем аренду складских помещений и экспертные услуги для всех ваших строительных и
                      промышленных нужд.
                  </p>
              </div>
              <hr>
              <div class="col-md-6 text-center my-sm-5 pa-sm-2 my-md-5 pa-md-5 my-2">
                  <p class="heading4 text-uppercase">
                      Экспедирование
                  </p>
                  <div class="card-image bg-white d-flex justify-content-center align-items-center direction-card" style="background-image:url('assets/images/img1.png')">
                      <button class="btn btn-dark d-none">Подробнее</button>
                  </div>
              </div>
              <div class="col-md-6 text-center pa-sm-2 my-md-5 pa-md-5 my-2">
                  <p class="heading4 text-uppercase">
                      Оперирование вагонов
                  </p>
                  <div class="card-image bg-white" style="background-image:url('assets/images/img1.png')">
                  </div>
              </div>
              <div class="col-md-12 text-center text-black mt-2">
                  <p class="subheading2 text-uppercase pt-2 pb-5">
                      Вся наша продукция отличается высочайшим качеством и соответствует самым строгим отраслевым стандартам
                      безопасности. Просмотрите наш полный каталог, чтобы узнать обо всех наших продуктах, а также о наших
                      дополнительных услугах.
                  </p>
              </div>
          </div>

      </div>
        <div class="d-none d-sm-block" style="position:relative;">
            <div style="position: absolute; left: 0; bottom: 0">
                <svg width="124" height="100%" viewBox="0 0 290 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M215 902L0 0L1.47597 902H215Z" fill="#86C627"/>
                    <path d="M293 902L0 442L2.01144 902H293Z" fill="#24ABE2"/>
                </svg>
            </div>
            <div style="position: absolute; right: 0; bottom: 0">
                <svg width="120" height="100%" viewBox="0 0 220 475" fill="fixed" xmlns="http://www.w3.org/2000/svg">
                    <path d="M79 479L293 0L291.531 479H79Z" fill="#F8B62A"/>
                    <path d="M0 479L292 235L289.995 479H0Z" fill="#24ABE2"/>
                </svg>
            </div>
        </div>
    </section>

    <section id="management" class="main-bg">
        <div class="container pt-5">
            <div class="row">
                <div class="col-md-12 text-center text-white">
                    <h2 class="header2 text-uppercase">
                        Руководство
                    </h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 pr-0 d-none d-sm-block">
                    <div class="swiper-container2 overflow-hidden mt-5 mr-0 pr-0">
                        <div class="swiper-wrapper swiper-wrapper2">

                            <div class="swiper-slide swiper-slide2 text-white">
                                <img src="/assets/images/person1.png" alt="Avatar" class="avatar">
                                <p class="subheading ml-2">Арманов Асанали</p>

                            </div>
                            <div class="swiper-slide swiper-slide2 text-white">
                                <img src="/assets/images/person1.png" alt="Avatar" class="avatar">
                                <p class="subheading ml-2">Арманов Асанали</p>

                            </div>
                            <div class="swiper-slide swiper-slide2 text-white">
                                <img src="/assets/images/person1.png" alt="Avatar" class="avatar">
                                <p class="subheading ml-2">Арманов Асанали</p>

                            </div>


                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="swiper-container my-5">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper">
                            <!-- Slides -->
                            <div class="swiper-slide manager-card">
                                <div class="row">
                                    <div class="col-md-5 text-center">
                                        <img class="manager-card d-inline" src="/assets/images/person1.png">
                                    </div>
                                    <div class="col-md-7 text-white py-4 ">
                                        <h3>Арманов Асанали</h3>
                                        <h4>Основатель</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer
                                            adipiscing elit. Aenean commodo ligula eget
                                            dolor. Aenean massa.

                                            Cum sociis natoque penatibus et magnis dis
                                            parturient montes, nascetur ridiculus mus.
                                            Donec quam felis, ultricies nec, pellentesque eu,
                                            pretium quis, sem.
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div class="swiper-slide manager-card">
                                <div class="row">
                                    <div class="col-md-5 text-center">
                                        <img class="manager-card d-inline" src="/assets/images/person1.png">
                                    </div>
                                    <div class="col-md-7 text-white py-4 ">
                                        <h3>Арманов Асанали</h3>
                                        <h4>Основатель</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer
                                            adipiscing elit. Aenean commodo ligula eget
                                            dolor. Aenean massa.

                                            Cum sociis natoque penatibus et magnis dis
                                            parturient montes, nascetur ridiculus mus.
                                            Donec quam felis, ultricies nec, pellentesque eu,
                                            pretium quis, sem.
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div class="swiper-slide manager-card">
                                <div class="row">
                                    <div class="col-md-5 text-center">
                                        <img class="manager-card d-inline" src="/assets/images/person1.png">
                                    </div>
                                    <div class="col-md-7 text-white py-4 ">
                                        <h3>Арманов Асанали</h3>
                                        <h4>Основатель</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer
                                            adipiscing elit. Aenean commodo ligula eget
                                            dolor. Aenean massa.

                                            Cum sociis natoque penatibus et magnis dis
                                            parturient montes, nascetur ridiculus mus.
                                            Donec quam felis, ultricies nec, pellentesque eu,
                                            pretium quis, sem.
                                        </p>
                                    </div>
                                </div>

                            </div>



                        </div>
                        <div class="swiper-pagination"></div>
                        <!-- If we need pagination -->

                        <!-- If we need navigation buttons -->
                    </div>
                </div>


                </div>

            </div>

        </div>
    </section>

    <section id="partners">
        <div class="d-none d-sm-block" style="position: absolute; z-index: 2">
            <svg width="293" height="212" viewBox="0 0 293 212" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M214 7.4239e-06L-3 212L-1.51026 -3.02571e-05L214 7.4239e-06Z" fill="#3F8EC9"/>
                <path d="M293 -1.65148e-06L-3 108L-0.967945 -5.30505e-05L293 -1.65148e-06Z" fill="#24ABE2"/>
            </svg>
        </div>
        <div class="container pt-5">
            <div class="row">
                <div class="col-md-12 text-center text-black">
                    <h2 class="header2 text-uppercase">
                        Партнеры
                    </h2>
                </div>
                <div class="col-md-12 overflow-hidden">
                    <div class="swiper-container3 my-5">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper">
                            <!-- Slides -->
                            <div class="swiper-slide">
                                <div class="row justify-content-center">
                                        <img src="/assets/images/logo1.png">
                                </div>

                            </div>
                            <div class="swiper-slide">
                                <div class="row justify-content-center">
                                        <img src="/assets/images/logo2.png">
                                </div>

                            </div>
                            <div class="swiper-slide">
                                <div class="row justify-content-center">
                                        <img src="/assets/images/logo3.png">
                                </div>

                            </div>


                        </div>
                        <div class="swiper-pagination"></div>
                        <!-- If we need pagination -->

                        <!-- If we need navigation buttons -->
                    </div>
                </div>

            </div>

        </div>


    </section>

    <section id="documents" class="pb-5">
        <div class="container pt-5">
            <div class="row">
                <div class="col-md-12 text-center text-black">
                    <h2 class="header2 text-uppercase">
                        Документы
                    </h2>
                </div>
            </div>
            <div class="row my-5">
                <div class="col-md-6 mt-2">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">
                                <i class="fas fa-file-pdf"></i>
                                Наименование
                            </h4>
                            <hr>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                elit. Aenean commodo ligula eget dolor. Aenean
                                massa.
                            </p>
                            <a href="#" class="card-link text-uppercase text-success">
                                <i class="fas fa-download"></i>
                                Скачать</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 mt-2">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">
                                <i class="fas fa-file-pdf"></i>
                                Наименование
                            </h4>
                            <hr>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing
                                elit. Aenean commodo ligula eget dolor. Aenean
                                massa.
                            </p>
                            <a href="#" class="card-link text-uppercase text-success">
                                <i class="fas fa-download"></i>
                                Скачать</a>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    </section>

    <section id="contact" class="pb-5">
        <div class="container pt-5">
            <div class="row">
                <div class="col-md-12 text-center text-white">
                    <h2 class="header2 text-uppercase">
                        Напишите Нам
                    </h2>
                </div>
            </div>
            <form>
                <div class="row">
                    <div class=" col-md-6">
                        <div class="form-group">
                            <label for="formGroupSurnameInput" class="text-white text-uppercase">Фамилия</label>
                            <input type="text" class="form-control our-input" placeholder="Фамилия">
                        </div>
                    </div>
                    <div class=" col-md-6">
                        <div class="form-group">
                            <label for="formGroupNameInput" class="text-white text-uppercase">Имя</label>
                            <input type="text" class="form-control our-input" placeholder="Имя">
                        </div>
                    </div>
                    <div class=" col-md-6">
                        <div class="form-group">
                            <label for="formGroupNameInput" class="text-white text-uppercase">Телефон</label>
                            <input type="text" class="form-control our-input" placeholder="Телефон">
                        </div>
                    </div>
                    <div class=" col-md-6">
                        <div class="form-group">
                            <label for="formGroupNameInput" class="text-white text-uppercase">Email</label>
                            <input type="email" class="form-control our-input" placeholder="Email">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <label for="formGroupNameInput" class="text-white text-uppercase">Текст сообщения</label>
                        <textarea class="w-100" rows="10"></textarea>
                    </div>
                    <div class="col-md-6">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                            <label class="form-check-label" for="defaultCheck1">
                                Я принимаю условия конфиденциальности
                            </label>
                        </div>
                    </div>
                    <div class="col-md-6 text-right">
                        <button class="btn contact-button text-uppercase">Отправить Письмо</button>
                    </div>
                </div>
            </form>
        </div>
    </section>

    <section>
        <div class="container my-5">
            <div class="row">
                <div class="col-md-3 pa-5 text-center contact br">
                    <i class="fas fa-map-marker-alt contact-icon"></i>
                    <p class="subheading text-uppercase mt-2">Наш Адрес</p>
                    <p>Lorem ipsum dolor
                        sit amet</p>
                </div>
                <div class="col-md-3 pa-5 text-center contact br">
                    <i class="fas fa-phone contact-icon"></i>
                    <p class="subheading text-uppercase mt-2">Контакты</p>
                    <p>+7 777 777 77 77</p>
                </div>
                <div class="col-md-3 pa-5 text-center contact br">
                    <i class="fas fa-clock contact-icon"></i>
                    <p class="subheading text-uppercase mt-2">Часы работы</p>
                    <p>ПН-ПТ 09:00 - 18:30</p>
                    <p> СБ-ВС 09:00 - 15:30</p>
                </div>
                <div class="col-md-3 pa-5 text-center contact">
                    <i class="fas fa-envelope contact-icon"></i>
                    <p class="subheading text-uppercase mt-2">Почта</p>
                    <p>salem@pmk.kz</p>
                </div>
            </div>
        </div>

    </section>

@endsection()