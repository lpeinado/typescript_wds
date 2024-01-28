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

const persona: Person = {
  firstName: 'Joan',
  lastName: 'Peris',
  age: 25,
}

persona.age = 26;
persona.isProgrammer = true;
console.log("PERSONA", persona);