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
});
