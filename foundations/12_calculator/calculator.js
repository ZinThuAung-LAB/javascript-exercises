const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((a, b) => {
    return a * b;
  }, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  if (n < 0) return Math.NAN;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};
console.log(multiply([2]));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
