/* ... or the spread operator allows us to easily copy all of an array's elements, in order, with a simple amd highly readable sytax.*/

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
console.log(thatArray);
console.log(thisArray);

// Challenge

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));
