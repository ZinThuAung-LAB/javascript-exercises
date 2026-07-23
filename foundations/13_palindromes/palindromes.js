const palindromes = function (str) {
  const cleanStr = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split(" ")
    .join("");
  console.log(cleanStr);
  let left = 0;
  let right = cleanStr.length - 1;
  while (left < right) {
    if (cleanStr[left] !== cleanStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(palindromes("A car, a man, a maraca."));
// Do not edit below this line
module.exports = palindromes;
