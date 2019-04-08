var Util = {
    randomInteger: function(min, max) {
        var rand = min + Math.random() * (max - min)
        rand = Math.round(rand);
        return rand;
    },
    scrollToEl: function(el, offset) {
        $("html,body").animate({ scrollTop: el.offset().top + (offset || 0) }, 500);
    },
    trimString: function(string) {
        return string.split(' ').join('');
    }
}

var pricelistSlider = function() {
    var tab = $('.pricelist__tab')

    tab.on('click', function(event) {
        event.preventDefault();
        var that = $(this),
            tabActive = $('.pricelist__tab.active'),
            contentActive = $('.pricelist__prices.active');;

        if (!that.hasClass('active')) {
            that.addClass('active')
            tabActive.removeClass('active')

            contentActive.hide().removeClass('active')
            that.next(".pricelist__prices").show().addClass('active')
        }

    });
}

var placesSlider = function() {
    var slider = $(".places__list");

    settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
         dots: true,
        infinite: false,
        responsive: [{
            breakpoint: 1131,
            settings: {
                dots: true
            }
        }]
    }

    slider.slick(settings);

    if ($(window).width() > 991) _unslick()

    // reslick only if it's not slick()
    $(window).on('resize', function() {
        if ($(window).width() > 991) _unslick()

        if (!slider.hasClass('slick-initialized')) {
            return slider.slick(settings);
        }
    });

    function _unslick() {
        if (slider.hasClass('slick-initialized')) {
            slider.slick('unslick');
        }
        return
    }
}


var picsSlider = function() {
    var slider = $(".pics__list");

    settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
         dots: true,
        infinite: false,
        responsive: [{
            breakpoint: 1131,
            settings: {
                dots: true
            }
        }]
    }

    slider.slick(settings);

    if ($(window).width() > 991) _unslick()

    // reslick only if it's not slick()
    $(window).on('resize', function() {
        if ($(window).width() > 991) _unslick()

        if (!slider.hasClass('slick-initialized')) {
            return slider.slick(settings);
        }
    });

    function _unslick() {
        if (slider.hasClass('slick-initialized')) {
            slider.slick('unslick');
        }
        return
    }
}



var menu = function() {
    $('.js-menuToggle').click(function() {
        $(this).toggleClass('open');
        $('.menu').slideToggle()
    });
}


var popup = function() {
    var popup = '.popup'

    $('.js-modal').on('click', function(event) {
        event.preventDefault();
        $(popup).fadeIn();
    });

    $('.popup__close').on('click', function(event) {
        event.preventDefault();
        $(this).closest(popup).fadeOut();
    });

    $('.response__close').on('click', function(event) {
        event.preventDefault();
        $(popup).fadeOut();
        $('.response').fadeOut();
    });
}


$(function() {
    pricelistSlider()
    menu()
    popup()
    placesSlider()
    picsSlider()
});