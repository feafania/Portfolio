$(document).ready(function () {
  initMobileMenu();
});

function initMobileMenu() {
  const $menuToggle = $("#menu-toggle");
  const $burger = $(".burger");

  $(".main-nav a").on("click", function () {
    closeMobileMenu($menuToggle);
  });

  $(document).on("keydown", function (event) {
    handleEscapeKey(event, $menuToggle);
  });

  $burger.on("keydown", function (event) {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      $burger.trigger("click");
    }
  });
}

function closeMobileMenu($menuToggle) {
  $menuToggle.prop("checked", false);
}

function handleEscapeKey(event, $menuToggle) {
  if (event.key === "Escape" && $menuToggle.prop("checked")) {
    closeMobileMenu($menuToggle);
  }
}