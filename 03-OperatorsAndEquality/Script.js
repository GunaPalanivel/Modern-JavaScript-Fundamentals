// Comparision Operators => true or false

const a = 10;
const b = 20;

// Is a equal to b?
console.log(a == b); // false
console.log(typeof (a == b)); // boolean

// Is a not equal to b?
console.log(a != b); // true
console.log(typeof (a != b)); // boolean

// Strict Equality Operators => true or false
console.log(a === b); // false
console.log(typeof (a === b)); // boolean

// Strict Inequality Operators => true or false
console.log(a !== b); // true
console.log(typeof (a !== b)); // boolean

// Logical Operators => true or false
console.log(5 === 5); // true
console.log(typeof (5 === 5)); // boolean

// Here we are comparing a number(5) with a string("5") using the strict equality operator (===)
console.log(5 === "5"); // false
console.log(typeof (5 === "5")); // boolean

// But here we are comparing a number(5) with a string("5") using the equality operator (==)
console.log(5 == "5"); // true
console.log(typeof (5 == "5")); // boolean

// Is a greater than b?
console.log(a > b); // false
console.log(typeof (a > b)); // boolean

// Is a less than b?
console.log(a < b); // true
console.log(typeof (a < b)); // boolean

// Is a greater than or equal to b?
console.log(a >= b); // false
console.log(typeof (a >= b)); // boolean

// Is a less than or equal to b?
console.log(a <= b); // true
console.log(typeof (a <= b)); // boolean

// Strict Equality
// 1. The strict equality operator (===) compares the data type and the value of the operands.
// 2. If both the data type and the value of the operands are the same, the strict equality operator returns true.
// 3. If either the data type or the value of the operands is different, the strict equality operator returns false.
console.log(5 === 5); // true
console.log(typeof (5 === 5)); // boolean

// Strict Inequality
// 1. The strict inequality operator (!==) compares the data type and the value of the operands.
// 2. If either the data type or the value of the operands is different, the strict inequality operator returns true.
// 3. If both the data type and the value of the operands are the same, the strict inequality operator returns false.

// Here we are comparing a number(5) with a string("5") using the strict equality operator (===)
console.log(5 === "5"); // false
console.log(typeof (5 === "5")); // boolean

// Here we are comparing a number(5) with a string("5") using the strict inequality operator (!==)
console.log(5 !== "5"); // true
console.log(typeof (5 !== 5)); // boolean

// Here we are comparing a number(5) with a number(5) using the strict inequality operator (!==)
console.log(5 !== 5); // false
console.log(typeof (5 !== 5)); // boolean

// Lose Equality
// 1. The equality operator (==) compares the value of the operands.
// 2. If the value of the operands is the same, the equality operator returns true.
// 3. If the value of the operands is different, the equality operator returns false.

// Here we are comparing a number(5) with a string("5") using the equality operator (==)
console.log(5 == "5"); // true
console.log(typeof (5 == "5")); // boolean

// The Good Ones => ===, !==
// The Bad Ones => ==, !=

// The equality operator (==) is known as the lose equality operator because it does not compare the data type of the operands.
console.log("" == "0"); // false
console.log(0 == ""); // true
console.log(0 == "0"); // true

console.log(false == "false"); // false
console.log(false == "0"); // true

console.log(false == undefined); // false
console.log(false == null); // false
console.log(null == undefined); // true

console.log(" \t\r\n " == 0); // true
