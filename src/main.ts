type Person = {
  name: string
  age: number
};
type PersonWithId = Person & { id: number };

const person: Person = {
  name: 'John',
  age: 30,
};

const personWithId: PersonWithId = {
 ...person,
  id: 1,
};

type FamiliarAnimal = {
  name: string
  age: number
  type: 'dog' | 'cat'
};

const rus : FamiliarAnimal = {
  name: 'Rus',
  age: 1,
  type: 'cat',
};

interface PersonInterface {
  name: string
  age: number
}

interface PersonWithIdInterface extends PersonInterface {
  id: number
}

const newPerson: PersonWithIdInterface = {
 ...person,
  id: 1,
};
