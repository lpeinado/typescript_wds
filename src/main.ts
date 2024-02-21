async function doSomething() {
  return 1;
}

type MyType = Awaited<typeof doSomething>;
type b = Awaited<ReturnType<typeof doSomething>>;