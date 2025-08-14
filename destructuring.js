// Destructuring
// Problem:

// You have an object user with nested properties and an array fruits.

// Object Destructuring: Extract the name and city from the user object and assign them to variables with the same names.

// Object Destructuring with Renaming: Extract the city from the user object and assign it to a new variable called userCity.

// Nested Object Destructuring: Extract the street and zipcode from the nested address object.

// Array Destructuring: Extract the first fruit and the third fruit from the fruits array and assign them to variables firstFruit and thirdFruit.
// const user = {
//   name: 'Sujay',
//   age: 25,
//   address: {
//     street: '123 Main St',
//     city: 'New York',
//     zipcode: '10001',
//   },
// };

// const fruits = ['apple', 'banana', 'orange', 'grape'];

// const {
//   name,
//   address: { city: userCity },
// } = user;

// const { street, zipcode } = user.address;
// const [firstFruit, , thirdFruit] = fruits;

// console.log(firstFruit, thirdFruit);

// Spread Operator
// Problem:

// You have two arrays, arr1 and arr2, and an object person.

// Array Merging: Use the spread operator to create a new array combinedArr that contains all the elements from arr1 followed by all the elements from arr2.

// Object Merging: Use the spread operator to create a new object combinedPerson that merges the properties of person with a new property occupation: 'Developer'.

// Function Arguments: Write a function sum(a, b, c) that takes three arguments and returns their sum. Then, use the spread operator to call this function with an array of numbers nums.

// Here is the code you will be working with:

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const person = {
//   name: 'Sujay',
//   age: 25,
// };

// const nums = [1, 2, 3];

// const combinedArr = [...arr1, ...arr2];
// console.log(combinedArr);

// const combinedPerson = { ...person, occupation: 'Developer' };
// console.log(combinedPerson);

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(...nums));
