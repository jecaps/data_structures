/* Use for...in to iterate through all the keys within an object.
  Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or the relative order in which 
  which it appears, is irrelevant when referencing or accessing that key.*/

// Challenge

let users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};
function countOnline(usersObj) {
  let count = 0;
  for (let user in usersObj) {
    if (usersObj[user].online == true) {
      count++;
    }
  }
  return count;
}
console.log(countOnline(users));
