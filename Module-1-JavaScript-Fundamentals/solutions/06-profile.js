// Solution to Challenge 1: Personal Profile

// Step 1: Create variables for personal information
const name = "Sam";
const age = 25;
const favoriteColor = "blue";
const likesPizza = true;

// Step 2: Create an array of favorite movies/books
const favoriteBooks = [
  "The Hobbit",
  "Harry Potter and the Prisoner of Azkaban",
  "Ready Player One"
];

// Step 3: Create an object for contact information
const contactInfo = {
  email: "sam@example.com",
  phone: "555-123-4567",
  city: "San Francisco"
};

// Step 4: Print all information in a readable format

// Using regular string concatenation
console.log("--- PERSONAL PROFILE ---");
console.log("Name: " + name);
console.log("Age: " + age);
console.log("Favorite Color: " + favoriteColor);
console.log("Likes Pizza: " + (likesPizza ? "Yes" : "No"));
console.log("\n");

// Using template literals (more modern approach)
console.log(`--- FAVORITE BOOKS ---`);
console.log(`1. ${favoriteBooks[0]}`);
console.log(`2. ${favoriteBooks[1]}`);
console.log(`3. ${favoriteBooks[2]}`);
console.log("\n");

console.log(`--- CONTACT INFORMATION ---`);
console.log(`Email: ${contactInfo.email}`);
console.log(`Phone: ${contactInfo.phone}`);
console.log(`City: ${contactInfo.city}`);

// Bonus: Alternative way to print the array using a loop
console.log("\n--- FAVORITE BOOKS (using loop) ---");
for (let i = 0; i < favoriteBooks.length; i++) {
  console.log(`${i + 1}. ${favoriteBooks[i]}`);
}

// Bonus: Printing the object using Object.entries
console.log("\n--- CONTACT INFORMATION (using Object.entries) ---");
Object.entries(contactInfo).forEach(([key, value]) => {
  console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`);
}); 