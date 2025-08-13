// Write a function createCounter() that returns an inner function.
// The inner function, when called, should increment a counter and return its new value.
// The counter should be private to the createCounter() function.

// The core difference between the two code snippets is how the innerFunction is returned and called, which directly impacts the behavior of the counter variable due to closures.

function createCounter() {
  let counter = 0;
  function innerFunction() {
    counter++;
    return counter;
  }
  return innerFunction(); // The inner function is called and its result is returned
}

console.log(createCounter()); // Output: 1
console.log(createCounter()); // Output: 1
// In this case, createCounter returns the result of calling innerFunction immediately. Each time you call createCounter(), a new counter variable is initialized to 0. The innerFunction increments this new counter to 1 and then the value 1 is returned. The closure is created and immediately destroyed, so the state of counter is never preserved between calls to createCounter.

function createCounter() {
  let counter = 0;
  return function innerFunction() {
    // The inner function itself is returned
    counter++;
    return counter;
  };
}

const counter1 = createCounter(); // counter1 now holds a reference to innerFunction
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2

// Here, createCounter returns the innerFunction itself, not its result. The variable counter1 holds a reference to this returned function. Because of the closure, innerFunction retains access to the counter variable from its parent's scope. Each time you call counter1(), you're executing the same function, which increments the same counter variable, allowing its state to persist between calls. This is the classic use case for a closure.
