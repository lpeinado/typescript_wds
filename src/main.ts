interface User {
  name: string
  age: number
  email: string
};
type UserKeys = keyof User;

const myKey:UserKeys = 'age';

function getValue(user:User, key:UserKeys){
  return user[key];
}

console.log(getValue({name: 'Bob', age: 25, email: '<EMAIL>'}, 'age')); // 25
console.log(getValue({name: 'Bob', age: 25, email: '<EMAIL>'}, 'email')); // email