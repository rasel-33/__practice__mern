let text = "abracadabr";
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



