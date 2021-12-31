const Sequilize = require('sequelize');

const db = require('../utils/db');

const Recipie = db.define('recipie', {
    id : {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title : {
        type: Sequilize.STRING
    }
});

module.exports = Recipie;