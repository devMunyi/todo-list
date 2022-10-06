import ToDoList from './ToDoList.js';
import displayToDOList from './displayToDOList.js';

const toggleTaskComplete = (index, list = '') => {
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
      if (tasks[i].completed) {
        tasks[i].completed = false;
      } else {
        tasks[i].completed = true;
      }

      // update UI list
      displayToDOList(tasks);

      // update localstorage
      ToDoList.persistToLocalstorage(tasks);

      break; // exit the loop
    }
  }
};

export default toggleTaskComplete;
