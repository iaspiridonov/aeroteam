$(document).ready(function() {
    
    // init select2 for <select></select>
    $('.js-enter-item').select2({
        allowClear: true,
        minimumResultsForSearch: 10
    });
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
    if (input) {
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
    }

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

!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {

   /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');


   /* Перебираем массив кнопок */
   modalButtons.forEach(function(item){

      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener('click', function(e) {

         /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
         e.preventDefault();

         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


         /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
         modalElem.classList.add('active');
         overlay.classList.add('active');
      }); // end click

   }); // end foreach


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

   }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });




}); // end ready