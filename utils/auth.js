// /utils/auth.js

function withAuth(req, res, next) {
    if (!req.session.logged_in) {
        // Redirect to login page if not logged in
        res.redirect('/login');
    } else {
        // Call the next middleware function in the stack if logged in
        next();
    }
}

module.exports = withAuth;
