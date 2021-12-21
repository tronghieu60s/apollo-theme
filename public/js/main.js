$(document).ready(function () {
  $(".ap-feedback-nav").slick({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    asNavFor: ".ap-feedback-slide",
    prevArrow:
      '<span class="ap-feedback-nav-arrow ap-feedback-nav-arrow-prev d-block d-md-none"><img src="./public/images/pre.svg" alt=""></span>',
    nextArrow:
      '<span class="ap-feedback-nav-arrow ap-feedback-nav-arrow-next d-block d-md-none"><img src="./public/images/next.svg" alt=""></span>',
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  });
  $(".ap-feedback-slide").slick({
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".ap-feedback-nav",
    prevArrow:
      '<span class="ap-feedback-slide-arrow ap-feedback-slide-arrow-prev d-none d-md-block"><img src="./public/images/pre.svg" alt=""></span>',
    nextArrow:
      '<span class="ap-feedback-slide-arrow ap-feedback-slide-arrow-next d-none d-md-block"><img src="./public/images/next.svg" alt=""></span>',
  });
});
