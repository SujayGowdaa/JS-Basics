/*
  You are given an object 'person' with a 'name' and a 'greet' method.
  The 'greet' method should log a message including the person's name.

  1. Write the 'person' object with a traditional function for the 'greet' method.
  2. Then, show what happens if you try to use 'setTimeout' inside this method to log the greeting after a delay.
     Explain why the 'this' context is lost.
  3. Finally, fix the issue in the 'setTimeout' example using an arrow function.
     Explain why the arrow function solves the problem.
*/

// my ans: the reason why greetWithArrow logs correctly and greet inside setTimeout does not is because the this keyword will point to its parent object where the function is declared. But in the setTImeout the this keyword point to the window obj

// const person = {
//   name: 'Sujay',
//   greet: function () {
//     // Part 1: Write the greeting message here
//     // ...
//     console.log(`Hello ${this.name}`);
//     // Part 2: Demonstrate the 'this' issue with setTimeout
//     setTimeout(function () {
//       // Log the greeting here
//       // ...
//       console.log(`Hello ${this.name}`);
//     }, 1000);
//   },

//   greetWithArrow: function () {
//     // Part 3: Fix the issue with an arrow function
//     setTimeout(() => {
//       // Log the greeting here
//       // ...
//       console.log(`Hello ${this.name}`);
//     }, 1000);
//   },
// };

// // You can call the methods to test your solutions
// // person.greet();
// person.greetWithArrow();
