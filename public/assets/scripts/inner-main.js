$(document).ready(function () {
  const owlProgramsSlider = $("#program-slider");
  owlProgramsSlider.owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: 1,
    responsive: {
      0: {
        autoPlay: false,
      },
      1024: {
        autoplay: true,
        autoplayTimeout: 5000,
      },
    },
  });
  owlProgramsSlider.on("changed.owl.carousel", function (event) {
    const slideIndex = event.item.index;
    const activeThumbIndex = slideIndex - 3;
    $("#program-slider-nav li").removeClass("active");
    $("#program-slider-nav li").eq(activeThumbIndex).addClass("active");
  });
  $("#program-slider-nav li").on("click", function (el) {
    var slideIndex = $(this).index();
    owlProgramsSlider.trigger("to.owl.carousel", slideIndex);
  });
  $("#tutors-slider").owlCarousel({
    autoplay: false,
    loop: true,
    nav: true,
    dots: false,
    margin: 32,
    responsive: {
      0: {
        items: 1.2,
      },
      768: {
        items: 2,
        autoplay: true,
        autoplayTimeout: 5000,
      },
      1024: {
        items: 3,
      },
    },
  });

  $("#courses-slider").owlCarousel({
    // autoPlay: 3000, //Set AutoPlay to 3 seconds
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    nav: true,
    dots: false,
    items: 3,
    margin: 32,
    responsive: {
      0: {
        items: 1.2,
        margin: 16,
      },
      768: {
        items: 2,
        margin: 24,
      },
      1024: {
        margin: 32,
        items: 3,
      },
    },
  });
  $(".exam-row").on("click", function () {
    $(this).toggleClass("open");
  });
  $(".package-box").on("click", function () {
    const el = this;
    $(".package-box").removeClass("active");
    const dataTab = $(el).data("tab");
    const packageTitle = $(el).data("program");
    const packagePrice = $(el).data("price");
    $(el).addClass("active");
    $(".package-tabs .package-tab").removeClass("active");
    $("#" + dataTab).addClass("active");
    $("#head-selected-program").text(packagePrice + " | " + packageTitle);
    $("#btn-price").text(packagePrice);
  });
  $(document).on("scroll", onScroll);
});
(function () {
  const packagesHead = document.getElementById("app");
  const divToWatch = document.querySelector("#packages");
  const offsetDivTop = divToWatch.offsetTop;
  document.addEventListener(
    "scroll",
    (event) => {
      const offsetWindowTop = window.scrollY;
      if (offsetWindowTop > offsetDivTop) {
        packagesHead.classList.add("active-fixed");
      } else {
        packagesHead.classList.remove("active-fixed");
      }
    },
    { passive: true }
  );
})();
function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $("#additional-head .program-nav a").each(function () {
    var currLink = $(this, "#additional-head");
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $(".program-nav ul li a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
