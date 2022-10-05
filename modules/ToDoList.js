import displayToDOList from './displayToDOList.js';

export default class ToDoList {
  // object constructor
  constructor(index = 0, description = '', completed = false) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }

  // add a new task
  static addTask(newTask) {
    // available tasks
    const tasks = ToDoList.getTasksList();
    // add a task
    tasks.push(newTask);
    // persist updated tasks
    ToDoList.persistToLocalstorage(tasks);
  }

  static editTask(index, newDescription) {
    // available tasks
    const tasks = ToDoList.getTasksList();

    // const updatedTasks = tasks.array.forEach(element, elementIndex, arr => {
    //   if(elem)
    // });

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
  }

  // evaluate newly added task index
  static getTaskIndex() {
    let tasksTotal = ToDoList.getTasksCount();
    tasksTotal += 1;
    return tasksTotal;
  }

  // get tasks count
  static getTasksCount() {
    return ToDoList.getTasksList().length;
  }

  // get list of all tasks
  static getTasksList() {
    return JSON.parse(localStorage.getItem('tasks'))
      ? JSON.parse(localStorage.getItem('tasks'))
      : [];
  }

  // update the tasks index, usually after one is deleted
  static updateTasksIndex(list) {
    const listSize = list.length;
    for (let i = 0; i < listSize; i += 1) {
      list[i].index = i + 1;
    }
    return list;
  }

  // store the data to localstorage, will overwrite if data with same key exists
  static persistToLocalstorage(v, k = 'tasks') {
    localStorage.setItem(k, JSON.stringify(v));

    // re-render list UI
    displayToDOList(ToDoList.getTasksList());
  }

  // check if task is not complete
  static isInComplete(task) {
    if (task.completed) {
      return false;
    }
    return true;
  }
}
