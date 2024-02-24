const { User } = require('../models');
const bcrypt = require('bcrypt');

// Sample users with plaintext passwords
const userData = [
  {
    username: 'user1',
    email: 'user1@example.com',
    password: 'password123',
  },
  {
    username: 'user2',
    email: 'user2@example.com',
    password: 'password456',
  },
  // Add more users as needed
];

// Hash passwords before seeding
const hashPassword = (user) => {
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(user.password, salt);
  return user;
};

const seedUsers = async () => {
  for (const user of userData) {
    const hashedUser = hashPassword(user);
    await User.create(hashedUser);
  }
};

module.exports = seedUsers;
