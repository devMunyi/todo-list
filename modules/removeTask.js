import ToDoList from './ToDoList.js';
import displayToDOList from './displayToDOList.js';

const removeTask = (index) => {
  const tasks = ToDoList.getTasksList();

  // eliminate task specified by passed index from the list
  const tasksWithOneRemoved = tasks.filter((task) => task.index !== index);

  // update tasks index
  const updatedList = ToDoList.updateTasksIndex(tasksWithOneRemoved);

  // update localstorage
  ToDoList.persistToLocalstorage(updatedList);

  // re-render tasks list on the UI, with updated list
  displayToDOList(updatedList);

  // ensure the input field is empty
  document.getElementById('description-input').value = '';
};

export default removeTask;
