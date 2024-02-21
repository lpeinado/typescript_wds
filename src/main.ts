function SimpleFunction(a: string, b:string) {
  return a.length > b.length;
}

type SimpleFunctionType = ReturnType<typeof SimpleFunction>;

function ComplexFunction() {
    return {
    prop1: 'value1', 
    prop2: 'value2',
    prop3: 'value3',
    prop4: 'value4'
  }
}

type ComplexFunctionType = ReturnType<typeof ComplexFunction>;

const a:ComplexFunctionType = ComplexFunction();
console.log(a)