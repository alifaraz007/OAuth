const Sequelize = require('sequelize');
const db = require('../database');
 //creating user model
const User = db.define('user', {
    name: {
        type: Sequelize.STRING
    },
    userName: {
        type: Sequelize.STRING,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    password: Sequelize.STRING
});
 module.exports = User; 