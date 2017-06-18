/**
 * Created by yhy on 2017/6/17.
 */
(function($){
    getmacNewest();

    function getmacNewest() {
        $.ajax({
            url: '/api/mac/newest',
            type: 'GET',
            data: {},
            dataType: 'json',
            success: function(data) {
                console.log(data);
                var html = template('new-macgame', data.body);
                $('#newest-macgame').html(html);
            },
            error: function(data) {
                console.log( '错误:', data);
            }
        });
    }
})(jQuery);
