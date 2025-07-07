function greetUser(name = "Guest") {
  console.info(`Hello, ${name}`);
}

function calculateArea(length, width) {
  if (length <= 0 || width <= 0) {
    throw new Error("Invalid dimensions");
  }
  return length * width;
}

function checkPassword(password) {
  return typeof password === "string" && password.length >= 6;
}

function buildProfile({ name, age, city, country, email }) {
  return { name, age, city, country, email };
}

function runCommand(cmd) {
  const allowedCommands = {
    logTest: () => console.info("Test command executed"),
  };

  if (allowedCommands[cmd]) {
    allowedCommands[cmd]();
  } else {
    console.warn("Invalid command");
  }
}

function computeValue() {
  let x = 1;
  x += 2;
  x *= 3;
  return x;
}

// Call functions
greetUser("Yug");

try {
  const area = calculateArea(5, 10);
  console.info("Area:", area);
} catch (error) {
  console.error(error.message);
}

const isPasswordValid = checkPassword("abc123");
if (!isPasswordValid) {
  console.warn("Password validation failed");
}

const profile = buildProfile({
  name: "Yug",
  age: 25,
  city: "Toronto",
  country: "Canada",
  email: "yug@example.com",
});
console.info("Profile:", profile);

runCommand("logTest");
console.info("Computed value:", computeValue());
