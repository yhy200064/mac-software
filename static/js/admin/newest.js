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



$(document).ready(function() {
     $('#newest-game').on('mouseenter', '.all-software', function() {
        $(this).children('.game-hover').css('display', 'none');
        $(this).children('.shangchu').css('display', 'block');
    });

    $('#newest-game').on('mouseleave', '.all-software', function() {
        $(this).children('.game-hover').css('display', 'block');
        $(this).children('.shangchu').css('display', 'none');
    });
});
