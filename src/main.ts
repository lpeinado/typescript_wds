type Todo = {
  description?: string;
  done: boolean;
  dueDate: string | Date;
}

function doSomethingWithTodo(item: Todo){
  if(typeof item.dueDate === 'string'){
    console.log(item.dueDate);
  }else{
    return item.dueDate.getDay
  }
}