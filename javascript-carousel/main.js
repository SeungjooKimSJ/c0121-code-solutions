var $pictures = document.querySelectorAll('.pictures');
// var $dots = document.querySelectorAll('.dots');

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

function autoSlide() {
  $pictures[currentPics].className = 'pictures inactive';
  currentPics = currentPics + 1;

  if (currentPics > 4) {
    currentPics = 0;
  }
  $pictures[currentPics].className = 'pictures active';
}

setInterval(autoSlide, 3000);

// $dots.addEventListener('click', function () {
// event.target === $dots[i];
// and then logic !!!!!!!!!!
// })
