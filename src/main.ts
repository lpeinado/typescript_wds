function wait(duration:number){
  return new Promise<string>(resolve => {
    setTimeout(() => resolve("hi how are you"), duration)
  })
}

wait(2000).then(data => console.log(data.length))