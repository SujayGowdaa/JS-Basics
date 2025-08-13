// forEach
// const fruits = ['apple', 'banana', 'cherry'];

// fruits.forEach((fruit) => {
//   console.log(`I love to eat a ${fruit}.`); // Example: Displaying a list of products on a webpage.
// });

// // map
// const numbers = [1, 2, 3];
// const squaredNumbers = numbers.map((number) => number * number); // Converting an array of user objects to an array of just their names.

// console.log(squaredNumbers); // Output: [4, 9, 16]
// console.log(numbers); // Output: [1, 2, 3] (The original array is unchanged)

// // filter
// const products = [
//   { name: 'Laptop', price: 1200 },
//   { name: 'Mouse', price: 25 },
//   { name: 'Keyboard', price: 75 },
//   { name: 'Monitor', price: 300 },
// ];

// const expensiveProducts = products.filter((product) => product.price > 100);
// console.log(expensiveProducts);

// // reduce
// const cartItems = [
//   { item: 'Milk', price: 2.5 },
//   { item: 'Bread', price: 3.0 },
//   { item: 'Eggs', price: 4.5 },
// ];

// const totalCost = cartItems.reduce((accumulator, currentItem) => {
//   return accumulator + currentItem.price;
// }, 0); // The 0 is the initial value of the accumulator.
// console.log(totalCost); // Output: 10

// // find | findIndex
// const users = [
//   { id: 101, name: 'Alice' },
//   { id: 102, name: 'Bob' },
//   { id: 103, name: 'Charlie' },
//   { id: 104, name: 'Bob' },
// ];

// // find() example
// const bob = users.find((user) => user.name === 'Bob');
// console.log(bob); // Output: { id: 102, name: 'Bob' }

// // findIndex() example
// const charlieIndex = users.findIndex((user) => user.id === 104);
// console.log(charlieIndex); // Output: 2

// // some | every
// const temperatures = [22, 25, 19, 30, 28];

// // some() example: Is at least one temperature above 30?
// const isItHot = temperatures.some((temp) => temp > 30);
// console.log(isItHot); // Output: false

// // every() example: Are all temperatures above 18?
// const isItWarm = temperatures.every((temp) => temp > 18);
// console.log(isItWarm); // Output: true

// // sort
// const items = [40, 1, 5, 200];
// items.sort((a, b) => a - b); // Sorts numbers in ascending order

// console.log(items); // Output: [1, 5, 40, 200]

// Problem 1
// You have an array of student objects, and each student object contains their name, a list of grades, and a graduated status. Your task is to perform a series of operations on this array to get some specific data.

// Your Tasks
// Find the Top Students:
// Create a new array containing the names of all students who have a graduated status of true and an average grade of 90 or higher.

// Calculate the Average Grade for All Students:
// Calculate the overall average grade for all students in the students array, including both graduated and non-graduated students.

// Check for Failing Students:
// Determine if there is at least one student with a grade lower than 70 in their grades array. Return a boolean (true or false).

// const students = [
//   { name: 'Alice', grades: [90, 85, 92], graduated: true },
//   { name: 'Bob', grades: [78, 80, 75], graduated: false },
//   { name: 'Charlie', grades: [95, 88, 91], graduated: true },
//   { name: 'Diana', grades: [65, 70, 72], graduated: false },
//   { name: 'Eve', grades: [98, 95, 99], graduated: true },
//   { name: 'Frank', grades: [80, 85, 82], graduated: false },
// ];

// const topStudents = students.filter((item) => {
//   if (!item.graduated) {
//     return false;
//   }

//   const sumOfgrades = item.grades.reduce((cur, acc) => {
//     return cur + acc;
//   }, 0);

//   const averageGrade = sumOfgrades / item.grades.length;
//   return averageGrade >= 90;
// });
// console.log(topStudents);

// const averageOfStudents = students.map((item) => {
//   const sum = item.grades.reduce((curr, acc) => {
//     return curr + acc;
//   }, 0);

//   const average = sum / item.grades.length;
//   return { ...item, average: average };
// });
// console.log(averageOfStudents);

// const failingStudents = averageOfStudents.some((item) => item.average <= 70);
// console.log(failingStudents);

// Problem 2
// You have an array of products. Each product object has an id, a name, a category, and a price. You also have an array of orders, where each order contains an orderId, a productId, and a quantity.

// Your tasks are to:

// Find the Total Value of Each Order:
// Calculate the total cost for each order and return a new array of objects. Each new object should contain the orderId and a totalValue (the product of its quantity and the corresponding product's price).

// Get the Names of Products in the "Electronics" Category that Cost More than $500:
// Create a new array containing only the names of products that are in the "Electronics" category and have a price greater than 500.

