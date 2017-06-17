/**
 * Created by yhy on 2017/6/17.
 */
(function ($) {
    $('#mac-button').on('click', function() {
        macpostSoftware();
    });

    function macpostSoftware() {
        var params = {
            name: $('#mac-name').val(),
            type: $('#mac-type').val(),
            size: $('#mac-size').val(),
            img: $('#mac-img').val(),
            assess: $('#mac-assess').val(),
            edition: $('#mac-edition').val()
        };
        $.ajax({
            url: '/admin/api/mac/software',
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
