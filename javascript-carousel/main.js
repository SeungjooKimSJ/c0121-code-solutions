var $pictures = document.querySelectorAll('.pictures');
var $images = document.querySelectorAll('.images');
var $dots = document.querySelectorAll('.dots');

var $arrowsLeft = document.querySelector('.arrows-left');
var $arrowsRight = document.querySelector('.arrows-right');

var currentPics = 0;

$arrowsLeft.addEventListener('click', function () {
  $pictures[currentPics].className = 'pictures inactive';
  currentPics = currentPics - 1;

  if (currentPics === -1) {
    currentPics = $pictures.length - 1;
  }
  $pictures[currentPics].className = 'pictures active';
});

$arrowsRight.addEventListener('click', function () {
  $pictures[currentPics].className = 'pictures inactive';
  currentPics = currentPics + 1;

  if (currentPics > 4) {
    currentPics = 0;
  }
  $pictures[currentPics].className = 'pictures active';
});

// $dots.addEventListener('click', function () {

// })

// event.target === $dots[i];
// logic !!!!!!!!!!



// function slideShow() {
//   currentPics++;
//   if (currentPics === 4) {
//     return currentPics;
//   }
// };

// var timerID = setInterval(slideShow, 3000);
