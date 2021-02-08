// var $typing = document.querySelector('.typing');
// var $quoteDisplay = document.querySelector('.quote-display');

// $quoteDisplay.textContent = 'grumpy wizards make toxic brew';
// var $h1Text = $quoteDisplay.textContent;

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
var $spanCharacter = $spanAll[0];

document.addEventListener('keydown', function ({ key }) {
  for (var j = 0; j < $quoteString.length; j++) {
    if (key === $spanCharacter.textContent) {
      $spanCharacter.className = 'done';
      $spanCharacter = $spanAll[++spanIndex];
    } else {
      $spanCharacter.className = 'cursor';
    }
  }
});

// var spanIndex = 0;
// var $spanAll = document.querySelectorAll('span');
// var $spanCharacter = $spanAll[0];

// document.addEventListener('keydown', function ({key}) {
//   for (var j = 0; j < $spanCharacter.length; j++) {
//     $spanCharacter[j].className = 'next';
//   }

//     if (key === $spanCharacter.textContent) {
//       $spanCharacter.className = 'done';
//       $spanCharacter = $spanAll[++spanIndex];
//     } else {
//       $spanCharacter.className = 'cursor';
//     }
// });
