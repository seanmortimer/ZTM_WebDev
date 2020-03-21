// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(array);
console.log(array[2]);


// 1. Remove the Banana from the array.

array.shift();
console.log(array);
console.log(array[2]);

// 2. Sort the array in order.

array.sort();
console.log(array);
console.log(array[2]);

// 3. Put "Kiwi" at the end of the array.

array.push("kiwi");
console.log(array);
console.log(array[2]);

// 4. Remove "Apples" from the array.

array.shift()
console.log(array);
console.log(array[2]);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

array.sort();
console.log(array);
array.reverse();
console.log(array);

console.log("you should have at the end:");
console.log('["Kiwi", "Oranges", "Blueberries"]');

console.log(array);

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

console.log(array2[1] [1] [0]);