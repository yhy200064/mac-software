/**
 * Created by yhy on 2017/6/15.
 */
(function($) {
    getCollection();
    function getCollection() {
        $.ajax({
            url: '/api/get/collection',
            type: 'GET',
            data: {},
            dataType: 'json',
            success: function (data) {
                console.log(data);
                var html = template('new-collection', data.body);
                $('#newest-collection').html(html);
            },
            error: function (data) {
                console.log('错误:', data);
            }
        });
    }
})(jQuery);

