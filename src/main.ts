type APIResponse<T> = {
  data: T;
  error?: boolean;
  message?: string;
}
type Person = {
  name: string,
  age: number,
}
type UserData = APIResponse<Person>
type BlogResponse = APIResponse<{title: string, pages: number}>

const a: UserData = {
  data: {
    name: 'Lluís',
    age: 34
  },
}

const b: BlogResponse = {
  data: {
    title: 'My blog',
    pages: 100,
  },
}