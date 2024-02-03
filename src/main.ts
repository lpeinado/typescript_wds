type APIResponse<T> = {
  data: T;
  error?: boolean;
  message?: string;
}
type Person = {
  name: string,
  age: number,
}
const a: APIResponse<Person> = {
  data: {
    name: 'Lluís',
    age: 34
  },
}