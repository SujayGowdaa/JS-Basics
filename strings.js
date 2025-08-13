// Problem:

// Write a function isPalindrome(str) that takes a string as input and returns true if the string is a palindrome, and false otherwise. A palindrome is a word, phrase, or sequence that reads the same backward as forward. For this problem, you should ignore casing and non-alphanumeric characters.

// For example:

// isPalindrome("A man, a plan, a canal: Panama") should return true.

// isPalindrome("race a car") should return false.

// function isPalindrome(str) {
//   const strCopy = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//   const transformed = str
//     .replace(/[^a-zA-Z0-9]/g, '')
//     .toLowerCase()
//     .split('')
//     .reverse()
//     .join('');

//   return strCopy === transformed;
// }

// const string = 'sujay';
// const string1 = 'A man, a plan, a canal: Panama';

// console.log(isPalindrome(string));
