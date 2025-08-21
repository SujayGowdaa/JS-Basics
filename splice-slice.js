// slice - Slice is a method in JavaScript that creates a shallow copy of a portion of an array into a new array. The original array is not modified. You specify the portion by providing a start index and an end index. The method includes the element at the start index but excludes the element at the end index.
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const citrus = fruits.slice(2, 4);

console.log(citrus); // citrus will be ['orange', 'grape']
console.log(fruits); // fruits remains ['apple', 'banana', 'orange', 'grape', 'kiwi']

console.log(fruits.slice(1)); // When you pass a single value the value at the index will be ignore and return all other elements.

// splice - Splice is a method in JavaScript that changes the contents of an array by removing or replacing existing elements and/or adding new elements. It modifies the original array directly. You can use it to add, remove, or replace elements at a specific position.

// ere's an example of using splice to remove elements:

const fruits2 = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const removedFruits = fruits.splice(1, 2);

// fruits is now ['apple', 'grape', 'kiwi']
// removedFruits is ['banana', 'orange']

// ere's an example of using splice to add  elements:
const fruits3 = ['apple', 'kiwi'];
fruits3.splice(1, 0, 'banana', 'orange');

// fruits is now ['apple', 'banana', 'orange', 'kiwi']
console.log(obj === obj);
