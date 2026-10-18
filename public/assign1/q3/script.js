// Event delegation: one listener on the parent handles clicks on every
// <li>, including ones added to the list later.
document.getElementById("todo-list").addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
});

// Adds a new <li> dynamically, to prove the delegated listener above
// also works on items that did not exist when the page first loaded.
document.getElementById("add-item-button").addEventListener("click", () => {
  const input = document.getElementById("new-item-text");
  const text = input.value.trim();
  if (text === "") return;

  const item = document.createElement("li");
  item.textContent = text;
  document.getElementById("todo-list").appendChild(item);

  input.value = "";
});
