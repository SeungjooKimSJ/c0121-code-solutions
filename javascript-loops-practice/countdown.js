/* exported countdown */
function countdown(number) {
  var countDown = [];
  var currentNumber = 0;
  while (currentNumber <= number) {
    countDown.unshift(currentNumber);
    currentNumber++;
  }
  return countDown;
}
