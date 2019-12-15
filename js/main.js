$(document).ready(function() {
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 300) {
      $("#animate2").fadeIn(600);
      $("#animate2").css("display", "block");
    } else {
      $("#animate2").fadeOut(300);
      // $('#animate2').css("display", "none");
    }
  });
  //arrow code
  $(window).scroll(function() {
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
    //250 is fade pixels
  });

  // back to top link
  var scrollTimer = null;
  $(window).scroll(function() {
    if (scrollTimer) {
      clearTimeout(scrollTimer); // clear any previous pending timer
    }
    scrollTimer = setTimeout(handleScroll, 500); // set new timer
  });

  function handleScroll() {
    var limit = 1000,
      scrollTop = $(window).scrollTop(),
      $backBtn = $(".backtotop");

    var X = $(this).scrollTop();
    if (X > 300) {
      $backBtn.fadeIn(300);
    } else {
      $backBtn.fadeOut();
    }
  }
});
