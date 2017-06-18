/**
 * Created by yhy on 2017/6/17.
 */

$(document).ready(function () {

    $('#spots li').mouseenter(function () {
        var index = $('#spots li').index(this);
        showImage(index);
        showSpots(index)

    });

    function showImage(index) {
        $('.ad-img > li').css('display', 'none');
        $('.ad-img > li').stop().animate({opacity: '0'});
        $('.ad-img > li').eq(index).css('display', 'block');
        $('.ad-img > li').eq(index).stop().animate({opacity: '1'}, 600);

    }

    function showSpots(current) {
        $('#spots > li').animate().removeClass('current');
        $('#spots > li').eq(current).animate().addClass('current');
    }

    var current = 1;
    var index = 1;
    var id = setInterval(function () {
        showImage(index++);
        showSpots(current++);
        if (current == 3) current = 0;
        if (index == 3) index = 0
    }, 4000);

});