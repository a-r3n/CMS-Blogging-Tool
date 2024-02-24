const { Post } = require('../models');

const postData = [
  {
    title: 'Why MVC is so important',
    content: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
    user_id: 1, // Assuming a user with this ID exists
  },
  {
    title: 'Authentication vs. Authorization',
    content: 'While both authentication and authorization are essential components of application security, they serve distinct roles. Authentication verifies who the user is, and authorization determines what resources a user can access.',
    user_id: 2, // Assuming a user with this ID exists
  },
  // Add more posts as needed
];

const seedPosts = async () => {
  await Post.bulkCreate(postData);
};

module.exports = seedPosts;
