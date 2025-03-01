// Solution to Challenge 5: Ask Cursor AI

// Below is an example of what your learning notes might look like after asking
// Cursor AI about the difference between let and const in JavaScript.

/*
NOTES ON LET VS CONST IN JAVASCRIPT

1. let:
   - Allows you to declare variables that can be reassigned later
   - The value can change throughout your program
   - Block-scoped (only accessible within the block it was declared)
   - Example:
     let age = 25;
     age = 26; // This is valid - we can change the value

2. const:
   - Used to declare variables that cannot be reassigned after initialization
   - Must be assigned a value when declared
   - Also block-scoped like let
   - Example:
     const PI = 3.14159;
     PI = 3.14; // This would cause an error - can't reassign const variables
   
   - Important note: While const prevents reassignment, it doesn't make objects immutable
     const person = { name: "Sam" };
     person.name = "Samuel"; // This is valid - we're modifying the object, not reassigning the variable
     person = { name: "Samuel" }; // This would cause an error - can't reassign the variable

3. When to use each:
   - Use const by default (for variables that won't change)
   - Use let only when you need to reassign the variable
   - Avoid using var (the older way to declare variables) in modern JavaScript
*/

// You can also include code examples to demonstrate what you've learned:

// Example with let
let score = 0;
console.log("Initial score:", score);
score = 10;
console.log("Updated score:", score);

// Example with const
const MAX_SCORE = 100;
console.log("Maximum score:", MAX_SCORE);
// MAX_SCORE = 200; // This would cause an error if uncommented

// Example showing that const objects can still be modified
const player = { name: "Sam", level: 1 };
console.log("Initial player:", player);
player.level = 2; // This works - we're modifying a property, not reassigning the variable
console.log("Updated player:", player); 