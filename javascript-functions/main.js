function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log('convertMinutesToSeconds result:', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}

console.log('greet result:', greet('Seungjoo'));

function getArea(width, height) {
  return width * height;
}

console.log('getArea result:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

console.log('getFirstName result:', getFirstName({ firstName: 'Seungjoo', lastName: 'Kim' }));

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('getLastElement result:', getLastElement(['propane', 'and', 'propane', 'accessories']));
