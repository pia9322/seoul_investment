$(function(){
    let map_svg = document.querySelectorAll(".map_svg");
    let map_pointer = document.querySelectorAll(".point");
    console.log(map_pointer);



    $('header').load('../include/init.html header .header_wrap', init);
    $('.footer').load('../include/init.html .footer > .footer_wrap');

    function init() {};

    // function headFun(){
    //     let href = location.href;
    //     let headerNav = document.querySelector('.header_navi');

    //     if (href.indexOf("index.html") <= 0) {
    //         headerNav.classList.add("active")
    //     } else {
    //         headerNav.classList.remove("active")
    //     }
    // }
    // headFun()

    for (let i=0; i < map_svg.length ; i++){
        $('.map_svg').eq(i).on('mouseover',function(){
            $('.point').eq(i).addClass('active');
        });
        $('.map_svg').eq(i).on('mouseleave',function(){
            $('.point').eq(i).removeClass('active');
        }); 
    }
    
    for (let i=0; i < map_svg.length ; i++){
        $('.point').eq(i).on('mouseover',function(){
            $('.map_svg').eq(i).addClass('active');
        });
        $('.point').eq(i).on('mouseleave',function(){
            $('.map_svg').eq(i).removeClass('active');
        });
    }



});