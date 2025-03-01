# Lesson 2: Variables and Data Types

In this lesson, you'll learn about variables and the different types of data you can work with in JavaScript.

## Variables: Storing and Naming Data

Variables are like containers that hold data in your program. They allow you to store values that you can use and change throughout your code.

### Declaring Variables

In modern JavaScript, there are three ways to declare variables:

1. **`let`** - For variables whose values can change
2. **`const`** - For variables whose values will not change (constants)
3. **`var`** - The older way to declare variables (try to avoid using this)

Let's see how to use them:

```javascript
// Using let for variables that can change
let age = 25;
age = 26; // This is valid - we can change the value

// Using const for variables that should not change
const PI = 3.14159;
// PI = 3.14; // This would cause an error - can't reassign const variables

// Using var (older method, not recommended for new code)
var name = "Sam";
name = "Samuel"; // This works, but var has some quirks that let and const fix
```

### Variable Naming Rules

When naming variables in JavaScript:

- Names can contain letters, digits, underscores, and dollar signs
- Names must begin with a letter, $ or _
- Names are case sensitive (`name` and `Name` are different variables)
- Reserved words (like JavaScript keywords) cannot be used as names

Good variable names are descriptive and tell you what the variable is for:

```javascript
// Good variable names
let firstName = "Sam";
let totalScore = 95;
let isGameOver = false;

// Less helpful variable names
let x = "Sam";
let y = 95;
let z = false;
```

## Data Types in JavaScript

JavaScript has several built-in data types that you'll use regularly:

### 1. Primitive Data Types

#### Strings
Strings are text, enclosed in single quotes, double quotes, or backticks:

```javascript
let greeting = "Hello, Sam!";
let message = 'Welcome to JavaScript!';
let template = `Your score is ${totalScore}`; // Template literals using backticks
```

#### Numbers
Numbers in JavaScript can be integers or floating-point (decimal) values:

```javascript
let integer = 42;
let decimal = 3.14;
let negative = -10;
```

#### Booleans
Booleans represent true or false values:

```javascript
let isLoggedIn = true;
let hasPermission = false;
```

#### Undefined
When a variable is declared but not assigned a value, it has the value `undefined`:

```javascript
let notDefined;
console.log(notDefined); // Outputs: undefined
```

#### Null
`null` represents the intentional absence of any value:

```javascript
let emptyValue = null;
```

### 2. Complex Data Types

#### Objects
Objects are collections of related data, stored as key-value pairs:

```javascript
let person = {
  name: "Sam",
  age: 25,
  isStudent: true
};

// Accessing object properties
console.log(person.name); // Outputs: Sam
console.log(person["age"]); // Outputs: 25
```

#### Arrays
Arrays are ordered lists of values:

```javascript
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

// Accessing array elements (indexing starts at 0)
console.log(colors[0]); // Outputs: red
console.log(numbers[2]); // Outputs: 3
```

## Type Conversion

JavaScript is a "dynamically typed" language, which means variables can change types. Sometimes JavaScript automatically converts types for you, and sometimes you need to do it manually:

### Automatic Type Conversion (Coercion)

```javascript
let result = "5" + 2; // JavaScript converts 2 to a string: "52"
let anotherResult = "5" - 2; // JavaScript converts "5" to a number: 3
```

### Manual Type Conversion

```javascript
// Converting to String
let num = 123;
let str = String(num); // "123"
// or
str = num.toString(); // "123"

// Converting to Number
let str2 = "456";
let num2 = Number(str2); // 456
// or
num2 = parseInt(str2); // 456 (for integers)
num2 = parseFloat("3.14"); // 3.14 (for decimals)

// Converting to Boolean
let bool = Boolean(1); // true
let bool2 = Boolean(0); // false
let bool3 = Boolean(""); // false
let bool4 = Boolean("hello"); // true
```

## Basic Operators

JavaScript has various operators for performing operations:

### Arithmetic Operators
```javascript
let a = 10;
let b = 3;

console.log(a + b); // Addition: 13
console.log(a - b); // Subtraction: 7
console.log(a * b); // Multiplication: 30
console.log(a / b); // Division: 3.3333...
console.log(a % b); // Modulus (remainder): 1
console.log(a ** b); // Exponentiation (power): 1000
```

### Assignment Operators
```javascript
let x = 5; // Assign 5 to x
x += 3; // Same as: x = x + 3 (x is now 8)
x -= 2; // Same as: x = x - 2 (x is now 6)
x *= 4; // Same as: x = x * 4 (x is now 24)
x /= 3; // Same as: x = x / 3 (x is now 8)
```

### Comparison Operators
```javascript
let p = 5;
let q = 10;

console.log(p == q); // Equal to: false
console.log(p != q); // Not equal to: true
console.log(p > q); // Greater than: false
console.log(p < q); // Less than: true
console.log(p >= q); // Greater than or equal to: false
console.log(p <= q); // Less than or equal to: true

// Strict equality (checks value AND type)
console.log(5 == "5"); // true (values are equal after type conversion)
console.log(5 === "5"); // false (different types)
```

## Try It Yourself

Experiment with variables and data types by creating a new file called `data-types.js`:

```javascript
// Declare variables of different types
let name = "Sam";
let age = 25;
let isStudent = true;
let hobbies = ["reading", "gaming", "coding"];
let address = {
  street: "123 Main St",
  city: "Anytown",
  zipCode: "12345"
};

// Print them to the console
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Hobbies:", hobbies);
console.log("Address:", address);

// Try accessing specific elements
console.log("First hobby:", hobbies[0]);
console.log("City:", address.city);

// Try some type conversions
console.log("Age as string:", String(age));
console.log("'25' as number:", Number("25"));
```

## Next Steps

Now that you understand variables and data types, head over to the [challenges](../challenges/02-variables-data-types-challenges.md) to practice what you've learned!

Remember, the best way to learn programming is by doing. Don't worry about memorizing everything - you'll get more comfortable with these concepts as you practice. 