$(document).ready(function () {
  const owlProgramsSlider = $("#program-slider");
  owlProgramsSlider.owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    nav: true,
    dots: false,
    items: 1,
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
    // autoPlay: 3000, //Set AutoPlay to 3 seconds
    autoplay: true,
    autoplayTimeout: 5000,
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
    console.log(el);
    $(".package-box").removeClass("active");
    const dataTab = $(el).data("tab");
    console.log(dataTab);
    $(el).addClass("active");
    $(".package-tabs .package-tab").removeClass("active");
    $("#" + dataTab).addClass("active");
  });
});
