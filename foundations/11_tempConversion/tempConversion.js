const convertToCelsius = function (temp) {
  celsius = ((temp - 32) * 5) / 9;
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function (temp) {
  fahrenheit = (temp * 9) / 5 + 32;
  return Math.round(fahrenheit * 10) / 10;
};

console.log(convertToCelsius(-32));
console.log(convertToFahrenheit(-12));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
