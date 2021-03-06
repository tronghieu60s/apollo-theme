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
  $(".ap-infrastructure-nav").slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    asNavFor: ".ap-infrastructure-slide",
    prevArrow:
      '<span class="ap-infrastructure-nav-arrow ap-infrastructure-nav-arrow-prev d-block d-md-none"><img src="./public/images/common/arrow-prev.svg" alt=""></span>',
    nextArrow:
      '<span class="ap-infrastructure-nav-arrow ap-infrastructure-nav-arrow-next d-block d-md-none"><img src="./public/images/common/arrow-next.svg" alt=""></span>',
  });
  $(".ap-infrastructure-slide").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: 0,
    asNavFor: ".ap-infrastructure-nav",
    prevArrow:
      '<span class="ap-infrastructure-slide-arrow ap-infrastructure-slide-arrow-prev d-none d-md-block"><img src="./public/images/common/arrow-prev.svg" alt=""></span>',
    nextArrow:
      '<span class="ap-infrastructure-slide-arrow ap-infrastructure-slide-arrow-next d-none d-md-block"><img src="./public/images/common/arrow-next.svg" alt=""></span>',
  });

  /* Custom JS */
  $(".ap-journey-tabs-item").click(function () {
    const currentIndex = $(".ap-journey-tabs-item").index(this);
    const journeyTabs = document.querySelector(".ap-journey-tabs");
    const journeyTabsItem = document.querySelector(
      `.ap-journey-tabs-item:nth-child(${currentIndex})`
    );
    journeyTabs.scrollTo(journeyTabsItem?.offsetLeft - 70, 0);

    $(`.ap-journey-tabs-item`).removeClass("active");
    $(`.ap-journey-tabs-item:eq(${currentIndex})`).addClass("active");
    $(`.ap-journey-content-images`).removeClass("active");
    $(`.ap-journey-content-images:eq(${currentIndex})`).addClass("active");
    $(`.ap-journey-content-tabs`).removeClass("active");
    $(`.ap-journey-content-tabs:eq(${currentIndex})`).addClass("active");
  });

  $(".ap-vision-card-title").click(function () {
    const currentIndex = $(".ap-vision-card-title").index(this);
    $(`.ap-vision-card-image`).removeClass("active");
    $(`.ap-vision-card-image:eq(${currentIndex})`).addClass("active");
  });

  $("#collapsibleNavId").collapse({ toggle: false });
  $(".ap-header-nav-mobile-close").click(() => {
    $("#collapsibleNavId").collapse("toggle");
  });
});
