import ToDoList from './ToDoList.js';
import displayToDOList from './displayToDOList.js';

const clearCompleted = () => {
  const tasks = ToDoList.getTasksList();

  // const incompleteTasks = tasks.filter(ToDoList.isInComplete);
  const incompleteTasks = tasks.filter((task) => task.completed === false);

  // update tasks index
  const updatedList = ToDoList.updateTasksIndex(incompleteTasks);

  // update UI with new list
  displayToDOList(updatedList);

  // update localstorage with the new list
  ToDoList.persistToLocalstorage(updatedList);

  // ensure the input field is empty
  document.getElementById('description-input').value = '';
};

export default clearCompleted;
