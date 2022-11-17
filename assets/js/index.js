// owl carousel init
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: true,
    stagePadding: -5,
    responsiveBaseElement: 'body',
    responsive: {
        0: {
            items: 1,
        },
        700: {
            items: 1,
        },
        1220: {
            items: 1,
        },
    },
});


function goCalculator(){
    window.location.href = '../../quote.html'
}


function showForm(){
    $('#calForm').removeClass('hide')
}