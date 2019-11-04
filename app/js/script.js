function projectsSliderInit() {
    var $slickElement = $('.projects__slider');
    var $paginInfo = $('.projects__slider_pagination-info');
    var $currentSlide = $paginInfo.find('strong');
    var $slidesCount = $paginInfo.find('span');

    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide) {
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
        $('.menu__wrap').slideDown('fast');
        $('body').addClass('overlay_active');
    });

    $(document).on('click', '.menu__close', function () {
        $('.menu__wrap').slideUp('fast');
        $('body').removeClass('overlay_active');
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
       $('body').removeClass('overlay_active');
        $('.menu__wrap').slideUp('fast');
    });
}


$(function () {
    projectsSliderInit();
    mobileMenuInit();
    showMoreClientsInit();
    overlayClickInit();
    $('body').on('click','.cost-services__tab-nav a',function(){
        $('.cost-services__tab-nav a').removeClass('active');
        $(this).addClass('active');
        var href = $(this).attr('href');
        console.log(href)
        $('.cost-services__tab-pane').removeClass('active').removeClass('in');
        $(href).addClass('active');
        setTimeout(function(){
            $(href).addClass('in');
        }, 200);
        return false;
    });
});
