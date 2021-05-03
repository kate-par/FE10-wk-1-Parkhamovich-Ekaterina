$(document).ready(function () {
  $(".slider").slick({
    arrow: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchMove: true,
  });
});
