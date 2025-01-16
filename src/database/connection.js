// const mysql = require('mysql2')
// const dotenv= require('dotenv')

// dotenv.config();
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
// });

// module.exports = connection; 

const {Sequelize, } = require('sequelize')
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize('careerquest', process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST || 'localhost' ,
    dialect: 'mysql',
})



module.exports = sequelize;