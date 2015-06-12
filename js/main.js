$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        animateOut: 'slideOutLeft',
        animateIn: 'fadeIn',
        items: 1,
        smartSpeed: 1000,
        autoHeight: true,
        dots: false,
        nav: true,
        navText: ['&#8810', '&#8811']
    });
    $('.popoverOption').popover({
        trigger: "hover",
        placement: "bottom"
    });
    $('#offcanvas').click(function() {
        if (!$(this).hasClass('out')) {
            $('#navigation').css('left', '0px');
            $(this).css('left', '133px').addClass('out');
        } else {
            $('#navigation').css('left', '-133px');
            $(this).css('left', '10px').removeClass('out');
        }
    });
    $('.section').hide().siblings('#newCars').show();
    $.getScript('js/isotope.js', function() {
        carFilter('features');
    })

});

function go(name) {
    $('#' + name).addClass('animated fadeInLeftBig').show().siblings('.section').hide();
    setTimeout(function() {
        $('.fadeInLeftBig').removeClass('fadeInLeftBig')
    }, 1500)
}

function carFilter(ct) {
    if (ct == '*') {
        var str = ct
    } else {
        var str = "." + ct;
    }
    $('.item-wrapper').isotope({
        filter: str,
        transitionDuration: '0.65s'
    })
}
