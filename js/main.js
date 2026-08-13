initTypingEffect();
initMobileMenu();

function initTypingEffect() {
  const $destination = $('#hero-title');
  const destinationText = $destination.text();
  $destination.text("");

  // set up text to print, each item in array is a new line
  let aText = new Array(destinationText);
  let iSpeed = 100; // time delay of print out
  let iIndex = 0; // start printing array at this posision
  let iArrLength = aText[0].length; // the length of the text array
  let iScrollAt = 20; // start scrolling up at this many lines

  let iTextPos = 0; // initialise text position
  let sContents = ''; // initialise contents variable
  let iRow; // initialise current row

  function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);

    while (iRow < iIndex) {
      sContents += aText[iRow++] + '<br />';
    }
    $destination.html(sContents + aText[iIndex].substring(0, iTextPos) + "_");
    if (iTextPos++ === iArrLength) {
      iTextPos = 0;
      iIndex++;
      if (iIndex !== aText.length) {
        iArrLength = aText[iIndex].length;
        setTimeout(typewriter, 500);
      }
    } else {
      setTimeout(typewriter, iSpeed);
    }
  }
  typewriter()

}


function typeText(element, text, speed) {
  // typing logic
}


function initMobileMenu() {
  //     І яшчэ: я б не перарабляў твой checkbox-menu цалкам на JS. Твая цяперашняя структура ўжо выкарыстоўвае добры CSS-падыход; JavaScript тут лепш дадаць для інтэрактыўнасці, а не дубляваць тое, што CSS ужо ўмее.
}


function closeMobileMenu(menuToggle) {
  // close menu
}


function handleEscapeKey(event, menuToggle) {
  // Escape closes menu
}