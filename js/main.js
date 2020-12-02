$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {

    //////////** header-message **//////////
    $(".header-message span.close-msg").click(function () {
        $(".header-message").slideUp()
    });
    //////////** main slider **//////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        speed: 500,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
    });
    //////////** feats slider **//////////
    var featsswiper = new Swiper('.feats-slider .swiper-container', {
        spaceBetween: 30,
        loop: true,
        speed: 500,
        simulateTouch: false,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                simulateTouch: true,
            },
            767: {
                slidesPerView: 2,
                simulateTouch: true,
            },
            992: {
                slidesPerView: 3,
                simulateTouch: true,
            },
            1199: {
                slidesPerView: 4,
                autoplay: false,
            },
        },
    });
    //////////** products slider **//////////
    var newswiper = new Swiper('.products-slider.new-slider .swiper-container', {
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 29,
            },
        },
    });
    //////////** cats slider **//////////
    var catswiper = new Swiper('.cats-slider .swiper-container', {
        loop: true,
        spaceBetween: 29,
        loop: true,
        speed: 500,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.cats-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.cats-slider .swiper-button-next',
            prevEl: '.cats-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 3,
            },
        },
    });
    //////////** products slider **//////////
    var bestswiper = new Swiper('.products-slider.best-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.products-slider.best-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.products-slider.best-slider .swiper-button-next',
            prevEl: '.products-slider.best-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 29,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 29,
            },
        },
    });
    //////////** products slider **//////////
    var offerswiper = new Swiper('.products-slider.offer-slider .swiper-container', {
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 29,
            },
        },
    });
    //////////** products slider **//////////
    var mostswiper = new Swiper('.products-slider.most-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.products-slider.most-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.products-slider.most-slider .swiper-button-next',
            prevEl: '.products-slider.most-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 29,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 29,
            },
        },
    });
    //////////** testmonials slider **//////////
    var testmonialsswiper = new Swiper('.testmonials-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        speed: 500,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.testmonials-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testmonials-slider .swiper-button-next',
            prevEl: '.testmonials-slider .swiper-button-prev',
        },
    });

    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-head").addClass("mo-accordion");
        $(".nav-foot-body").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })
    //////////** search **//////////
    if ($(window).width() <= 767) {
        $('.search-icon').click(function () {
            $(".search-cont").slideDown(400);
            $("body").addClass("overflow");
            $(".search-overlay").show();
        });
        $('.search-overlay').click(function () {
            $(".search-cont").slideUp(400);
            $("body").removeClass("overflow");
            $(".search-overlay").hide();
        });
    }
    ///////// **menu** /////////
    if ($(window).width() <= 767) {
        $('.has-sub>.nav-a').removeAttr("href")
        $('.menu-icon').click(function () {
            $("nav").addClass("nav-in");
            $("body").addClass("overflow");
            $(".menu-overlay").fadeToggle(400);
        });
        $('.menu-overlay,.menu-close').click(function () {
            $("nav").removeClass("nav-in");
            $("body").removeClass("overflow");
            $(".menu-overlay").fadeOut(400);
        });
        $('.has-sub>.nav-a').click(function () {
            $(".has-sub>.nav-a").not(this).removeClass("active");
            $(this).toggleClass("active");
            if ($(this).siblings().css('display') == 'none') {
                $(this).siblings().slideDown(500);
            } else {
                $(this).siblings().slideUp(500);
            }
            $(".has-sub>.nav-a").not(this).siblings().slideUp(500);
        })
    }
});