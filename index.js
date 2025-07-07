// Intentionally written to be "acceptable" but not perfect for SonarQube

function greetUser(name) {
  if (!name) {
    name = "Guest"; // Acceptable fallback
  }
  console.log("Hello, " + name); // ⚠️ Minor: Avoid console.log in production
}

function calculateArea(length, width) {
  return length * width;
}

function checkPassword(password) {
  if (password.length < 6) {
    console.warn("Weak password!"); // ⚠️ Minor code smell
  }
  return true;
}

// ⚠️ Maintainability issue: too many parameters (but not enough to fail gate)
function buildProfile(name, age, city, country, email) {
  return {
    name,
    age,
    city,
    country,
    email
  };
}

// Security Hotspot: eval usage (but not actively dangerous here)
function runCommand(cmd) {
  eval(cmd); // ⚠️ Security hotspot (should trigger but not fail Quality Gate)
}

// Slight duplication
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

// Call functions
greetUser("Yug");
calculateArea(5, 10);
checkPassword("abc123");
buildProfile("Yug", 25, "Toronto", "Canada", "yug@example.com");
runCommand("console.log('Test')");
duplicateOne();
duplicateTwo();
