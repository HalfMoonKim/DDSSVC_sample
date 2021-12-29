$(document).ready(function () {
    // Login Raido Btn 기능
    $('input[name=group]').click(function () {
        let groupVal = $('input[name=group]:checked').val();
        let loginForm = $('.login-form');

        if (groupVal === "erp") {
            loginForm.attr("action", "./home/ERP.html");
        } else if (groupVal === "service") {
            loginForm.attr("action", "./home/Service.html");
        } else if (groupVal === "userPay") {
            loginForm.attr("action", "./home/UserPay.html");
        };
    });

    // ERP Nav 기능
    let tree = $('.tree');

    tree.each(function () {
        $(this).find('li').each(function () {
            $(this).append('<span></span>');
            if (!$(this).children('ul').length) {
                $(this).addClass('final');
            } else if ($(this).is(':last-child')) {
                $(this).addClass('last');
            }
        });
        $(this).find('button').on('click', function () {
            if ($(this).parent('li').hasClass('unfold')) {
                $(this).parent('li').removeClass('unfold');
            } else {
                $(this).parent('li').addClass('unfold');
            }
        });
    });
    
    
});