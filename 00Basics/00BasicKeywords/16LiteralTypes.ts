// 16 Literal Types
// LT allow you to specify a value that can only be one specific literal value. This means that a variable with a literal type can only have one specific value and no other.

// String LT
let color: 'red' | 'blue' | 'green';
color = 'red' // valid
// color = 'yellow' // invalid

// Numberal LT
let number: 1 | 2 | 3 | 4
number = 1 //valid
// number = 5 // Invalid

// Boolean Literal Types
let isTrue = true;
isTrue = true; // valid
isTrue = false; // invalid

// console.log(isTrue)