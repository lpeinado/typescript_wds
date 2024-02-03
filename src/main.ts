type Person = {
  name: string
  age: number
}
const me: Person = {
  name: 'Jane',
  age: 25,
}


type Tuple = [string, number| string]
const tuple: Tuple = ['Jane', 25]

Object.entries(me).forEach(([key, value]: Tuple) => {
  console.log(`This is a key: ${key}, and this is a value: ${value}`)
});
