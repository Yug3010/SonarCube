// A simple file with minor code smells but will pass Quality Gate

function greet(name) {
  const greeting = name ? `Hello, ${name}` : "Hello, Guest";
  console.info(greeting); // Minor smell: console.info usage
  return greeting;
}

function sum(a, b) {
  return a + b;
}

function isValidEmail(email) {
  // Simple check; not best practice — may show as code smell
  return email.includes("@");
}

// Slight duplication (will not fail gate)
function duplicateA() {
  let x = 10;
  x++;
  return x;
}

function duplicateB() {
  let x = 10;
  x++;
  return x;
}

// Function that does nothing (minor issue)
function unusedFunction() {}

// Trigger the functions
greet("Yug");
sum(5, 10);
isValidEmail("test@example.com");
duplicateA();
duplicateB();
