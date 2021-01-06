# Intro to Loops

## Variable review
Challenges:

We need to write a function that will allow us to count books each we get a new one in a delivery.
What variable would you assign the variable bookCount in the situation below.
Please replace the ** to make the function work.

```js
let bookCount = 0

function increment(){
    bookCount +=1
    console.log(bookCount)
}
increment()
```

We have just sold 3 books and got 3 new ones! What would you have to do here to the `books` variable for the function to work so it would replace the current books array with our 3 new ones?
Please make the function work.
```js
let books = ['Moby Dick', 'Alice in Wonderland', 'Hungry Caterpillar']

function replaceBooks(){
    books = ['Life of Pi', 'Grokkings Algorithms', 'New Earth']
    console.log(books)
}
replaceBooks()

```
We need to text our a customer that their book is in. What would you have to do here in order for this function to work?
```js
const firstName = 'Molly' 
function textCustomer() {
    console.log('Hi ' + firstName + ', your book is now in')
}
textCustomer()
```
##For Loops

For Loops run code a certain number of times.  ex 1 will run 10 times, ex2 runs 100 times.
```js
for(let i = 0; i < 10; i++) {
    //code 
    console.log(i)
}
```
Challenge: Print out in your console 0 mississippi to 100 mississippi.

```js
for(let i = 0; i < 101; i++) {
  console.log(i + ' mississippi');
}
```
instructor code

```js
for(let i = 0; i <= 100; i++) {
  console.log(i + ' mississippi');
}
```

## For Loops with arrays

```js
const europe = ['Sweden', 'Norway', 'Bulgaria', 'France', 'Germany']

console.log(europe[0])
console.log(europe[1])
console.log(europe[2])
console.log(europe[3])
console.log(europe[4])
console.log(europe[5])

```

my solution:

```js

const europe = ['Sweden', 'Norway', 'Bulgaria', 'France', 'Germany'];
for(let i = 0; i < europe.length; i++) {
  console.log(europe[i]);
}
```
Exercise: print out 20 items from an array.

```js
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
```

## For Loops with if statements

We are trying to find a table for my speed dating group to sit at, that is the most economical for the restaurant. How many options do I have?
```js
// print out even
const tableNumbers = [5, 14, 7, 10, 20, 11, 12, 15, 3];

for (let i = 0; i < tableNumbers.length; i++) {
  if (tableNumbers[i] % 2 === 0) {
    console.log(tableNumbers[i]);
  }
}
// returns even numbers

```

Mini Challenge: We have decided to play a game between all of us. Create a loop that loops over the numbers given to each one of us. If the person has even number is even, print out the word 'blue team'. If it is odd, print out the word 'red team'.

```js
const people = 56;

for (let i = 0; i < people; i++) {
  if (people[i] % 2 === 0) {
    console.log('Person ' + i + ' is on the blue team');
  } else {
    console.log('Person ' + i + ' is on the red team');
  }
}
// example outputs
// Person 1 is on the red team
// Person 17 is on the red team
//       BUT ALSO PRINTS
// starts at 0 ends with Person 55 is on the red team
```
so

now starts at 1 ends at 56
```js
const people = 56;

for (let i = 1; i <= people; i++) {
  if (people[i] % 2 === 0) {
    console.log('Person ' + i + ' is on the blue team');
  } else {
    console.log('Person ' + i + ' is on the red team');
  }
}

```