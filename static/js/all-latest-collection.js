/**
 * Created by yhy on 2017/6/15.
 */
(function($) {
    allgetCollection();
    function allgetCollection() {
        $.ajax({
            url: '/admin/api/get/collection',
            type: 'GET',
            data: {},
            dataType: 'json',
            success: function (data) {
                console.log(data);
                var html = template('all-new-collection', data.body);
                $('#all-newest-collection').html(html);
            },
            error: function (data) {
                console.log('错误:', data);
            }
        });
    }
})(jQuery);