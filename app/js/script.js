function projectsSliderInit() {
    var $slickElement = $('.projects__slider');
    var $paginInfo = $('.projects__slider_pagination-info');
    var $currentSlide = $paginInfo.find('strong');
    var $slidesCount = $paginInfo.find('span');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $currentSlide.text(i < 10 ? ('0' + i) : i);
        $slidesCount.text(slick.slideCount < 10 ? ('0' + slick.slideCount) : slick.slideCount);
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

$(function () {
    projectsSliderInit();
    mobileMenuInit();
    showMoreClientsInit();
    overlayClickInit();
    showModalInit();
});
