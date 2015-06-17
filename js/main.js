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
        // if (!$(this).hasClass('out')) {
        //     $('#navigation').css('left', '0px');
        //     $(this).css('left', '133px').addClass('out');
        // } else {
        //     $('#navigation').css('left', '-133px');
        //     $(this).css('left', '10px').removeClass('out');
        // }
        setTimeout(function(){
            $('#offcanvas').addClass('out')
        },1)
        $('#navigation').css('left', '0px')
    });
    $('body > *:not(#navigation)').click(function(){
        if ($('#offcanvas').hasClass('out')){
            $('#offcanvas').removeClass('out')
            $('#navigation').css('left', '-133px');
        }       
    })
    $('.c2vid').click(function(){
        $('#video-player').removeClass('hidden').append('<div class="col-sm-8 col-sm-offset-2"><iframe width="840" height="472" src="https://www.youtube.com/embed/ujn7jEQ4ib4" frameborder="0" allowfullscreen></iframe></div>')
    })
    $('body > *:not(iframe)').click(function(){
        if (!$('#video-player').hasClass('hidden')){
            $('#video-player>div').remove();
            $('#video-player').addClass('hidden')
        }       
    })
    $('.faq-item').click(function(){
        $(this).children('.ans').toggle();
        $(this).siblings().children('.ans').hide();
    })
    $('.ans').hide();
    if (screen.width < 768) {
        $('#about-contact').addClass('section')
        $('a[href=#about-contact]').click(function() {
            go("about-contact")
        })
    }
    setTimeout(function() {
        $('.section').hide().siblings('#newCars').show();
        $.getScript('js/isotope.js', function() {
            carFilter('features');
        })
    },1)
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
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
