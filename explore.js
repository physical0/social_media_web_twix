$(document).ready(function () {
    // Handle tab switching
    $('.tab-item').click(function () {
        const tabId = $(this).data('tab');
        $('.tab-item').removeClass('active');
        $(this).addClass('active');
        $('.tab').removeClass('active');
        $('#' + tabId).addClass('active');
    });

    $('.card').click(function () {
        const topic = $(this).data('topic');
        let postContent = '';
        let commentContent = '';

        if (topic === 'minecraft') {
            postContent = '<p>This is the post content for Minecraft.</p>';
            commentContent = '<p>This is a comment about Minecraft.</p>';
        } else if (topic === 'youtube') {
            postContent = '<p>This is the post content for Youtube.</p>';
            commentContent = '<p>This is a comment about Youtube.</p>';
        } else if (topic === 'life-tips') {
            postContent = '<p>This is the post content for Life Tips.</p>';
            commentContent = '<p>This is a comment about Life Tips.</p>';
        }

        $('#posts-tab .post').html(postContent);
        $('#comments-tab .comment').html(commentContent);
    });
});