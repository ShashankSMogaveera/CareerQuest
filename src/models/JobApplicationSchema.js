const Sequelize = require('../database/connection');
const {DataTypes, UUIDV4} =require('sequelize');

const JobApplications = Sequelize.define('JobApplications',{
    application_id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey:true
    },
    opportunity_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    applicant_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    resume: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('applied', 'under_review', 'shortlisted', 'rejected', 'hired'),
        defaultValue: 'applied'
    },
},{
    timestamps:true
})

JobApplications.associations= (models)=>{
    JobApplications.belongsTo(models.Users,{
        foreignKey: applicant_id,
        onDelete: 'CASCADE'
    });

    JobApplications.belongsTo(models.Opportunities, {
        foreignKey: opportunity_id,
        onDelete: 'CASCADE'
    })
}

module.exports = JobApplications;