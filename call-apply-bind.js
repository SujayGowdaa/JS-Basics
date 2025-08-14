// 1. Explain the primary difference between call() and apply(). A simple way to remember the distinction is often cited—can you describe it?
// A. A simple difference between call and apply method is that when you referece an object to the function you pass an object to the call method also if there are any other parameters which function is expecting. you pass those parameter separated by common in call method but in apply method as an array.

// 2. How is bind() fundamentally different from call() and apply()? What is the return value of bind()?
// A. fundamental difference a bind has from call and apply method is that bind as name suggests it bind the function to the object and its permanent and it should be stored in a variable and it returns a function to call upon. Whereas call and apply only adds the object reference to the function so can refer the object using this keyword.

// 3. Provide a simple code example where you have a function and two different objects, and use call(), apply(), and bind() to make the function's this keyword point to each of the objects in different scenarios.
// A. explain

// 4. Describe a practical use case for each of the three methods. For example, when would you specifically choose apply() over call(), and where would bind() be the most appropriate choice?
// A. explain

// 5. What would be the output of this code snippet? Explain your reasoning.
const person = {
  name: 'Alice',
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const anotherPerson = {
  name: 'Bob',
};

const greetBob = person.greet.bind(anotherPerson);
greetBob();

//A. the output of this function would be "Bob". The reason in the person object the this keyword references to its parent object but when the person.greet.bind is called and stored inside a variable the function gets binded inside the anotherPerson object now it references to its parent object which is anotherPerson

// Problem:

// You have an object person and a function greet that logs a greeting using this.

// 1. Use the call() method to invoke the greet function with the person object as its this context and pass the arguments 'Hello' and 'How are you?'.

// 2. Do the same thing, but this time use the apply() method.

// 3. Create a new function called greetPerson using bind() that permanently binds greet to the person object. Then, call greetPerson with the arguments 'Hi' and 'Nice to see you!'.

// const person = {
//   name: 'Sujay',
//   age: 25,
// };

// function greet(greeting, question) {
//   console.log(
//     `${greeting}, my name is ${this.name} and I am ${this.age} years old. ${question}`
//   );
// }

// greet.call(person, 'Hello', 'How are you?');
// greet.apply(person, ['Hello', 'How are you?']);

// const greetPerson = greet.bind(person, 'Hello', 'How are you?');

// greetPerson();

// Summary
// call, apply, and bind is used to control what the this keyword refers to. call and apply creates a connection between function and a object. The difference between then is how their additional arguments are written. The call we can write as normal but with apply we write them as an array. The bind is similar to call and apply but whereas the call and apply are for single case use and bind is for permanent use case.
