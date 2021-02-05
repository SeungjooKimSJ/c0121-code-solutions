var $trigger = document.querySelector('#trigger');
var $modalContent = document.querySelector('.modal-content');
var $no = document.querySelector('.no');
var $active = document.querySelector('.active');

$trigger.addEventListener('click', function (event) {
  $modalContent.className = 'modal-content ' + 'off';
  $active.className = 'active ' + 'off';
});

$no.addEventListener('click', function (event) {
  $modalContent.className = 'modal-content ' + 'on';
  $active.className = 'active ' + 'on';
});
