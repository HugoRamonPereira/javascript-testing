// Basic idea of testing without a Testing Tool

const { sum, subtract } = require("./math");

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

// Addition Scenario
let result = sum(3, 7);
let expected = 10;

if (result != expected) {
  throw new Error(`${result} is not the same as ${expected}`);
}

// Subtraction Scenario
result = subtract(10, 5);
expected = 4;

if (result != expected) {
  throw new Error(`${result} is not the same as ${expected}`);
}
