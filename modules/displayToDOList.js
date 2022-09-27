const displayToDOList = (todoList) => {
  const dynamicList = todoList
    .map(
      (item) => `<div class="tdl-description__container" id="desc-${
        item.index
      }">
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
  </div>`
    )
    .join('');

  document.querySelector('.descriptions-container').innerHTML = dynamicList;
};

export default displayToDOList;
