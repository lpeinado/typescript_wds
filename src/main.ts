type Address = {
  street: string;
  city: string;
  country: string;
};

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  isProgrammer?: boolean;
  address?: Address;
};

function logPerson(per:Person){
  console.log(per.firstName);
}
const lluis = {
  firstName: 'Lluis',
  lastName: 'Peinado',
  age: 25,
  isProgrammer: true,
  address: {
    street: 'Rosselló',
    city: 'Barcelona',
    country: 'Catalonia'
  }
};
const a = logPerson(lluis);
// curious thing here from lesson
function printPerson(person: {name:string}):void{
  console.log(person.name);
}
printPerson({name: 'Lluisa doesn work with age explicit', age: 25}); // this fails
const pers = {name: 'LluisaObject works with age', age: 25};
printPerson(pers); // this works
