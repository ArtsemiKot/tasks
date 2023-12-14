// Создайте класс TodoList, который содержит свойство tasks (список задач) и методы
// addTask() (добавление задачи), removeTask() (удаление задачи) и getTasks()
// (получение списка задач). Создайте экземпляр класса TodoList и выполните
// несколько операций.
class TodoList {
    tasks;
    addTask(task) {
        this.tasks = task;
    }
    ;
    removeTask() {
        delete this.tasks;
    }
    ;
    getTask() {
        return this.tasks;
    }
}
;
const todoList = new TodoList();
todoList.addTask('classwork');
todoList.removeTask();
todoList.addTask('classwork1');
console.log(todoList.getTask());
