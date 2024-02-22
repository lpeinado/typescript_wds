function MyFunction(data:unknown){
  if(data && data instanceof Object && "name" in data && typeof data.name === 'string')
  console.log (data.name.length);
}