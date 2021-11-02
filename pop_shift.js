// .shift() removes elements from the beginning of the array; .pop() removes element from the end of the array.

let greetings = ["whats up?", "hello", "see ya!"];
greetings.pop();
greetings.shift();

console.log(greetings);

// Challenge

function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}
console.log(popShift(["challenge", "is", "not", "complete"]));
