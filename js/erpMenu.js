$(document).ready(function () {
    $.ajax({
        url: '../assets/menuData.json',
        type: 'GET',
        dataType: 'json',
    }).done(function (erpMenu) {
        $.each(erpMenu, function (inext, item) {
            // Main Menu
            $('.erp-menu').append(`
            <li>
                <button class="tree-open">
                    ${item.title}
                </button>
            </li>
            `);
            // Sub Menu
            $('.treebox').append(`
            
            `)
        });
        
        for (let i = 0; i <= $('.tree-open').length; i++) {
            let treeCont = $('.tree-content');
            $('.tree-open').eq(i).click(function () {
                treeCont.stop().hide();
                treeCont.eq(i).stop().fadeIn();
            });
        };
    });
});