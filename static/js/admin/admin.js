/**
 * Created by yhy on 2017/6/11.
 */
(function ($) {
    $('#button').on('click', function() {
        postSoftware();
    });

    document.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode == 13){
            postSoftware()
        }
    };

    function postSoftware() {
        var params = {
            title: $('#title').val(),
            type: $('#type').val(),
            size: $('#size').val(),
            img: $('#img').val(),
            edition: $('#edition').val()
        };
        $.ajax({
            url: '/admin/api/software',
            type: 'POST',
            data: params,
            dataType: 'json',
            success: function (data) {
                console.log('成功：', data);
                if (data.code == 1) {
                    window.location.reload();
                } else if (data.code == 0) {
                    alert('请检查是否错误')
                }
            },
            error: function (data) {//fail
                console.log('错误:', data);
            }
        });
    }
})(jQuery);