/**
 * Created by yhy on 2017/6/18.
 */
$(document).ready(function () {
    topright();//头部右边字体
    toptupianleft();//头部左边图片
    topwordleft();//头部左边字体
});

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

    var current = 1;
    var index = 1;

    $('.tupian-button li').mouseenter(function () {
        var index =$(this).index();
        showImage(index);
        showSpots(index);
    });

    $('.tupian-sign li').mouseenter(function () {
        clearInterval(window.intervalId);
    }).mouseleave(function () {
        slide();
    });

    function slide() {
        window.intervalId = setInterval(function () {
            showImage(index++);
            showSpots(current++);
            if (current == 3) current = 0;
            if (index == 3) index = 0
        }, 4000);
    }

    function showImage(index) {
        $('.tupian-sign > li').css('display', 'none');
        $('.tupian-sign > li').stop().animate({opacity: '0'});
        $('.tupian-sign > li').eq(index).css('display', 'block');
        $('.tupian-sign > li').eq(index).stop().animate({opacity: '1'}, 500);

    }

    function showSpots(current) {
        $('.tupian-button > li').animate().removeClass('this');
        $('.tupian-button > li').eq(current).animate().addClass('this');
    }


}