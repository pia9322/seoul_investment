$(function(){
    AOS.init();

    
    var swiper = new Swiper('.swiper-container', {
        effect: 'fade',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            init: function () {
                $('.swiper-progress-bar').removeClass('animate');
                $('.swiper-progress-bar').removeClass('active');
                $('.swiper-progress-bar').eq(0).addClass('animate');
                $('.swiper-progress-bar').eq(0).addClass('active');
            },
            slideChangeTransitionStart: function () {
                $('.swiper-progress-bar').removeClass('animate');
                $('.swiper-progress-bar').removeClass('active');
                $('.swiper-progress-bar').eq(0).addClass('active');
            },
            slideChangeTransitionEnd: function () {
                $('.swiper-progress-bar').eq(0).addClass('animate');
            },
        }
    });
    


    $('.home_slide').slick({
        infinite: true,          
        slidesToShow: 2,
        arrows: true,
        centerMode: true,
        centerPadding : '220px',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


    $(window).scroll(function () {
        var scrT = $(window).scrollTop();
        (scrT == $(document).height() - $(window).height())
        ? $(".footer").addClass("active")
        : $(".footer").removeClass("active")
    });





    // script_END
})