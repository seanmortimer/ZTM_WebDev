// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢'.padEnd(9, '*');
let rabbit = '🐇'.padStart(9);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

let text = Object.entries(obj).reduce((acc, cur, idx) => {
  console.log('index is  :', idx);
  console.log('acc     is:', acc);
  console.log('current is:', cur);
  acc += cur.reduce( (acc, cur) => {return acc += cur + ' ';}, '')

  return acc;
}, '');

console.log(text);
