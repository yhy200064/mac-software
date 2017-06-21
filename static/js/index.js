/**
 * Created by yhy on 2017/6/5.
 */

$(document).ready(function () {
    hotCollectionBindEvents(); //热门合集事件绑定
    recommendBindEvents();//破解游戏推荐
    hotMobilegamesBindEvents();//热门手游事件绑定
    newhandtravelBindEvents();//最新手游
    hotArticleBindEvents();//热门文章
    gamebeautyBindEvents();//游戏美女
    rankingListBindEvents();//排行榜
    arrowBindEvents();//向上滑动箭头
    latestReleaseBindEvents();//最新发布
    dropdownboxBindEvents();//下拉框

});


function dropdownboxBindEvents() {
    $('.nav .showOut li').mouseenter(function () {
        $(this).children('.drop-down').stop().animate({height: '80px'});
    });
    $('.nav .showOut li').mouseleave(function () {
        $(this).children('.drop-down').stop().animate({height: '0'});
    });
}

function hotCollectionBindEvents() {
    $('#newest-collection').on('mouseenter', '.hot-chart-sign', function () {
        $(this).find('.move-hover').stop().animate({height: '150px'});
    });

    $('#newest-collection').on('mouseleave', '.hot-chart-sign', function () {
        $(this).find('.move-hover').animate({height: '30px'});
    });
}

function recommendBindEvents() {
    $('.groom ul li').mouseenter(function () {
        $(this).find('.yx-chart').stop().animate({top: '-96px'});
    });

    $('.groom ul li').mouseleave(function () {
        $(this).find('.yx-chart').stop().animate({top: '0'});
    });
}

function latestReleaseBindEvents() {
    $('#latestgame').on('mouseenter', '.fb-hot', function () {
        $(this).find('.xs').css('display', 'block');
        $(this).find('.lx-rl').css('display', 'none');
        $('.fb-hot').not(this).find('.lx-rl').css('display', 'block');
        $('.fb-hot').not(this).find('.xs').css('display', 'none')
    });

    $('#newest-macgame').on('mouseenter', '.mac-fb-hot', function () {
        $(this).find('.xs').css('display', 'block');
        $(this).find('.lx-rl').css('display', 'none');
        $('.mac-fb-hot').not(this).find('.lx-rl').css('display', 'block');
        $('.mac-fb-hot').not(this).find('.xs').css('display', 'none')
    });

    $('.yx-new-case .by-inside .yx-xt .pg').mouseenter(function () {
        $(this).css('background', '#f60');
        $(this).css('color', '#fff');
        $('.yx-new-case .by-inside .yx-xt .az-hover').css('background', '#f5f5f5');
        $('.yx-new-case .by-inside .yx-xt .az-hover').css('color', '#333');
        $('#latestgame').css('display', 'none');
        $('#newest-macgame').css('display', 'block');
    });
    $('.yx-new-case .by-inside .yx-xt .az-hover').mouseenter(function () {
        $(this).css('background', '#f60');
        $(this).css('color', '#fff');
        $('.yx-new-case .by-inside .yx-xt .pg').css('background', '#f5f5f5');
        $('.yx-new-case .by-inside .yx-xt .pg').css('color', '#333');
        $('#latestgame').css('display', 'block');
        $('#newest-macgame').css('display', 'none');
    })
}

function hotMobilegamesBindEvents() {
    $('.xz-recall').mouseleave(function () {
        $(this).find('.game-xz').css('display', 'block');
        $(this).find('.game-enter').css('display', 'none')
    });

    $('.xz-recall').mouseenter(function () {
        $(this).find('.game-xz').css('display', 'none');
        $(this).find('.game-enter').css('display', 'block')
    });
}

function newhandtravelBindEvents() {
    $('#newest-MobileGames').on('mouseenter', '.xing-MobileGames', function () {
        $(this).children('.imgbox').css('display', 'block');
        $('.xing-MobileGames').not(this).children('.imgbox').css('display', 'none');
        $(this).children('.txtbox').css('display', 'none');
        $('.xing-MobileGames').not(this).find('.txtbox').css('display', 'block')
    });

    $('.zxsy-sort .title .yx-xt .az-hover').mouseenter(function () {
        $(this).css('background', '#f60');
        $(this).css('color', '#fff');
        $('.zxsy-sort .title .yx-xt .pinguo').css('background', '#f5f5f5');
        $('.zxsy-sort .title .yx-xt .pinguo').css('color', '#333');
        $('#newest-MobileGames').css('display', 'block');
    });

    $('.zxsy-sort .title .yx-xt .pinguo').mouseenter(function () {
        $(this).css('background', '#f60');
        $(this).css('color', '#fff');
        $('.zxsy-sort .title .yx-xt .az-hover').css('background', '#f5f5f5');
        $('.zxsy-sort .title .yx-xt .az-hover').css('color', '#333');
        $('#newest-MobileGames').css('display', 'none');
    })
}


function hotArticleBindEvents() {
    $('.hot_article ul li').mouseenter(function () {
        $(this).find('.name').css('color', '#f60')
    });

    $('.hot_article ul li').mouseleave(function () {
        $(this).find('.name').css('color', '#666')
    });
}

function gamebeautyBindEvents() {
    $('.game-beauty ul li').mouseleave(function () {
        $(this).find('.tm').animate({opacity: '0'});
        $('.game-beauty ul li').not(this).find('.tm').animate({opacity: '0'});
    });

    $('.game-beauty ul li').mouseenter(function () {
        $(this).find('.tm').stop().animate({opacity: '0'});
        $('.game-beauty ul li').not(this).find('.tm').stop().animate({opacity: '1'});
    });
}

function rankingListBindEvents() {
    $('.top-sign li').hover(function () {
        $(this).children('.imgPack').addClass('hover');
        $(this).children('.fontPack').addClass('none');
        $(this).siblings('li').children('.imgPack').removeClass('hover');
        $(this).siblings('li').children('.fontPack').removeClass('none');
        $(this).siblings('li').children('.fontPack').removeClass('fontsign');
        $(this).siblings('li').children('.imgPack').removeClass('imgsign2');
    });
}

function arrowBindEvents() {
    $(function () {
        var winHeight = $(document).scrollTop();

        $(window).scroll(function () {
            var scrollY = $(document).scrollTop();

            if (scrollY > 560) {
                $('#gotoBox').css('display', 'block');
            }
            else {
                $('#gotoBox').css('display', 'none');
            }

            if (scrollY > winHeight) {
                $('#gotoBox').css('display', 'block')
            }
            else {
                $('#gotoBox').css('display', 'none');
            }

        });
        $("#gotoBox i").click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    });

}



