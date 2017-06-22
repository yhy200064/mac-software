/**
 * Created by yhy on 2017/6/21.
 */
(function ($) {
    newMobileGames();

    function newMobileGames() {
        $.ajax({
            url: '/new/mobile/games',
            type: 'GET',
            data: {},
            dataType: 'json',
            success: function (data) {
                console.log(data);
                var html = template('new-MobileGames', data.body);
                $('#newest-MobileGames').html(html);
            },
            error: function (data) {
                console.log('错误:', data);
            }
        });
    }
})(jQuery);


(function ($) {
    newMacMobileGames();

    function newMacMobileGames() {
        $.ajax({
            url: '/new/mac/mobile/games',
            type: 'GET',
            data: {},
            dataType: 'json',
            success: function (data) {
                console.log(data);
                var html = template('new-MacMobileGames', data.body);
                $('#newest-MacMobileGames').html(html);
            },
            error: function (data) {
                console.log('错误:', data);
            }
        });
    }
})(jQuery);



