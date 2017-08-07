 
/*for slider*/
$(document).ready(function() {
 
    $("#top_slider").owlCarousel({
        slideSpeed : 800,
        paginationSpeed : 800,
        singleItem:true,
        autoPlay:3000,
        transitionStyle : "fadeUp"
    });
 
});

/*for slider*/
$(document).ready(function() {
 
    $("#portfolio-carousel").owlCarousel({
        // Show next and prev buttons
        slideSpeed : 1800,
        paginationSpeed : 800,
        //singleItem:true,
        autoPlay:3000,
        pagination: false,
        navigation: false,
        items : 4,
    });
 
});

$(document).ready(function() {
 
    $("#testimonial-slide").owlCarousel({
        slideSpeed : 800,
        paginationSpeed : 800,
        singleItem:true,
        pagination:false,
        autoPlay:3000,
        

        transitionStyle : "goDown"

         
    });
 
});


/* ========== Background image height equal to the browser height.==========*/
    $('.top-slider-1, .top-slider-2, .top-slider-3').css({ 'height': $(window).height() });
     $(window).on('resize', function() {
        $('.top-slider-1, .top-slider-2, .top-slider-3').css({ 'height': $(window).height() });
     });


