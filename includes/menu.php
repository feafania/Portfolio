 <?php
    /** @var string $page */
    /** @var array $routes */
 ?>

<input type="checkbox" id="menu-toggle" class="menu-checkbox" hidden>

<label for="menu-toggle"
       class="burger"
       tabindex="0">
  <span class="burger__line"></span>
</label>

<label for="menu-toggle" class="menu-overlay"></label>

<aside class="side-menu">

  <div class="side-menu__branding">
    <a href="<?= $routes['home'] ?>" class="side-menu__logo" aria-label="Home">TK</a>
  </div>

  <nav class="main-nav">
    <ul>
      <li>
          <a href="<?= $routes['about'] ?>"
             <?= $page === 'about' ? 'aria-current="page" class="active"' : '' ?>>
              About Me
          </a>
      </li>
      <li><a href="<?= $routes['home'] ?>#portfolio">My Portfolio</a></li>
      <li>
          <a href="<?= $routes['coding'] ?>"
             <?= $page === 'coding' ? 'aria-current="page" class="active"' : '' ?>>
              Coding Examples
          </a>
      </li>

      <li>
          <a href="<?= $routes['scs'] ?>"
             <?= $page === 'scs' ? 'aria-current="page" class="active"' : '' ?>>
              SCS Scheme
          </a>
      </li>
      <li><a href="<?= $routes['home'] ?>#contact">Contact Me</a></li>
    </ul>
  </nav>

  <div class="social-links">
    <a href="https://www.linkedin.com/in/tatsiana-kashko/"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="LinkedIn">
      <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
    </a>

    <a href="https://github.com/feafania"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="GitHub">
      <i class="fa-brands fa-github" aria-hidden="true"></i>
    </a>

    <a href="https://www.codewars.com/users/feafania"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Codewars">
      <i class="fa-solid fa-code" aria-hidden="true"></i>
    </a>
  </div>

</aside>