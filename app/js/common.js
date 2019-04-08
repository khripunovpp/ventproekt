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
        if ($(window).width() > 991) {
            _unslick()
        } else if (!slider.hasClass('slick-initialized')) {
            return slider.slick(settings);
        }
    });

    function _unslick() {
        if (slider.hasClass('slick-initialized')) {
            slider.slick('unslick');
        }
    }
}


var picsSlider = function() {
    var slider = $(".pics__list");

    settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        infinite: false
    }

    slider.slick(settings);

    if ($(window).width() > 991) _unslick()

    // reslick only if it's not slick()
    $(window).on('resize', function() {
        if ($(window).width() > 991) {
            _unslick()
        } else if (!slider.hasClass('slick-initialized')) {
            return slider.slick(settings);
        }
    });

    function _unslick() {
        if (slider.hasClass('slick-initialized')) {
            slider.slick('unslick');
        }
    }

    $('.places__item').on('click', function(event) {
        event.preventDefault();
        $('.modal').fadeIn(400);
    });

     $('.modal__close').on('click', function(event) {
        event.preventDefault();
        $(this).closest('.modal').fadeOut();
    });
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

var smooth = function() {
    $(".menu__item").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({

                scrollTop: $(hash).offset().top

            }, 800, function() {

                window.location.hash = hash;

            });

        }

    });
}

var sendForm = function(btn) {
    $(btn).on('click', function(event) {
        event.preventDefault();
        var form = $(this).closest('form');
        ajax(form);
    });
}

var ajax = function(form) {

    var formtarget = form,
        msg = $(formtarget).serialize(),
        jqxhr = $.post("/ajax.php", msg, onAjaxSuccess);

    function onAjaxSuccess(data) {

        var json = JSON.parse(data),
            status = json.status,
            message = json.message,
            formid = json.form;

        if (status === 'success') {
            $('input, textarea, button[type=submit]').each(function() {
                $(this).prop("disabled", "true");
            });

        }

        addNotify(status, message, formid)

    }

    var addNotify = function(status, msg, form) {
        var popup = $('.response');

        popup.find('.response__text').text(msg)

        if (status === 'error') {
            popup.find('.response__title').text('Что-то пошло не так!')

        } else {
            popup.find('.response__title').text('Ваша заявка принята')
            yaCounter53182684.reachGoal('zayavka');
        }

        $('.response').fadeIn();
        $('.modal').fadeOut();
        $('.popup').fadeOut();

        setTimeout(function() {
            $('.response').fadeOut();
        }, 2000)
    }

}

$(function() {
    pricelistSlider()
    menu()
    popup()
    placesSlider()
    picsSlider()
    smooth()
    sendForm('.js-submit')
});