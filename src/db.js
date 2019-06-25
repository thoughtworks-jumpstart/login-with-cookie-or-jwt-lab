const usersCollection = [
  {
    id: '77132352',
    username: 'peter',
    password: 'pw',
  },
  {
    id: '19239123',
    username: 'ryan',
    password: 'password',
  },
];

module.exports = {
  findOne: userToFind => {
    return usersCollection.find(curUser => {
      for (let key in userToFind) {
        if (userToFind[key] !== curUser[key]) {
          return false;
        }
      }
      return true;
    });
  },
};
