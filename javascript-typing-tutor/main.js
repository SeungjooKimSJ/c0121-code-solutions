var $quoteString = 'grumpy wizards make toxic brew';
var $quoteDisplay = document.querySelector('.quote-display');

for (var i = 0; i < $quoteString.length; i++) {
  var $span = document.createElement('span');
  $span.textContent = $quoteString[i];
  $quoteDisplay.appendChild($span);
}

var spanIndex = 0;
var $spanAll = document.querySelectorAll('span');
var $spanCharacter = $spanAll[spanIndex];

document.addEventListener('keydown', function ({ key }) {

  if (key === $spanCharacter.textContent) {
    $spanCharacter.className = ('done + inactive');
    spanIndex++;
    $spanCharacter = $spanAll[spanIndex];
    $spanAll[spanIndex].className = 'underbar';
  } else {
    $spanCharacter.className = 'not-done';
  }
});