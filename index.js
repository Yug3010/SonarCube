function greet(name) {
  if (!name) {
    // default to 'Guest' if no name provided
    name = 'Guest';
  }

  console.log("Hello, " + name + "!");
}

function addNumbers(a, b) {
  return a + b;
}

// Example usage
greet("Alice");

const result = addNumbers(5, 7);
console.log("Sum:", result);

// A little unused variable to trigger a minor warning
const unusedVariable = 42;
