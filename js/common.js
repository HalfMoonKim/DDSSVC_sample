$(document).ready(function () {
    // Login Raido Btn 기능
    $('input[name=group]').click(function () {
        let groupVal = $('input[name=group]:checked').val();
        let loginForm = $('.login-form');

        if (groupVal === "erp") {
            loginForm.attr("action", "./ERP.html");
        } else if (groupVal === "service") {
            loginForm.attr("action", "./Service.html");
        } else if (groupVal === "userPay") {
            loginForm.attr("action", "./UserPay.html");
        };
    });

    // ERP Nav 기능
    const erpMenu = new Swiper('.erp-menu-slide', {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
        touchRatio: 0,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

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

    for (let i = 0; i <= $('.tree-open').length; i++) {
        let treeCont = $('.tree-content');

        $('.tree-open').eq(i).click(function () {
            treeCont.stop().hide();
            treeCont.eq(i).stop().fadeIn();
        });
    };
});