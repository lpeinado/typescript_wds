function returnSecond<T>(array:T[]){
  return array[1]
}
const numArr = [1, 2, 3, 4, 5]
const strArr = ['a', 'b', 'c', 'd', 'e']
const boolArr = [true, false, true, false, true]

const resA = returnSecond(numArr)
const resB = returnSecond(strArr)
const resC = returnSecond(boolArr)

console.log(resA, resB, resC)