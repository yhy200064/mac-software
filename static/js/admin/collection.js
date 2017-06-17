/**
 * Created by yhy on 2017/6/14.
 */
(function ($) {
    $('#margin-button').on('click', function() {
        postCollection();
    });

    function postCollection() {
        var params = {
            name: $('#name').val(),
            introduce: $('#introduce').val(),
            img: $('#hot-img').val()
        };
        $.ajax({
            url: '/admin/api/collection',
            type: 'POST',
            data: params,
            dataType: 'json',
            success: function (data) {
                console.log('成功:', data);
                if(data.code == 1) {
                    window.location.reload();
                }else if(data.code == 0) {
                    alert('请检查哪处地方没有插入数据！')
                }
            },
            error: function(data) {
                console.log('错误:', data);
            }
        });
    }
})(jQuery);
