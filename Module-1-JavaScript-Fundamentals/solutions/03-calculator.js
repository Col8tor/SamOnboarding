// Solution to Challenge 3: Simple Calculator

// Step 1: Define the two numbers we'll perform operations on
let num1 = 10;
let num2 = 5;

// Step 2: Perform addition and print the result
let sum = num1 + num2;
console.log(num1 + " + " + num2 + " = " + sum);
// Alternative using template literals
// console.log(`${num1} + ${num2} = ${sum}`);

// Step 3: Perform subtraction and print the result
let difference = num1 - num2;
console.log(num1 + " - " + num2 + " = " + difference);
// console.log(`${num1} - ${num2} = ${difference}`);

// Step 4: Perform multiplication and print the result
let product = num1 * num2;
console.log(num1 + " * " + num2 + " = " + product);
// console.log(`${num1} * ${num2} = ${product}`);

// Step 5: Perform division and print the result
let quotient = num1 / num2;
console.log(num1 + " / " + num2 + " = " + quotient);
// console.log(`${num1} / ${num2} = ${quotient}`);

// Bonus: You can also try other operations like:
// Modulus (remainder after division)
let remainder = num1 % num2;
console.log(num1 + " % " + num2 + " = " + remainder);
// console.log(`${num1} % ${num2} = ${remainder}`);

// Exponentiation (power)
let power = num1 ** num2;  // 10^5 = 100000
console.log(num1 + " ** " + num2 + " = " + power);
// console.log(`${num1} ** ${num2} = ${power}`); 