$(function () {
  $(".tabMenu > li a:first").addClass("active");
  $(".tabContents .tabC:first").addClass("on");

  $(".tabMenu > li a").click(function (e) {
    e.preventDefault();
    let tabIndex = $(this).parent().index();
    $(".tabMenu > li a").removeClass("active");
    $(this).addClass("active");

    $(".tabContents .tabC").removeClass("on").eq(tabIndex).addClass("on");
  });

  $(".tabContents .tabC ul li i").click(function () {
    $(this).toggleClass("on");
  });
});
