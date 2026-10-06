<?php
  require_once __DIR__ . '/../config/bootstrap.php';
  $page = 'scs';
?>

<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>SCS Scheme</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link rel="stylesheet" href="../css/main.css">

  <link rel="apple-touch-icon" sizes="180x180" href="../assets/icons/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="../assets/icons/favicon-16x16.png">
  <link rel="manifest" href="../assets/icons/site.webmanifest">
</head>

<body id="top">

<?php require __DIR__ . '/../includes/menu.php'; ?>

<main class="content">

  <?php require __DIR__ . '/../includes/page-hero.php'; ?>

  <section class="scs">
    <div class="container">
      <h2>Introduction to Scion Coalition Scheme</h2>
      <p>
        The Scion Coalition Scheme is an intensive,
        specially tailored training program run by Netmatters
        in order to give willing candidates the opportunity
        to enter the industry as web developers.
      </p>

      <p>
        Under the supervision of senior web developers,
        scions generally aim to complete training within six to nine months.
        The course is intensive and therefore the level of learning achieved
        is extensive in a short space of time.
      </p>
    </div>
  </section>

  <section class="scs__section">
    <div class="container">

      <div class="scs__cards">

        <article class="scs-card">
          <i class="fa-solid fa-graduation-cap" aria-hidden="true"></i>

          <h3>Treehouse</h3>

          <p>
            Treehouse is an online learning community,
            featuring videos covering a number of topics from basic HTML to C# programming,
            iOS development, data analysis, and more.
          </p>

          <p>
            By completing courses users can earn points, allowing them to track their progress
            and see how much they have covered in certain areas.
          </p>

          <a
            href="https://teamtreehouse.com/profiles/tatsianakashko2"
            target="_blank"
            rel="noopener noreferrer"
            class="scs-card__total-score">
            Total Score
          </a>

          <a
            href="https://teamtreehouse.com"
            target="_blank"
            rel="noopener noreferrer"
            class="scs-card__link">
            Visit Treehouse
          </a>
        </article>

        <article class="scs-card">
          <i class="fa-solid fa-building" aria-hidden="true"></i>

          <h3>About Netmatters</h3>

          <ul class="scs-card__list">
            <li>Established in 2008</li>
            <li>Norfolk's leading technology company</li>
            <li>Winner of the Princess Royal Training Award</li>
            <li>Winner of the EDP Skills of Tomorrow Award</li>
            <li>80+ staff, 2 locations across Norfolk</li>
            <li>Digital Marketing, Website & Software development & IT Support</li>
            <li>Broad spectrum of clients, working nationwide</li>
            <li>Cooperate to strict company values</li>
          </ul>

          <a
            href="https://www.netmatters.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            class="scs-card__link">
            Visit Netmatters
          </a>

        </article>

      </div>

    </div>
  </section>

  <?php require __DIR__ . '/../includes/footer.php'; ?>

</main>

<script src="../js/jquery-4.0.0.js"></script>
<script type="module" src="../js/scs-scheme.js"></script>

</body>
</html>