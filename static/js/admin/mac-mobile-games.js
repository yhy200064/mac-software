/**
 * Created by yhy on 2017/6/21.
 */
(function ($) {
    $('#MacPhone-button').on('click', function () {
        MacmobileGames();
    });

    function MacmobileGames() {
        var params = {
            name: $('#Mac-phone-name').val(),
            type: $('#Mac-phone-type').val(),
            size: $('#Mac-phone-size').val(),
            img: $('#Mac-phone-img').val(),
            assess: $('#Mac-phone-assess').val(),
            edition: $('#Mac-phone-edition').val()
        };
        $.ajax({
            url: '/admin/api/mac/mobilegames/software',
            type: 'POST',
            data: params,
            dataType: 'json',
            success: function (data) {
                console.log('成功：', data);
                if (data.code == 1) {
                    window.location.reload();
                } else if (data.code == 0) {
                    alert('请检查哪处地方没有插入数据！')
                }
            },
            error: function (data) {//fail
                console.log('错误:', data);
            }
        });
    }
})(jQuery);


(function($){
    MacmobileGames();
    function MacmobileGames() {
        $.ajax({
            url: '/admin/api/get/mac/mobilegames/software',
            type: 'GET',
            data: {},
            dataType: 'json',
            success: function(data) {
                console.log(data);
                var html = template('all-mac-mobile-games', data.body);
                $('#all-mac-mobile-new-games').html(html);
            },
            error: function(data) {
                console.log( '错误:', data);
            }
        });
    }
})(jQuery);