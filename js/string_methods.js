let text = "abraCadabr";
//          0123456789

// string length -info (property)
console.log(text.length);


// string characters
// 1 -> with at(position)  method -- needs invokation
// 2 -> with charAt(position)  method -- needs invokation
// 3 -> with charCodeAt(position)  method -- needs invokation

let index = 5;

let ch = text.at(index);
console.log(ch);

ch = text.charAt(index);
console.log(ch);

ch = text.charCodeAt(index); // returns the ascii code number
console.log(ch);

// we can directly use the index instead of method invokation
ch = text[index];
console.log(ch);

text[index] = 'A'; // no error but desn't works because javascript use immutable strings
console.log(text);


// ======== Extracting String parts =========
// slice(start, end)  --here the end in range is not included  (method -- needs invokation)
// substring(start, end)
// substr(start, length) --deprecated

let sliced_part = text.slice(2, 5);
console.log(sliced_part); //we will get a string as text[2] + text[3] + text[4] in this case ="rac"

sliced_part = text.substring(-2);
console.log(sliced_part);

// case conversion methods

let upper = text.toUpperCase();
console.log(upper);

let lower = text.toLowerCase();
console.log(lower);

// concat() join method

let fname = "Shamim";
let lname = "Hossain";

let fullName = fname.concat(" ", lname, " ", "Chowdhury");

console.log(fullName);

// trim method  --removes leading and tailing spaces
let mytext = "   Hello Boishakh ";
console.log(mytext.trim());
console.log(mytext.trim().length);  // --this will provide us length for the trimmed string


// string padding padStart() & padEnd()
let normalString = "****";
let startPadded = normalString.padStart(6, "$"); // adds the characters from the given stringat the time of method invokation
let endPadded = normalString.padEnd(6, "$")
console.log(startPadded);
console.log(endPadded);

//repeat() method --it repeats the string itself for the given times
console.log(startPadded.repeat(2));


// replace(findString, placeString) --this method takes two strings as parameter and reaplces all the occurances of the matched string with the given string

let longString = "Success is not born from a single moment of triumph, but From the countless hours of unseen effort.";
console.log(longString.replace(/from/i, "between")); // replace()  --method replaces only the first occurance of the string and new string
// in this exaample it changes only one "from" to "between"


longString = longString.replaceAll(/from/g, "between") // (replaceAll() method needa to be g flag on) --replaces all the occurances of the string and returns a new string
console.log(longString);
// in this exaample it changes all the occurances of "from" to "between"


// ===== split() method uses the argument as separator to create an array from given string
normalString = "a*b*c*d*fg*h";
console.log(normalString.split("*"));