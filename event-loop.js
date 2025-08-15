// Event Loop
// Problem:

// Explain the concept of the JavaScript Event Loop in your own words.

// Then, determine the order of the console logs for the following code snippet and explain why.

// console.log('1. Start');

// setTimeout(() => {
//   console.log('2. Timeout');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('3. Promise');
// });

// console.log('4. End');

/* 
A. event loop in javascript checks for an empty call stack to push the asynchronaus code which are microtasks like promises followed by task queues like web apis. example: Whenever the js function sees an functione execution the function is added to the callstack for the execution and if there are any nested function it will be added on to the top and executed 1st before the outer function, basically these are all synconous code when all the functions are executed the callstack becomes empty and now event loop takes the charge and pushes the microtask queue followed by task queue so answer your question 1st console added to the stack and executed and removed from the call stack, later it reads the function settimeout which will be added to the task queue for later execution, then moves to the promise function since it is an asynchronous will be added to microtask queue for later execution and next console will be printed and removed. So now the call stack is empty so microtask queue takes the precedence followed by settimeout
*/
