type Todo = {
  id: number,
  text: string,
  status: 'active' | 'completed',
  completed: boolean
}

type newTodo = Pick<Todo, 'text'| 'id'>;


function doSomethingWithTodo(todo: Todo) {
  console.log(todo.text)
}

function doSomethingWithNewTodo(todo: newTodo) {
  console.log(todo.text)
}

type TodoWithoutId = Omit<Todo, 'id'>;

function doSomethingWithTodoWithoutId(todo: TodoWithoutId) {
  console.log(todo.status);
}