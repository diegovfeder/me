const users = require('./data/users.json');
console.log(users);

usersByAge = users.reduce((usersByAge, user) => {
  // const key = user['age'];
  if (!usersByAge[user["age"]]) {
    usersByAge[user["age"]] = [];
  }
  usersByAge[user["age"]].push(user);
  return usersByAge;
}, {});
console.log(usersByAge);
