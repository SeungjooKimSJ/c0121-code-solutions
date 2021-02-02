var clickedBtnTimes = 0;

var $hotBtn = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotBtn.addEventListener('click', function (event) {
  clickedBtnTimes++;
  var timesBtn;

  if (clickedBtnTimes < 4) {
    timesBtn = 'cold';
  } else if (clickedBtnTimes < 7) {
    timesBtn = 'cool';
  } else if (clickedBtnTimes < 10) {
    timesBtn = 'tepid';
  } else if (clickedBtnTimes < 13) {
    timesBtn = 'warm';
  } else if (clickedBtnTimes < 16) {
    timesBtn = 'hot';
  } else {
    timesBtn = 'nuclear';
  }
  $hotBtn.className = 'hot-button ' + timesBtn;
  $clickCount.textContent = 'clicks: ' + clickedBtnTimes;
});
