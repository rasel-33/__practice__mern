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

// wecan directly use the index instead of method invokation
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
let str = "****";
let newStr = str.padStart(2, "$");
console.log(newStr);
