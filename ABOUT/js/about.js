jQuery(document).ready(function()
{
$(".about-button").click(function() {
    $('html,body').animate({
        scrollTop: $(".sectionabout").offset().top},
        'slow');
});
});