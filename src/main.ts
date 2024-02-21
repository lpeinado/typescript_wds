type Person = {
  name: string;
    age: number;
}

type RealPerson = Readonly<Person>;

const a: RealPerson = {
  name: 'a',
    age: 1
};

const b : Person = {
  name: 'b',
    age: 2
} as const;

b['age']=9;
a['age']=9;