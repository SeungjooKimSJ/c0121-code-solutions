// var $typing = document.querySelector('.typing');
// var $quoteDisplay = document.querySelector('.quote-display');

// var $h1Text = 'grumpy wizards make toxic brew';

// var $characters = $h1Text.split('').map(function (word) {
//   var $span = document.createElement('span');
//   $span.textContent = word;
//   $quoteDisplay.appendChild($span);

//   return $span;
// });

// var cursorIndex = 0;
// var $cursorCharacter = $characters[0];

// document.addEventListener('keydown', function ({ key }) {
//   if (key === $cursorCharacter.textContent) {
//     $cursorCharacter.className = 'done';
//     $cursorCharacter = $characters[++cursorIndex];
//   } else {
//     $cursorCharacter.className = 'cursor';
//   }
// });

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
    $spanCharacter.className = 'done';
    spanIndex++;
    $spanCharacter = $spanAll[spanIndex];
  } else {
    $spanCharacter.className = 'cursor';
  }
});
