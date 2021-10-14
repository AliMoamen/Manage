var x = window.matchMedia("(max-width: 762px)")
if (x.matches) {
  $(document).ready(function() {
    $('.slick-slider ').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
    });
  });
} else {
  $(document).ready(function() {
    $('.slick-slider ').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
    });
  });
}
