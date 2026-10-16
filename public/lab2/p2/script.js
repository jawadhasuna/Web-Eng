function greet(name) {
  return `Hello, ${name}!`;
}

// In the browser: put the greeting into the <h1>
if (typeof document !== "undefined") {
  document.getElementById("greeting").textContent = greet("World");
}

// In Node.js: export greet so the test in Task 6 can use it
if (typeof module !== "undefined") {
  module.exports = { greet };
}
