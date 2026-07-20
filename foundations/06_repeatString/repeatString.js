const repeatString = function (str, num) {
  let result = "";
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      result += str;
    }
  } else if (num === 0) {
    result = "";
  } else {
    result = "ERROR";
  }

  return result;
};
console.log(repeatString("hi", -3));
// Do not edit below this line
module.exports = repeatString;
