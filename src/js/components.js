import { Todo, TodoList } from "../classes";
import { todoList } from "../index";

// --- HTML References
const ulTodoList = document.querySelector('.todo-list');
const inputAddTodo = document.querySelector('.input');
const menu = document.querySelector('.menu');
const menuFilter = document.querySelectorAll('.menu__filter');

export const createTodoHtml = (todo) => {

    const htmlTodo = `
    <li class="todo-list__item ${ (todo.complete) ? 'todo-list__item--complete' : '' }" data-id="${ todo.id }">
        <span class="fa ${ (todo.complete) ? 'fa-check-circle' : 'fa-circle-thin' }"></span>
        <p class="label">${ todo.todo }</p>
        <i class="fa fa-times"></i>
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    ulTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

// --- Events
inputAddTodo.addEventListener('keyup', (event) => {

    if(event.keyCode === 13 && inputAddTodo.value.length > 0) {
        const newTodo = new Todo(inputAddTodo.value);
        todoList.createTodo(newTodo);
        // console.log(todoList);

        createTodoHtml(newTodo);
        inputAddTodo.value = '';
    }
});

ulTodoList.addEventListener('click', (event) => {

    const elementName = event.target.localName;
    const todoElement = event.target.parentElement;
    const todoId = todoElement.getAttribute('data-id');
    const icon = todoElement.querySelector('span');
    
    if (elementName.includes('p')) {
        todoList.completeTodo(todoId);
        todoElement.classList.toggle('todo-list__item--complete');

        if (icon.classList.contains('fa-circle-thin')) {
            icon.classList.remove('fa-circle-thin');
            icon.classList.add('fa-check-circle');
        } else if (icon.classList.contains('fa-check-circle')) {
            icon.classList.remove('fa-check-circle');
            icon.classList.add('fa-circle-thin');
        }
    } else if (elementName.includes('i')) {
            todoList.deleteTodo(todoId);
            ulTodoList.removeChild(todoElement);
    }
});

menu.addEventListener('click', (event) => {
    // console.log(event.target.text);

    const filter = event.target.text;

    if(!filter) { return; }

    menuFilter.forEach((element) => {
        element.classList.remove('active');
    });

    event.target.classList.add('active');

    for(const element of ulTodoList.children) {
        element.classList.remove('hidden');
        const complete = element.classList.contains('todo-list__item--complete');

        if(filter == 'Todos completed') {
            if(!complete) {
                element.classList.add('hidden');
            }
        }
    }
})
