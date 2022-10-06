import ToDoList from './ToDoList.js';
import displayToDOList from './displayToDOList.js';

const editTask = (index, newDescription, list = '') => {
  // available tasks
  let tasks = null;
  let tasksCount = null;
  if (list) {
    tasks = list;
    tasksCount = list.length;
  } else {
    tasks = ToDoList.getTasksList();
    tasksCount = ToDoList.getTasksCount();
  }

  for (let i = 0; i < tasksCount; i += 1) {
    if (tasks[i].index === index) {
      tasks[i].description = newDescription;
      break;
    }
  }

  // update local storage
  ToDoList.persistToLocalstorage(tasks);

  // update UI list
  displayToDOList(tasks);
};

export default editTask;
