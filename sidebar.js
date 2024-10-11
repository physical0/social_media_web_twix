// Sidebar
const $menuItems = $('.menu-item');

// ============== SIDEBAR ============== 

// Remove active class from all menu items
const changeActiveItem = () => {
    $menuItems.removeClass('active');
};

$menuItems.on('click', function() {
    changeActiveItem();
    $(this).addClass('active');

    if ($(this).attr('id') !== 'notifications') {
        $('.notifications-popup').hide();
    } else {
        $('.notifications-popup').show();
        $('#notifications .notification-count').hide();
    }
});