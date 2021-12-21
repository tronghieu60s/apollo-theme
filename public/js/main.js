$(document).ready(function () {
  $(".ap-feedback-nav").slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding: 0,
    focusOnSelect: true,
    asNavFor: ".ap-feedback-slide",
  });
  $(".ap-feedback-slide").slick({
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".ap-feedback-nav",
    prevArrow:
      '<span class="ap-feedback-slide-arrow ap-feedback-slide-arrow-prev"><img src="./public/images/pre.svg" alt=""></span>',
    nextArrow:
      '<span class="ap-feedback-slide-arrow ap-feedback-slide-arrow-next"><img src="./public/images/next.svg" alt=""></span>',
  });
});
