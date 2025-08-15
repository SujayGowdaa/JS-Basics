// document.addEventListener(
//   'click',
//   (e) => {
//     e.stopPropagation();
//     console.log('document clicked');
//   },
//   false
// );

// document.getElementById('grandparent').addEventListener(
//   'click',
//   () => {
//     console.log('Grandparent clicked ');
//   },
//   true
// );

// document.getElementById('parent').addEventListener(
//   'click',
//   (e) => {
//     console.log('Parent clicked ');
//   },
//   true
// );

// document.getElementById('child').addEventListener(
//   'click',
//   (e) => {
//     e.stopPropagation();
//     console.log('Child clicked');
//   },
//   true
// );

// 1. Describe the difference between event capturing and event bubbling. Which one happens first, and which one is the default behavior for event listeners in modern browsers?

// A. the main difference between capturing and bubbling is that when you have set an element to capture it captures down to the element or it calls the event of the parent starting from document to the element its being clicked. But in bubbling its opposite the clicked element will be fired then it will bubble up to the dom till it reached the document obj. The default behaviour of modern browsers is set to bubble you can modify this option by passing a boolean value after the callback function to the event listener function if true it captures if false it bubbles.

// 2. What would be the output of the following HTML and JavaScript code? Explain the order in which the event handlers fire.

{
  /* <div id='parent'>
  <button id='child'>Click Me</button>
</div>;

const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', () => {
  console.log('Parent handler triggered.');
});

child.addEventListener('click', () => {
  console.log('Child handler triggered.');
}); */
}

// A. when the child is clicked the console.log('Child handler triggered.'); is logged and the   console.log('Parent handler triggered.'); is logged.

// 3. How would you modify the code from question 2 to make the parent's event handler fire during the capturing phase? What would the new output be?
// A. Now it bubbles down instead of bubbling up.

{
  /* <div id='parent'>
  <button id='child'>Click Me</button>
</div>;

const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', () => {
  console.log('Parent handler triggered.');
},true);

child.addEventListener('click', () => {
  console.log('Child handler triggered.');
},true); */
}

// 4. Imagine you have a nested list of items. How would you prevent a click on a list item from triggering the click handler on its parent <ul> element? Write a simple code example to demonstrate this.

const parent = document.getElementById('parent-list');
const item1 = document.getElementById('list-item1');
const item2 = document.getElementById('list-item2');

parent.addEventListener('click', () => {
  console.log('parent clicked');
});
item1.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('item1 clicked');
});
item2.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('item2 clicked');
});

// 5.Can an event listener be a part of both the capturing and bubbling phases? Explain why or why not.
// A. did not understand
