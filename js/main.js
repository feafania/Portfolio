import { typeText, cycleSubtitle } from './util/typewriter.js';
import { initFormValidation } from "./modules/form-validation.js";
import { initSmoothScroll } from "./modules/smooth-scroll.js";
import { initMobileMenu } from "./modules/mobile-menu.js";
import { initCardAnimation } from "./modules/card-animatian.js";

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