import { typeText, cycleSubtitle } from './util/typewriter.js';
import { initFormValidation } from "./modules/form-validation.js";
import { initSmoothScroll } from "./modules/smooth-scroll.js";
import { initMobileMenu } from "./modules/mobile-menu.js";

const titleSpeed = 60;
const subtitleSpeed = 80;

$(document).ready(function () {
  initTypingEffect();
  initFormValidation();
  initSmoothScroll();
  initMobileMenu();
  initCardAnimation();
});

function initTypingEffect() {
  const $title = $("#hero-title");
  const $subtitle = $("#hero-subtitle");

  const subtitlePhrases = [
    $subtitle.text(),
    "I Build Modern Websites",
    "I Create Clean UI/UX"
  ];

  $subtitle.text("");

  typeText($title, $title.text(), titleSpeed, () => {
    $subtitle.addClass("hero-subtitle-animate");
    cycleSubtitle($subtitle, subtitlePhrases, subtitleSpeed, () => {
      $(".hero__scroll-down").addClass("show");
    });
  });
}

function initCardAnimation() {
  const $cards = $(".project-card");
  const $zoom = $(".card-zoom");
  const $overlay = $(".card-zoom__overlay");
  const $wrapper = $(".card-zoom__wrapper");
  const $closeBtn = $(".card-zoom__close");

  $cards.on("click", function (e) {
    if ($(e.target).closest(".view-project-btn").length) {
      return;
    }
    openCard($(this));
  });

  $(".view-project-btn").on("click", function (e) {
    e.stopPropagation();
  });

  function openCard($card) {
    $("body").css("overflow", "hidden");
    $wrapper.find(".project-card--zoomed").remove();

    const $clone = $card.clone();
    $clone.addClass("project-card--zoomed");

    $clone.find(".view-project-btn").on("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      closeCard();
    });

    $wrapper.append($clone);
    $zoom.addClass("is-active");
    $overlay.addClass("is-active");
    $closeBtn.addClass("is-active");

    requestAnimationFrame(() => {
      $clone.addClass("is-open");
    });
  }

  function closeCard() {
    const $clone = $wrapper.find(".project-card--zoomed");
    $clone.removeClass("is-open");
    $zoom.removeClass("is-active");
    $overlay.removeClass("is-active");
    $closeBtn.removeClass("is-active");

    $("body").css("overflow", "");

    setTimeout(() => {
      $wrapper.find(".project-card--zoomed").remove();
    }, 500);

  }

  $overlay.on("click", closeCard);
  $closeBtn.on("click", closeCard);

  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      closeCard();
    }
  });

  function updateCardZoomSize() {
    $zoom.css("width", `${$(document.documentElement).width()}px`);
  }

  $(window).on("resize", updateCardZoomSize);
  updateCardZoomSize();
}