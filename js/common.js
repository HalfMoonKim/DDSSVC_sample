$(document).ready(function () {
    // Login Raido Btn 기능
    $('input[name=group]').click(function () {
        let groupVal = $('input[name=group]:checked').val();
        let loginForm = $('.login-form');

        if (groupVal === "main") {
            loginForm.attr("action", "./home/Main.html");
        } else if (groupVal === "service") {
            loginForm.attr("action", "./home/Service.html");
        } else if (groupVal === "userPay") {
            loginForm.attr("action", "./home/UserPay.html");
        };
    });

    // Main Tree Menu
    $.ajax({
        url: '../assets/json/menu.json',
        type: 'GET',
        dataType: 'json',
    }).done(function (group) {
        $.each(group, function (inext, item) {
            // Main Menu
            $('.main-tree-menu').append(`
            <li>
                <button class="main-tree-open">
                    ${item.title}
                </button>
            </li>
            `);

            $('.main-tree-box').append(`
            <li class="main-tree-content">
                <p class="main-tree-title">${item.title}</p>
                <div class="main-tree"></div>
            </li>
            `);

            $(".main-tree").fancytree({
                clickFolderMode: 2,
                source: item.children,
                cache: true
            });
        });

        for (let i = 0; i <= $('.main-tree-open').length; i++) {
            let treeCont = $('.main-tree-content');
            $('.main-tree-open').eq(i).click(function () {
                treeCont.stop().hide();
                treeCont.eq(i).stop().fadeIn();
            });
        };
    });

    // Main menu Customizing
    $('.menu-custom-btn').on('click', function () {
        $('.black-bg').stop().fadeIn();
        $('.menu-custom').stop().fadeIn();
    });
    $('.custom-close').on('click', function () {
        $('.black-bg').stop().fadeOut();
        $('.menu-custom').stop().fadeOut();
    });
    $('.black-bg').on('click', function () {
        $('.black-bg').stop().fadeOut();
        $('.menu-custom').stop().fadeOut();
    });

    $.ajax({
        url: '../assets/json/menuData.json',
        type: 'GET',
        dataType: 'json',
    }).done(function (group) {

        $(".custom-tree").fancytree({
            clickFolderMode: 2,
            source: group,
            checkbox: true,
            cache: true
        });
    });
});