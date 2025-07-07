// Simple, clean JavaScript file — minimal smells, no tests, should pass Quality Gate

function greet(name = "Guest") {
  return `Hello, ${name}`;
}

function add(a, b) {
  return a + b;
}

function isPositive(number) {
  return number > 0;
}

function sayGoodbye(name = "Guest") {
  return `Goodbye, ${name}`;
}

// Trigger functions
console.info(greet("Yug"));         // console.info is acceptable for demonstration
console.info(add(3, 4));            // should return 7
console.info(isPositive(-1));       // should return false
console.info(sayGoodbye("Yug"));    // Goodbye message
