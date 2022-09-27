import './style.css';
import displayToDOList from '../modules/displayToDOList.js';

const todoList = [
  {
    index: 1,
    description: 'Solve 2 to 3 js coding challenges',
    completed: false,
  },
  {
    index: 2,
    description: 'Fix 2 issues open on awesome books project',
    completed: false,
  },

  {
    index: 3,
    description: 'Complete To Do list project',
    completed: false,
  },

  {
    index: 4,
    description: 'Join standup meeting in the evening',
    completed: false,
  },
];

document.addEventListener('DOMContentLoaded', () => {
  // display list on page load
  displayToDOList(todoList);
});
