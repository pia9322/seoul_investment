$(function(){
    
    $('header').load('../include/init.html header .header_wrap', init);
    $('.footer').load('../include/init.html .footer > .footer_wrap');

    function init() {
        
        function headFun(){
            let href = location.href;
            let headerNav = document.querySelector('.header_navi');

            if (href.indexOf("main") <= 0) {
                headerNav.classList.add("active")
            } else {
                headerNav.classList.remove("active")
            }
        }
        headFun()
        // console.log($('.big_category').text())
        $('.big_category').text($('#now_place > p:eq(0)').text())
        $('.small_category').text($('#now_place > p:eq(1)').text())
    };



});