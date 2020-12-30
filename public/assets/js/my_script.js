const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el:'.swiper-pagination',
        clickable: true,
    },
})
var swiper2 = new Swiper('.swiper-container2', {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
swiper2.on('slideChange', function () {
    swiper.slideTo(swiper2.activeIndex)
});
swiper.on('slideChange', function () {
    swiper2.slideTo(swiper.activeIndex)
});
var swiper3 = new Swiper('.swiper-container3', {
    loop:true,

    autoplay:true,
    slidesPerView: window.screen.width >900 ? 3 : 1,
    mousewheel: true,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});
$(document).ready(function () {
    $(".direction-card").on("mouseover",function (){
       $(this).css("box-shadow",10)
    })

})
