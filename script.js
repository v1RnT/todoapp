const a = document.querySelector(".addTodo");
const button = document.querySelector(".addButton");
const todobox = document.querySelector(".todoBox");
button.onclick = addTodos;

function addTodos(evt) {
    let data = a.value;
    todobox.innerHTML += `<input type="checkbox" id="death" name="death"><label for="death">${data}</label>`
    a.value = '';
}