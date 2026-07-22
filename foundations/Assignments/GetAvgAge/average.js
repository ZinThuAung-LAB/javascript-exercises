let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

function getAverageAge(arr) {
  return arr.reduce((prev, user) => prev + user.age, 0) / arr.length;
}

let arr = [john, pete, mary];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
