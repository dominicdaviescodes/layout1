// use the document to grab the button. Store it in a JavaScript variable, and then log it out!
// var clickMe = document.getElementById('clickMe');
// console.log(clickMe);

// better naming
var myButton = document.getElementById('btn');
console.log(myButton);

// make button do something

myButton.addEventListener('click', function () {
  // console.log('button was clicked');
  // change the background of the button to red
  myButton.style.background = "red";
});
