type Todo = {
  description?: string;
  done: boolean;
  dueDate: string | Date;
}

function doSomethingWithTodo(item: Todo){
  if( item.dueDate instanceof Date){
    console.log(item.dueDate.getFullYear);
  }else{
    return item.dueDate.getDay
  }
}