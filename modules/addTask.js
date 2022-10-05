import ToDoList from './ToDoList.js';

const addTask = (newTask) => {
  // available tasks
  const tasks = ToDoList.getTasksList();
  // add a task
  tasks.push(newTask);
  // persist updated tasks
  ToDoList.persistToLocalstorage(tasks);
};

export default addTask;
