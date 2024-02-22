type Todo = {
  priority: 'Low' | 'Medium' | 'Hight';
  description?: string;
  done: boolean;
  dueDate: string | Date;
}

function withTypeGuard (item: Todo){
  switch(item.priority){
    case 'Low':
    console.log(item.priority);  
    break;
    case 'Medium':
      console.log(item.priority);
      break;
    case 'Hight':
      console.log(item.priority);
      break;
    default:
      console.log(item.priority);
    

  }
}