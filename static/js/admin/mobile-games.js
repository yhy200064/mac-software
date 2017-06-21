/**
 * Created by yhy on 2017/6/21.
 */
(function ($) {
    $('#phone-button').on('click', function () {
        mobileGames();
    });

    function mobileGames() {
        var params = {
            name: $('#phone-name').val(),
            type: $('#phone-type').val(),
            size: $('#phone-size').val(),
            img: $('#phone-img').val(),
            assess: $('#phone-assess').val(),
            edition: $('#phone-edition').val()
        };
        $.ajax({
            url: '/admin/api/mobilegames/software',
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



