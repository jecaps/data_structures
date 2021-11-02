/* .slice() copies or extracts a given number of elements to a new arry, leaving the array it is called upon untouched. 
  It only takes two parameters - the first is the index at which to begin extraction, and the second is the index at which to stop extraction. e.g(including index 1, excluding index 3) */

let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];
let todaysWeather = weatherConditions.slice(1, 3);
console.log(todaysWeather);
console.log(weatherConditions);

// Challenge

function forecast(arr) {
  return arr.slice(2, 4);
}
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);
