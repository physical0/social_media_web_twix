$(() => {
    // Tab switching
    $('.tab-item').on('click', function() {
        // Remove active class from all tabs and contents
        $('.tab-item').removeClass('active');
        $('.tab').removeClass('active');
        
        // Active class to the clicked tab
        $(this).addClass('active');

        // Show the content of the clicked tab
        const tabId = $(this).data('tab');
        $('#' + tabId).addClass('active');
    });
});