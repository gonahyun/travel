$(document).ready(function () {
  $("li[data-accordion-con='area1']").click(function () {
    // Hide all li[data-accordion-con='area2'] elements
    $("li[data-accordion-con='area2']").hide();

    // Show the corresponding li[data-accordion-con='area2'] element
    $(this).next("li[data-accordion-con='area2']").toggle();

    // Toggle the 'open' class on li[data-accordion-con='area1'] elements
    $("li[data-accordion-con='area1']").removeClass("open");
    $(this).toggleClass("open");
  });

  const sliders = [...document.querySelectorAll(".slider__container")];
  const sliderControlPrev = [
    ...document.querySelectorAll(".slider__control.prev"),
  ];
  const sliderControlNext = [
    ...document.querySelectorAll(".slider__control.next"),
  ];

  sliders.forEach((slider, i) => {
    let isSlide = false,
      prevScrollLeft,
      positionDiff;

    const sliderItem = slider.querySelector(".slider__item");
    var isMultislide = slider.dataset.multislide === "true";

    sliderControlPrev[i].addEventListener("click", () => {
      if (isSlide) return;
      isSlide = true;
      let slideWidth = isMultislide
        ? slider.clientWidth
        : sliderItem.clientWidth;
      slider.scrollLeft += -slideWidth;
      setTimeout(function () {
        isSlide = false;
      }, 700);
    });

    sliderControlNext[i].addEventListener("click", () => {
      if (isSlide) return;
      isSlide = true;
      let slideWidth = isMultislide
        ? slider.clientWidth
        : sliderItem.clientWidth;
      slider.scrollLeft += slideWidth;
      setTimeout(function () {
        isSlide = false;
      }, 700);
    });

    function autoSlide() {
      if (
        slider.scrollLeft - (slider.scrollWidth - slider.clientWidth) > -1 ||
        slider.scrollLeft <= 0
      )
        return;
      positionDiff = Math.abs(positionDiff);
      let slideWidth = isMultislide
        ? slider.clientWidth
        : sliderItem.clientWidth;
      let valDifference = slideWidth - positionDiff;
      if (slider.scrollLeft > prevScrollLeft) {
        return (slider.scrollLeft +=
          positionDiff > slideWidth / 5 ? valDifference : -positionDiff);
      }
      slider.scrollLeft -=
        positionDiff > slideWidth / 5 ? valDifference : -positionDiff;
    }

    addEventListener("resize", autoSlide);
  });

  // Visual
  let visual = $("#visual");
  visual.find(".v_wrap .v-txt h2").addClass("animate");
  visual.find(".v_wrap .v-txt p").addClass("animate");
  visual.find(".search").addClass("animate");

  $("#visual .check").click(function () {
    $(this).toggleClass("on");
  });

  // Con1
  let con1 = $("#con1");
  let con1Banner = con1.find(".banner .banner-txt");
  let con1Li2 = con1.find(".banner ul li:nth-child(2)");

  $(window).on("scroll", function () {
    let con1Position = con1.offset().top;
    let screenPosition = $(window).scrollTop() + $(window).height();

    if (con1Position < screenPosition) {
      con1Banner.addClass("animate-slideFromLeft");
      con1Li2.addClass("animate-slideFromRight");
    }
  });
});
