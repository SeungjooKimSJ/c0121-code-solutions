/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
// console.log(isUnderFive(4));
// console.log(isUnderFive(10));

function isEven(number) {
  if ((number % 2) === 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(isEven(4));
// console.log(isEven(5));

function startsWithJ(string) {
  if (string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}
// console.log(startsWithJ('Javascript'));
// console.log(startsWithJ('CSS'));

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
// var bart = {
//   name: 'Bartholomew JoJo Simpson',
//   age: 10
// };
// console.log(isOldEnoughToDrink(bart));

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
// var homer = {
//   name: 'Homer Jay Simpson',
//   age: 39
// };
// console.log(isOldEnoughToDrive(homer));

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 21 && person.age >= 16) {
    return false;
  } else {
    return false;
  }
}
// var homer = {
//   name: 'Homer Jay Simpson',
//   age: 39
// };
// console.log(isOldEnoughToDrinkAndDrive(homer));

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else if (pH < 0 || pH > 14) {
    return 'invalid pH level';
  }
}
// console.log(categorizeAcidity(-1));
// console.log(categorizeAcidity(5));
// console.log(categorizeAcidity(7));
// console.log(categorizeAcidity(10));

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
// console.log(introduceWarnerBro('yakko'));
// console.log(introduceWarnerBro('wakko'));
// console.log(introduceWarnerBro('dot'));
// console.log(introduceWarnerBro('SJ'));
