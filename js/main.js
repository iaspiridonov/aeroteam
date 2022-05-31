$(document).ready(function() {
    
    // Генератор цены при загрузке страницы
    price1 = $('.js-duration--active').siblings('input').attr('data-price');
    $('.js-price1').text(price1);
    
    // ВИНО кол-во пассажиров
    $('.js-passengers').change(function (e) {
        if ($(this).find('input').val() == 3) {
            $('#sting_i-vine').prop('checked', true);
            $('.inner__dop-right-item-vine').removeClass('inner__dop-right-item-vine--active');
            $('#sting-vine').addClass('inner__dop-right-item-vine--active');
            $('.js-fly-vine').find('input#piristrel_i-vine').parent().hide();
            $('.js-fly-vine').find('input#sokata_i-vine').parent().hide();
        } else {
            $('.js-fly-vine').find('input#piristrel_i-vine').parent().show();
            $('.js-fly-vine').find('input#sokata_i-vine').parent().show();
        }
    });
    
    // ПАРАШЮТ тип
    $('.js-jump').change(function (e) {
        
        additionals2 = $('.js-jump-add').find('input');
        additionalsPrice2 = 0;
        
        additionals2.each(function(index) {
            if ($(this).prop('checked')) {
                additionalsPrice2 += Number($(this).val());
            }
        });
        
        if ($(this).find('input').val() == 'tandem') {
            $('.js-jump-add-block').show();
            newPrice2 = Number($(this).find('input').attr('data-price')) + Number(additionalsPrice2);
        } else {
            $('.js-jump-add-block').hide();
            newPrice2 = Number($(this).find('input').attr('data-price'));    
        }
    
        $('.js-price2').text(newPrice2);
    });
    
    // ПАРАШЮТ доп услуги
    $('.js-jump-add').change(function (e) {
        price2 = $('.js-price2').first().text();
        additional2 = $(this).find('input');
        
        if (additional2.prop('checked')) {
            newPrice2 = Number(price2) + Number($(this).find('input').val());
        } else {
            newPrice2 = Number(price2) - Number($(this).find('input').val());
        }
        $('.js-price2').text(newPrice2);
    });

    // СВАДЬБА Длительность полета
    $(".js-duration").change(function (e) {
        duration = $(this).attr('data-duration');
        $('.js-duration').siblings('.btn').removeClass('js-duration--active');
        $(this).siblings('.btn').addClass('js-duration--active');
        $('.inner__duration-text').removeClass('inner__duration-text--active');
        $('.duration-'+duration).addClass('inner__duration-text--active');
        
        additionals = $('.js-additional').find('input');
        additionalsPrice = 0;
        
        additionals.each(function(index) {
            if ($(this).prop('checked')) {
                additionalsPrice += Number($(this).val());
            }
        });
        
        newPrice = Number($(this).attr('data-price')) + Number(additionalsPrice);
        $('.js-price1').text(newPrice);
    });
    
    // СВАДЬБА самолет
    $(".js-fly").change(function (e) { 
        fly = $(this).find('input').val();
        $('.inner__dop-right-item').removeClass('inner__dop-right-item--active');
        $('#'+fly).addClass('inner__dop-right-item--active');
    });
    
    // ВИНО самолет
    $(".js-fly-vine").change(function (e) { 
        flyVine = $(this).find('input').val();
        $('.inner__dop-right-item-vine').removeClass('inner__dop-right-item-vine--active');
        $('#'+flyVine).addClass('inner__dop-right-item-vine--active');
    });
    
    // СВАДЬБА доп услуги
    $('.js-additional').change(function (e) {
        price = $('.js-price1').first().text();
        additional = $(this).find('input');
        
        if (additional.prop('checked')) {
            newPrice = Number(price) + Number($(this).find('input').val());
        } else {
            newPrice = Number(price) - Number($(this).find('input').val());
        }
        $('.js-price1').text(newPrice);
    });

    $('.service__dop-add').click(function(e) {
        e.preventDefault();
        if ($(this).hasClass('service__dop-added')) {
            $(this).removeClass('service__dop-added');
            $(this).html('Добавить');
            $(this).find('.service__dop-delete').hide();
        } else {
            $(this).addClass('service__dop-added');
            $(this).html('Добавлено<span class="service__dop-delete">убрать</span>');
            $(this).find('.service__dop-delete').show();
        }
    });
    
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
            initialCountry: "md",
            preferredCountries: [
                "md",
                "ru",
                "ua",
                "kz",
                "by"
            ],
            customContainer: "js-international-phone",
            separateDialCode: true
        });
    }

    // init international phones
    var input = document.querySelector(".js-phone-modal");
    if (input) {
        window.intlTelInput(input, {
            initialCountry: "md",
            preferredCountries: [
                "md",
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
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        // Responsive breakpoints
        breakpoints: {
            325: {
                slidesPerView: 2,
                centeredSlides: false
            },
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
          nextEl: '.weekend-item__nav--next',
          prevEl: '.weekend-item__nav--prev',
        }
    });

    // init swiperjs
    const swiperMain = new Swiper('.js-swiper-main', {
        slidesPerView: 1,
        spaceBetween: 50,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-main-next',
          prevEl: '.swiper-main-prev',
        },
        pagination: {
            el: ".swiper-main-pagination",
            type: "fraction",
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
             
            if (modalId == 'wedding') {
                modalDuration = $('input[name=options]:checked').val();
                $('.js-modal-wedding-duration').text(modalDuration);
                $('.js-modal-wedding-duration').val(modalDuration);
                
                modalFly = $('input[name=fly]:checked').siblings('label').text();
                $('.js-modal-wedding-fly').text(modalFly);
                $('.js-modal-wedding-fly').val(modalFly);
                
                if ($('#add1').prop('checked')) {
                    modalAdd1WeddingText = $('#add1').siblings('label').text();
                    $('.js-modal-wedding-add1').val(modalAdd1WeddingText);
                    $('.js-modal-wedding-add1').text(modalAdd1WeddingText);
                    $('.js-modal-wedding-add1').show();
                } else {
                    $('.js-modal-wedding-add1').val('0');
                    $('.js-modal-wedding-add1').hide();
                }
                
                if ($('#add2').prop('checked')) {
                    modalAdd2WeddingText = $('#add2').siblings('label').text();
                    $('.js-modal-wedding-add2').val(modalAdd2WeddingText);
                    $('.js-modal-wedding-add2').text(modalAdd2WeddingText);
                    $('.js-modal-wedding-add2').val('1');
                    $('.js-modal-wedding-add2').show();
                } else {
                    $('.js-modal-wedding-add2').val('0');
                    $('.js-modal-wedding-add2').hide();
                }
            }
            
            if (modalId == 'jump') {
                modalJump = $('input[name=jump]:checked').siblings('label').text();
                $('.js-modal-jump-type').text(modalJump);
                $('.js-modal-jump-type').val(modalJump);
                
                if ($('#add-jump').prop('checked')) {
                    modalAddJumpText = $('#add-jump').siblings('label').text();
                    $('.js-modal-jump-add').val(modalAddJumpText);
                    $('.js-modal-jump-add').show();
                    $('.js-modal-jump-add').text(modalAddJumpText);
                } else {
                    $('.js-modal-jump-add').val('0');
                    $('.js-modal-jump-add').hide();
                }
            }
            
            if (modalId == 'vine') {
                modalVine = $('input[name=passengers]:checked').val();
                $('.js-modal-vine-passengers').text(modalVine);
                $('.js-modal-vine-passengers').val(modalVine);
                
                modalFlyVine = $('input[name=fly-vine]:checked').siblings('label').text();
                $('.js-modal-vine-fly').text(modalFlyVine);
                $('.js-modal-vine-fly').val(modalFlyVine);
            }


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