$(document).ready(function(){
    $(".bxslider").bxSlider(
        {
            pager: false
        }
    );
});


$(document).ready(function($){
    $('.primary-nav-trigger').on("click", function(){
        $('.menu-icon').toggleClass("is-clicked");
        $(".primary-nav").toggleClass("is-visible");
        $("body").toggleClass("overflow-hidden");
    })
});
$(".primary-nav").on("click", "a", function(event){
    event.preventDefault();
    let id = $(this).attr("href");
    let top = $(id).offset().top;
    $("body, html").animate({scrollTop: top}, 1000);
    $('.menu-icon').toggleClass("is-clicked");
    $(".primary-nav").toggleClass("is-visible");
    $("body").toggleClass("overflow-hidden");
});