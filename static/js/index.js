/**
 * Created by yhy on 2017/6/5.
 */
$(document).ready(function () {
   $('.groom ul li').mouseenter(function() {
       $(this).find('.yx-chart').stop().animate({top: '-96px'});
   });

   $('.hot-set .hot-chart li').mouseenter(function() {
       $(this).find('.move-hover').stop().animate({height: '150px'});
   });

    $('.move-hover').hover(function() {
       $(this).stop().animate({height: '150px'});
   });
});

$(document).ready(function () {
   $('.groom ul li ').mouseleave(function() {
       $(this).find('.yx-chart').stop().animate({top: '0'});
   });

   $('.hot-set .hot-chart li').mouseleave(function() {
       $(this).find('.move-hover').animate({height: '30px'});
   });

   $('.move-hover').mouseout(function() {
       $(this).stop().animate({height: '30px'});
   });

   $('.top-sign li').hover(function() {
       $(this).children('.imgPack').addClass('hover');
       $(this).children('.fontPack').addClass('none');
       $(this).siblings('li').children('.imgPack').removeClass('hover');
       $(this).siblings('li').children('.fontPack').removeClass('none');
       $(this).siblings('li').children('.fontPack').removeClass('fontsign');
       $(this).siblings('li').children('.imgPack').removeClass('imgsign2');
   });

   $('.yx-newFb li .rj-newFb').hover(function() {
       $(this).children('.xs').addClass('hover');
       $(this).children('.lx-rl').addClass('none');
       $('.yx-newFb li .rj-newFb').not(this).children('.xs').removeClass('hover')
   });

   $('.hover-').hover(function() {
       $(this).addClass('hover');
       $('.hover-').not(this).removeClass('hover')
   });

});

$(document).ready(function () {
    $('.yx-newFb li .rj-newFb').hover(function() {
        $('.yx-newFb li .rj-newFb').not(this).children('.xs').removeClass('come')

    })

});

$(document).ready(function () {
    $('.yx-newFb li .rj-newFb').hover(function() {
        $('.yx-newFb li .rj-newFb').not(this).children('.lx-rl').removeClass('none')

    });
    $('.game-beauty ul li').mouseenter(function() {
        $(this).find('.tm').stop().animate({opacity: '0'});
        $('.game-beauty ul li').not(this).find('.tm').stop().animate({opacity: '1'});
    });

     $('.xz-recall').mouseleave(function() {
        $(this).find('.game-xz').css('display', 'block');
        $(this).find('.game-enter').css('display', 'none')
    });

     $('.hot_article ul li').mouseleave(function() {
        $(this).find('.name').css('color', '#666')
    });
});

$(document).ready(function () {
    $('.yx-newFb li .rj-newFb').hover(function() {
        $('.yx-newFb li .rj-newFb').not(this).children('.lx-rl').removeClass('join')

    });

    $('.game-beauty ul li').mouseleave(function() {
        $(this).find('.tm').animate({opacity: '0'});
       $('.game-beauty ul li').not(this).find('.tm').animate({opacity: '0'});
    });

    $('.xz-recall').mouseenter(function() {
        $(this).find('.game-xz').css('display', 'none');
        $(this).find('.game-enter').css('display', 'block')
    });

    $('.hot_article ul li').mouseenter(function() {
        $(this).find('.name').css('color', '#f60')
    });

});


