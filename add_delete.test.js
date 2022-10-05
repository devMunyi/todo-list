// require add task function
import addTask from './modules/addTask';
import removeTask from './modules/removeTask';

describe('Task 1', () => {
  test('test add task function ', () => {
    document.body.innerHTML = `<div class="descriptions-container"></div>`;
    addTask({
      index: 1,
      description: 'test if this task is added to the dom list',
      completed: false,
    });
    const list = document.querySelectorAll(
      '.descriptions-container .tdl-description__container'
    );
    expect(list).toHaveLength(1);
  });

  test('test remove task function ', () => {
    document.body.innerHTML = `<div class="descriptions-container"><div id="desc-1"></div></div><input
    class="tdl-description__input-field"
    type="text"
    name="description-input"
    id="description-input"
    placeholder="Add to your list..."
    required
  />`;
    removeTask(1);
    const taskElement = document.querySelector('desc-1');
    expect(taskElement).toBeNull();
  });
});
