# Project: Personal Task Tracker

In this project, you'll build a simple task tracker application using JavaScript. This will help you apply the concepts you've learned in Module 1.

## Project Overview

You'll create a command-line task tracker that allows you to:
1. Add tasks
2. View all tasks
3. Mark tasks as complete
4. Delete tasks
5. Filter tasks by status (complete/incomplete)

## Learning Goals

By completing this project, you'll practice:
- Working with variables and data types
- Using arrays and objects
- Implementing control flow (if statements, loops)
- Writing and calling functions
- Basic input/output operations

## Project Structure

Create the following files in the `projects` directory:

1. `task-tracker.js` - The main application file
2. `tasks.js` - A file to store your tasks (we'll simulate a database)

## Step-by-Step Instructions

### Step 1: Set Up the Tasks Module

In `tasks.js`, create:

1. An array to store task objects
2. Functions to:
   - Add a new task
   - Get all tasks
   - Mark a task as complete
   - Delete a task
   - Filter tasks by status

Each task should be an object with properties like:
- `id` (a unique identifier)
- `title` (the task description)
- `completed` (a boolean indicating if the task is done)
- `createdAt` (the date the task was created)

### Step 2: Create the Main Application

In `task-tracker.js`, implement:

1. A way to display a menu of options to the user
2. Logic to handle user input and call the appropriate functions from `tasks.js`
3. A way to display the results to the user

### Step 3: Test Your Application

Make sure your application can:
- Add several tasks
- Display all tasks
- Mark tasks as complete
- Delete tasks
- Filter and show only completed or incomplete tasks

## Bonus Challenges

If you finish the basic requirements, try adding these features:

1. Add due dates to tasks
2. Sort tasks by creation date or due date
3. Add priority levels (high, medium, low)
4. Add categories or tags to tasks
5. Save tasks to a file so they persist when the program is closed

## Getting Started

Here's some starter code for `tasks.js`:

```javascript
// Array to store tasks
let tasks = [];

// Function to generate a unique ID
function generateId() {
  return Math.floor(Math.random() * 1000000);
}

// Function to add a new task
function addTask(title) {
  const newTask = {
    id: generateId(),
    title: title,
    completed: false,
    createdAt: new Date()
  };
  
  tasks.push(newTask);
  return newTask;
}

// Function to get all tasks
function getAllTasks() {
  return tasks;
}

// Function to mark a task as complete
function completeTask(id) {
  // Your code here
}

// Function to delete a task
function deleteTask(id) {
  // Your code here
}

// Function to filter tasks by status
function filterTasks(completed) {
  // Your code here
}

// Export functions so they can be used in other files
module.exports = {
  addTask,
  getAllTasks,
  completeTask,
  deleteTask,
  filterTasks
};
```

And here's some starter code for `task-tracker.js`:

```javascript
// Import the tasks module
const tasks = require('./tasks');

// Function to display the menu
function displayMenu() {
  console.log('\n===== Task Tracker =====');
  console.log('1. Add a new task');
  console.log('2. View all tasks');
  console.log('3. Mark a task as complete');
  console.log('4. Delete a task');
  console.log('5. View only completed tasks');
  console.log('6. View only incomplete tasks');
  console.log('7. Exit');
  console.log('========================\n');
}

// Function to handle user input
function handleUserInput(option) {
  switch (option) {
    case '1':
      // Add a new task
      // Your code here
      break;
    case '2':
      // View all tasks
      // Your code here
      break;
    // Add more cases for other options
    default:
      console.log('Invalid option. Please try again.');
  }
}

// Main function to run the application
function main() {
  displayMenu();
  // In a real application, you would get user input here
  // For now, let's simulate adding and viewing tasks
  
  console.log('Adding sample tasks...');
  tasks.addTask('Learn JavaScript basics');
  tasks.addTask('Complete Module 1 project');
  tasks.addTask('Review what I learned');
  
  console.log('All tasks:');
  const allTasks = tasks.getAllTasks();
  allTasks.forEach(task => {
    console.log(`- ${task.title} (${task.completed ? 'Completed' : 'Incomplete'})`);
  });
}

// Run the application
main();
```

## Submission

When you've completed the project, you can:
1. Test your code thoroughly
2. Make sure your code is well-commented
3. Share your solution with others to get feedback

## Need Help?

If you get stuck, you can:
1. Review the relevant lessons
2. Use Cursor's AI to ask for hints or explanations
3. Look at the solution in the solutions directory (but try to solve it yourself first!) 