function reverseString(str) {
  let newString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

console.log(reverseString(""));

// Do not edit below this line
module.exports = reverseString;
