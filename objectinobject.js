/* Object properties can be nested to an arbitrary depth, 
  and their values can be any type of data supported by JavaScript, including arrays and even other objects. */

let nestedObject = {
  id: 28802695164,
  date: "December 31, 2016",
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8,
    },
  },
};
nestedObject.data.onlineStatus.busy = 10;
console.log(nestedObject);

// Challenge

let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};
userActivity.data.online = 45;
console.log(userActivity);
