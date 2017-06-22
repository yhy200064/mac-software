/**
 * Created by yhy on 2017/6/18.
 */
$(document).ready(function () {
    topright();//头部右边字体
    toptupianleft();//头部左边图片
    topwordleft();//头部左边字体
    androidGamesRecommended();//安卓游戏推荐
    crackStarter();//破解首发
    crackStartercolor();//破解首发图片颜色调节
    weektuijian();//一周推荐
});

function weektuijian() {
    $('.week-new-game .img').mouseenter(function () {
        $(this).find('p').addClass('hover')
    });
    $('.week-new-game .img').mouseleave(function () {
        $(this).find('p').removeClass('hover')
    });

    $('#week-game').on('mouseenter', 'li', function () {
        $(this).find('.title').css('color', '#f60')
    });

    $('#week-game').on('mouseleave', 'li', function () {
        $(this).find('.title').css('color', '#333')
    });
}

function topright() {
    $('.toubu-bar-right a').mouseenter(function () {
        $(this).children('strong').css('color', '#f60');
    });

    $('.toubu-bar-right a').mouseleave(function () {
        $(this).children('strong').css('color', '#333');
    });

}

function topwordleft() {
    $('.tupian-switch').mouseenter(function () {
        $(this).find('strong').css('color', '#f60');
    });
    $('.tupian-switch').mouseleave(function () {
        $(this).find('strong').css('color', '#fff');
    });
}


function toptupianleft() {
    var imageId;
    var current = 1;
    var index = 1;
    slide();
    $('.tupian-button li').mouseenter(function () {
        var index = $(this).index();
        showImage(index);
        showSpots(index);
    });

    $('.tupian-sign li').mouseenter(function () {
        clearInterval(imageId);
    }).mouseleave(function () {
        slide();
    });

    function slide() {
        imageId = setInterval(function () {
            showImage(index++);
            showSpots(current++);
            if (current == 3){current = 0}
            if (index == 3){index = 0}
        }, 4000);
    }

    function showImage(index) {
        $('.tupian-sign > li').css('display', 'none');
        $('.tupian-sign > li').stop().animate({opacity: '0'}, 500);
        $('.tupian-sign > li').eq(index).css('display', 'block');
        $('.tupian-sign > li').eq(index).stop().animate({opacity: '1'}, 500);

    }

    function showSpots(current) {
        $('.tupian-button > li').removeClass('this');
        $('.tupian-button > li').eq(current).addClass('this');
    }

}


function androidGamesRecommended() {
    $('.anzuo-game-tuijian .part-game .game-img').mouseenter(function () {
        $(this).find('.big-img').stop().animate({top: '-120px'});
    });
    $('.anzuo-game-tuijian .part-game .game-img').mouseleave(function () {
        $(this).find('.big-img').stop().animate({top: '0'});
    });

    $('.game-list li').mouseenter(function () {
        $(this).addClass('frame')
    });
    $('.game-list li').mouseleave(function () {
        $(this).removeClass('frame')
    });

    $('.game-list li a strong').mouseenter(function () {
        $(this).css('color', '#f60')
    });
    $('.game-list li a strong').mouseleave(function () {
        $(this).css('color', '#333')
    });

    $('.game-list li a img').mouseenter(function () {
        $(this).siblings('strong').css('color', '#f60')
    });
    $('.game-list li a img').mouseleave(function () {
        $(this).siblings('strong').css('color', '#333')
    })
}


function crackStarter() {
    //手动轮播
    $('.button-prev').click(function () {

        if ($('.zd-jiaohan').is(':animated')) return;
        var left = parseInt($('.zd-jiaohan').css('left'));
        //临界条件
        if (left == 0) {
            $('.zd-jiaohan').prepend($('.zd-jiaohan > li').last());
            $('.zd-jiaohan').css('left', -256)
        }

        $('.zd-jiaohan').animate({'left': parseInt($('.zd-jiaohan').css('left')) + 256}, 'slow', function () {
            // $('.zd-jiaohan').prepend($('.zd-jiaohan > li').eq(7));
            // $('.zd-jiaohan').css('left', '-1024px')
        })
    });

    $('.button-after').click(function () {
        if ($('.zd-jiaohan').is(':animated')) return;

        var left = parseInt($('.zd-jiaohan').css('left'));
        var liLen = $('.zd-jiaohan > li').length;
        //临界条件
        if (left === -(liLen - 4) * 256) {
            $('.zd-jiaohan').append($('.zd-jiaohan > li').first());
            $('.zd-jiaohan').css('left', left + 256)
        }

        $('.zd-jiaohan').animate({left: parseInt($('.zd-jiaohan').css('left')) - 256}, 'slow', function () {
        })
    });


    //自动轮播
    var index = 0;
    var imageId;
    slide();

    $('.button-prev').mouseenter(function () {
        clearInterval(imageId);
    }).mouseleave(function () {
        slide();
    });

    $('.button-after').mouseenter(function () {
        clearInterval(imageId);
    }).mouseleave(function () {
        slide();
    });

    function showImage() {
        var left = parseInt($('.zd-jiaohan').css('left'));
        var liLen = $('.zd-jiaohan > li').length;
        //临界条件
        if (left === -(liLen - 4) * 256) {
            $('.zd-jiaohan').append($('.zd-jiaohan > li').first());
            $('.zd-jiaohan').css('left', left + 256)
        }
        $('.zd-jiaohan').animate({left: parseInt($('.zd-jiaohan').css('left')) - 256}, 'slow', function () {
        })

    }

    function slide() {
        imageId = setInterval(function () {
            showImage(index--);
        }, 4000);
    }

}

function crackStartercolor() {
    $('.zd-jiaohan li').mouseenter(function () {
        $(this).find('p').addClass('hover')
    });
    $('.zd-jiaohan li').mouseleave(function () {
        $(this).find('p').removeClass('hover')
    })
}