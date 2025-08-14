// // Problem:

// // Write a function deepMerge(obj1, obj2) that takes two objects as input and returns a new object that is the result of a deep merge. This means that if both objects have a key with an object as a value, the function should recursively merge those nested objects.
// const obj1 = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3,
//     },
//   },
// };

// const obj2 = {
//   a: 4,
//   b: {
//     c: 5,
//     f: 6,
//     d: {
//       g: 7,
//     },
//   },
//   h: 8,
// };

// function deepMerge(obj1, obj2) {
//   const newObj = { ...obj1 };

//   for (key in obj2) {
//     if (
//       newObj.hasOwnProperty(key) &&
//       typeof newObj[key] === 'object' &&
//       typeof newObj[key] !== null &&
//       !Array.isArray(newObj[key]) &&
//       typeof obj2[key] === 'object' &&
//       !Array.isArray(obj2[key])
//     ) {
//       newObj[key] = deepMerge(newObj[key], obj2[key]);
//     } else {
//       newObj[key] = obj2[key];
//     }
//   }
//   return newObj;
// }

// console.log(deepMerge(obj1, obj2));

// // deepMerge(obj1, obj2) should return:
// // {
// //   a: 4,
// //   b: {
// //     c: 5,
// //     d: {
// //       e: 3,
// //       g: 7
// //     },
// //     f: 6
// //   },
// //   h: 8
// // }

// // Problem 2: Basic Object Manipulation
// // Write a function getUserInfo(user) that takes a user object with firstName, lastName, and age properties. The function should return a new object with the properties fullName (a combination of firstName and lastName) and isAdult (a boolean indicating if the user's age is 18 or greater).
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 25,
// };

// function getUserInfo(user) {
//   if ('firstName' in user && 'lastName' in user && 'age' in user) {
//     return {
//       fullName: `${user.firstName} ${user.lastName}`,
//       isAdult: user.age > 18,
//     };
//   }
// }

// console.log(getUserInfo(user));
// // Should return { fullName: 'John Doe', isAdult: true }

// // Problem 2: Counting Properties
// // Write a function countProperties(obj) that takes an object as input and returns the number of its own enumerable properties. You should not count properties from the prototype chain.

// function countProperties(obj) {
//   return Object.keys(obj).length;
// }

// const myObject = {
//   a: 1,
//   b: 'hello',
//   c: true,
// };

// // countProperties(myObject);
// console.log(myObject.hasOwnProperty('a')); // Returns a boolean indicating whether the object has the specified property as its own property (not inherited from its prototype).
// console.log(Object.values(myObject)); //  Returns an array of a given object's own enumerable string-keyed property names. This is useful for iterating over an object's keys.
// console.log(Object.values(myObject)); // Similar to Object.keys(), but it returns an array of the object's property values.
// console.log(Object.entries(myObject)); // Returns an array of a given object's own enumerable string-keyed property [key, value] pairs. This is excellent for converting an object into an iterable format.
// const shallowCopyObj = Object.assign({}, myObject); // Copies all enumerable own properties from one or more source objects to a target object. It's a shallow copy, as we discussed earlier.
// console.log(shallowCopyObj);

// Object Manipulation
// Problem:

// You have an array of objects, and your task is to transform it into a single object where each key is the id of a user and the value is the user object itself.

// Write a function transformArrayToObject(users) that takes the users array and returns the transformed object.

// Here's the data you'll be working with:

// const users = [
//   { id: '1', name: 'Alice', active: true },
//   { id: '2', name: 'Bob', active: false },
//   { id: '3', name: 'Charlie', active: true },
// ];

// // Expected output:
// // {
// //   '1': { id: '1', name: 'Alice', active: true },
// //   '2': { id: '2', name: 'Bob', active: false },
// //   '3': { id: '3', name: 'Charlie', active: true }
// // }

// // function transformArrayToObject(obj) {
// //   const transformedObj = obj.map((item) => ({
// //     [item.id]: item,
// //   }));
// //   return transformedObj;
// // }
// // console.log(transformArrayToObject(users));

// function transformArrayToObject(obj) {
//   const transformedObj = obj.reduce((acc, cur) => {
//     console.log(acc);
//     acc[cur.id] = cur;
//     return acc;
//   }, {});
//   return transformedObj;
// }
// console.log(transformArrayToObject(users));
