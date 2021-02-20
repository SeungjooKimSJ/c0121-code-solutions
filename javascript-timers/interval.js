var $intervalH1 = document.querySelector('h1');
var $numberH1 = 4;

function countDown() {
  $numberH1--;
  if ($numberH1 > 0) {
    $intervalH1.textContent = $numberH1;
  } else {
    $intervalH1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countDown);
  }
}

setInterval(countDown, 1000);
