# Visma Todo List App

This is a simple To-Do List application built with HTML, CSS, and JavaScript. It allows users to add, manage, and sort their tasks based on different criteria.

## Features
- Add new tasks with a description and an optional deadline.
- Tasks are automatically sorted by recently added, deadline, and recently completed.
- Users can mark tasks as completed or delete them.
- The application uses **sessionStorage** to save tasks locally, ensuring they persist on page reloads.

## How to Use
1. **Adding a New Task:** Enter a task description in the "Task Description" input field. You may also set an optional deadline for the task in the "Deadline" input field. Click the "Add" button to create the task.

2. **Sorting Tasks:**
- Click on "Recently Added" to sort tasks based on their creation time. Uncompleted tasks will be sorted by the time of addition, with the most recently added tasks displayed first.
- Click on "Deadline" to sort tasks based on their set deadlines. Tasks with earlier deadlines will be displayed first.
- Click on "Recently Completed" to sort tasks based on their completion status. Completed tasks will be displayed first, followed by uncompleted tasks.

3. **Managing Tasks:**
- Mark a task as completed by checking the corresponding checkbox.
- Delete a task by clicking the "Delete" button next to the task.

4. **Automatic Saving:**
- The application automatically saves tasks to sessionStorage.

## Functions and Methods
The application uses several functions and methods to handle task creation, sorting, and user interactions:

- **calculateTimeLeft(deadline):** Calculates the time left until the given deadline and returns a formatted string representing the time remaining.

- **createTask(taskDescription, deadline):** Creates a new task element with the provided description and deadline. It also handles task completion and deletion.

- **saveTasksToSessionStorage():** Stores the current tasks in sessionStorage to persist the data between page reloads.

- **updateTodoTasksElement():** Updates the display of tasks based on the current todoArray.

- **toggleSortingOption(clickedOption, sortingFunction):** Handles the sorting options and updates the active sorting style.

- Sorting functions **(sortRecentlyAdded(), sortDeadline(), and sortRecentlyCompleted()):** Sort tasks based on different criteria.
