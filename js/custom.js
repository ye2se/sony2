$(function () {
    $('#bgndVideo').YTPlayer({
        videoURL: 'https://www.youtube.com/watch?v=P648TE8dzYY',
        containment: '.u_box',
        autoPlay: true,
        mute: true,
        showControls: false,
        playOnlyIfVisible: true,
        optimizeDisplay: true,
    })
})

$(function () {
    const MainProduct = new Swiper('.main_product_slide', {
        slidesPerView: "auto",
        spaceBetween: 210,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.main_product .product_inner .arrows .next',
            prevEl: '.main_product .product_inner .arrows .prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: function (number) {
                return '0' + number;
            }
        },
    })
})