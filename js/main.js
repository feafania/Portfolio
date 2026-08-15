import { typeText, cycleSubtitle } from './util/typewriter.js';
import { initFormValidation } from "./util/form-validation.js";

const titleSpeed = 60;
const subtitleSpeed = 80;

$(document).ready(function () {
  initTypingEffect();
  initFormValidation();
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
