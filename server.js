// Load environment variables
require('dotenv').config();

// Import necessary packages
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Import sequelize connection
const sequelize = require('./config/connection');

// Import routes
const routes = require('./routes');

// Setup Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Set up Handlebars.js as your templating engine
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set up session with Sequelize store
app.use(session({
  secret: process.env.SESSION_SECRET, // Use the environment variable
  cookie: {
    // Session expires after 30 minutes of inactivity
    expires: 30 * 60 * 1000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
}));

// Use routes
app.use(routes);

// Connect to the database, then start the Express server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
});
