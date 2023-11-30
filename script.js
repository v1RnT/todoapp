const addtodo = document.querySelector(".addTodo");
const button = document.querySelector(".addButton");
const todobox = document.querySelector(".todoBox");
button.onclick = addTodos;
let count = 1;

function addTodos(evt) {
    let data = addtodo.value;
    todobox.innerHTML += `<input type="checkbox" id="${"checktodo" + count}"> <label for="${"checktodo" + count}">${data}</label>`
    count++;
    addtodo.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    todobox.addEventListener('change', (event) => {
        todoChecked(event.target)
    });
});


function todoChecked(checkbox){
    checkbox.checked ? console.log(checkbox.id + " yes") : console.log(checkbox.id + " no");
}