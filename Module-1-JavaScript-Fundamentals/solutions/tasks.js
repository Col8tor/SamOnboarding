// Solution for tasks.js

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
  // Find the task with the given id
  const taskIndex = tasks.findIndex(task => task.id === id);
  
  // If the task exists, mark it as complete
  if (taskIndex !== -1) {
    tasks[taskIndex].completed = true;
    return tasks[taskIndex];
  }
  
  // Return null if the task wasn't found
  return null;
}

// Function to delete a task
function deleteTask(id) {
  // Find the task with the given id
  const taskIndex = tasks.findIndex(task => task.id === id);
  
  // If the task exists, remove it from the array
  if (taskIndex !== -1) {
    const deletedTask = tasks[taskIndex];
    tasks.splice(taskIndex, 1);
    return deletedTask;
  }
  
  // Return null if the task wasn't found
  return null;
}

// Function to filter tasks by status
function filterTasks(completed) {
  // Return tasks that match the completed status
  return tasks.filter(task => task.completed === completed);
}

// Bonus function: Add due date to a task
function addDueDate(id, dueDate) {
  const taskIndex = tasks.findIndex(task => task.id === id);
  
  if (taskIndex !== -1) {
    tasks[taskIndex].dueDate = new Date(dueDate);
    return tasks[taskIndex];
  }
  
  return null;
}

// Bonus function: Sort tasks by creation date
function sortByCreationDate(ascending = true) {
  return [...tasks].sort((a, b) => {
    const comparison = a.createdAt - b.createdAt;
    return ascending ? comparison : -comparison;
  });
}

// Bonus function: Sort tasks by due date
function sortByDueDate(ascending = true) {
  // Filter out tasks without due dates
  const tasksWithDueDate = tasks.filter(task => task.dueDate);
  const tasksWithoutDueDate = tasks.filter(task => !task.dueDate);
  
  // Sort tasks with due dates
  const sortedTasks = tasksWithDueDate.sort((a, b) => {
    const comparison = a.dueDate - b.dueDate;
    return ascending ? comparison : -comparison;
  });
  
  // Return sorted tasks followed by tasks without due dates
  return [...sortedTasks, ...tasksWithoutDueDate];
}

// Export functions so they can be used in other files
module.exports = {
  addTask,
  getAllTasks,
  completeTask,
  deleteTask,
  filterTasks,
  addDueDate,
  sortByCreationDate,
  sortByDueDate
}; 