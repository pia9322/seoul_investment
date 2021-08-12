$(function(){
    AOS.init();

    
    var swiper = new Swiper('.swiper_01', {
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
   

    $(function () {
        $('.home_box').hover(function () {
            $('.text_hover_box_02', this).stop().slideDown(150)
        }, function () {
            $('.text_hover_box_02', this).stop().slideUp(150)
        })
    });


    // $(function () {
    //     $('.home_box').hover(function () {
    //         $(".home_detail").stop().slideDown(150)
    //     }, function () {
    //         $(".home_detail").stop().slideUp(150)
    //     })
    // });
    
    var swiper = new Swiper(".swiper_02", {
        slidesPerView: 2.5,
        spaceBetween: 20,
        loop : true,
        loopAdditionalSlides : 10,
        // centeredSlides: true,
        // navigation: {   // 버튼 사용자 지정
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
        breakpoints : { // 반응형 설정이 가능 width값으로 조정
            768 : {
              slidesPerView : 1,
            },
        },
    });
    


    // $('.home_slide').slick({
    //     infinite: true,          
    //     slidesToShow: 2.1,
    //     arrows: true,
    //     // centerMode: true,
    //     // centerPadding : '220px',
    //     responsive: [
    //         {
    //             breakpoint: 1440,
    //             settings: {
    //                 arrows: true,
    //                 // centerMode: true,
    //                 // centerPadding: '40px',
    //                 slidesToShow: 2
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 arrows: true,
    //                 // centerMode: true,
    //                 // centerPadding: '40px',
    //                 slidesToShow: 1
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 arrows: true,
    //                 centerMode: true,
    //                 centerPadding: '40px',
    //                 slidesToShow: 1
    //             }
    //         }
    //     ]
    // });


    $(window).scroll(function () {
        var scrT = $(window).scrollTop();
        (scrT == $(document).height() - $(window).height())
        ? $(".footer").addClass("active")
        : $(".footer").removeClass("active")
    });


    function headFun(){
        let href = location.href;
        let headerNav = document.querySelector('.header_navi');

        if (href.indexOf("index.html") <= 0) {
            headerNav.classList.add("active")
        } else {
            headerNav.classList.remove("active")
        }
    }
    headFun()



    // script_END
})