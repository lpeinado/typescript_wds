type Person = {
  name: string;
    age: number;
}
type MyType = Record<string, Person>;
type MyPersonType = Record<Person['name'], Person>;

const PersonA: MyPersonType = {
  'Lluís': {
    name: 'Lluís',
    age: 32,
  }
};

const WrongPerson: MyPersonType = {
  'Lluís': {
    name: 'Lluís',
    rus: 32,
  },
  'Lluís2': {
    name: 'Lluís',
    plas: 32,
  },
  'Sic': {
    name: 'Lluís',
    age: 32,  
  }
};