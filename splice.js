/* .splice() removes any number of consecutive elements from anywhere in an array.
  It can take up to 3 parameters. 
  The first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete.*/

let array = ["today", "was", "not", "so", "great"];
array.splice(2, 2);
console.log(array);

// Challenge

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(4, 4);
arr.shift();
console.log(arr);

/* The third parameter of .splice() can be used to add one or more items to the array, which will be inserted starting at that same index. */

const numbers = [10, 11, 12, 12, 15];
numbers.splice(3, 1, 13, 14);
console.log(numbers);

// Challenge

function htmlColorNames(arr) {
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return arr;
}
console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);
