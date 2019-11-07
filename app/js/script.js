function projectsSliderInit() {
    var $slickElement = $('.projects__slider');
    var $paginInfo = $('.projects__slider_pagination-info');
    var $currentSlide = $paginInfo.find('strong');
    var $slidesCount = $paginInfo.find('span');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $currentSlide.text(i < 10 ? ('0' + i) : i);
        $slidesCount.text(slick.slideCount < 10 ? ('0' + slick.slideCount) : slick.slideCount);
        if (i > 1) {
            $('.projects__prev').removeClass('hidden');
        } else {
            $('.projects__prev').addClass('hidden');
        }
        if (i === slick.slideCount && window.outerWidth > 991) {
            $('.projects__next').addClass('hidden');
            $('.projects__prev').addClass('top');
        } else {
            $('.projects__next').removeClass('hidden');
            $('.projects__prev').removeClass('top');
        }
    });

    $slickElement.slick({
        autoplay: false,
        dots: false,
        infinite: false,
        nextArrow: '.projects__next',
        prevArrow: '.projects__prev',
        slidesToShow: 1,
    })
}
function reviewsSliderInit() {
    var $slickElement = $('.reviews__wrap');
    var $currentSlide = $('.reviews__current');
    var $slidesCount = $('.reviews__amount');
    //
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide) {
        var i = 0
        if (window.innerWidth > 991) {
            i = (currentSlide ? currentSlide : 0) + 2;
        } else {
            i = (currentSlide ? currentSlide : 0) + 1;
        }
        $currentSlide.text(i < 10 ? ('0' + i) : i);
        $slidesCount.text(slick.slideCount < 10 ? ('0' + slick.slideCount) : slick.slideCount);
    });

    $slickElement.slick({
        autoplay: false,
        dots: false,
        infinite: false,
        nextArrow: '.reviews__next',
        prevArrow: '.reviews__prev',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 981,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    })
}

function mobileMenuInit() {

    $(document).on('click', '.menu__btn', function () {
        $('.menu__wrap').addClass('visible').slideDown('fast');
        showOverlay();
    });

    $(document).on('click', '.menu__close', function () {
        $('.menu__wrap').removeClass('visible').slideUp('fast');
        hideOverlay();
    })

}

function showMoreClientsInit() {
    $(document).on('click', '.clients__show-more', function () {
        var list = $('.clients__list');

        list.toggleClass('clients--hidden');
        if (list.hasClass('clients--hidden')) {
            $(this).text('Загрузить еще');
        } else {
            $(this).text('Свернуть');
        }
    });
}

function overlayClickInit() {
    $(document).on('click', '.overlay', function () {
        hideOverlay();
        if ($('.menu__wrap').hasClass('visible')) {
            $('.menu__wrap').slideUp('fast');
        }
        hideModal();
    });
}

function showModalInit() {
    $(document).on('click', '.open-modal-btn', function () {
        var modalName = $(this).attr('data-modal');
        $('.modal-' + modalName).addClass('modal--visible');
        showOverlay();
    });
}

function showOverlay() {
    $('body').addClass('overlay_active');
}

function hideOverlay() {
    $('body').removeClass('overlay_active');
}

function hideModal() {
    $('.modal').removeClass('modal--visible')
}

function tabsInit() {
    $('body').on('click', '.cost-services__tab-nav a , .cost-services__conditions a', function () {
        $('.cost-services__tab-nav a').removeClass('active');
        $(this).addClass('active');
        var href = $(this).attr('href');
        $('.cost-services__tab-pane').removeClass('active').removeClass('in');
        $(href).addClass('active');
        setTimeout(function () {
            $(href).addClass('in');
        }, 200);
        var hrefLink =  $('.cost-services__tab-nav li');
        var hrefTab = $(this).attr('href');
        hrefLink.each(function () {
            var thisHrefheaderLink = $(this).find('a');
            if (thisHrefheaderLink.attr('href') === hrefTab){
                $(this).find('a').addClass('active')
            }
        });
        return false;

    });
}

function accordionInit() {
    $(document).on('click', '.faq__accordion-title a', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().next().slideToggle();
    })
}

function moneyCounterInit() {
    var $counter = $('.js-counter-money');

    setInterval(function () {
        if (Number($counter.text()) === 999) {
            $counter.text(100)
        } else {
            $counter.text(Number($counter.text()) + 1)
        }
    }, 1000)
}

function scrollNavigationInit() {
    $(document).on('click', '.navigation__link', function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
        if ($('body').hasClass('overlay_active') && $('.menu__wrap').hasClass('visible')) {
            $('.menu__close').click();
        }
    });
}

$(function () {
    projectsSliderInit();
    mobileMenuInit();
    showMoreClientsInit();
    overlayClickInit();
    showModalInit();
    tabsInit();
    accordionInit();
    moneyCounterInit();
    scrollNavigationInit();
    if (window.innerWidth < 1200) {
        reviewsSliderInit();
    }
});

window.onresize = function () {
    if (window.innerWidth < 1200) {
        reviewsSliderInit();
    }
}
