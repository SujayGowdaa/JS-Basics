// forEach
// const fruits = ['apple', 'banana', 'cherry'];

// fruits.forEach((fruit) => {
//   console.log(`I love to eat a ${fruit}.`); // Example: Displaying a list of products on a webpage.
// });

// // map
// const numbers = [1, 2, 3];
// const squaredNumbers = numbers.map((number) => number * number); // Converting an array of user objects to an array of just their names.

// console.log(squaredNumbers); // Output: [4, 9, 16]
// console.log(numbers); // Output: [1, 2, 3] (The original array is unchanged)

// // filter
// const products = [
//   { name: 'Laptop', price: 1200 },
//   { name: 'Mouse', price: 25 },
//   { name: 'Keyboard', price: 75 },
//   { name: 'Monitor', price: 300 },
// ];

// const expensiveProducts = products.filter((product) => product.price > 100);
// console.log(expensiveProducts);

// // reduce
// const cartItems = [
//   { item: 'Milk', price: 2.5 },
//   { item: 'Bread', price: 3.0 },
//   { item: 'Eggs', price: 4.5 },
// ];

// const totalCost = cartItems.reduce((accumulator, currentItem) => {
//   return accumulator + currentItem.price;
// }, 0); // The 0 is the initial value of the accumulator.
// console.log(totalCost); // Output: 10

// // find | findIndex
// const users = [
//   { id: 101, name: 'Alice' },
//   { id: 102, name: 'Bob' },
//   { id: 103, name: 'Charlie' },
//   { id: 104, name: 'Bob' },
// ];

// // find() example
// const bob = users.find((user) => user.name === 'Bob');
// console.log(bob); // Output: { id: 102, name: 'Bob' }

// // findIndex() example
// const charlieIndex = users.findIndex((user) => user.id === 104);
// console.log(charlieIndex); // Output: 2

// // some | every
// const temperatures = [22, 25, 19, 30, 28];

// // some() example: Is at least one temperature above 30?
// const isItHot = temperatures.some((temp) => temp > 30);
// console.log(isItHot); // Output: false

// // every() example: Are all temperatures above 18?
// const isItWarm = temperatures.every((temp) => temp > 18);
// console.log(isItWarm); // Output: true

// // sort
// const items = [40, 1, 5, 200];
// items.sort((a, b) => a - b); // Sorts numbers in ascending order

// console.log(items); // Output: [1, 5, 40, 200]

// Problem 1
// You have an array of student objects, and each student object contains their name, a list of grades, and a graduated status. Your task is to perform a series of operations on this array to get some specific data.

// Your Tasks
// Find the Top Students:
// Create a new array containing the names of all students who have a graduated status of true and an average grade of 90 or higher.

// Calculate the Average Grade for All Students:
// Calculate the overall average grade for all students in the students array, including both graduated and non-graduated students.

// Check for Failing Students:
// Determine if there is at least one student with a grade lower than 70 in their grades array. Return a boolean (true or false).

// const students = [
//   { name: 'Alice', grades: [90, 85, 92], graduated: true },
//   { name: 'Bob', grades: [78, 80, 75], graduated: false },
//   { name: 'Charlie', grades: [95, 88, 91], graduated: true },
//   { name: 'Diana', grades: [65, 70, 72], graduated: false },
//   { name: 'Eve', grades: [98, 95, 99], graduated: true },
//   { name: 'Frank', grades: [80, 85, 82], graduated: false },
// ];

// const topStudents = students.filter((item) => {
//   if (!item.graduated) {
//     return false;
//   }

//   const sumOfgrades = item.grades.reduce((cur, acc) => {
//     return cur + acc;
//   }, 0);

//   const averageGrade = sumOfgrades / item.grades.length;
//   return averageGrade >= 90;
// });
// console.log(topStudents);

// const averageOfStudents = students.map((item) => {
//   const sum = item.grades.reduce((curr, acc) => {
//     return curr + acc;
//   }, 0);

//   const average = sum / item.grades.length;
//   return { ...item, average: average };
// });
// console.log(averageOfStudents);

// const failingStudents = averageOfStudents.some((item) => item.average <= 70);
// console.log(failingStudents);
