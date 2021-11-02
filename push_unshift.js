// .unshift() adds elements at the beginning of an array; .push() adds elements at the end of an array.

let twentyThree = "XXIII";
let romanNumerals = ["XXI", "XXII"];
romanNumerals.unshift("XIX", "XX");
romanNumerals.push(twentyThree);

console.log(romanNumerals);

//  Challenge

function mixedNumbers(arr) {
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  return arr;
}
console.log(mixedNumbers(["IV", 5, "six"]));
