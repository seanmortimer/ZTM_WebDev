// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]

const flatArray = array.flat(2);
console.log('flatArray:', flatArray);


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

const greeting2 = greeting.flatMap(array => array.join(' '));
console.log('greeting2:', greeting2);


//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
const greetingString = greeting.flatMap(array => array.join(' ')).join(' ');
console.log('greetingString:', greetingString);
 

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const trappedFlat = [trapped.flat(Infinity)];
console.log('trappedFlat: ' + trappedFlat);


//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
console.log('Tidy email:', userEmail3.trimStart().trimEnd());



//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
const userArray = Object.entries(users);
console.log('userArray:', userArray);

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- 
// Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const userArray2 = userArray.map(x => [x[0], x[1] * 2]);
console.log('userArray2', userArray2);


//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. 
// Should output: { user1: 36546, user2: 185666, user3: 180630 }

const userObject2 = Object.fromEntries(userArray2);
console.log('userObject2:', userObject2);

