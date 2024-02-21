type FormInputs = {
  name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

type FormErrors = Partial<FormInputs>

function doWithFormErrors(input: FormErrors){
  console.log(input.name);
}


type softType = {
  name?: string;
  email?: string;
}

type somethingStronger = Required<Pick<softType, 'name'>>

function doSomethingWithStrongerType(input: somethingStronger){
  console.log(input, input.name);
}