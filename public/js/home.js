$(document).ready(function () {
  for (var i = 0; i < 3; i++) {
    if (i == 1) {
      $(".home_div").eq(i).css({ transform: "scale(0.9)", "z-index": 99 });
    } else {
      $(".home_div").eq(i).css({ transform: "scale(0.3)" });
    }
  }
  $(".registration_div").on("mouseover", function () {
    scale_fun(0);
  });
  $(".about_div").on("mouseover", function () {
    scale_fun(1);
  });
  $(".login_div").on("mouseover", function () {
    scale_fun(2);
  });
});
function scale_fun(index) {
  for (var i = 0; i < 3; i++) {
    if (i == index) {
      $(".home_div").eq(index).css({ transform: "scale(0.9)", "z-index": 99 });
      $(".login_side_nav_icon").eq(index).css("background", "#7265F0");
    } else {
      if (i == 1) {
        $(".home_div").eq(i).css({ transform: "scale(0.7)", "z-index": 0 });
      } else {
        $(".home_div").eq(i).css({ transform: "scale(0.3)", "z-index": 0 });
      }
      $(".login_side_nav_icon").eq(i).css("background", "#3A3B3D");
    }
  }
}
function about_text_fun(index) {
  for (var i = 0; i < 3; i++) {
    if (i == index) {
      $(".home_dot").eq(index).css("background-color", "grey");
      $(".about_div_text").eq(index).css("display", "flex");
    } else {
      $(".home_dot").eq(i).css("background-color", "#9BCFFC");
      $(".about_div_text").eq(i).css("display", "none");
    }
  }
}
