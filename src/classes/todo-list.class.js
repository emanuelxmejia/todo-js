export class TodoList {

    constructor() {
        this.loadLocalStorage();
    }

    createTodo(todo) {
        this.todoList.push(todo);
        this.saveLocalStorage();
    }

    completeTodo(id) {
        for(const todo of this.todoList) {
            if(todo.id == id) {
                todo.complete = !todo.complete;
                this.saveLocalStorage();
                break;
            }
        }
    }

    deleteTodo(id) {
        this.todoList = this.todoList.filter(todo => todo.id != id);
        this.saveLocalStorage();
    }

    deleteAllComplete() {

        this.saveLocalStorage();
    }

    saveLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todoList));
    }

    loadLocalStorage() {
        this.todoList = (localStorage.getItem('todo'))
                            ? JSON.parse(localStorage.getItem('todo')) 
                            : [];
    }
}