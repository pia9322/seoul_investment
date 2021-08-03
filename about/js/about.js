$(function(){
    let map_svg = document.querySelectorAll(".map_svg");
    let map_pointer = document.querySelectorAll(".point");
    console.log(map_pointer);



    // $('header').load('inc.html header nav', init)
    // $('footer').load('inc.html footer figure')

    // function init() {
    // }

    for (let i=0; i < map_svg.length ; i++){
        $('.map_svg').eq(i).on('mouseover',function(){
            $('.point').eq(i).addClass('active');
        });
        $('.map_svg').eq(i).on('mouseleave',function(){
            $('.point').eq(i).removeClass('active');
        }); 
    }
    
    for (let j=0; j < map_svg.length ; j++){
        $('.point').eq(j).on('mouseover',function(){
            $('.map_svg').eq(j).addClass('active');
        });
        $('.point').eq(j).on('mouseleave',function(){
            $('.map_svg').eq(j).removeClass('active');
        });
    }
});