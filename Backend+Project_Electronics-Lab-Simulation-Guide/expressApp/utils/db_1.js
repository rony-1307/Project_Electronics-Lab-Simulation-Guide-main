//MySQL database connection with mysql2
//const mysql = require('mysql2');
//
//const conn = mysql.createPool({
//    host: 'localhost',
//    user: 'root',
//    password: '', // for windows, password is blank, otherwise password is 'root'
//    database: 'nodemysqldb'
//})
//
//module.exports = conn.promise();


//MySQL connwction with Sequilize

const Sequelize = require('sequelize');

const seqconn = new Sequelize('nodemysqldb', 'root', '',{
    dialect: 'mysql',
    host: 'localhost'
});

module.export = Sequelize