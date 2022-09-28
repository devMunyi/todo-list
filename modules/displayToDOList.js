export default function displayToDOList(todoList) {
  const dynamicList = todoList
    .map(
      (item) => `<div class="tdl-description__container" id="desc-${
        item.index
      }">
    <div class="tdl-description__left--item">
      <input class="c-pointer" onclick="toggleTaskComplete(${
  item.index
})" type="checkbox" id="myCheck-${item.index}" ${
  item.completed ? 'checked' : ''
}/>
      <label class="${item.completed ? 'completed' : ''}" for="myCheck">${
  item.description
}</label>
    </div>
    <div onmouseout="mouseOut(${item.index})" onmouseover="mouseOver(${
  item.index
})" class="tdl-description__right--item right--item">
      <div id="dots-${item.index}" class="dots c-pointer">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div id="icons-${item.index}" class="edit-delete-icons">
      <span title="Edit" onclick="editTask(${
  item.index
})" class="c-pointer edit-action">&#9998;</span>

        <span title="Delete" onclick="removeTask(${
  item.index
})" class="c-pointer delete-action">&#x2715;</span>
      </div>
    </div>
  </div>`,
    )
    .join('');

  document.querySelector('.descriptions-container').innerHTML = dynamicList;
}
