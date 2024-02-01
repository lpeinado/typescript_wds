type Person = {
  name: string
  skillLevel: 'Beginner'| 'Intermediate'| 'Advanced' | 'Expert'
}
const me : Person = {
  name: 'Lluís',
  skillLevel: 'Advanced'
}
function printLevel(level:Person['skillLevel']){
  console.log(level);
}