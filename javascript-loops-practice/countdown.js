/* exported countdown */
function countdown(number) {
  var arr = [];
  var currentNumber = 0;
  while (currentNumber <= number) {
    arr.unshift(currentNumber);
    currentNumber++;
  }
  return arr;
}
