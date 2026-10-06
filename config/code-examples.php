<?php
return [
    [
        'title'         => 'Mobile menu: keyboard and close behaviour',
        'filename'      => 'mobile-menu.js',
        'language'      => 'javascript',
        'languageLabel' => 'JavaScript (jQuery)',
        'what'          => 'Closes the mobile menu when a link is clicked or Escape is pressed, and makes the burger button work with Space and Enter.',
        'why'           => 'The menu is a CSS-only checkbox toggle, so JavaScript is only used for what CSS cannot do: keyboard accessibility and closing the menu after navigation. Small single-purpose functions keep the module easy to read.',
        'code'          => <<<'CODE'
export function initMobileMenu() {
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
CODE,
    ],
    [
        'title'         => 'Netmatters enquiry form: saving to the database',
        'filename'      => 'saveEnquiry.php',
        'language'      => 'php',
        'languageLabel' => 'PHP (PDO) with SQL',
        'what'          => 'Saves a validated enquiry into the enquiries table using a prepared statement. Optional fields such as company are stored as NULL when left empty.',
        'why'           => 'Prepared statements with named placeholders keep user input separate from the SQL, which protects against SQL injection. Putting the query in its own function keeps the database logic out of the form handler and makes it reusable.',
        'code'          => <<<'CODE'
function saveEnquiry(PDO $pdo, array $data): void
{
    $stmt = $pdo->prepare('
        INSERT INTO enquiries
            (name, company, email, telephone, message, marketing_preference)
        VALUES
            (:name, :company, :email, :telephone, :message, :marketing_preference)
    ');

    $stmt->execute([
        ':name' => $data['name'],
        ':company' => $data['company'] !== '' ? $data['company'] : null,
        ':email' => $data['email'],
        ':telephone' => $data['telephone'],
        ':message' => $data['message'],
        ':marketing_preference' => $data['marketing_preference'],
    ]);
}
CODE,
    ],
];