// Problem 1:
// Create a function delayedMessage(message, delay) that:
// 1. Returns a promise.
// 2. Resolves after `delay` milliseconds.
// 3. When it resolves, it should log the `message` to the console.

// Example:
// delayedMessage("Hello after 2 seconds", 2000)
//   .then(() => console.log("Done!"));

// Expected Output:
// Hello after 2 seconds
// Done!

// Your code here:

// function delayedMessage(message, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(message);
//       resolve(message);
//     }, delay);
//   });
// }

// delayedMessage('Hello after 2 seconds', 2000).then(() => console.log('Done!'));

// Problem 2:
// Create a function randomDelayMessage(message) that:
// 1. Returns a promise.
// 2. Waits between 1 and 3 seconds (random).
// 3. 50% chance to resolve (log the message), 50% chance to reject (with an error message).
// 4. Use .then() and .catch() to handle success and failure.

// Example:
// randomDelayMessage("Task finished")
//   .then(() => console.log("✅ Success"))
//   .catch(err => console.log("❌ Failed:", err));

// Expected Output (random):
// (after 2.3 seconds) Task finished
// ✅ Success

// OR

// (after 1.4 seconds) ❌ Failed: Something went wrong

// Your code here:

// function randomDelayMessage(message) {
//   return new Promise((resolve, reject) => {
//     const startTime = Date.now();
//     const delay = Math.floor(Math.random() * 3 * 1000); // 1–3 seconds

//     setTimeout(() => {
//       const elapsedSeconds = ((Date.now() - startTime) / 1000).toFixed(1);

//       if (Math.random() < 0.5) {
//         resolve(`(after ${elapsedSeconds} seconds) ${message}`);
//       } else {
//         reject(
//           `(after ${elapsedSeconds} seconds) Failed: Something went wrong`
//         );
//       }
//     }, delay);
//   });
// }

// randomDelayMessage('Task finished')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Problem 3:
// Create two functions:

// 1. stepOne():
//    - Returns a promise
//    - Resolves after 1 second with the value: "Step One Complete"

// 2. stepTwo(prevMessage):
//    - Returns a promise
//    - Resolves after 2 seconds with: "<prevMessage> -> Step Two Complete"

// Chain them so that:
// - stepTwo runs only if stepOne succeeds
// - At the end, log the final message
// - If any step fails, catch the error and log it

// Example expected output:
// (after 3 seconds total)
// Step One Complete -> Step Two Complete

// Your code here:

// function stepOne() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Step One Complete');
//     }, 1000);
//   });
// }

// function stepTwo(prevMessage) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${prevMessage} -> Step Two Complete`);
//     }, 2000);
//   });
// }

// stepOne()
//   .then((result1) => stepTwo(result1))
//   .then((finalResult) => console.log(finalResult))
//   .catch((err) => console.error('Error:', err));

// Problem 4:
// You have three async tasks:
// 1. taskA -> resolves after 1 second with "A done"
// 2. taskB -> resolves after 2 seconds with "B done"
// 3. taskC -> resolves after 3 seconds with "C done"

// Create these three as functions returning promises.
// Then use Promise.all so that:
// - They all start at the same time
// - You wait for all of them to finish
// - You log an array of results in the order [A done, B done, C done]

// Example expected output (after ~3 seconds):
// ["A done", "B done", "C done"]

// If any task fails, log "Error: <message>" without throwing.

// Your code here:

// function taskA() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('A done');
//     }, 1000);
//   });
// }
// function taskB() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('B done');
//     }, 2000);
//   });
// }
// function taskC() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('C done');
//       // reject('C Failed'); // to test fail case
//     }, 3000);
//   });
// }

// const data = await Promise.all([taskA(), taskB(), taskC()])
//   .then((data) => data)
//   .catch((err) => console.log(err));
// console.log(data, 'data outside');

// Problem 5:
// You have three API simulation functions:

// 1. getUser -> resolves after 1s with "User data"
// 2. getPosts -> rejects after 2s with "Posts failed"
// 3. getComments -> resolves after 3s with "Comments data"

// Use Promise.allSettled so that:
// - All three run in parallel
// - You log the status and value/reason of each result
// - Example output after ~3 seconds:

// [
//   { status: "fulfilled", value: "User data" },
//   { status: "rejected", reason: "Posts failed" },
//   { status: "fulfilled", value: "Comments data" }
// ]

// Your code here:

// function getUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('User Data');
//     }, 1000);
//   });
// }
// function getPosts() {
//   return new Promise((_, reject) => {
//     setTimeout(() => {
//       reject('Posts failed');
//     }, 2000);
//   });
// }
// function getComments() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Comments Data');
//     }, 3000);
//   });
// }

// Promise.allSettled([getUser(), getPosts(), getComments()]).then((data) =>
//   console.log(data)
// );

// function apiCall() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Resolved');
//     }, Math.ceil(Math.random() * 3) * 1000);

