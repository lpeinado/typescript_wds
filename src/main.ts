import _ from 'lodash';



let a = 'ras que te ras';
const b = a.charAt(1);
console.log("B", b);

if(_.isNil(b)=== true) {
  console.log("B is nil", b);
}
else {
  console.log("B is not nil", b);
}