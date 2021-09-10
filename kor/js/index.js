$(function(){
    
    $('header').load('../include/init.html header .header_wrap', init);
    $('.footer').load('../include/init.html .footer > .footer_wrap');
    $('.header_background_menu').load('../include/init.html .header_background_menu > ul');

    function init() {
        
        function NavScroll() {
            if ($('.header_background_menu').hasClass('active')) {
                $('body').css({ 'overflow': 'hidden' });
            } else {
                $('body').css({ 'overflow': 'auto' });
            };
        }
    
    
    
        function Navopen() {
            $('.header_right').on('click', function () {
                $('.header_background_menu').toggleClass('active');
                $('header').toggleClass('active');
                $('.header_right').toggleClass('active');
    
             
                NavScroll();
    
            });
    
        }
        Navopen()
    
    

    
        $('.header_background_menu > ul > li > a').click(function(){
            console.log('asdasd')
            $('.m_depth_01').slideUp();
            $(this).find('.m_depth_01').slideToggle();
        })
    };



});