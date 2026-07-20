function sumAll(num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  if (num1 > 0 && num2 > 0) {
    let sum = 0;
    if (num1 > num2) {
      min = num2;
      max = num1;
    } else {
      min = num1;
      max = num2;
    }
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  } else {
    return "ERROR";
  }
}

console.log(sumAll(2, 4));

module.exports = sumAll;
