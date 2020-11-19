let todoItems: Item[];

interface Item {
    id: number;
    title: string;
    done: boolean;
}

// api
function fetchTodoItems(): Item[] {
    const todos = [
        {id: 1, title: '안녕', done: false},
        {id: 2, title: '타입', done: false},
        {id: 3, title: '스크립트', done: false},
    ];
    return todos;
}

// crud methods
function fetchTodos(): object[] {
    const todos = fetchTodoItems();
    return todos;
}

function addTodo(todo: Item): void {
    todoItems.push(todo);
}

function deleteTodo(index: number): void {
    todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Item): void {
    todo.done = true;
    todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
    return todoItems[0];
}

function showCompleted(): object[] {
    return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
    addTodo({id: 1, title: '안녕', done: false});
    addTodo({id: 1, title: '안녕', done: false});
}

// NOTE: 유틸 함수
function log(): void {
    console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
