/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log(getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log(getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = ' ';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log(repeatWord('Hello', 10));

function logEachCharacter(string) {
  var i;
  for (i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
console.log(logEachCharacter('Seungjoo Kim'));

function doubleAll(numbers) {
  var i;
  var doubled = [];
  for (i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log(doubleAll([3, 4, 5]));

function getKeys(object) {
  var key;
  var keys = [];
  for (key in object) {
    keys.push(key);
  }
  return keys;
}
console.log(getKeys({ isbn: '123-4567890', title: 'I need a coffee' }));

function getValues(object) {
  var key;
  var values = [];
  for (key in object) {
    values.push(object[key]);
  }
  return values;
}
console.log(getValues({ isbn: '123-4567890', title: 'I need a coffee' }));
