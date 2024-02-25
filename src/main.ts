type Option = {
  name: string;
  value: string;
  selected?: boolean;
  sourceObject: {
    status: string;
    name: string;
    closedAt: string;
  }
}


function returnOption(): Option {
  return {
    name: '',
    value: '',
    selected: false,
    sourceObject: {
      status: '',
      name: '',
      closedAt: '',
      // @ts-expect-error
      role: 'admin',
    }
  };
}