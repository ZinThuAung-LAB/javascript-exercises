const leapYears = function (year) {
  const isDivisibleByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isDivisibleByFourHundred = year % 400 === 0;

  if (isDivisibleByFour && (!isCentury || isDivisibleByFourHundred)) {
    return true;
  } else {
    return false;
  }
};

console.log(leapYears(1800));

// Do not edit below this line
module.exports = leapYears;
