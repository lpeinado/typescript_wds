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

const a: UserData = {
  data: {
    name: 'Lluís',
    age: 34
  },
}