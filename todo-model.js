let todoForm = document.getElementById("taskForm"),
  taskBtn = document.getElementById("btn_new-task"),
  todoList = document.getElementById("todo-list")

taskBtn.addEventListener("click", showForm)
todoForm.addEventListener("submit", formHandler)
todoList.addEventListener("click", removeItem)

function showForm() {
  todoForm.style.display = "block"
  taskBtn.style.display = "none"
}

function formHandler(evt) {
  evt.preventDefault()
  let titleEle = document.getElementById("title").value,
    item = document.createElement("li"),
    cancelLink = document.createElement("a")
  cancelLink.className = "list-link"
  cancelLink.textContent = "X"
  item.className = "list-item"
  item.textContent = titleEle
  item.appendChild(cancelLink)
  item.setAttribute("draggable", "true")
  todoList.appendChild(item)
  todoList.style.display = "block"
  todoForm.style.display = "none"
  taskBtn.style.display = "block"
}

function removeItem(e) {
  if (e.target.classList.contains("list-link")) {
    var li = e.target.parentElement
    todoList.removeChild(li)
  }
  if (todoList.children.length == 0) {
    todoList.style.display = "none"
  }
}
