import { initMobileMenu } from "./modules/mobile-menu.js";
import { initSmoothScroll } from "./modules/smooth-scroll.js";
import { initCodeHighlight } from "./modules/code-highlight.js";

$(document).ready(function () {
  initMobileMenu();
  initSmoothScroll();
  initCodeHighlight();
});