(function ($) {
  $(document).ready(function () {
    ///////// **main Slider** /////////
    var mainSlider = new Swiper(".main-slider .swiper", {
      loop: true,
      autoplay: true,
      slidesPerView: 1,
      preloadImages: false,
      updateOnWindowResize: true,
      speed: 2000,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
    });
  });
})(jQuery);
