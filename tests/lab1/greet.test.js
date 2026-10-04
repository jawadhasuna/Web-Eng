const test = require("node:test");
const assert = require("node:assert");
const { greet } = require("../../public/lab1/script.js");

test('greet("World") returns "Hello, World!"', () => {
  assert.strictEqual(greet("World"), "Hello, World!");
});
