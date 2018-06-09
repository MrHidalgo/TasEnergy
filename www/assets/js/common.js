(function() {

    var $preloader = $('.global-preloader');

    setTimeout(function() {
        $preloader.addClass('is-logo-show');
    }, 550);

    $(window).on('load', function() {
        setTimeout(function() {
            $preloader.addClass('is-content-load');

            setTimeout(function() {
                // $preloader.remove();
                $('body').css('overflow', 'visible');
            }, 1000);

            new WOW().init();

        }, 1500);
    });
})();


$(document).ready(function() {
    //
    // $('.send-form').submit(function(e) {
    //     e.preventDefault();
    //     var $form = $(this);
    //     var _btn = $form.find(".btn");
    //
    //     _btn.addClass("is-loader");
    //
    //     $.ajax({
    //         type: 'POST',
    //         url: $form.attr('action'),
    //         data: $form.serialize(),
    //         success: function(data) {
    //             _btn.removeClass("is-loader");
    //
    //             // $(document).click('#open-thankpopup');
    //             if ($('#thankpopup').length) {
    //                 $.magnificPopup.open({
    //                     items: {
    //                         src: '#thankpopup'
    //                     },
    //                     type: 'inline'
    //                 });
    //             }
    //         },
    //         error: function(error) {
    //             // Do something with the error
    //         }
    //     });
    // });

    // РАСКОММЕНТИРОВАТЬ ДЛЯ РАБОТЫ ФОРМУЛЫ

     $.ajax('http://167.99.203.107:8080/').done(function(data) { $('#span_price').html(data.price) });

    // РАСКОММЕНТИРОВАТЬ ДЛЯ РАБОТЫ ФОРМУЛЫ


});

