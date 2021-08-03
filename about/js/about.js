$(function(){
    let map_svg = document.querySelectorAll(".map_svg");
    let map_pointer = document.querySelectorAll(".point");
    console.log(map_pointer);


    for (let i=0; i < map_svg.length ; i++){
        $('.map_svg').eq(i).on('mouseover',function(){
            $('.point').eq(i).addClass('active');
        });
        $('.map_svg').eq(i).on('mouseleave',function(){
            $('.point').eq(i).removeClass('active');
        }); 
    }
});