const { test } = require("node:test");
const assert = require("node:assert");

function greet(name) {
  return `Hello, ${name}!`;
}

test("greet returns correct greeting", () => {
  assert.strictEqual(greet("World"), "Hello, World!");
});
