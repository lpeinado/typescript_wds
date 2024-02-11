async function wait(){
  return await fetch("blahblahblah");
}

wait().then(value => console.log(value.json));