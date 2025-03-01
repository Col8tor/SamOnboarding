// Solution to Challenge 4: Temperature Converter

// Step 1: Define the temperature in Fahrenheit
let fahrenheit = 68;  // A comfortable room temperature in Fahrenheit

// Step 2: Convert Fahrenheit to Celsius using the formula: C = (F - 32) * 5/9
let celsius = (fahrenheit - 32) * 5 / 9;

// Step 3: Print both temperatures with appropriate labels
console.log(fahrenheit + "°F is equal to " + celsius + "°C");

// Alternative using template literals and rounding to 2 decimal places
// The toFixed() method formats a number to a specified number of decimal places
console.log(`${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`);

// Bonus: Convert from Celsius to Fahrenheit
// The formula is: F = (C * 9/5) + 32
let newCelsius = 25;  // A comfortable room temperature in Celsius
let newFahrenheit = (newCelsius * 9/5) + 32;
console.log(`${newCelsius}°C is equal to ${newFahrenheit}°F`);

// Note: The degree symbol (°) is just a special character that makes the output
// look nicer, but it's not required for the program to work correctly. 