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
    var mainSlider = $(".pricelist__prices"),
        thumbs = $('.pricelist__categories');

    mainSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: thumbs,
        infinite: false,
        responsive: [{
            breakpoint: 1131,
            settings: {
                dots: true
            }
        }]
    });

    thumbs.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: mainSlider,
        dots: false,
        focusOnSelect: true,
        arrows: false,
        infinite: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5
            }
        }]
    });
}

// $slick_slider = $('.slider');
// settings = {
// // some settings
// }
// $slick_slider.slick(settings);

// // reslick only if it's not slick()
// $(window).on('resize', function() {
// if ($(window).width() < 768) {
//   if ($slick_slider.hasClass('slick-initialized')) {
//     $slick_slider.slick('unslick');
//   }
//   return
// }

// if (!$slick_slider.hasClass('slick-initialized')) {
//   return $slick_slider.slick(settings);
// }
// });


$(function() {
pricelistSlider()
});