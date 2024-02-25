import { addDays } from 'date-fns';
import { times } from 'lodash';
import { rastafarai } from 'myLib'; 

function myFunction() {
  const date = new Date();
  return (addDays(date, 10));
}

times(100000, myFunction);

rastafarai(9);