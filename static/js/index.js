/**
 * Created by yhy on 2017/6/5.
 */

$(document).ready(function () {
    hotCollectionBindEvents(); //热门合集事件绑定
    recommendBindEvents();//破解游戏推荐
    latestReleaseBindEvents();//最新发布
    hotMobilegamesBindEvents();//热门手游事件绑定
    newhandtravelBindEvents();//最新手游
    hotArticleBindEvents();//热门文章
    gamebeautyBindEvents();//游戏美女
    rankingListBindEvents();//排行榜
});


function hotCollectionBindEvents(){
    $('.hot-set .hot-chart .hot-chart-sign').mouseenter(function () {
        $(this).find('.move-hover').stop().animate({height: '150px'});
    });

    $('.hot-set .hot-chart .hot-chart-sign').mouseleave(function () {
        $(this).find('.move-hover').animate({height: '30px'});
    });
}

function recommendBindEvents(){
    $('.groom ul li').mouseenter(function() {
        $(this).find('.yx-chart').stop().animate({top: '-96px'});
    });

    $('.groom ul li').mouseleave(function() {
        $(this).find('.yx-chart').stop().animate({top: '0'});
    });
}

function latestReleaseBindEvents(){
     $('.yx-newFb li .rj-newFb').hover(function() {
         $(this).children('.xs').addClass('hover');
         $(this).children('.lx-rl').addClass('none');
         $('.yx-newFb li .rj-newFb').not(this).children('.xs').removeClass('hover');
         $('.yx-newFb li .rj-newFb').not(this).children('.xs').removeClass('come');
         $('.yx-newFb li .rj-newFb').not(this).children('.lx-rl').removeClass('join')
     });

     $('.yx-newFb li .rj-newFb').hover(function() {
         $(this).children('.xs').addClass('hover');
         $('.yx-newFb li .rj-newFb').not(this).children('.xs').removeClass('hover');
         $('.yx-newFb li .rj-newFb').not(this).children('.xs').removeClass('come');
         $('.yx-newFb li .rj-newFb').not(this).children('.lx-rl').removeClass('none')
     });
}

function hotMobilegamesBindEvents(){
     $('.xz-recall').mouseleave(function() {
         $(this).find('.game-xz').css('display', 'block');
         $(this).find('.game-enter').css('display', 'none')
     });

      $('.xz-recall').mouseenter(function() {
          $(this).find('.game-xz').css('display', 'none');
          $(this).find('.game-enter').css('display', 'block')
      });
}

function newhandtravelBindEvents(){
      $('.hover-').hover(function() {
          $(this).addClass('hover');
          $('.hover-').not(this).removeClass('hover')
      });
}


function hotArticleBindEvents(){
    $('.hot_article ul li').mouseenter(function() {
        $(this).find('.name').css('color', '#f60')
    });

     $('.hot_article ul li').mouseleave(function() {
         $(this).find('.name').css('color', '#666')
     });
}

function gamebeautyBindEvents(){
     $('.game-beauty ul li').mouseleave(function() {
         $(this).find('.tm').animate({opacity: '0'});
         $('.game-beauty ul li').not(this).find('.tm').animate({opacity: '0'});
     });

      $('.game-beauty ul li').mouseenter(function() {
          $(this).find('.tm').stop().animate({opacity: '0'});
          $('.game-beauty ul li').not(this).find('.tm').stop().animate({opacity: '1'});
      });
}

function rankingListBindEvents() {
     $('.top-sign li').hover(function() {
         $(this).children('.imgPack').addClass('hover');
         $(this).children('.fontPack').addClass('none');
         $(this).siblings('li').children('.imgPack').removeClass('hover');
         $(this).siblings('li').children('.fontPack').removeClass('none');
         $(this).siblings('li').children('.fontPack').removeClass('fontsign');
         $(this).siblings('li').children('.imgPack').removeClass('imgsign2');});
}




