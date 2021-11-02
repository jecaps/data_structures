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

/* Another advantage of the spread operator is the ability to combine arrays, or to insert all the elements of one array into another, at any index. 
  With more traditional syntaxes, we can concatenate arrays, but this only allows is to combine arrays at the end of one, and at the start of another. */

let thisArray = ["sage", "rosemary", "parsley", "thyme"];
let thatArray = ["basil", "cilantro", ...thisArray, "coriander"];
console.log(thatArray);

// Challenge

function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}
console.log(spreadOut());
