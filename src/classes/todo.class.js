export class Todo {

    constructor(todo) {
        this.todo = todo;

        this.id = new Date().getTime();
        this.complete = false;
        this.createDate = new Date();
    }
}