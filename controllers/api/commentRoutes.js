const router = require('express').Router();
const { Comment } = require('../../models/Comment');
const withAuth = require('../../utils/auth');

// Route to post a new comment
router.post('/', withAuth, async (req, res) => {
    try {
        // Check if the user is logged in
        if (!req.session.logged_in) {
            res.status(403).json({ message: 'Must be logged in to comment' });
            return;
        }

        // Create a new comment
        const newComment = await Comment.create({
            ...req.body,
            userId: req.session.user_id, // Assuming user_id is stored in session
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Additional routes for updating and deleting comments can be added here
// Ensure you implement appropriate authentication checks similar to the post route

module.exports = router;
