var $timeoutH1 = document.querySelector('h1');

function toHelloThere() {
  $timeoutH1.textContent = 'Hello There';
}

setTimeout(toHelloThere, 2000);
