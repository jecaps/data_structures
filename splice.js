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
