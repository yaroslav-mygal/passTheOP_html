$(document).ready(function () {
  if ($("#owl-awards").length > 0) {
    const owlCarousel = $("#owl-awards");
    if (jQuery(window).width() <= 1280) {
      owlCarousel.owlCarousel({
        // autoPlay: 3000, //Set AutoPlay to 3 seconds
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 1],
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
        },
      });
    } else {
      owlCarousel.owlCarousel("destroy");
    }
  }
  $(".app-footer-1 .footer-widget .widget-title").on("click", function () {
    $(this).parent().toggleClass("active");
  });
  $("#init-mobile-menu").on("click", function () {
    $(".app-head").toggleClass("open");
  });
  $(".panel-group .panel-heading").on("click", function () {
    $(this).next(".panel-collapse").toggleClass("active");
  });
  // scroll to
  // $(".scrollTo").click(function (e) {
  //   $("html, body").animate(
  //     {
  //       scrollTop: $("#div1").offset().top,
  //     },
  //     2000
  //   );
  //   return false;
  // });
});

(function () {
  $('a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));

    if (target.length) {
      event.preventDefault();
      const offsetTop = 80;
      const scrollToPosition = target.offset().top - offsetTop;
      $("html, body").stop().animate(
        {
          scrollTop: scrollToPosition,
        },
        1000
      );
    }
  });
})();
