import './style.css';
import displayToDOList from '../modules/displayToDOList.js';
import ToDoList from '../modules/ToDoList.js';
import removeTask from '../modules/removeTask.js';
import editTask from '../modules/editTask.js';
import toggleTaskComplete from '../modules/toggleTaskComplete.js';
import clearCompleted from '../modules/clearCompleted.js';
import mouseOver from '../modules/mouseOver.js';
import mouseOut from '../modules/mouseOut.js';

// load UI tasks list on page load
document.addEventListener('DOMContentLoaded', () => {
  // access the list of tasks
  const tasksList = ToDoList.getTasksList();
  // display list on page load
  displayToDOList(tasksList);
});

// get the input element and value
const taskDescriptionInput = document.getElementById('description-input');

taskDescriptionInput.addEventListener('change', () => {
  taskDescriptionInput.focus(); // focus input field value change
});

// get the form element
const addTaskForm = document.getElementById('add-task-form');

// listen to form submission
addTaskForm.addEventListener('submit', (e) => {
  // prevent form submission
  e.preventDefault();

  // get hidden Element
  const taskInputHiddenElement = document.getElementById('task-edit-id');
  const taskIndex = ToDoList.getTaskIndex();
  const taskDescriptionValue = taskDescriptionInput.value;
  const todoList = new ToDoList(taskIndex, taskDescriptionValue);

  // handle add edit based on id value on hidden input
  const taskEditId = parseInt(taskInputHiddenElement.value, 10);
  if (taskEditId > 0) {
    ToDoList.editTask(taskEditId, taskDescriptionValue);
  } else {
    // add the task
    ToDoList.addTask(todoList);
  }

  // clear the input field/set to default after submission
  taskDescriptionInput.value = '';
  taskInputHiddenElement.value = 0;
});

const clearCompletedBtn = document.querySelector('.clear-completed-btn');
clearCompletedBtn.addEventListener('click', clearCompleted);

window.removeTask = removeTask;
window.editTask = editTask;
window.toggleTaskComplete = toggleTaskComplete;
window.mouseOver = mouseOver;
window.mouseOut = mouseOut;
