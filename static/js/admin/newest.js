/**
 * Created by yhy on 2017/6/12.
 */

(function($){
    getNewest();

    function getNewest() {
        $.ajax({
            url: '/admin/api/newest',
            type: 'GET',
            data: {},
            dataType: 'json',
            success: function(data) {
                console.log(data);
                var html = template('new-game', data.body);
                $('#newest-game').html(html);
            },
            error: function(data) {
                console.log( '错误:', data);
            }
        });
    }
})(jQuery);



