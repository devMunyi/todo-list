import ToDoList from './ToDoList.js';
import displayToDOList from './displayToDOList.js';

const editTask = (index, newDescription) => {
  // available tasks
  const tasks = ToDoList.getTasksList();

  const tasksCount = ToDoList.getTasksCount();

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
