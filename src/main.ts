function sayHello(name: string) {
  return (`Hello, ${name}!`)
}

type Greeting = typeof sayHello;

function sayHellow2(name1:string, name2:string, glueFunc: Greeting) {
  const res = glueFunc(name1);
  const res2 = glueFunc(name2);
  const total = res + res2;
  console.log(total);
};

sayHellow2("John", "Jane", sayHello);