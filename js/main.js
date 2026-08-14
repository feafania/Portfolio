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



function initMobileMenu() {
  // mobile menu logic
//   Дапоўніць .side-menu CSS:
//     transform: translateX(-100%);
//   transition: transform .3s ease;
// .menu-checkbox:checked ~ .side-menu {
//     transform: translateX(0);
//   }
//
//
//   Праверыць 3 сцэнары:
//
// //     * mobile → burger → menu opens;
// * mobile → click navigation link → menu closes;
// * mobile → burger → Escape → menu closes;
// * desktop → menu заўсёды адкрыта, burger няма.
//
//     І яшчэ: я б не перарабляў твой checkbox-menu цалкам на JS. Твая цяперашняя структура ўжо выкарыстоўвае добры CSS-падыход; JavaScript тут лепш дадаць для інтэрактыўнасці, а не дубляваць тое, што CSS ужо ўмее.
}


function closeMobileMenu(menuToggle) {
  // close menu
}


function handleEscapeKey(event, menuToggle) {
  // Escape closes menu
}