/* .indexOf() allows us to quickly and easily check for the presence of an element on an array.
  It takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.*/

let fruits = ["apples", "pears", "oranges", "peaches", "pears"];
console.log(fruits.indexOf("dates"));
console.log(fruits.indexOf("oranges"));
console.log(fruits.indexOf("pears"));

// Challenge

function quickCheck(arr, elem) {
  /*
  if (arr.indexOf(elem) < 0) {
    return false;
  } else {
    return true;
  }
  */
  return arr.indexOf(elem) < 0 ? false : true;
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
