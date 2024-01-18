const input = { a: 1, b: 2, c: 3 };
const output = [];

for (const [key, value] of Object.entries(input)) {
  output.push({ [key]: value });
}

console.log(output);
