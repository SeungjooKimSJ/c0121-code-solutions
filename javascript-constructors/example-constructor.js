function ExampleConstructor() {

}

console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var newExample = new ExampleConstructor();

console.log('value of newExample:', newExample);
console.log('typeof newExample:', typeof newExample);

console.log('value of newExample.__proto__:', newExample.__proto__);
console.log('typeof newExample.__proto__:', typeof newExample.__proto__);

console.log('newExample instanceof ExampleConstructor:', newExample instanceof ExampleConstructor);
