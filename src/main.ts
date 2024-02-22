type Todo = {
  description?: string;
  done: boolean;
  dueDate: string | Date;
}

function handleDescription (item: Todo) {
  console.log(item.description?.length);
}

const el = document.querySelector<HTMLFormElement>('.form');
el?.addEventListener("submit", ()=> {});