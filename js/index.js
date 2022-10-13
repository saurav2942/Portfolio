$(document).ready(function () {
  //    For The Sticky Navigation
  $(".js--work-section").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "-5px",
    }
  );

  // --Scroll On Buttons--

  $(".js--scroll-to-hobb").click(function () {
    $("html,body").animate({ scrollTop: $("#hobbie").offset().top }, 1000);
  });

  $(".js--nav-scroll-to-projects").click(function () {
    $("html,body").animate({ scrollTop: $("#work").offset().top }, 1000);
  });

  $(".js--nav-scroll-to-education").click(function () {
    $("html,body").animate({ scrollTop: $("#education").offset().top }, 1000);
  });

  $(".js--nav-scroll-to-skills").click(function () {
    $("html,body").animate({ scrollTop: $("#skill").offset().top }, 1000);
  });

  $(".js--nav-scroll-to-exp").click(function () {
    $("html,body").animate({ scrollTop: $("#experience").offset().top }, 1000);
  });

  $(".js--nav-scroll-to-form").click(function () {
    $("html,body").animate({ scrollTop: $("#form").offset().top }, 1000);
  });

  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");
    // nav.slideToggle(200);   // i didn't used this bcoz of inline display property
    if (icon.hasClass("fa-solid fa-bars")) {
      icon.removeClass("fa-solid fa-bars");
      icon.addClass("fa-solid fa-xmark");
      nav.show();
      nav.css("display", "inline-block");
    } else {
      icon.removeClass("fa-solid fa-xmark");
      icon.addClass("fa-solid fa-bars");
      nav.hide();
      nav.removeAttr("style");
    }
  });
});
