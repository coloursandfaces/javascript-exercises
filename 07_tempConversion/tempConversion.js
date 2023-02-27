const convertToCelsius = function(farenheit) {
  let celsius = (farenheit - 32) * (5/9);
  let celsiusRounded = Math.round(celsius * 10)/10;
  return celsiusRounded;
};

const convertToFahrenheit = function(celsius) {
  let farenheit = celsius * (9/5) + 32;
  let farenheitRounded = Math.round(farenheit*10)/10;
  return farenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