$(document).ready(function() {


    $(document).on('click', '.hidden-for-mobile', function(e) {
        $('.contacts__cities-container').addClass('is-active');
        $(this).addClass('is-active');
    });




    $(document).on('click', '.contacts__cities-item', function(e) {
        e.preventDefault();
        var $self = $(this),
            tabIndex = $self.index();
        $self.siblings().removeClass('is-active');
        $self.addClass('is-active');
        $('.contacts__info-container').css('display', 'none').eq(tabIndex).fadeIn(500);
        $('.hidden-for-mobile').removeClass('is-active');
        $('.contacts__cities-container').removeClass('is-active');
    });

    setTimeout(function() {
        $('#weather-frame').attr('src', 'https://www.ventusky.com/');
    }, 3500);

    // BARBA.JS
    (function() {
        //Please note, the DOM should be ready
        Barba.Pjax.init();
        Barba.Prefetch.init();

        $('body').append('<div class="page-preloader"><div class="global-preloader__under"></div></div>');
        var $pagePreloader = $('.page-preloader');

        var FadeTransition = Barba.BaseTransition.extend({
            start: function() {
                Promise
                    .all([this.newContainerLoading, this.showLoader()])
                    .then(this.hideLoader.bind(this));
            },

            showLoader: function() {
                $pagePreloader.addClass('is-page-load-start');

                return $(this.oldContainer).promise();

            },

            hideLoader: function() {
                var _this = this;
                var $el = $(this.newContainer);

                setTimeout(function() {
                    $pagePreloader.addClass('is-page-load-end');
                    // ЦЕ ТОБІ НЕ НАДА
                    $el.animate({}, 400, function() { _this.done(); });

                    setTimeout(function() {
                        $pagePreloader.removeClass('is-page-load-start is-page-load-end');
                        // Время рефреша прелоадера
                    }, 800);

                    // Время исчезновения прелоадера
                    $('body').css('overflow', 'visible');
                }, 500);
            },
        });

        Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
            setTimeout(function() {
                $.each($('.animated'), function() { $(this).removeClass('animated').removeAttr('style'); });
                new WOW().init();

            }, 500);
            setTimeout(function() {
                $('#weather-frame').attr('src', 'https://www.ventusky.com/');
            }, 1500);
        });

        Barba.Pjax.getTransition = function() {
            return FadeTransition;
        };
    })();

    $('.f-right__show').hover(function(e) {
            $(this).find('.f-right__dropdown').fadeIn();
        },
        function() {
            $('.f-right__dropdown').fadeOut();
        });

    (function() {
        if ($(document).width() > 993) {
            $(document).on('mouseover', '.header__languages', function(e) {
                e.preventDefault();
                $(this).find('.header__more-languages').fadeIn();
            });
            $(document).on('mouseleave', '.header__languages', function(e) {
                e.preventDefault();
                $(this).find('.header__more-languages').fadeOut();
            });
        } else {}
    })();

    $(document).on('mouseover', '.hover-link', function(e) {
        e.preventDefault();
        $(this).parent().parent().addClass('is-hover');
    });
    $(document).on('mouseleave', '.hover-link', function(e) {
        e.preventDefault();
        $(this).parent().parent().removeClass('is-hover');
    });

    $(document).ready(function() {
        $(document).on('click', '#nav-icon2', function() {
            $(this).toggleClass('open');
            $('.header__left-mobile').toggleClass('is-open');
            $('body').css('overflow', 'hidden');
        });
    });
    $(document).ready(function() {
        $(document).on('click', '#nav-icon2.open', function() {
            $('body').css('overflow', 'auto');
        });
    });

    $(document).ready(function() {
        $(document).on('click', '.menu-link', function() {
            $('ul li a').removeClass('is-active');
            $('.enter-link').removeClass('is-active');
            $('.header__left-mobile').removeClass('is-open');
            $('#nav-icon2').removeClass('open');
            $(this).addClass('is-active');
        });
    });

    $(document).ready(function() {
        $(document).on('click', '.footer__menu-link', function() {
            $('.menu-link').removeClass('is-active');
        });
    });

    $(document).ready(function() {
        $(document).on('click', '.enter-link', function() {
            $('.header a').removeClass('is-active');
            $('.header__left-mobile').removeClass('is-open');
            $('#nav-icon2').removeClass('open');
            $(this).addClass('is-active');
        });
    });

    // WOW

    // new WOW().init();


    $(".input-login").each(function() {
        if ($(this).val() != "") {
            $(this).closest(".input-container").addClass("animation");
        }
    });

    $(".login-input").focus(function() {
        $(this).closest(".input-container").addClass("animation animation-color");
    });

    $(".login-input").focusout(function() {
        if ($(this).val() === "") {
            $(this).closest(".input-container").removeClass("animation");
        }
        $(this).closest(".input-container").removeClass("animation-color");
    });

    // Inline popups
    $(document).on('click', '.open-popup', function(e) {
        e.preventDefault();

        $(this).magnificPopup({
            removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
                beforeOpen: function() {
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            midClick: true
        }).magnificPopup('open');
    });

    (function() {
        $(document).on('mouseover', '.personal__link', function(e) {
            if ($(this).hasClass('is-active')) {} else {
                e.preventDefault();
                var $self = $(this),
                    tabIndex = $self.index();
                $self.siblings().removeClass('is-active');
                $self.addClass('is-active');
                $('.personal__image').fadeOut().eq(tabIndex).fadeIn(400);
            }
        });

        function personalInfoSliderInit() {

            if ($(document).width() > 992) {
                if ($('.personal__info').hasClass('slick-initialized'))
                    $('.personal__info').slick('unslick');
                //
                if ($('.personal__image-carousel').hasClass('slick-initialized'))
                    $('.personal__image-carousel').slick('unslick');
            } else {
                if (!$('.personal__info').hasClass('slick-initialized')) {
                    $('.personal__info').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        fade: true,
                        centerMode: true,
                        asNavFor: '.personal__image-carousel',
                    });
                }

                if (!$('.personal__image-carousel').hasClass('slick-initialized')) {
                    $('.personal__image-carousel').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        asNavFor: '.personal__info',
                        dots: true,
                        focusOnSelect: true
                    });
                }
            }
        };

        personalInfoSliderInit();

        $(window).resize(function() {
            personalInfoSliderInit();
        });
    })();

    $(document).on('click', 'a[href="#"]', function(e) {
        e.preventDefault();
    });

    $(window).scroll(function() {
        var scrollBottom = $(window).scrollTop() + $(window).height();
        if ($(window).scrollTop() > 250) {
            $('.bottom-arrow').addClass('is-active');
        } else {
            $('.bottom-arrow').removeClass('is-active');
        }
    });

    ////////////
    // TELEPORT PLUGIN
    ////////////

    var _window = $(window);

    (function() {
        $('[js-teleport]').each(function(i, val) {
            var self = $(val)
            var objHtml = $(val).html();
            var target = $('[data-teleport-target=' + $(val).data('teleport-to') + ']');
            var conditionMedia = $(val).data('teleport-condition').substring(1);
            var conditionPosition = $(val).data('teleport-condition').substring(0, 1);

            if (target && objHtml && conditionPosition) {

                function teleport() {
                    var condition;

                    if (conditionPosition === "<") {
                        condition = _window.width() < conditionMedia;
                    } else if (conditionPosition === ">") {
                        condition = _window.width() > conditionMedia;
                    }

                    if (condition) {
                        target.html(objHtml)
                        self.html('')
                    } else {
                        self.html(objHtml)
                        target.html("")
                    }
                }

                teleport();
                _window.on('resize', (teleport));


            }
        });
    })();

    (function() {
        if ($(document).width() > 1268) {
            $(document).find('.enter-link').html('Увійти до кабінету');
        } else {
            $(document).find('.enter-link').html('Увійти');
        }
        $(window).resize(function() {
            if ($(document).width() > 1268) {
                $(document).find('.enter-link').html('Увійти до кабінету');
            } else {
                $(document).find('.enter-link').html('Увійти');
            }
        });
    })();

    function scrollToElement(element, offset) {
        $(element).click(function(e) {
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top;
            if (destination < 0) { destination = 0; }
            $('html, body').animate({ scrollTop: destination - offset }, "slow");
            e.preventDefault();
        });
    }
    scrollToElement("a[href='#anchor']", 67);

});