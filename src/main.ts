function arrToObj<T>(array:[string, T][]) {
  let res: {[index: string]: T} = {};
  array.forEach(([key, value])=>{
    res[key] = value;
  })
  return res;
}


const input:[string, number | boolean][] = [
  ['name', 80], 
  ['age', 40],
  ['isHandsome', true]
];

const a = arrToObj(input);
console.log(a);