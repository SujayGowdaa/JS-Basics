/*
  The Task:

  Write a function called 'fizzBuzz' that takes one argument, 'n'.
  The function should log numbers from 1 to 'n'.

  However, there are a few conditions:

  1. If the number is divisible by 3, log 'Fizz'.
  2. If the number is divisible by 5, log 'Buzz'.
  3. If the number is divisible by both 3 and 5, log 'FizzBuzz'.
  4. Otherwise, log the number itself.
*/

/**
 * @param {number} n The number to count up to.
 */
// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if ((i % 3 === 0 && i % 5) === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(15);

/*
  Example:
  fizzBuzz(15) should produce the following output:

  1
  2
  Fizz
  4
  Buzz
  Fizz
  7
  8
  Fizz
  Buzz
  11
  Fizz
  13
  14
  FizzBuzz
*/

/*
  The Task:

  Write a function called 'isPalindrome' that takes a single argument, a string.
  The function should return 'true' if the string is a palindrome, and 'false' otherwise.

  For this challenge, you can assume the input will only contain letters and numbers, and you don't need to worry about case or spaces.

  Examples:
  - isPalindrome("madam") should return true
  - isPalindrome("racecar") should return true
  - isPalindrome("hello") should return false
*/

/**
 * @param {string} str The string to check.
 */
// function isPalindrome(str) {
//   // Your code goes here
//   const copy = str.trim().toLowerCase();
//   return copy.split('').reverse().join('') === str.trim().toLowerCase();
// }

// isPalindrome('madam'); // should return true
// isPalindrome('racecar'); // should return true
// isPalindrome('hello'); // should return false

/*
  Feel free to test your solution with different words!
*/

/*
  The Task:
  Write a function that takes a nested array and returns a new, flat array.

  Do NOT use the built-in Array.prototype.flat() method.

  Examples:
  - flattenArray([1, [2, 3], 4]) -> [1, 2, 3, 4]
  - flattenArray([1, [2, [3, 4], 5], 6]) -> [1, 2, 3, 4, 5, 6]
*/

/**
 * @param {Array} arr The nested array to flatten.
 * @returns {Array} A new, single-level array.
 */
// function deepFlattenArray(arr) {
//   let flattened = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       flattened = flattened.concat(deepFlattenArray(arr[i]));
//     } else {
//       flattened.push(arr[i]);
//     }
//   }

//   return flattened;
// }
// const nestedArr = [1, [2, [3, 4]], 5];
// console.log(deepFlattenArray(nestedArr));

/*
  Write a function called 'isPalindrome' that takes a single string as an argument.
  The function should return 'true' if the string is a palindrome, and 'false' otherwise.
  A palindrome is a word or phrase that reads the same forwards and backward.
  Your solution should be case-insensitive and ignore spaces and punctuation.

  For example:
  isPalindrome("racecar") should return true
  isPalindrome("A man, a plan, a canal: Panama") should return true
  isPalindrome("hello") should return false
*/

// function isPalindrome(str) {
//   // Your code goes here
//   const copy = str
//     .trim()
//     .toLowerCase()
//     .replace(/[^0-9A-Za-z]/g, '');

//   return (
//     copy.split('').reverse().join('') ===
//     str.replace(/[^0-9A-Za-z]/g, '').toLowerCase()
//   );
// }

// isPalindrome('racecar');
// isPalindrome('A man, a plan, a canal: Panama');
// isPalindrome('hello');

/*
  Write a function called 'countFrequencies' that takes an array of strings as an argument.
  The function should return an object where the keys are the unique strings from the array
  and the values are the number of times each string appeared.

  For example:
  countFrequencies(['apple', 'banana', 'apple', 'orange', 'banana', 'apple'])
  // should return { apple: 3, banana: 2, orange: 1 }

  countFrequencies(['red', 'blue', 'red', 'green', 'blue'])
  // should return { red: 2, blue: 2, green: 1 }
*/

// function countFrequencies(arr) {
//   const finalObj = {};

//   for (n of arr) {
//     if (finalObj.hasOwnProperty(n)) {
//       finalObj[n] = finalObj[n] + 1;
//     } else {
//       finalObj[n] = 1;
//     }
//   }

//   return finalObj;
// }

// console.log(countFrequencies(['red', 'blue', 'red', 'green', 'blue'])); // should return { red: 2, blue: 2, green: 1 }

/*
  Write a function called 'getCompletedTasks' that takes an array of task objects as an argument.
  Each task object has two properties: 'name' (a string) and 'isCompleted' (a boolean).
  The function should return a NEW array containing only the names of the tasks that are completed.

  For example:
  const tasks = [
    { name: 'Wash dishes', isCompleted: true },
    { name: 'Walk dog', isCompleted: false },
    { name: 'Buy groceries', isCompleted: true }
  ];

  getCompletedTasks(tasks)
  // should return ['Wash dishes', 'Buy groceries']
*/

// function getCompletedTasks(arr) {
//   const completed = arr
//     .filter((item) => item.isCompleted)
//     .map((item) => item.name);
//   return completed;
// }

// const tasks = [
//   { name: 'Wash dishes', isCompleted: true },
//   { name: 'Walk dog', isCompleted: false },
//   { name: 'Buy groceries', isCompleted: true },
// ];

// console.log(getCompletedTasks(tasks));

/*
  Write a function called 'findLargestNumber' that takes an array of numbers as an argument.
  The function should return the single largest number in the array.

  For example:
  findLargestNumber([10, 5, 20, 8, 15])
  // should return 20

  findLargestNumber([-5, -1, -10, -2])
  // should return -1
*/

// function findLargestNumber(arr) {
//   let largest = arr[0];

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }

//   return largest;
// }

// console.log(findLargestNumber([-1, -23]));

// function findSecondLargest(arr) {
//   let largest = arr[0];
//   let secondLargest = arr[1];

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] < largest) {
//       secondLargest = arr[i];
//     }
//   }

//   return secondLargest;
// }

// console.log(findSecondLargest([-5, -3, -10, -4, -2, -1]));
