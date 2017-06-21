/**
 * Created by yhy on 2017/6/20.
 */
(function($){
    gamesNewest();

    function gamesNewest() {
        $.ajax({
            url: '/api/games',
            type: 'GET',
            data: {},
            dataType: 'json',
            success: function(data) {
                console.log(data);
                var html = template('games', data.body);
                $('#week-game').html(html);
            },
            error: function(data) {
                console.log( '错误:', data);
            }
        });
    }
})(jQuery);