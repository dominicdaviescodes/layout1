// use the document to grab the button. Store it in a JavaScript variable, and then log it out!
// var clickMe = document.getElementById('clickMe');
// console.log(clickMe);

// better naming
var myButton = document.getElementById('btn');
console.log(myButton);

// make button do something

// myButton.addEventListener('click', function () {
// console.log('button was clicked');
// change the background of the button to red
// there is a better way using (e) the event.
//   myButton.style.background = "red";
// });

// change h1 tag to say I'm learning js when btn is clicked
// we  want id's when grabbing elements
const headerText = document.getElementById('header-text');

// myButton.addEventListener('click', function () {
// headerText.innerHTML = 'I\'m learning JavaScript';
// headerText.textContent = "I'm learning JavaScript";

// });

// make the button text equal the counter variable
var counter = 456;
myButton.addEventListener('click', function () {
  myButton.textContent = counter;
});
