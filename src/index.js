import './style.css';

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
    completed: true,
  },
];

const dynamicList = todoList
  .map(
    (item) => `<div class="tdl-description__container" id="desc-${item.index}">
      <div class="tdl-description__left--item">
        <input type="checkbox" id="myCheck-${item.index}" ${
  item.completed ? 'checked' : ''
}/>
        <label for="myCheck">${item.description}</label>
      </div>
      <div class="tdl-description__right--item right--item">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>`,
  )
  .join('');

document.querySelector('.descriptions-container').innerHTML = dynamicList;
