const sequelize = require('../database/connection');
const Users = require('./userSchema');
const Opportunities= require('./opportunitiesSchema');

const db = { sequelize, Sequelize: sequelize, Users, Opportunities };
module.exports = db;
 