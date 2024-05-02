// Defining strings using single quotes
const singleQuote = "Hello, World!";
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
//
//
//
// Example 1: Using boolean variables
let isRaining = true;
let isSunny = false;

console.log(isRaining); // Output: true
console.log(isSunny); // Output: false
//
//
//
// Example 2: Boolean comparison
let t = 5;
let p = 10;
let isGreater = t > p;

console.log(isGreater); // Output: false
//
//
//
// Example 3: Boolean function return
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false
//
//
//
// Example 4: Using boolean with conditional statements
let isWeekend = true;

if (isWeekend) {
  console.log("Enjoy your weekend!");
} else {
  console.log("Keep working!");
}
//
//
//
// Example 5: Boolean as object property
const user2 = {
  name: "John",
  isAdmin: true,
};

console.log(user2.isAdmin); // Output: true
//
//
//
// Null
let user1 = null;
console.log(user1); // Output: null
console.log(typeof user1); // Output: object
//
//
//
// Example 1: Setting a variable to null
let car = null;

console.log(car); // Output: null
//
//
//
// Example 2: Using null in a conditional statement
let age = null;
if (age === null) {
  console.log("Age is not defined.");
}
//
//
//
// Example 3: Null in array
let list = [1, 2, null, 4, null];

console.log(list); // Output: [1, 2, null, 4, null]
//
//
//
// Example 4: Null with typeof operator
console.log(typeof null); // Output: object
//
//
//
// Example 5: Checking for null explicitly
let data = null;

if (data === null) {
  console.log("Data is null.");
} else {
  console.log("Data is not null.");
}
//
//
//
// Undefined
let score;
console.log(score); // Output: undefined
console.log(typeof score); // Output: undefined
//
//
//
// Example 1: Declaring a variable without assignment
let x;
let y = undefined;

console.log(x); // Output: undefined
console.log(y); // Output: undefined
//
//
//
// Example 2: Accessing non-existent object property
const person = { name: "John", age: 30 };

console.log(person.address); // Output: undefined
//
//
//
// Example 3: Function with undefined return
function greet(name) {
  if (name === undefined) {
    return "Hello, stranger!";
  } else {
    return `Hello, ${name}!`;
  }
}

console.log(greet()); // Output: Hello, stranger!
//
//
//
// Example 4: Undefined behavior in arithmetic operations
let z;
console.log(z + 5); // Output: NaN (Not a Number)
//
//
//
// Example 5: Undefined as function argument
function printValue(value) {
  console.log(value);
}

printValue(); // Output: undefined
//
//
//
// Symbol
const id2 = Symbol("id2");
const person1 = {
  [id2]: 123,
  name: "John Doe",
  age: 30,
  isStudent: true,
  hobbies: ["reading", "coding", "painting"],
};
console.log(person1.name); // Output: John Doe
console.log(person1.age); // Output: 30
console.log(person1.isStudent); // Output: true
console.log(person1[id2]); // Output: 123
console.log(typeof id2); // Output: symbol

console.log(person1.hobbies); // Output: ['reading', 'coding', 'painting']
console.log(typeof person1); // Output: object
//
//
//
// Example 1: Creating unique symbols
const symbol1 = Symbol();
const symbol2 = Symbol("description");

console.log(typeof symbol1); // Output: symbol
console.log(typeof symbol2); // Output: symbol
//
//
//
// Example 2: Symbol as object property key
const user = {};
const id = Symbol("id");

user[id] = 12345;

console.log(user[id]); // Output: 12345
//
//
//
// Example 3: Using symbols in object literals
const COLOR_RED = Symbol("Red");
const COLOR_GREEN = Symbol("Green");

const colors = {
  [COLOR_RED]: "Red",
  [COLOR_GREEN]: "Green",
};

console.log(colors[COLOR_RED]); // Output: Red
//
//
//
// Example 4: Symbol in a class
class Animal {
  constructor(name) {
    this.name = name;
    this[symbol1] = "secret property";
  }
}

const cat = new Animal("Fluffy");

console.log(cat.name); // Output: Fluffy
console.log(cat[symbol1]); // Output: secret property
//
//
//
// Example 5: Global symbols
const sym1 = Symbol.for("app.id");
const sym2 = Symbol.for("app.id");

console.log(sym1 === sym2); // Output: true
//
//
//
// Arrays (also an object type)
const numbers = [1, 2, 3, 4, 5];
const mixedArray = [true, "hello", 42, null, { key: "value" }];
console.log(numbers[2]); // Output: 3
console.log(mixedArray[3]); // Output: null
console.log(typeof numbers); // Output: object
console.log(typeof mixedArray); // Output: object
//
//
//
// Functions (also an object type)
function greet(name) {
  console.log(`Hello, ${name}!`);
}
console.log(typeof greet); // Output: function
//
//
//
// Example 1: Creating an object
const person3 = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(person3); // Output: { name: 'John', age: 30, city: 'New York' }
//
//
//
// Example 2: Accessing object properties
console.log(person3.name); // Output: John
console.log(person3["age"]); // Output: 30 [we're using "bracket notation" to access the value of the "age" property.]
console.log(person3.age); // Output: 30 [we're using "dot notation" to access the value of the "age" property.]
//
//
//
// Example 3: Adding new properties to an object
person.job = "Engineer";
person["status"] = "Married";

console.log(person); // Output: { name: 'John', age: 30, city: 'New York', job: 'Engineer', status: 'Married' }
//
//
//
// Example 4: Nested objects
const student = {
  name: "Alice",
  age: 25,
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
  },
};

console.log(student.address.city); // Output: Anytown
//
//
//
// Example 5: Object methods
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(10, 4)); // Output: 6
