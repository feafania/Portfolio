import { typeText, cycleSubtitle } from './util/typewriter.js';

$(document).ready(function () {
  initTypingEffect();
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

  typeText($title, $title.text(), 60, () => {
    $subtitle.addClass("hero-subtitle-animate");
    cycleSubtitle($subtitle, subtitlePhrases, 80, () => {
      $(".hero__scroll-down").addClass("show");
    });
  });
}
