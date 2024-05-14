// Comparision Operators => true or false

const a = 10;
const b = 20;

console.log(a == b); // false
console.log(typeof (a == b)); // boolean

console.log(a != b); // true
console.log(typeof (a != b)); // boolean

console.log(a > b); // false
console.log(typeof (a > b)); // boolean

console.log(a < b); // true
console.log(typeof (a < b)); // boolean

console.log(a >= b); // false
console.log(typeof (a >= b)); // boolean

console.log(a <= b); // true
console.log(typeof (a <= b)); // boolean

// Logical Operators => true or false

const c = 10;
const d = 20;

console.log(c == 10 && d == 20); // true
console.log(typeof (c == 10 && d == 20)); // boolean

console.log(c == 10 && d == 30); // false
console.log(typeof (c == 10 && d == 30)); // boolean

console.log(c == 10 && d == 30); // false
console.log(c == 10 || d == 30); // true
console.log(c == 20 || d == 30); // false
console.log(!(c == 20)); // true
console.log(!(c == 10)); // false

// Equality Operators => true or false

const e = 10;
const f = "10";

console.log(e == f); // true
console.log(e === f); // false
console.log(e !== f); // true

// Ternary Operators => true or false

const g = 10;
const h = 20;

const result = g > h ? "g is greater than h" : "g is less than h";
console.log(result); // g is less than h