// Determine if Any Order Contains a Product from the "Home Goods" Category:
// Return a single boolean (true or false) indicating whether at least one order in the orders array corresponds to a product that is in the "Home Goods" category.

// const products = [
//   { id: 1, name: 'Laptop', category: 'Electronics', price: 1200 },
//   { id: 2, name: 'T-Shirt', category: 'Apparel', price: 25 },
//   { id: 3, name: 'Coffee Maker', category: 'Home Goods', price: 150 },
//   { id: 4, name: 'Smartphone', category: 'Electronics', price: 800 },
//   { id: 5, name: 'Desk Lamp', category: 'Home Goods', price: 50 },
// ];

// const orders = [
//   { orderId: 'A101', productId: 1, quantity: 1 },
//   { orderId: 'B202', productId: 3, quantity: 2 },
//   { orderId: 'C303', productId: 4, quantity: 1 },
//   { orderId: 'D404', productId: 2, quantity: 5 },
// ];

// const eachOrderPrice = orders.map((orderItem) => {
//   const orderedItem = products.find((item) => item.id === orderItem.productId);

//   const totalValueOfOrderedItem = {
//     orderId: orderItem.orderId,
//     totalValue: orderedItem.price * orderItem.quantity,
//   };

//   return totalValueOfOrderedItem;
// });

// const costlyElectronics = products
//   .filter((item) => item.category === 'Electronics' && item.price >= 500)
//   .map((item) => {
//     return { name: item.name };
//   });

// const hasHomeGoodsInCart = orders.some((orderItem) => {
//   const orderedItem = products.find((item) => item.id === orderItem.productId);
//   return orderedItem.category === 'Home Goods';
// });

// The Problem 3
// You have an array of employees, where each employee object contains their id, name, department, salary, and a list of skills. Your tasks are to perform a series of operations on this data to get some specific insights.

// Calculate the Total Payroll for Each Department:
// Return a new array of objects. Each object should have the department name and the totalSalary for that department.

// Find All Employees with a Specific Skill:
// Create a new array containing the names of all employees who possess the skill "JavaScript".

// Determine if Any Department Has an Average Salary Below a Threshold:
// Return a single boolean (true or false) indicating if at least one department has an average salary of less than $60,000

// const employees = [
//   {
//     id: 1,
//     name: 'Alice',
//     department: 'Engineering',
//     salary: 80000,
//     skills: ['JavaScript', 'React', 'Node.js'],
//   },
//   {
//     id: 2,
//     name: 'Bob',
//     department: 'Marketing',
//     salary: 55000,
//     skills: ['SEO', 'Content Creation', 'Social Media'],
//   },
//   {
//     id: 3,
//     name: 'Charlie',
//     department: 'Engineering',
//     salary: 95000,
//     skills: ['Python', 'Django', 'SQL'],
//   },
//   {
//     id: 4,
//     name: 'Diana',
//     department: 'Marketing',
//     salary: 65000,
//     skills: ['SEO', 'Marketing Strategy'],
//   },
//   {
//     id: 5,
//     name: 'Eve',
//     department: 'Sales',
//     salary: 70000,
//     skills: ['Client Management', 'Salesforce'],
//   },
//   {
//     id: 6,
//     name: 'Frank',
//     department: 'Sales',
//     salary: 45000,
//     skills: ['Client Management', 'CRM'],
//   },
// ];

// const sales = employees.filter((item) => item.department === 'Sales');
// const engineering = employees.filter(
//   (item) => item.department === 'Engineering'
// );
// const marketing = employees.filter((item) => item.department === 'Marketing');

// const salesTotalPayroll = sales.reduce((acc, item) => {
//   acc[item.department] = 'Sales';
//   acc[item.totalSalary] = acc.totalSalary + item.salary;
//   return acc;
// }, {});

// console.log(salesTotalPayroll);

// const users = [
//   { id: 1, name: 'Alice', isActive: true },
//   { id: 2, name: 'Bob', isActive: false },
//   { id: 3, name: 'Charlie', isActive: true },
//   { id: 4, name: 'David', isActive: true },
//   { id: 5, name: 'Eve', isActive: false },
// ];

// // Your task is to perform three operations on this array using map, reduce, and filter in a single chained call.
// // 1. Filter: Keep only the users who are active (isActive: true).
// // 2. Map: Transform the remaining users into a new array of objects containing only their id and name.
// // 3. Reduce: Calculate the total number of characters in the names of all the active users.

// // Write your solution here:
// // ...

// const finalArray = users
//   .filter((item) => item.isActive)
//   .map((item) => ({ id: item.id, name: item.name }))
//   .reduce((acc, curItem) => {
//     return acc + curItem.name.length;
//   }, 0);

// console.log(finalArray);
