function sum(...nums: number[]) { // type is always an array with the rest operator
  return nums.reduce((a, b) => a + b, 0)
}

const a = sum(8, 10, 12);
console.log(a); // 30