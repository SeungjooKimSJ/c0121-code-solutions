var num1 = 2;
var num2 = 10;
var num3 = 24;
var maximumValue = Math.max(num1, num2, num3);

console.log('value of maximumValue:', maximumValue);

var heroes = ['Ironman', 'Dr.Stranger', 'Spiderman', 'Groot'];
// var randomNumber = Math.random();
var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('value of randomIndex', randomIndex);

var randomHero = heroes[randomIndex];

console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'JAVASCRIPT & JQUERY, interactive front-end web development',
    author: 'Jon Duckett'
  },
  {
    title: 'HTML & CSS, design and build websites',
    author: 'Jon Duckett'
  },
  {
    title: 'PHP & MYSQL, server-side web development',
    author: 'Jon Duckett'
  }
];

var lastBook = library.pop();

console.log('value of lastBook:', lastBook);

var firstBook = library.shift();

console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('value of library:', library);

var fullName = 'Seungjoo Kim';
var firstAndLastName = fullName.split(' ');

console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('value of sayMyName:', sayMyName);
