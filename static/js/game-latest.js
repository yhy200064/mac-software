/**
 * Created by yhy on 2017/6/13.
 */
(function($){
    gameLatest();

    function gameLatest() {
        $.ajax({
            url: '/api/newest',
            type: 'GET',
            data: {},
            dataType: 'json',
            success: function(data) {
                console.log(data);
                var html = template('newgame', data.body);
                $('#latestgame').html(html);
            },
            error: function(data) {
                console.log( '错误:', data);
            }
        });
    }
})(jQuery);




