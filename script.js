$(document).ready(function() {
    // Initially hide the background
    $('.box').css('opacity', '0');

    // Fade in on click
    $('.box').click(function() {
        $(this).fadeTo('slow', 1);
    });
});
