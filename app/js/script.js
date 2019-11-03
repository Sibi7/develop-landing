function projectsSliderInit() {
    var $slickElement = $('.projects__slides');
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
    })
}

$(function () {
    projectsSliderInit();
});
