/**
 * Created by yhy on 2017/6/17.
 */
(function($){
    macgameLatest();

    function macgameLatest() {
        $.ajax({
            url: '/admin/api/get/mac/software',
            type: 'GET',
            data: {},
            dataType: 'json',
            success: function(data) {
                console.log(data);
                var html = template('all-mac-game', data.body);
                $('#all-mac-new-game').html(html);
            },
            error: function(data) {
                console.log( '错误:', data);
            }
        });
    }
})(jQuery);
