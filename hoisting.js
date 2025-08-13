console.log(a); // prints undefined
var a = 'sujay';
console.log(a); // prints 'sujay'

// console.log(b); // reference error
let b = 'sanjay';
console.log(b); // prints 'sanjay'

/*
The reason why a declared using var doesnt throw an error and prints undefined and b throws an error is because js hoisting. all the variables and function declaration are moved to their top of the scope in js. the variable declare with var is hoisted and instialized with undefined. let, and const are hoisted to but not initialized with undefined so if you try to access them before initilization it will throw reference error.
*/
