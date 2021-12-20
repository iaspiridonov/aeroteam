$(document).ready(function() {
    
    // init select2 for <select></select>
    $('.js-enter-cert').select2({
        placeholder: "- Сертификат -",
        allowClear: true,
        minimumResultsForSearch: 10
    });
    $('.js-enter-time').select2({
        placeholder: "- Время -",
        allowClear: true,
        minimumResultsForSearch: 10
    });

    // init international phones
    var input = document.querySelector(".js-phone");
    window.intlTelInput(input, {
        initialCountry: "ru",
        preferredCountries: [
            "ru",
            "ua",
            "kz",
            "by"
        ],
        customContainer: "js-international-phone",
        separateDialCode: true
    });

    // init swiperjs
    const swiper = new Swiper('.js-swiper-weekend', {
        slidesPerView: 2,
        spaceBetween: 15,
        centeredSlides: true,
        loop: true,
        // Responsive breakpoints
        breakpoints: {
            576: {
                slidesPerView: 1,
                centeredSlides: false
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3,
            },
            // when window width is >= 640px
            1200: {
                slidesPerView: 4,
            }
        },
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });

    // For swiper-slides
    if( window.innerWidth >= 768 ){
        $('.weekend-item').hover(function () {
                let textH = $(this).find('.weekend-item__text').height() + 15;
                $(this).find('.weekend-item__img')
                    .attr('style', 'transform:translateY(-' + textH + 'px)');
            }, function () {
                $(this).find('.weekend-item__img')
                    .attr('style', 'transform:translateY(0)');
            }
        );
    }

    // Accordion
    $('.accordion').click(function(e) {
        if ($(this).hasClass('accordion--active')) {
            $(this).find('.accordion__btn').removeClass('accordion__btn--active');
            $(this).removeClass('accordion--active');
            $(this).find('.accordion__desc').hide('fast');
        } else {
            $(this).find('.accordion__btn').addClass('accordion__btn--active');
            $(this).addClass('accordion--active');
            $(this).find('.accordion__desc').show('fast');
        }
    });
});