// Defining strings using single quotes
const singleQuote = 'Hello, World!';
console.log(singleQuote); // Output: Hello, World!
console.log(typeof singleQuote); // Output: string
//
//
//
// Defining strings using double quotes
const doubleQuote = "Hello, World!!";
console.log(doubleQuote); // Output: Hello, World!!
console.log(typeof doubleQuote); // Output: string
//
//
//
// Defining strings using backticks (template literals)
const backtick = `Hello, World!!!`;
console.log(backtick); // Output: Hello, World!!!
console.log(typeof backtick); // Output: string
//
//
//
// Using template literals to include variables
const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!
console.log(typeof greeting); // Output: string
//
//
//
// Using template literals without variable interpolation
const myGreeting = "Hello, ${name}!";
console.log(myGreeting); // Output: Hello, ${name}!
console.log(typeof myGreeting); // Output: string
//
//
//
// Representing numbers using template literals
const number = `1 + 1`;
console.log(number); // Output: 1 + 1
console.log(typeof number); // Output: string
//
//
//
// Representing numbers using template literals with expressions
const number2 = `${1 + 1}`;
console.log(number2); // Output: 2
console.log(typeof number2); // Output: string
//
//
//
// Representing numbers directly
const number3 = 1 + 1;
console.log(number3); // Output: 2
console.log(typeof number3); // Output: number
//
//
//
// Representing numbers as strings
const number4 = "1 + 1";
console.log(number4); // Output: 1 + 1
console.log(typeof number4); // Output: string
