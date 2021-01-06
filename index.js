// use the document to grab the button. Store it in a JavaScript variable, and then log it out!
// var clickMe = document.getElementById('clickMe');
// console.log(clickMe);

// better naming
// var myButton = document.getElementById('btn');
// console.log(myButton);

// make button do something

// myButton.addEventListener('click', function () {
// console.log('button was clicked');
// change the background of the button to red
// there is a better way using (e) the event.
//   myButton.style.background = "red";
// });

// change h1 tag to say I'm learning js when btn is clicked
// we  want id's when grabbing elements
// const headerText = document.getElementById('header-text');

// myButton.addEventListener('click', function () {
// headerText.innerHTML = 'I\'m learning JavaScript';
// headerText.textContent = "I'm learning JavaScript";

// });

// make the button text equal the counter variable

// var counter = 456;
// myButton.addEventListener('click', function () {
//   myButton.textContent = counter;
// });

// add one line make button text 2

// var counter = 0;

// myButton.addEventListener('click', function () {
//   console.log('counter at line 40: ', counter);
// add one line
// counter = 2;
// console.log('counter at line 43: ', counter);
// don't change this

//   myButton.textContent = counter;
// });

// make the counter add 2 every time btn is clicked

// myButton.addEventListener('click', function(){

// up by 2
// counter += 2;
// down by 1
//   counter -= 1;

//   myButton.textContent = counter;
// })

// 1st click is 10 then up in 5's

// var counter = 5;

// myButton.addEventListener('click', function () {
//   counter += 5;

//   myButton.textContent = counter;
// });

// Challenge: Print out in your console 0 mississippi to 100 mississippi.

// for(let i = 0; i < 101; i++) {
//   console.log(i + ' mississippi');
// }

// print all these out.

// const europe = ['Sweden', 'Norway', 'Bulgaria', 'France', 'Germany'];
// for(let i = 0; i < europe.length; i++) {
//   console.log(europe[i]);
// }

// console.log(europe[0]);
// console.log(europe[1]);
// console.log(europe[2]);
// console.log(europe[3]);
// console.log(europe[4]);
// console.log(europe[5]);

// print these

const topLanguages = [
  'Chinese',
  'Spanish',
  'English',
  'Hindi',
  'Arabic',
  'Portugese',
  'Bengali',
  'Russian',
  'Japanese',
  'Lahnda',
  'Javanese',
  'German',
  'Korean',
  'French',
  'Telugu',
  'Turkish',
  'Tamil',
  'Vietnamese',
  'Urdu',
];

for (let i = 0; i < topLanguages.length; i++) {
  console.log(topLanguages[i]);
}
