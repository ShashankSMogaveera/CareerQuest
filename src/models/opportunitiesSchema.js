const Sequelize=require('../database/connection');
const {DataTypes, UUIDV4} = require('sequelize') ;

const Oppportunities = Sequelize.define('Oppportunities',{
    opportunity_id:{
        type:DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    employer_id:{
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_id'
        },
        onDelete: 'CASCADE'
    }, 
    title: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    requirements: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    salary_range: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    location: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    job_type: {
        type: DataTypes.ENUM('full-time', 'part-time', 'remote', 'internship'),
        allowNull: false,
    },
},{
    timestamps: true
})

module.exports = Oppportunities;