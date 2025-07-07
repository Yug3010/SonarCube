function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

function calculateSum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

function runApp() {
  const users = ['Alice', 'Bob'];
  users.forEach(greet);

  const result = calculateSum([5, 10, 15]);
  console.log(`Total: ${result}`);
}

runApp();
