const Sequelize = require('sequelize');

const sequelize = new Sequelize('test-db', 'root', 'root', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;