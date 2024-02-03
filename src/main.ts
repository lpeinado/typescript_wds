type APIResponse<T extends object> = {
  data: T;
  error?: boolean;
  message?: string;
}

type User = {
  name: string;
  age: number;
}
const a:APIResponse<User> = {
  data: {
    name: 'John',
    age: 23
  }
}