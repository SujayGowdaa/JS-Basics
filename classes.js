// class User {
//   constructor(name, password) {
//     this.name = name;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password + Math.random()} `;
//   }
// }

// const newUser = new User('sujay', 'sujay123');

// console.log(newUser.encryptPassword());

// Behind the scenes

// If you were to create 100 instances of User2, you would have 100 copies of the encryptPassword function in memory. This is inefficient and wasteful.
// function User2(name, password) {
//   this.name = name;
//   this.password = password;
//   this.encryptPassword = () => {
//     return `${this.password + Math.random()} `;
//   };
// }

// const newUser2 = new User2('sanjay', 'sanjay123');
// console.log(newUser2.encryptPassword());

// When you create a newUser3 object, it does not have its own encryptPassword method. Instead, when you call newUser3.encryptPassword(), the JavaScript engine looks for that method on the newUser3 object. It doesn't find it, so it looks up the prototype chain to the User3.prototype object, where it finds a single, shared copy of the method.  All instances of User3 share this one method, which is much more memory-efficient.
// function User3(name, password) {
//   this.name = name;
//   this.password = password;
// }
// User3.prototype.encryptPassword = function () {
//   return `${this.password + Math.random()} `;
// };

// const newUser3 = new User3('ajay', 'ajay123');
// console.log(newUser3);

// JavaScript Class & Inheritance
// Problem:

// Using the modern class syntax, rewrite the Animal and Dog objects from the previous problem to use class-based inheritance.

// A Dog object should have its own name and breed properties but should also inherit the sayName() method from the Animal class.

// Your task is to:

// Create an Animal class with a constructor and a sayName() method.

// Create a Dog class that extends the Animal class.

// Implement the Dog class's constructor and a bark() method. Remember to call the parent constructor using super().

// Create a new Dog instance and demonstrate that it can access both its own bark() method and the inherited sayName() method.

// Here's the code you'll be working with:

// Write the Animal class
// class Animal {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//   }

//   sayName() {
//     console.log(this.name);
//   }
// }

// // Write the Dog class
// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name, breed);
//   }

//   bark() {
//     console.log('barking');
//   }
// }

// // Create a new Dog instance and test
// const dog = new Dog('sweetie', 'pug');

// console.log(dog);

// 1. Can you explain the main difference between a class and a prototype? How are they related in JavaScript?
// A. explain

// 2. What is a static method? How do you create one, and why would you use it?
// A. static method are methods created using static keyword in classes. We use static methods to limit the exposure just to the class where it is being initilized. any instance created using this class will not have access to this method.

// 3. Explain the role of the super keyword in class inheritance. Provide a simple code example.
// A. super in classes used to call the constructor of the parent class to initialize values. fo eg

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

const dog = new Dog('sweetie', 'pug');
console.log(dog);

// 4. How would you create a new class User that inherits from an existing class Person? What do you need to do to make sure the Person class's constructor is called correctly?
// A. to create an User class from an existing class Person, we need to use extend keyword before the Parent class name for example:
class Person {}
class User extends Person {}

// in order to call persons class constructor correcty we need to call super() method inside the constructor of an instance.

// 5. What is method overriding? Create a simple class example that demonstrates it.
// A. Method overriding is a term used in js. We use this term when the instance overides a method of a Parent class when we declare a method in instance with the same name which parent class has.

class Person {
  thisIsAMethod() {
    console.log('1');
  }
}
class User extends Person {
  thisIsAMethod() {
    console.log('2');
  }
}

const sujay = new User();
console.log(sujay.thisIsAMethod());
