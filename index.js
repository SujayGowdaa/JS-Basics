// // JavaScript Types
// console.log(typeof 'a'); // string
// console.log(typeof 1); // number
// console.log(typeof NaN); // number
// console.log(typeof {}); // object
// console.log(typeof []); // object
// console.log(typeof null); // object
// console.log(typeof true, typeof false, typeof 0); // boolean, boolean, number
// console.log(typeof undefined); // undefined

// // JS Coercion
// console.log(Boolean('0')); // true
// console.log(Boolean(true)); // true
// console.log(Boolean([])); // true
// console.log(Boolean({})); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(null)); // false
// console.log('20' + 10 + 20); // 201020
// console.log(10 + 20 + '20'); // 3020
// console.log(20 + '20'); // 2020
// console.log('20' + 20); // 2020
// console.log([] + [] + []); // ''
// console.log([] + {} + []); // [obj Obj]
// console.log({} + [] + []); // [obj Obj]
// console.log(true + true); // 2
// console.log(true - -5); // minus minus becomes plus so 6
// console.log(true - 5); // -4
// console.log('5' - 3); // 2
// console.log(3 - '5'); // -2
// console.log([12, 30] + ['20', '20']); // [12,3020,20]
console.log(Boolean(0));

// // JS Equality Operator
// Loose Equality (==)
// console.log(5 == '5'); // true (The string "5" is coerced to the number 5)
// console.log(true == 1); // true (The number 1 is coerced to the boolean true)
// console.log(null == undefined); // true (A special case in the JavaScript spec)
// console.log(NaN == NaN); // false
// console.log(NaN == []); // false
// console.log(NaN == {}); // false
// console.log(NaN == undefined); // false

// // Strict Equality (===)
// console.log(5 === '5'); // false (Different types: number vs. string)
// console.log(true === 1); // false (Different types: boolean vs. number)
// console.log(null === undefined); // false (Different types: null vs. undefined)
// console.log(false == null);
// let d = '10' - 2; // d is 20 (string "10" is coerced to number 10)
// let e = 'Hello' / 2; // e is NaN ("Hello" cannot be coerced to a number)
// console.log(d);
