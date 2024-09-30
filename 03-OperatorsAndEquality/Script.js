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

// The Good Ones (Strict Equality & Inequality) => === (Strict Equality): Checks for equality without type coercion. The values must be of the same type and value , !== (Strict Inequality): Checks for inequality without type coercion. The values must be of different types or different values
// The Bad Ones (Evil Twins - Loose Equality & Inequality) => == (Loose Equality): Checks for equality with type coercion. It attempts to convert the operands to the same type before comparing , !== (Loose Inequality): Checks for inequality with type coercion.

// The Good Ones
console.log(5 === 5); // true (same type and value)
console.log(5 === "5"); // false (different types)
console.log(5 !== 10); // true (different values)
console.log(5 !== "5"); // true (different types)

// The Bad Ones
console.log(5 == "5"); // true (type coercion occurs, both are converted to 5)
console.log(0 == false); // true (false is coerced to 0)
console.log(null == undefined); // true (null and undefined are loosely equal)
console.log(5 != "5"); // false (type coercion makes both 5)

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

//
console.log(true == 1); // true
console.log(5 == "5"); // true
console.log(5 === "5"); // false

// Logical Operators => true or false (There are three logical operators in JavaScript: && (logical AND), || (logical OR), and ! (logical NOT).) => Logical operators are used to combine two or more conditions. They return a boolean value based on the evaluation of the conditions.
//  Logical AND (&&) => The logical AND operator (&&) returns true if both the operands are true. Otherwise, it returns false.
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log(typeof (true && true)); // boolean

// Logical OR (||) => The logical OR operator (||) returns true if either of the operands is true. Otherwise, it returns false.
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
// Logical NOT (!) => The logical NOT operator (!) returns true if the operand is false. Otherwise, it returns false.
console.log(!true); // false
console.log(!false); // true
console.log(typeof !true); // boolean
