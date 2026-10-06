<?php

/** @var string $page */
/** @var array $pageContent */

$content = $pageContent[$page];
?>

<section class="hero hero--page" aria-labelledby="<?= $content['id'] ?>">
  <div class="hero__inner">
    <h1 id="<?= $content['id'] ?>"><?= $content['title'] ?></h1>
    <p><?= $content['text'] ?></p>
  </div>
</section>