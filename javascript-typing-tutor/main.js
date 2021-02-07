// var $typing = document.querySelector('.typing');
var $quoteDisplay = document.querySelector('.quote-display');

$quoteDisplay.textContent = 'grumpy wizards make toxic brew';
var $h1Text = $quoteDisplay.textContent;

var $characters = $h1Text.split('').map(function (word) {
  var $span = document.createElement('span');
  $span.textContent = word;
  $quoteDisplay.appendChild($span);

  return $span;
});

var cursorIndex = 0;
var $cursorCharacter = $characters[0];

document.addEventListener('keydown', function ({ key }) {
  if (key === $cursorCharacter.textContent) {
    $cursorCharacter.className = 'done';
    $cursorCharacter = $characters[++cursorIndex];
  } else {
    $cursorCharacter.className = 'cursor';
  }
});
