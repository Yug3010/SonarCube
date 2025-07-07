function greetUser(name = "Guest") {
  // Using default parameter, avoid console.log in production but okay here for demo
  // If needed, replace with proper logging in real app
  console.info("Hello, " + name);
}

function calculateArea(length, width) {
  if (length <= 0 || width <= 0) {
    throw new Error("Invalid dimensions");
  }
  return length * width;
}

function checkPassword(password) {
  if (typeof password !== "string" || password.length < 6) {
    return false; // Password too weak
  }
  return true;
}

function buildProfile(name, age, city, country, email) {
  return {
    name,
    age,
    city,
    country,
    email,
  };
}

// Removed eval for security reasons, replaced with safe alternative
function runCommand(cmd) {
  // Instead of eval, you can safely handle allowed commands here
  if (cmd === "logTest") {
    console.info("Test command executed");
  }
}

function duplicateOne() {
  let x = 1;
  x += 2;
  x *= 3;
  return x;
}

function duplicateTwo() {
  let x = 1;
  x += 2;
  x *= 3;
  return x;
}

// Call functions safely
greetUser("Yug");
try {
  calculateArea(5, 10);
} catch (error) {
  console.error(error.message);
}

const isPasswordValid = checkPassword("abc123");
if (!isPasswordValid) {
  console.warn("Password validation failed");
}

buildProfile("Yug", 25, "Toronto", "Canada", "yug@example.com");
runCommand("logTest");
duplicateOne();
duplicateTwo();
