const sequelize = require('../database/connection');
const Users = require('./userSchema');
const Opportunities= require('./opportunitiesSchema');
const EmployerProfiles= require('./employerSchema')
const JobApplications= require('./JobApplicationSchema')

const db = { sequelize, Sequelize: sequelize, Users, Opportunities, EmployerProfiles, JobApplications };

export default db;
 