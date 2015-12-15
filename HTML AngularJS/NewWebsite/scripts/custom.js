$('document').ready(function () {
    var windowheight=$(window).height();
    $('.MainBody').css('height',windowheight-10);
    ShowTwitter();
    var i=0;
    //Implementing Scroll
    Scroll();
    setTimeout(function(){
        if(i==0){
            $('#InitialLoadUp').css('display','none');
            $('#Home').css('display','block');
            i++;
        }   
    }, 1000);
    
    $('#HomeHyp').click(function () {
        $('.hyperlinkLi').css('background-color', 'green');
        $('section').css('display','none');
        $('#Home').css('display', 'block');
        $(this).parent().css('background-color', 'black');
    });
    $('#ServicesHyp').click(function () {
        $('.hyperlinkLi').css('background-color', 'green');
        $('section').css('display', 'none');
        $('#Services').css('display', 'block');
        $(this).parent().css('background-color', 'black');
    });
    $('#AboutUsHyp').click(function () {
        $('.hyperlinkLi').css('background-color', 'green');
        $('section').css('display', 'none');
        $('#AboutUs').css('display', 'block');
        $(this).parent().css('background-color', 'black');
    });
    $('#ContactUsHyp').click(function () {
        $('.hyperlinkLi').css('background-color', 'green');
        $('section').css('display', 'none');
        $('#ContactUs').css('display', 'block');
        $(this).parent().css('background-color', 'black');
    });
    
    $(window).resize(function(){
        var windowheight=$(window).height();
        $('.MainBody').css('height',windowheight-10);
        Scroll();
    if($(window).width()<992){
        $('#twitter-widget-0').hide();
        $('.twitterFeed').css('height','5px');
        $('#googleMaps').hide();
    }
    else{
        ShowTwitter();
    }        
    });
});
function ShowTwitter()
{
    $('#twitter-widget-0').show();
    $('.twitterFeed').css('height','300px');
    $('#googleMaps').show();
}

function Scroll(){
    var SectionHeight=Math.round($(window).height()*0.8);
        $('section').css('height',SectionHeight);
        $('section').css('overflow-y','auto');
        $('section').css('margin-bottom','10px');
        $('#googleMaps').css('height',Math.round(SectionHeight*0.72));
}
