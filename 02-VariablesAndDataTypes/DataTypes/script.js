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
// 
//
//
// Boolean
const isLoggedIn = true;
const isAdmin = false;
console.log(isLoggedIn); // Output: true
console.log(isAdmin); // Output: false
console.log(typeof isLoggedIn); // Output: boolean
console.log(typeof isAdmin); // Output: boolean

// Null
let user = null;
console.log(user); // Output: null
console.log(typeof user); // Output: object

// Undefined
let score;
console.log(score); // Output: undefined
console.log(typeof score); // Output: undefined

// Symbol
const id = Symbol('id');
const person = {
    [id]: 123,
    name: 'John Doe',
    age: 30,
    isStudent: true,
    hobbies: ['reading', 'coding', 'painting']
};
console.log(person.name); // Output: John Doe
console.log(person.age); // Output: 30
console.log(person.isStudent); // Output: true
console.log(person[id]); // Output: 123
console.log(typeof id); // Output: symbol

console.log(person.hobbies); // Output: ['reading', 'coding', 'painting']
console.log(typeof person); // Output: object

// Arrays (also an object type)
const numbers = [1, 2, 3, 4, 5];
const mixedArray = [true, 'hello', 42, null, { key: 'value' }];
console.log(numbers[2]); // Output: 3
console.log(mixedArray[3]); // Output: null
console.log(typeof numbers); // Output: object
console.log(typeof mixedArray); // Output: object

// Functions (also an object type)
function greet(name) {
  console.log(`Hello, ${name}!`);
}
console.log(typeof greet); // Output: function