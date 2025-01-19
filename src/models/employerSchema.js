const Sequelize = require('../database/connection');
const {DataTypes, UUIDV4} =require('sequelize');


const EmployerProfiles = Sequelize.define('EmployerProfiles', {
    employer_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    company_name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    company_website: {
        type: DataTypes.STRING(255),
    },
    company_logo: {
        type: DataTypes.BLOB,
    },
    description: {
        type: DataTypes.TEXT,
    },
    established_year: {
        type: DataTypes.INTEGER,
    },
    industry: {
        type: DataTypes.STRING(255),
    }
}, {});

// Associations
EmployerProfiles.associate = (models) => {
    // EmployerProfiles belongs to Users (employer)
    EmployerProfiles.belongsTo(models.Users, {
        foreignKey: 'employer_id',
        onDelete: 'CASCADE'
    });
};


module.exports = EmployerProfiles