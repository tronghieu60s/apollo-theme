$(document).ready(function () {
  /* Slick JS */
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
      '<span class="ap-feedback-nav-arrow ap-feedback-nav-arrow-prev d-block d-md-none"><img src="./public/images/common/arrow-prev.svg" alt=""></span>',
    nextArrow:
      '<span class="ap-feedback-nav-arrow ap-feedback-nav-arrow-next d-block d-md-none"><img src="./public/images/common/arrow-next.svg" alt=""></span>',
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
      '<span class="ap-feedback-slide-arrow ap-feedback-slide-arrow-prev d-none d-md-block"><img src="./public/images/common/arrow-prev.svg" alt=""></span>',
    nextArrow:
      '<span class="ap-feedback-slide-arrow ap-feedback-slide-arrow-next d-none d-md-block"><img src="./public/images/common/arrow-next.svg" alt=""></span>',
  });
  $(".ap-teachers-nav").slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: 0,
    prevArrow:
      '<span class="ap-teachers-nav-arrow ap-teachers-nav-arrow-prev"><img src="./public/images/common/arrow-prev.svg" alt=""></span>',
    nextArrow:
      '<span class="ap-teachers-nav-arrow ap-teachers-nav-arrow-next"><img src="./public/images/common/arrow-next.svg" alt=""></span>',
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  /* Custom JS */
  $(".ap-journey-tabs-item").click(function () {
    const currentIndex = $(".ap-journey-tabs-item").index(this);
    $(`.ap-journey-tabs-item`).removeClass("active");
    $(`.ap-journey-tabs-item:eq(${currentIndex})`).addClass("active");
    $(`.ap-journey-content-images`).removeClass("active");
    $(`.ap-journey-content-images:eq(${currentIndex})`).addClass("active");
    $(`.ap-journey-content-tabs`).removeClass("active");
    $(`.ap-journey-content-tabs:eq(${currentIndex})`).addClass("active");
  });
});
