import editTask from './modules/editTask.js';
import toggleTaskComplete from './modules/toggleTaskComplete.js';
import clearCompleted from './modules/clearCompleted.js';

describe('part two of todo list testing', () => {
  const tasks = [
    {
      index: 1,
      description: 'Old tasks description 1',
      completed: true,
    },
    {
      index: 2,
      description: 'Old tasks description 2',
      completed: false,
    },
    {
      index: 3,
      description: 'Old tasks description 3',
      completed: true,
    },
  ];
  test('Todo list test edit function', () => {
    document.body.innerHTML = '<div class="descriptions-container"></div>';

    const newDesc = 'testing new task description value';
    tasks[1].description = newDesc;
    editTask(1, newDesc);

    expect(tasks[1].description).toBe(newDesc);
  });
});
