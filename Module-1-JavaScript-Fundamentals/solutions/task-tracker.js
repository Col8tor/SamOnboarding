// Solution for task-tracker.js

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

// Function to display tasks
function displayTasks(taskList) {
  if (taskList.length === 0) {
    console.log('No tasks to display.');
    return;
  }

  console.log('\n----- Tasks -----');
  taskList.forEach((task, index) => {
    const status = task.completed ? '✓' : '☐';
    const date = task.createdAt.toLocaleDateString();
    console.log(`${index + 1}. [${status}] ${task.title} (ID: ${task.id}, Created: ${date})`);
    
    // Display due date if it exists
    if (task.dueDate) {
      const dueDate = task.dueDate.toLocaleDateString();
      console.log(`   Due: ${dueDate}`);
    }
  });
  console.log('-----------------\n');
}

// Function to simulate getting user input
// In a real application, you would use a library like readline-sync or prompt
function simulateUserInput(prompt) {
  console.log(`${prompt} (Simulated input)`);
  
  // For demonstration purposes, we'll return predefined values
  // based on the prompt
  if (prompt.includes('task title')) {
    return 'Buy groceries';
  } else if (prompt.includes('task ID')) {
    // Return the ID of the first task if available
    const allTasks = tasks.getAllTasks();
    return allTasks.length > 0 ? allTasks[0].id : 0;
  } else if (prompt.includes('option')) {
    // Simulate selecting option 2 (View all tasks)
    return '2';
  }
  
  return '';
}

// Function to handle user input
function handleUserInput(option) {
  switch (option) {
    case '1':
      // Add a new task
      const title = simulateUserInput('Enter task title:');
      const newTask = tasks.addTask(title);
      console.log(`Task added: ${newTask.title} (ID: ${newTask.id})`);
      break;
      
    case '2':
      // View all tasks
      const allTasks = tasks.getAllTasks();
      displayTasks(allTasks);
      break;
      
    case '3':
      // Mark a task as complete
      const completeId = simulateUserInput('Enter task ID to mark as complete:');
      const completedTask = tasks.completeTask(completeId);
      
      if (completedTask) {
        console.log(`Task marked as complete: ${completedTask.title}`);
      } else {
        console.log('Task not found.');
      }
      break;
      
    case '4':
      // Delete a task
      const deleteId = simulateUserInput('Enter task ID to delete:');
      const deletedTask = tasks.deleteTask(deleteId);
      
      if (deletedTask) {
        console.log(`Task deleted: ${deletedTask.title}`);
      } else {
        console.log('Task not found.');
      }
      break;
      
    case '5':
      // View only completed tasks
      const completedTasks = tasks.filterTasks(true);
      console.log('Completed tasks:');
      displayTasks(completedTasks);
      break;
      
    case '6':
      // View only incomplete tasks
      const incompleteTasks = tasks.filterTasks(false);
      console.log('Incomplete tasks:');
      displayTasks(incompleteTasks);
      break;
      
    case '7':
      // Exit
      console.log('Goodbye!');
      process.exit(0);
      break;
      
    default:
      console.log('Invalid option. Please try again.');
  }
}

// Main function to run the application
function main() {
  console.log('Welcome to Task Tracker!');
  
  // Add some sample tasks
  tasks.addTask('Learn JavaScript basics');
  tasks.addTask('Complete Module 1 project');
  tasks.addTask('Review what I learned');
  
  // Mark one task as complete
  const allTasks = tasks.getAllTasks();
  if (allTasks.length > 0) {
    tasks.completeTask(allTasks[0].id);
  }
  
  // Add a due date to a task (bonus feature)
  if (allTasks.length > 1) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tasks.addDueDate(allTasks[1].id, tomorrow);
  }
  
  // Simulate a user session
  let running = true;
  let count = 0;
  
  while (running && count < 3) { // Limit to 3 iterations for demonstration
    displayMenu();
    const option = simulateUserInput('Enter option:');
    handleUserInput(option);
    count++;
  }
  
  console.log('\nThis is a simulated session. In a real application, you would:');
  console.log('1. Use a library like readline-sync to get actual user input');
  console.log('2. Run the application in a continuous loop until the user chooses to exit');
  console.log('3. Implement error handling for invalid inputs');
  console.log('4. Possibly save tasks to a file or database for persistence\n');
}

// Run the application
main(); 