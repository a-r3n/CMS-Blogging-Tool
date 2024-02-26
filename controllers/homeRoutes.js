const router = require('express').Router();
const { Post } = require('../models/Post');
const { User } = require('../models/User');
const { Comment } = require('../models/Comment');
const withAuth = require('../utils/auth');

// Temporarily modified route to render the homepage
router.get('/', (req, res) => {
    res.send('Homepage is under construction.');
});

// Keep the rest of your routes as they are
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
                {
                    model: Comment,
                    include: [User],
                },
            ],
        });

        if (postData) {
            const post = postData.get({ plain: true });
            res.render('post', {
                ...post,
                logged_in: req.session.logged_in
            });
        } else {
            res.status(404).json({ message: 'No post found with this id!' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
