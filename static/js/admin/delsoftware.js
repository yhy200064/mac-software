/**
 * Created by yhy on 2017/6/16.
 */

(function ($) {
    $('#newest-game').on('click', '.shangchu', function () {
        var id = this.getAttribute('data-id');
        delCollection(id);
    });

    function delCollection(id) {

        $.ajax({
            url: '/admin/del/api/software',
            type: 'POST',
            data: {id: id},
            dataType: 'json',
            success: function (data) {
                console.log('成功:', data);
                if (data.code == 1) {
                    alert('删除成功');
                    window.location.reload();
                } else if (data.code == 0) {
                    alert('删除失败')
                }
            },
            error: function (data) {
                console.log('错误:', data);
            }
        });
    }
})(jQuery);