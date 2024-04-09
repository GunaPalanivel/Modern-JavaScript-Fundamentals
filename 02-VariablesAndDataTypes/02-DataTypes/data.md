Certainly! Here are more detailed code examples for each data type in JavaScript:

1. Boolean:

```javascript
// Example 1: Using boolean variables
let isRaining = true;
let isSunny = false;

console.log(isRaining); // Output: true
console.log(isSunny); // Output: false
```

```javascript
// Example 2: Boolean comparison
let x = 5;
let y = 10;
let isGreater = x > y;

console.log(isGreater); // Output: false
```

```javascript
// Example 3: Boolean function return
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false
```

```javascript
// Example 4: Using boolean with conditional statements
let isWeekend = true;

if (isWeekend) {
  console.log("Enjoy your weekend!");
} else {
  console.log("Keep working!");
}
```

```javascript
// Example 5: Boolean as object property
const user = {
  name: "John",
  isAdmin: true,
};

console.log(user.isAdmin); // Output: true
```

2. Null:

```javascript
// Example 1: Setting a variable to null
let car = null;

console.log(car); // Output: null
```

```javascript
// Example 2: Using null in a conditional statement
let age = null;
if (age === null) {
  console.log("Age is not defined.");
}
```

```javascript
// Example 3: Null in array
let list = [1, 2, null, 4, null];

console.log(list); // Output: [1, 2, null, 4, null]
```

```javascript
// Example 4: Null with typeof operator
console.log(typeof null); // Output: object
```

```javascript
// Example 5: Checking for null explicitly
let data = null;

if (data === null) {
  console.log("Data is null.");
} else {
  console.log("Data is not null.");
}
```

3. Undefined:

```javascript
// Example 1: Declaring a variable without assignment
let x;
let y = undefined;

console.log(x); // Output: undefined
console.log(y); // Output: undefined
```

```javascript
// Example 2: Accessing non-existent object property
const person = { name: "John", age: 30 };

console.log(person.address); // Output: undefined
```

```javascript
// Example 3: Function with undefined return
function greet(name) {
  if (name === undefined) {
    return "Hello, stranger!";
  } else {
    return `Hello, ${name}!`;
  }
}

console.log(greet()); // Output: Hello, stranger!
```

```javascript
// Example 4: Undefined behavior in arithmetic operations
let z;
console.log(z + 5); // Output: NaN (Not a Number)
```

```javascript
// Example 5: Undefined as function argument
function printValue(value) {
  console.log(value);
}

printValue(); // Output: undefined
```

4. Symbol:

```javascript
// Example 1: Creating unique symbols
const symbol1 = Symbol();
const symbol2 = Symbol("description");

console.log(typeof symbol1); // Output: symbol
console.log(typeof symbol2); // Output: symbol
```

```javascript
// Example 2: Symbol as object property key
const user = {};
const id = Symbol("id");

user[id] = 12345;

console.log(user[id]); // Output: 12345
```

```javascript
// Example 3: Using symbols in object literals
const COLOR_RED = Symbol("Red");
const COLOR_GREEN = Symbol("Green");

const colors = {
  [COLOR_RED]: "Red",
  [COLOR_GREEN]: "Green",
};

console.log(colors[COLOR_RED]); // Output: Red
```

```javascript
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
```

```javascript
// Example 5: Global symbols
const sym1 = Symbol.for("app.id");
const sym2 = Symbol.for("app.id");

console.log(sym1 === sym2); // Output: true
```

5. Object:

```javascript
// Example 1: Creating an object
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(person); // Output: { name: 'John', age: 30, city: 'New York' }
```

```javascript
// Example 2: Accessing object properties
console.log(person.name); // Output: John
console.log(person["age"]); // Output: 30
```

```javascript
// Example 3: Adding new properties to an object
person.job = "Engineer";
person["status"] = "Married";

console.log(person); // Output: { name: 'John', age: 30, city: 'New York', job: 'Engineer', status: 'Married' }
```

```javascript
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
```

```javascript
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
```

These examples provide more comprehensive demonstrations of each data type in JavaScript, showcasing various scenarios where they can be utilized.
