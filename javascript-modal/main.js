var $trigger = document.querySelector('.trigger');
var $modalContent = document.querySelector('.modal-content');
var $no = document.querySelector('.no');

$trigger.addEventListener('click', function (event) {
  $modalContent.className = 'modal-content ' + 'on';
  // $modalContent.className = 'modal-content ' + 'off';
});

$no.addEventListener('click', function (event) {
  $modalContent.className = 'modal-content ' + 'on';
});

// var $modalOff = document.querySelector('.modal-content.off');

// var clickBtn = 0;

// $trigger.addEventListener('click', function (event) {
//   clickBtn++;
//   var popUp;

//   if (clickBtn % 2 === 0) {
//     popUp = 'off';
//   } else {
//     popUp = 'on';
//   }
//   $modalContent.className = 'modal-content ' + popUp;
// });
