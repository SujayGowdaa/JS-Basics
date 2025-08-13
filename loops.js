// 1. The Array Reversal and Splicing Puzzle
// You are given an array and asked to perform a series of modifications. The goal is to track the array's state and length after each step.

// Starting code:
// let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter']; // 5

// planets.reverse(); // ['Jupiter', 'Mars', 'Earth', 'Venus', 'Mercury']
// planets.pop(); // ['Jupiter', 'Mars', 'Earth', 'Venus']
// planets.splice(1, 1, 'Saturn'); // ['Jupiter', 'Saturn', 'Earth', 'Venus']
// planets[5] = 'Neptune'; // ['Jupiter', 'Saturn', 'Earth', 'Venus',undefined,'Neptune']

// Your Task:
// What is the final value of the planets array? // ['Jupiter', 'Saturn', 'Earth', 'Venus',undefined,'Neptune']
// What is the final value of planets.length? // 6

// -----------------------------------------------------------

// 2. The Conditional Loop Sum
// You have an array of numbers, and you need to write a for...of loop to calculate their sum.
// The catch is that you must stop summing if you encounter the string 'stop'.

// Starting code:
// let mixedData = [10, 20, 'stop', 30, 40, 'stop', 50];
// let sum = 0;

// // Your code goes here
// for (n of mixedData) {
//   if (n === 'stop') {
//     return;
//   }
//   sum += n;
// }

// for (n of mixedData) {
//   console.log('this still runs');
// }

// Your Task:
// Write the code to calculate the sum based on the condition.
// What is the final value of sum?

// 3. The Object and Array Combination
// You have an array of objects, and you want to extract a specific property from each object into a new array.
// However, you should only include the property if it meets a certain condition.

// Starting code:

// const inventory = [
//   { name: 'Laptop', price: 1200 },
//   { name: 'Mouse', price: 25 },
//   { name: 'Keyboard', price: 75 },
//   { name: 'Monitor', price: 300 },
// ];
// let expensiveItems = [];

// // Your code goes here // using filter and map
// // inventory
// //   .filter((item) => item.price > 100)
// //   .map((item) => expensiveItems.push(item.name));

// // Your code goes here // using for of
// // for (n of inventory) {
// //   if (n.price > 100) {
// //     expensiveItems.push(n.name);
// //   }
// // }

// // Your code goes here // using for in
// for (n in inventory) {
//   const item = inventory[n];
//   if (item.price > 100) {
//     expensiveItems.push(item.name);
//   }
// }
// console.log(expensiveItems);
// // Your Task:
// // Write the code to create the expensiveItems array, containing the names of all items with a price greater than 100.
// // What is the final value of expensiveItems?

// 1. The Average of Positives
// You are given an array of numbers that contains both positive and negative values. Your task is to calculate the average of only the positive numbers.

// Starting code:
const numbers = [10, -5, 20, 15, -8, 25];
let sum = 0;
let count = 0;

// Your code goes here

let positiveIntegers = [];

for (n of numbers) {
  if (n > 0) {
    sum += n;
    count++;
    positiveIntegers.push(n);
  }
}
const average = sum / positiveIntegers.length;

// Your Task:
// 1. Write a loop to iterate through the `numbers` array.
// 2. Inside the loop, use a conditional to check if an item is a positive number.
// 3. If the number is positive, add it to `sum` and increment `count`.
// 4. After the loop, calculate the average (`sum / count`).
// What is the final value of the average?

// -----------------------------------------------------------

// 2. Anagram Checker
// Anagrams are two words that contain the same characters in the same quantity, but in a different order (e.g., "listen" and "silent"). Your task is to determine if two strings are anagrams of each other.

// Starting code:
// const str1 = 'listen';
// const str2 = 'silent';

// function areAnagrams(s1, s2) {
//   if (s1.length === s2.length) {
//     const word1 = s1.split('').sort().join('');
//     const word2 = s2.split('').sort().join('');
//     return word1 === word2;
//   } else {
//     return false;
//   }
// }
// console.log(areAnagrams(str1, str2));
// // Your Task:
// // Write the `areAnagrams` function. The function should return `true` if the two strings are anagrams and `false` otherwise.

// -----------------------------------------------------------

// 3. Merging and Sorting Unique Elements
// You are given two arrays. Your task is to merge them into a single array, remove any duplicate elements, and then sort the final array in ascending order.

// Starting code:
const array1 = [3, 1, 4, 1, 5];
const array2 = [9, 2, 6, 5, 3];

// const mergedArray = [...array1, ...array2];
// let finalArray = [];

// for (n of mergedArray) {
//   if (!finalArray.includes(n)) {
//     finalArray.push(n);
//   }
// }

// const sortArray = finalArray.sort();

// another way
// const newSet = [...new Set([...array1, ...array2])].sort();

// Your Task:
// Write the code to create a single, sorted array containing only unique numbers from both arrays.
// What is the final value of the resulting array?

// const str = 'sujay';
// const str2 = 'asisa';

// function isPalindrome(data) {
//   const rightOrder = data.toLowerCase();
//   const reversedOrder = data.toLowerCase().split('').reverse().join('');
//   return rightOrder === reversedOrder ? true : false;
// }

// console.log(isPalindrome(str2));

// const nums = [1, 3, 2, 4, 3, 1, 5];
// const newArray = [...new Set([...nums])];
// console.log(newArray);
// const user = {
//   name: 'Sujay',
//   greet: function () {
//     console.log(`Hello, ${this.name}`);
//     setTimeout(function () {
//       console.log(`Inside timeout: ${this.name}`);
//     }, 500);
//   },
// };
// user.greet();

function test() {
  if (true) {
    var y = 20;
    const z = 30;
  }
  console.log(y); // ❌ ReferenceError
}
test();
