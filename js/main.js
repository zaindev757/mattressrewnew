
$(document).ready(function () {
    $('#registerLink').click(function () {
        event.preventDefault();
        $('#ex1 a[href="#pills-register"]').tab('show');
    });
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:24,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:3
        },
        1000:{
            items:4
        }
    }
})