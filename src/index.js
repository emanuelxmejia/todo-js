import './style.css';

import { Todo, TodoList } from './classes';
import { createTodoHtml } from './js/components';

export const todoList = new TodoList();

const dayNumber = document.querySelector('#date-number');
const dayWeek = document.querySelector('#date-day');
const montYear = document.querySelector('.date-text');
const today = new Date();

dayNumber.innerHTML = today.getDate();
dayWeek.innerHTML = today.toLocaleDateString('en-US', { weekday: 'long' });
montYear.innerHTML = today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

todoList.todoList.forEach(element => createTodoHtml(element));