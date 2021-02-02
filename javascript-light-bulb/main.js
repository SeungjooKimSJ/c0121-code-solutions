var clickCircle = 0;

var $background = document.querySelector('.background');
var $circle = document.querySelector('.circle');

$circle.addEventListener('click', function (event) {
  clickCircle++;
  var onAndOff;

  if (clickCircle % 2 === 0) {
    onAndOff = 'on';
  } else {
    onAndOff = 'off';
  }
  $circle.className = 'circle ' + onAndOff;
  $background.className = 'background ' + onAndOff;
});
