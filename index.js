function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

function addNumbers(a, b) {
  return a + b;
}

greet('Alice');
const sum = addNumbers(5, 7);
console.log(`Sum: ${sum}`);
