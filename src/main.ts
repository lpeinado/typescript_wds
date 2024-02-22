type Todo = {
  description?: string;
  done: boolean;
  dueDate: string | Date;
}

function withTypeGuard (item: Todo){
  if (item.dueDate instanceof Date){
    console.log(item.dueDate.getDay);
    return
  }
  return item.dueDate.length
}