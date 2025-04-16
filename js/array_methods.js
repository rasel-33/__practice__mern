const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);

const numbers = [1, 2, 5 ,7, 9, 13];
console.log(numbers.toString());

console.log(fruits.at(3));

// at() method is different from [] direct indexing 
// we can use negative indexes while accessing the elements in the array from end but we can not use 
// negative index for accessing the elements with [] direct indexing (because [] direct indexing is also used for objects
//  and in objects negative values may be consided as a key for the objext like obj[-1])

console.log(numbers.at(-2));

// array join() method joins array elements and returns a string
console.log(fruits.join(' -> '));


// pop() method removes the last element from the array and returns the last element
let lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);

// push() method adds an element to the last of the array
fruits.push(lastFruit);
console.log(fruits);

// shift() method removes the first element from the array and returns the first element and adjust the indexes of remaining elements
let firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);

// unshift() method adds an element to the begining of the array and also adjust the indexes of remaining elements
fruits.unshift(firstFruit);
console.log(fruits);


// changing element directly with indexes
fruits[0] = 'Kiwi';
console.log(fruits);

// array concate (merging two arrays)
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
// concate method works with both single and multiple arguments
console.log(myBoys.concat(myGirls));   //single argument
console.log(myBoys.concat(myGirls, fruits));   // muttiple arguments


console.log(fruits);
// copyWithIn(arg1, arg2) method  ---it doesn't affect the length of the array and
// console.log(fruits.copyWithin(3));

const arr = [[12, 13],[14, 15]];
const myArr = arr.flat();

console.log(myArr.flatMap(x => (x+3)*10));
console.log(fruits);
fruits.splice(2, 0, "Banana", "Tangerine"); // works on original array
console.log(fruits);

console.log(fruits.slice(1)); // returns new array



