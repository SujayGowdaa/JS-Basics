// For our next topic, let's focus on Arrays.

// Problem:

// Write a function removeDuplicates(arr) that takes an array of numbers as input and returns a new array with all duplicate values removed. The order of the elements in the output array should be the same as the first occurrence of each element in the input array.

// For example:
// removeDuplicates([1, 2, 3, 2, 4, 1, 5]) should return [1, 2, 3, 4, 5].

// function removeDuplicates(arr) {
//   const newArray = [...new Set(arr)];
//   return newArray;
// }

// const array = [1, 2, 3, 2, 4, 1, 5];
// console.log(removeDuplicates(array));

// function removeDuplicates(arr) {
//   let newArray = [];
//   for (n of arr) {
//     if (!newArray.includes(n)) {
//       newArray.push(n);
//     }
//   }
//   return newArray;
// }

// const array = [1, 2, 3, 2, 4, 1, 5];
// console.log(removeDuplicates(array));
