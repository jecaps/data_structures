/* Using Object.keys() method will generate an array which contains all the keys stored in an object and passing in an object is an argument.
  This will return an array with strings representing each property in the object.*/

// Challenge

let users = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};
function getArrayOfUsers(obj) {
  return Object.keys(obj);
}
console.log(getArrayOfUsers(users));
