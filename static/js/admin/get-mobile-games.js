/**
 * Created by yhy on 2017/6/21.
 */
(function ($) {
    mobileGames();

    function mobileGames() {
        $.ajax({
            url: '/admin/api/get/mobilegames/software',
            type: 'GET',
            data: {},
            dataType: 'json',
            success: function (data) {
                console.log(data);
                var html = template('all-mobile-games', data.body);
                $('#all-mobile-new-games').html(html);
            },
            error: function (data) {
                console.log('错误:', data);
            }
        });
    }
})(jQuery);


$(document).ready(function () {
    $('#all-mobile-new-games').on('mouseenter', '.anzuo', function () {
        $(this).children('.game-hover').css('display', 'none');
        $(this).children('.shangchu').css('display', 'block');
    });

    $('#all-mobile-new-games').on('mouseleave', '.anzuo', function () {
        $(this).children('.game-hover').css('display', 'block');
        $(this).children('.shangchu').css('display', 'none');
    });

    $('#all-mac-mobile-new-games').on('mouseenter', '.pinguo', function () {
        $(this).children('.game-hover').css('display', 'none');
        $(this).children('.shangchu').css('display', 'block');
    });

    $('#all-mac-mobile-new-games').on('mouseleave', '.pinguo', function () {
        $(this).children('.game-hover').css('display', 'block');
        $(this).children('.shangchu').css('display', 'none');
    });
});