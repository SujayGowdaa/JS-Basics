// prototype in JS
// Problem:

// Explain what the prototype property is in JavaScript.

// Then, for the following code, explain what myObject.hasOwnProperty('name') returns and why, and what myObject.hasOwnProperty('toString') returns and why.

// A. protoype in js is whenever you create an object inside javascript the js attaches certain methods and properties to the object and this is called as a prototype. you can acces it using dot notation.
function Person(name) {
  this.name = name;
}

// here the function is basically an object in js. So you are using this inside a function which refers to the same object in context and you are setting a name property.

Person.prototype.sayHi = function () {
  console.log('Hello');
};

// here you adding a new property inside Person.prototype sayHi and assigning a function.

const myObject = new Person('Sujay');

// here you are inheriting a properties of Person and storing it inside myObject
