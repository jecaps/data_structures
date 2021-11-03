// For loops iterate through each item to find one or more elements that we might need, or to manipulate an array based on which data items meet a certain set of criteria.
function greaterThanTen(arr) {
  let newArr = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > 10) {
  //     newArr.push(arr[i]);
  //   }
  for (let i of arr) {
    if (i > 10) {
      newArr.push(i);
    }
  }
  return newArr;
}
console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));

// Challenge

function filteredArray(arr, elem) {
  let newArr = [];
  for (let item of arr) {
    if (item.indexOf(elem) < 0) {
      newArr.push(item);
    }
  }
  return newArr;
}
console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);
