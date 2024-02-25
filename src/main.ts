import { addDays } from 'date-fns';
import { times } from 'lodash';

function myFunction() {
  const date = new Date();
  return (addDays(date, 10));
}

times(100000, myFunction);