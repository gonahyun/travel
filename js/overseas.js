$(function () {
  $(".tabMenu li:first").addClass("active");
  $(".tabContents > ul > li:first").addClass("on");

  $(".tabMenu li").click(function () {
    let tabIndex = $(this).index();
    $(".tabMenu li").removeClass("active");
    $(this).addClass("active");

    $(".tabContents > ul > li").removeClass("on").eq(tabIndex).addClass("on");
  });

  // con4
  $("#con4 .c4_wrap .grid-container .item").mouseover(function () {
    $(this).find(".itemHover").stop().fadeIn(300);
  });

  $("#con4 .c4_wrap .grid-container .item").mouseout(function () {
    $(this).find(".itemHover").stop().fadeOut(300);
  });
});
