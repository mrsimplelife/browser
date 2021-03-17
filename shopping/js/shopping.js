const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

function onAdd() {
  const text = input.value;
  if (!text) {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView();
  input.value = "";
  input.focus();
}
let id = 0;
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.dataset.id = id;
  itemRow.innerHTML = `
  <div class="item">
    <span class="item__name">${text}</span>
    <button class="item__delete">
      <i class="fas fa-trash-alt" aria-hidden="true" data-id=${id}></i>
    </button>
  </div>
  <div class="item__divider"></div>`;
  ++id;
  // const item = document.createElement("div");
  // item.setAttribute("class", "item");

  // const span = document.createElement("span");
  // span.setAttribute("class", "item__name");
  // span.innerHTML = text;

  // const deleteBtn = document.createElement("button");
  // deleteBtn.setAttribute("class", "item__delete");
  // deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

  // const itemDivider = document.createElement("div");
  // itemDivider.setAttribute("class", "item__divider");

  // item.appendChild(span);
  // item.appendChild(deleteBtn);

  // itemRow.appendChild(item);
  // itemRow.appendChild(itemDivider);
  return itemRow;
}
addBtn.addEventListener("click", () => {
  onAdd();
});
input.addEventListener("keypress", (event) => {
  if (event.key !== "Enter") {
    return;
  }
  onAdd();
});
items.addEventListener("click", (event) => {
  const { id } = event.target.dataset;
  if (!id) return;
  const toBeDeleted = document.querySelector(`li[data-id="${id}"]`);
  items.removeChild(toBeDeleted);
  // if (event.target.tagName !== "I") return;
  // items.removeChild(event.target.parentElement.parentElement.parentElement);
});
