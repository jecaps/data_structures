/* To check if a property exists in an object, we can use either .hasOwnProperty method or the in keyword. These return boolean values.

users.hasOwnProperty('Alan');
'Alan' in users;

*/
let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  if (
    "Alan" in userObj &&
    "Jeff" in userObj &&
    "Sarah" in userObj &&
    "Ryan" in userObj
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(isEveryoneHere(users));
