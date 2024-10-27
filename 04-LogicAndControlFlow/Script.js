// WIP: Development in progress
// It's all about Decision Making Code (Logic and Control Flow) in JavaScript.
// 1. If Statements,
// 2. Truthy and Falsy values,
// 3. Switch Statements,
// 4. Ternary Operator.

// Some draft code to be used in this script.
// Sample JavaScript code to demonstrate the syntax and various forms of the `if` statement.

// Sample JavaScript code to demonstrate various `if` statement usages and comparison operators.

// Variable for conditional checks
const age = 18;

// Basic Syntax of an `if` Statement:
// if (Condition) {
//   // Code to execute if the condition is true.
// }

// Example 1: Simple `if` Statement with equality check (loose comparison)
// Using `==` checks if `age` is equal to 18, allowing type coercion.
// For instance, if `age` were the string "18", this would still return true.
if (age == 18) {
  console.log("You are an adult (using loose equality).");
}

// Example 2: `if` Statement with strict equality check (`===`)
// This checks if `age` is exactly equal to 18, both in type and value.
// Type coercion is not allowed here, so `age` must be the number 18.
if (age === 18) {
  console.log("You are an adult (using strict equality).");
}

// Example 3: `if` Statement with less than comparison
// Checks if `age` is less than 18.
if (age < 18) {
  console.log("You are a minor (age is less than 18).");
}

// Example 4: `if` Statement with greater than comparison
// Checks if `age` is greater than 18.
if (age > 18) {
  console.log("You are older than 18.");
}

// Example 5: `if` Statement with less than or equal to comparison
// Checks if `age` is 18 or younger.
if (age <= 18) {
  console.log("You are 18 or younger.");
}

// Example 6: `if` Statement with greater than or equal to comparison
// Checks if `age` is 18 or older.
if (age >= 18) {
  console.log("You are 18 or older.");
}

// Example 7: `if` Statement with inequality check (loose inequality)
// Checks if `age` is NOT equal to 18, allowing type coercion.
if (age != 18) {
  console.log("Your age is not exactly 18 (loose inequality).");
}

// Example 8: `if...else` Statement
// Provides an alternative action if the initial condition is false.
// Checks if `age` is 18 or older; otherwise, it executes the `else` block.
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a child.");
}

// Additional Examples: Demonstrating strict and incorrect usage of inequality operators

// Example 9: Using `!==` (strict inequality)
// This checks if `age` is NOT exactly equal to 18, ensuring both type and value differ.
if (age !== 18) {
  console.log("You are not exactly 18 (strict inequality).");
}

// Example 10: Incorrect usage (this will throw an error)
// `!===` is not a valid JavaScript operator and will cause a syntax error.
// Uncommenting the following code would produce an error:
// if (age !=== 18) {
//   console.log("Invalid syntax");
// }

// Example 11: Using `!=` (loose inequality)
// This checks if `age` is NOT equal to 18, allowing type coercion.
// For instance, if `age` were the string "18", this would still return true.
if (age != 18) {
  console.log("You are not exactly 18 (loose inequality).");
}

// Comprehensive Examples with `else if` and `else`

// Example 12: `if...else` Statement
// Provides an alternative action if the initial condition is false.
// Checks if `age` is 18 or older; otherwise, it executes the `else` block.
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a child.");
}
// Example 13: Using `if...else if...else`
// Provides multiple conditions to evaluate the value of `age`.
if (age >= 18) {
  console.log("You are an adult.");
} else if (age >= 13) {
  console.log("You are a teenager.");
} else {
  console.log("You are a child.");
}

// Summary:
// - `==` and `!=` allow type coercion, so "18" == 18 is true, but "18" !== 18 is false.
// - Use `===` and `!==` for strict type comparisons, avoiding unintentional type conversions.
// - `else if` allows for multiple conditions, while `else` provides a fallback if no other conditions are met.
