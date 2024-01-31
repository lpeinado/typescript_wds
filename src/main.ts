interface Person {
  readonly id: number,
  name: string,
  age: number,
}
const person: Person = {
  id: 1,
  name: 'John',
  age: 30,
};
person.id = 6 //doesn't work

type numsArray = readonly number[];
const nums: numsArray = [1, 2, 3];
nums.push(4); //doesn't work
nums[0] = 6; //doesn't work
