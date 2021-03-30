$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    dotsSpeed: 1000,
   // autoplay:true,
   // autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    });

    //fixed menu

    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
         $(".header").addClass("scroll-header animate__animated animate__fadeInDown");
        }else{
         $(".header").removeClass("scroll-header animate__animated animate__fadeInDown");
        }
    });

    //menu-toggle
    $('#mobile-menu').on('click',function(){
        $('.nav-items').toggleClass('show animate__animated animate__fadeInDown');
    });

     //scroll-top
    $(window).on("scroll", function() {
        $(this).scrollTop() > 100 ? $(".scroll-top").fadeIn() : $(".scroll-top").fadeOut()
    });

    $(".scroll-top").on('click',function() {
        return $("html, body").animate({
            scrollTop: 0
        }, 1000)
    });

    $(".themes__items li").on("click", function(){
        var x = $(this).attr('class');
            $('body').removeClass();
            $('body').addClass(x); 
    });

    $('.themes__btn').on('click',function(){
        $(".themes__colors").toggleClass("active");
    });

    
});
 