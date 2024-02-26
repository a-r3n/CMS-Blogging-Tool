const router = require('express').Router();

// Import route modules
const homeRoutes = require('./homeRoutes');
const commentRoutes = require('./api/commentRoutes');
const postRoutes = require('./api/postRoutes');
const userRoutes = require('./api/userRoutes');

// Setup routes
router.use('/', homeRoutes);
router.use('/api/comments', commentRoutes);
router.use('/api/posts', postRoutes);
router.use('/api/users', userRoutes);

// Export the router
module.exports = router;
