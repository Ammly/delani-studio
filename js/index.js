$(document).ready(function () {
    $form = $('.mc-embedded-subscribe-form');
    $form.preventDefault();

    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action').replace('/post?', '/post-json?').concat('&c=?'),
        data: $form.serialize(),
        timeout: 5000,
        cache: false,
        dataType: 'jsonp',
        contentType: "application/json; charset=utf-8",
        error: function (err) {
            alert("Error.");
        },
        success: function (data) {
            if (data.result != "success") {
                alert("mailchimp returned error, check data.msg.");
            } else {
                alert("Success.");
            }
        }
    });
});