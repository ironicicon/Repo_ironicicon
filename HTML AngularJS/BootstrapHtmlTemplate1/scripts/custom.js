$('document').ready(function () {
    $(window).scroll(function () {
        headerScroll();
    });
});
function headerScroll() {
    if ($(window).scrollTop() > 30) {
        $('#Nav').addClass('scrolling');
        $('#Nav1').removeClass('col-md-offset-6');
        $('#Nav1').removeClass('col-md-6');
        $('#Nav1').addClass('col-md-12');
        $('#Services').css('margin-top', '60px');
    } else {
        $('#Nav').removeClass('scrolling');
        $('#Nav1').addClass('col-md-offset-6');
        $('#Nav1').addClass('col-md-6');
        $('#Nav1').removeClass('col-md-12');
        $('#Services').css('margin-top', '5px');
    }
}