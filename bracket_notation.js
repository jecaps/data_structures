// Use bracket notation to access an element of an array.

let ourArray = ["a", "b", "c"];
let ourVariable = ourArray[0];
ourArray[1] = "not b anymore";

console.log(ourArray);

// Challenge

let myArray = ["a", "b", "c", "d"];
myArray[1] = "beautiful";
console.log(myArray);

/* We can also use bracket notation to access properties(keys) within an object.
  Bracket notation is very useful  because sometimes object properties are not known before runtime or we need to access them in a more dynamic way.*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}
console.log(checkInventory("apples"));
