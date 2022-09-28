import ToDoList from './ToDoList.js';

const editTask = (index) => {
  // get the input element and value
  const taskInputHiddenElement = document.getElementById('task-edit-id');
  const taskDescriptionInput = document.getElementById('description-input');
  const tasks = ToDoList.getTasksList();

  let taskEditDesc = '';

  const tasksCount = ToDoList.getTasksCount();
  for (let i = 0; i < tasksCount; i += 1) {
    if (tasks[i].index === index) {
      taskEditDesc = tasks[i].description;
      taskInputHiddenElement.value = index;
      break; // exit the loop
    }
  }
  // populate description input field
  taskDescriptionInput.value = taskEditDesc;
};

export default editTask;
