# Challenges: Variables and Data Types

These challenges will help you practice working with variables and different data types in JavaScript.

## Challenge 1: Personal Profile

Create a file called `profile.js` that:

1. Creates variables for your name, age, favorite color, and whether you like pizza (boolean)
2. Creates an array of your top 3 favorite movies or books
3. Creates an object that represents your contact information (email, phone, city)
4. Prints all this information to the console in a readable format

<details>
<summary>Hint</summary>
Use descriptive variable names and organize your console.log statements to make the output easy to read. You can use template literals (backticks) to format your strings nicely.
</details>

## Challenge 2: Temperature Converter (Enhanced)

Create a file called `temperature-converter.js` that:

1. Declares a variable with a Celsius temperature
2. Converts it to Fahrenheit using the formula: `F = C * 9/5 + 32`
3. Converts it to Kelvin using the formula: `K = C + 273.15`
4. Prints all three temperatures with proper labels
5. Formats the temperatures to show only 1 decimal place

<details>
<summary>Hint</summary>
You can use the `toFixed(1)` method to format a number to 1 decimal place. For example: `temperature.toFixed(1)`.
</details>

## Challenge 3: Shopping Cart

Create a file called `shopping-cart.js` that:

1. Creates an array of at least 5 items you might buy at a store
2. Creates an array of prices for each item
3. Calculates and prints the total cost of all items
4. Calculates and prints the average price of items in your cart
5. Finds and prints the most expensive item (highest price)

<details>
<summary>Hint</summary>
You'll need to use a loop to add up all the prices. To find the highest price, you can either sort the array or use a loop to compare each price with the current highest.
</details>

## Challenge 4: String Manipulation

Create a file called `string-manipulation.js` that:

1. Declares a variable with a sentence of your choice
2. Prints the length of the sentence
3. Converts the entire sentence to uppercase and prints it
4. Converts the entire sentence to lowercase and prints it
5. Extracts and prints the first word of the sentence
6. Replaces a specific word in the sentence and prints the new sentence

<details>
<summary>Hint</summary>
JavaScript strings have many built-in methods like `length`, `toUpperCase()`, `toLowerCase()`, `split()`, and `replace()` that you can use.
</details>

## Challenge 5: Type Conversion Practice

Create a file called `type-conversion.js` that demonstrates:

1. Converting a string to a number and performing a mathematical operation
2. Converting a number to a string and concatenating it with another string
3. Converting different values to booleans (try empty string, 0, null, undefined)
4. The difference between `==` and `===` with examples
5. A situation where automatic type conversion (coercion) might cause unexpected results

<details>
<summary>Hint</summary>
Remember that `Number()`, `String()`, and `Boolean()` are functions that convert values to those types. For the last part, try adding a string number to a number and see what happens.
</details>

## Challenge 6: Create a Mini Calculator

Create a file called `mini-calculator.js` that:

1. Declares variables for two numbers
2. Performs all basic arithmetic operations (+, -, *, /, %, **)
3. Stores each result in a properly named variable
4. Prints all results with descriptive messages
5. Includes at least one example of using an assignment operator (+=, -=, etc.)

<details>
<summary>Hint</summary>
Make sure to use clear variable names for each operation's result, like `sum`, `difference`, `product`, etc.
</details>

## How to Run Your Solutions

Remember, you can run your JavaScript files using Node.js in the terminal:

```
node filename.js
```

## Next Steps

Once you've completed these challenges, you're ready to move on to [Lesson 3: Control Flow](../lessons/03-control-flow.md)!

If you get stuck, don't hesitate to:
1. Review the lesson material
2. Check the hints provided
3. Ask Cursor's AI for help
4. Look at the solution files (but try to solve the challenges on your own first!) 