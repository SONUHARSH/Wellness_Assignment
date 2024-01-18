const input = [{ a: 1 }, { b: 2 }, { c: 3 }];

const output = input.reduce((result, currentObj) => {
  
  const [key, value] = Object.entries(currentObj)[0];
  result[key] = value;
  return result;
}, {});

console.log(output);