//     setTimeout(() => reject('Network error'), 2000);
//   });
// }
// apiCall()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ASYNC AWAIT

// Problem 1: Basic async/await
// Create an async function called 'greetWithDelay' that:
// 1. Takes a 'name' as a parameter.
// 2. Uses a 'delay' function (provided below) to wait for 1 second.
// 3. After the delay, it should log a greeting to the console like "Hello, [name]!"

// The 'delay' function is already written for you.

// Your code here:
// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function greetWithDelay(name) {
//   // ... your code here
// }

// greetWithDelay("Alice");
// Expected output (after 1 second):
// Hello, Alice!

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function greetWithDelay(name) {
//   await delay(1000);
//   console.log(`Hello ${name}`);
// }

// greetWithDelay('Alice');

// Problem 2: Sequential Operations with async/await

// Create an async function called 'processData' that:
// 1. Calls 'fetchUser' (provided below) and stores the result.
// 2. Uses the user ID from the previous step to call 'fetchPosts' (provided below).
// 3. Finally, it should log the fetched posts to the console.
// 4. Use a try...catch block to handle errors from either fetch function. If an error occurs, log the error message.

// Your code here:
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true; // Set to 'false' to test the catch block
//       if (success) {
//         resolve({ id: 1, name: 'John Doe' });
//       } else {
//         reject('Failed to fetch user.');
//       }
//     }, 1000);
//   });
// }

// function fetchPosts(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId) {
//         resolve([`Post 1 by user ${userId}`, `Post 2 by user ${userId}`]);
//       } else {
//         reject('User ID is missing.');
//       }
//     }, 1500);
//   });
// }

// async function processData() {
//   // ... your code here
// }

// processData();
// Expected output (after 2.5 seconds):
// [ 'Post 1 by user 1', 'Post 2 by user 1' ]

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true; // Set to 'false' to test the catch block
//       if (success) {
//         resolve({ id: 1, name: 'John Doe' });
//       } else {
//         reject('Failed to fetch user.');
//       }
//     }, 1000);
//   });
// }

// function fetchPosts(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userId) {
//         resolve([`Post 1 by user ${userId}`, `Post 2 by user ${userId}`]);
//       } else {
//         reject('User ID is missing.');
//       }
//     }, 1500);
//   });
// }

// async function processData() {
//   try {
//     const user = await fetchUser();
//     const posts = await fetchPosts(user.id);
//     console.log(posts);
//   } catch (err) {
//     console.log('Error:', err);
//   }
// }

// processData();

// Problem 3: Parallel Execution with Promise.all and async/await
// Create an async function called 'fetchAllUserData' that:
// 1. Calls three promise-based functions in parallel: 'fetchPhotos', 'fetchFriends', and 'fetchSettings'.
// 2. Use Promise.all to wait for all three promises to resolve.
// 3. The function should return an object containing the results from all three fetches, with keys 'photos', 'friends', and 'settings'.
// 4. Use a try...catch block to gracefully handle a rejection from any of the promises.

// Your code here:
// function fetchPhotos() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve(['photo1.jpg', 'photo2.jpg']), 2000)
//   );
// }

// function fetchFriends() {
//   return new Promise((resolve, reject) =>
//     // reject('reason unknown')
//     setTimeout(() => resolve(['friendA', 'friendB']), 1500)
//   );
// }

// function fetchSettings() {
//   return new Promise((resolve, reject) => {
//     const success = true; // Set to 'false' to test the catch block
//     setTimeout(() => {
//       if (success) {
//         resolve({ theme: 'dark', notifications: true });
//       } else {
//         reject('Failed to fetch settings.');
//       }
//     }, 1000);
//   });
// }

// async function fetchAllUserData() {
//   try {
//     const data = await Promise.all([
//       fetchPhotos(),
//       fetchFriends(),
//       fetchSettings(),
//     ]);
//     console.log(data);
//   } catch (err) {
//     console.log('Error:', err);
//   }
// }

// fetchAllUserData()
//   .then((data) => console.log(data))
//   .catch((error) => console.error('Error:', error));
// Problem: Asynchronous JavaScript (Promises, async/await)

// 1. A promise that simulates fetching data from an API
// function myPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Change this to reject('Network error') to test the catch block
//       // resolve('data from API');
//       reject('Network Error');
//     }, 2000);
//   });
// }

// // 2. Write an asynchronous function 'fetchDataAndProcess()' that:
// //    a. Uses async/await to handle the promise.
// //    b. Waits for the data, then logs the processed data (e.g., in uppercase).
// //    c. Includes a try...catch block to handle errors.

// async function fetchDataAndProcess() {
//   // Your code here
//   try {
//     const data = await myPromise();
//     console.log(data.toUpperCase());
//   } catch (err) {
//     console.log(err.toUpperCase());
//   }
// }

// // 3. Call the function
// fetchDataAndProcess();
