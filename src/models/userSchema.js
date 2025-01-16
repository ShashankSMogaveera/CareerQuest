const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Users = sequelize.define('Users',{
    user_id: {
        type: DataTypes.UUID, 
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    }, 
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    resume: {
        type: DataTypes.BLOB,
        allowNull: true
    }, 
    phoneNumber:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    role: {
        type: DataTypes.ENUM('employee', 'employer', 'admin'),
        allowNull: false,
        defaultValue: "employee"
    }
}, {
    timestamps: true
})

module.exports =  Users;