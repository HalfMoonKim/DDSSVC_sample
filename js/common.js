$(document).ready(function () {
    // Login Raido Btn 기능
    $('input[name=group]').click(function () {
        let groupVal = $('input[name=group]:checked').val();

        if (groupVal === "erp") {
            $('.main__login-form').attr("action", "./Home.html")
        } else if (groupVal === "service") {
            $('.main__login-form').attr("action", "./Service.html")
        } else if (groupVal === "userPay") {
            $('.main__login-form').attr("action", "./UserPay.html")
        };
    });

    // Home Nav 기능
    const homeMenu = new Swiper('.home-menu-slide', {
        loop: false,
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,

        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    for (let i = 0; i <= $('.tree-open').length; i++) {
        // Tree Modal Open
        $('.tree-open').eq(i).click(function () {
            $('.tree-list').stop().hide();
            $('.tree-list').eq(i).stop().fadeIn();
        });
        // Tree Modal Close
        $('.tree-close').eq(i).click(function () {
            $('.tree-box').eq(i).stop().fadeOut();
        });
    }
});