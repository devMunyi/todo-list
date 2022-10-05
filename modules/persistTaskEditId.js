import populateDescInput from './populateDescInput.js';

const persistTaskEditId = (taskId) => {
  const taskInputHiddenElement = document.getElementById('task-edit-id');

  taskInputHiddenElement.value = taskId;

  populateDescInput(taskId);
};

export default persistTaskEditId;
