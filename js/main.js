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
  const cards = document.querySelectorAll(".project-card");
  const zoom = document.querySelector(".card-zoom");
  const overlay = document.querySelector(".card-zoom__overlay");
  const wrapper = document.querySelector(".card-zoom__wrapper");
  const closeBtn = document.querySelector(".card-zoom__close");

  cards.forEach(card => {
    const viewBtn = card.querySelector(".view-project-btn");
    if (viewBtn) {
      viewBtn.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }

    card.addEventListener("click", function (e) {
      if (e.target.closest(".view-project-btn")) return;
      openCard(card);
    });
  });

  function openCard(card) {
    document.body.style.overflow = "hidden";

    const clone = card.cloneNode(true);
    clone.className = "project-card--zoomed";

    const viewBtn = clone.querySelector(".view-project-btn");
    if (viewBtn) {
      viewBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        closeCard();
      });
    }

    const existingClone = wrapper.querySelector(".project-card--zoomed");
    if (existingClone) {
      existingClone.remove();
    }

    wrapper.appendChild(clone);

    zoom.classList.add("is-active");
    overlay.classList.add("is-active");
    closeBtn.classList.add("is-active");

    requestAnimationFrame(() => {
      clone.classList.add("is-open");
    });
  }

  function closeCard() {
    const clone = wrapper.querySelector(".project-card--zoomed");
    if (clone) {
      clone.classList.remove("is-open");
    }

    zoom.classList.remove("is-active");
    overlay.classList.remove("is-active");
    closeBtn.classList.remove("is-active");

    document.body.style.overflow = "";

    setTimeout(() => {
      const cloneToRemove = wrapper.querySelector(".project-card--zoomed");
      if (cloneToRemove) {
        cloneToRemove.remove();
      }
    }, 500);
  }

  overlay.addEventListener("click", closeCard);
  closeBtn.addEventListener("click", closeCard);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCard();
  });

  function updateCardZoomSize() {
    zoom.style.setProperty(
      "--viewport-width",
      `${document.documentElement.clientWidth}px`
    );
  }

  window.addEventListener("resize", updateCardZoomSize);
  updateCardZoomSize();
}