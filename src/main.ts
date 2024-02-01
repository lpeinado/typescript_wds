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
type ras = {
  a: number
  b: number
}
const a: ras = {
  a: 1,
  b: 2
}
type PeopleBySkill = {
  [level in Person['skillLevel']]: Person[]
}

const b:PeopleBySkill = {
  Beginner: [me, me],
  Intermediate: [],
  Advanced: [me],
  Expert: []
}