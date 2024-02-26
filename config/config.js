const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
if (process.env.JAWSDB_URL) {
  // If the app is deployed on a platform like Heroku with JawsDB MySQL addon, use the JAWSDB_URL
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Otherwise, use the local database configuration
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
  });
}

sequelize.authenticate()
  .then(() => console.log('Database connected.'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
