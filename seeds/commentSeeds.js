const { Comment } = require('../models/Comment');

const commentData = [
    {
        comment_text: "This is a great post! Really enjoyed reading it.",
        user_id: 1, // Assuming a user with ID 1 exists
        post_id: 1, // Assuming a post with ID 1 exists
    },
    {
        comment_text: "Very informative, thanks for sharing.",
        user_id: 2, // Assuming a user with ID 2 exists
        post_id: 1, // This comment is also on the first post
    },
    {
        comment_text: "I had never thought of it that way, interesting perspective.",
        user_id: 1, // User 1 commenting on another post
        post_id: 2, // Assuming a post with ID 2 exists
    },
    // Add more comments as needed
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
