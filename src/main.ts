function sumWithCallback(a:number, b:number, callback: Function){
  callback(a+b);
}

sumWithCallback(1,2, (sum:Function) => {
  console.log(sum);  // 3
});

function sumWithPromise(a:number, b:number): Promise<number>{
  return new Promise((resolve) => {
    const c:number = a+b;
    resolve(c);
  });
}

const myNiceType:Promise<number> = sumWithPromise(1,2);
console.log(myNiceType);
myNiceType.then((sum) => {
  console.log(sum);  // 3
});

type functionType= (a:number, b:number) => number;
function sumWithAnothersumWithin(a:number, b:number, sum: functionType){
  return sum(a, b);
}
const ras = sumWithAnothersumWithin(1,2, (a,b) => a+b);
console.log(ras); // 3