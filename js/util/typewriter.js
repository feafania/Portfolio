let printDelay = 2000;

export function typeText($el, text, speed, callback) {
  $el.text("");
  let i = 0;

  function type() {
    if (i < text.length) {
      $el.text(text.substring(0, i + 1));
      i++;
      setTimeout(type, speed);
    } else {
      if (callback) callback();
    }
  }

  type();
}

export function cycleSubtitle($el, phrases, speed, onFirstPhraseComplete) {
  let index = 0;

  function printPhrase() {
    $el.removeClass("show");
    $el.text("");

    const phrase = phrases[index];
    let i = 0;

    function type() {
      if (i < phrase.length) {
        $el.text(phrase.substring(0, i + 1));
        i++;
        setTimeout(type, speed);
      } else {
        $el.addClass("show");

        if (index === 0 && onFirstPhraseComplete) {
          onFirstPhraseComplete();
        }

        index = (index + 1) % phrases.length;
        setTimeout(printPhrase, printDelay);
      }
    }

    type();
  }

  printPhrase();
}
