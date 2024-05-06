/*==========

Theme Name: Foodify - Organic Food HTML5 Template
Theme Version: 1.0

==========*/

/*==========
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.Book Table Img Slider JS
3.Team Slider JS
4.Project Tabbing JS
5.Menu Open JS
6.DropDown Menu JS
7.Mobile Navigation Menu JS
6.Sticky Header JS
7.Mouse Parallax JS
7.Loader JS
==========*/

$(document).ready(function ($) {
  // Whole Script Strict Mode Syntax
  "use strict";

  // Book Table Img Slider JS

  var book_table_img_slider = new Swiper(".book-table-img-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 2000,

    effect: "coverflow",
    coverflowEffect: {
      rotate: 3,
      stretch: 2,
      depth: 100,
      modifier: 5,
      slideShadows: false,
    },
    loopAdditionalSlides: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Book Table Img Slider JS End

  // Team Slider JS

  var team_slider = new Swiper(".team-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 2000,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  // Team Slider JS End

  // Project Tabbing JS

  jQuery(".filters").on("click", function () {
    jQuery("#menu-dish").removeClass("bydefault_show");
  });

  $(function () {
    var filterList = {
      init: function () {
        // MixItUp plugin
        // http://mixitup.io
        $("#menu-dish").mixItUp({
          selectors: {
            target: ".dish-box-wp",
            filter: ".filter",
          },
          animation: {
            effects: "fade",
            easing: "ease-in-out",
          },
          load: {
            filter: ".all, .breakfast, .lunch, .dinner",
          },
        });
      },
    };
    // Run the show!
    filterList.init();
  });

  // Project Tabbing JS End

  // Menu Open JS

  jQuery(".menu-toggle").click(function () {
    jQuery(".main-navigation").toggleClass("toggled");
  });

  // Menu Open JS End

  // DropDown Menu JS

  jQuery(".dropdown-items").click(function () {
    var cur = jQuery(this).closest(".dropdown-items");
    jQuery(".dropdown-items").not(cur).removeClass("dropdown-open");
    jQuery(this).closest(".dropdown-items").toggleClass("dropdown-open");
  });

  // DropDown Menu JS End

  // Mobile Navigation Menu Removeclass

  jQuery(".header-menu ul li a").click(function () {
    jQuery(".main-navigation").removeClass("toggled");
  });

  // Mobile Navigation Menu Removeclass End

  // Sticky Header JS

  gsap.registerPlugin(ScrollTrigger);

  var elementFirst = document.querySelector(".site-header");

  ScrollTrigger.create({
    trigger: "body",
    start: "30px top",
    end: "bottom bottom",

    onEnter: () => myfunction(),
    onLeaveBack: () => myfunction(),
  });

  function myfunction() {
    elementFirst.classList.toggle("sticky_head");
  }

  // Sticky Header JS End

  //Mouse Parallax
  var scene = $(".js-parallax-scene").get(0);
  var parallaxInstance = new Parallax(scene);
  //Mouse Parallax End
});

//Loader JS

jQuery(window).on("load", function () {
  $(".page-loader").fadeOut();
  $("body").removeClass("body-fixed");

  // Active Tabbing JS
  let targets = document.querySelectorAll(".filter");
  let activeTab = 0;
  let old = 0;
  let dur = 0.4;
  let animation;

  for (let i = 0; i < targets.length; i++) {
    targets[i].index = i;
    targets[i].addEventListener("click", doCoolStuff);
  }

  // set initial position bubble slider on first tab
  gsap.set(".filter-active", {
    x: targets[0].offsetLeft,
    width: targets[0].offsetWidth,
  });
  gsap.set(targets[0], { color: "#fff" });

  function doCoolStuff() {
    // check if clicked target is new and if the timeline is currently active
    if (this.index != activeTab) {
      //if there's an animation in-progress, jump to the end immediately so there aren't weird overlaps.
      if (animation && animation.isActive()) {
        animation.progress(1);
      }
      animation = gsap.timeline({ defaults: { duration: 0.4 } });
      old = activeTab;
      activeTab = this.index;
      // animate bubble slider to clicked target
      animation.to(".filter-active", {
        x: targets[activeTab].offsetLeft,
        width: targets[activeTab].offsetWidth,
      });

      // change text color on old and new tab targets
      animation.to(targets[old], { color: "#0d0d25", ease: "none" }, 0);
      animation.to(targets[activeTab], { color: "#fff", ease: "none" }, 0);
    }
  }
});

//Loader JS End
