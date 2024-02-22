type Todo = {
  name: string;
  status: boolean;
  dueDate: string | Date;
}

const a = {
  name: 'ras',
  status: false,
  dueDate: new Date()
} satisfies Todo;

console.log(a.dueDate.getDate)