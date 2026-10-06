<?php
  require_once __DIR__ . '/config/bootstrap.php';
  require_once __DIR__ . '/config/database.php';

  $page = 'home';
?>

<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>Portfolio – Tatsiana Kashko</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link rel="stylesheet" href="css/main.css">

  <link rel="apple-touch-icon" sizes="180x180" href="assets/icons/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/icons/favicon-16x16.png">
  <link rel="manifest" href="assets/icons/site.webmanifest">
</head>

<body id="top">

<?php require __DIR__ . '/includes/menu.php'; ?>

<main class="content">

  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__inner">
      <h1 id="hero-title">My Name is Tatsiana Kashko</h1>
      <h2 id="hero-subtitle">I'm a Web Developer</h2>
    </div>
    <a href="#portfolio" class="hero__scroll-down">
      <span>Scroll Down</span>
      <span class="hero__arrow scroll-arrow scroll-arrow--down" aria-hidden="true"></span>
    </a>
  </section>

  <div class="wrapper">
    <section id="portfolio" class="portfolio" aria-label="My Portfolio">
      <div class="portfolio__grid">
        <article class="project-card">
          <div class="project-card__inner">
            <div class="project-card__media">
              <img src="assets/images/placeholder1.png" alt="Preview of Project One">
            </div>
            <div class="project-card__content">
              <h3>Project One</h3>
              <a href="#" class="view-project-btn">
                <span>View Project</span>
                <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </article>

        <article class="project-card">
          <div class="project-card__inner">
            <div class="project-card__media">
              <img src="assets/images/placeholder2.png" alt="Preview of Project Two">
            </div>
            <div class="project-card__content">
              <h3>Project Two</h3>
              <a href="#" class="view-project-btn">
                <span>View Project</span>
                <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </article>

        <article class="project-card">
          <div class="project-card__inner">
            <div class="project-card__media">
              <img src="assets/images/placeholder3.png" alt="Preview of Project Three">
            </div>
            <div class="project-card__content">
              <h3>Project Three</h3>
              <a href="#" class="view-project-btn">
                <span>View Project</span>
                <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </article>

        <article class="project-card">
          <div class="project-card__inner">
            <div class="project-card__media">
              <img src="assets/images/placeholder4.png" alt="Preview of Project Four">
            </div>
            <div class="project-card__content">
              <h3>Project Four</h3>
              <a href="#" class="view-project-btn">
                <span>View Project</span>
                <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </article>

        <article class="project-card">
          <div class="project-card__inner">
            <div class="project-card__media">
              <img src="assets/images/placeholder5.png" alt="Preview of Project Five">
            </div>
            <div class="project-card__content">
              <h3>Project Five</h3>
              <a href="#" class="view-project-btn">
                <span>View Project</span>
                <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </article>

        <article class="project-card">
          <div class="project-card__inner">
            <div class="project-card__media">
              <img src="assets/images/placeholder6.png" alt="Preview of Project Six">
            </div>
            <div class="project-card__content">
              <h3>Project Six</h3>
              <a href="#" class="view-project-btn">
                <span>View Project</span>
                <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="contact__inner">
        <div class="contact__info">
          <h2>Get In Touch</h2>
          <p>
            Have a project in mind or just want to say hello?
            Fill out the form, and I'll get back to you as soon as I can.
          </p>

          <div class="contact__details">
            <a href="tel:+447946898615" class="contact__phone">
              <i class="fa-solid fa-phone"></i>
              <span>+44 7946 898615</span>
            </a>
            <a href="mailto:t.kashko@gmail.com" class="contact__email">
              <i class="fa-solid fa-envelope"></i>
              <span>t.kashko@gmail.com</span>
            </a>
            <p>
              I usually reply within 1–2 business days, so feel free
              to reach out with any questions or project ideas.
            </p>
          </div>
        </div>

        <form class="contact__form" action="#" method="post">
          <div class="contact__field">
            <label for="first-name">
              First Name <span aria-hidden="true">*</span>
            </label>
            <input id="first-name" type="text" name="first-name" placeholder="First name*" required>
          </div>

          <div class="contact__field">
            <label for="last-name">
              Last Name <span aria-hidden="true">*</span>
            </label>
            <input id="last-name" type="text" name="last-name" placeholder="Last name*" required>
          </div>

          <div class="contact__field">
            <label for="email">
              Email Address <span aria-hidden="true">*</span>
            </label>
            <input id="email" type="email" name="email" placeholder="Email Address*" required>
          </div>

          <div class="contact__field">
            <label for="phone">
              Phone Number
            </label>
            <input id="phone" type="tel" name="phone" placeholder="Phone Number" autocomplete="tel">
          </div>

          <div class="contact__field contact__field--full">
            <label for="subject">
              Subject
            </label>
            <input id="subject" type="text" placeholder="Subject" name="subject">
          </div>

          <div class="contact__field contact__field--full">
            <label for="message">
              Message
            </label>
            <textarea id="message" name="message" placeholder="Message" rows="6"></textarea>
          </div>

          <button type="submit" class="contact__submit btn">Submit</button>
        </form>
      </div>
    </section>
  </div>

  <?php require __DIR__ . '/includes/footer.php'; ?>

</main>

<div class="card-zoom">
  <div class="card-zoom__overlay"></div>

  <div class="card-zoom__container">
    <div class="card-zoom__wrapper">
      <button class="card-zoom__close" aria-label="Close zoomed card">
        &times;
      </button>
    </div>
  </div>
</div>

<script src="js/jquery-4.0.0.js"></script>
<script type="module" src="js/main.js"></script>
</body>
</html>
