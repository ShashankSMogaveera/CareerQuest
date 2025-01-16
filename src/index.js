const express = require('express');
const dotenv = require('dotenv');
const db = require('./models/index')
dotenv.config();

const app=express();
const PORT = process.env.PORT || 3000;


app.get('/user', async (req, res) => {
    try {
        const users = await db.User.findAll();
        res.json('user '+ JSON.stringify(users));
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving users', error });
    }
});

app.get('/create-user', async (req, res) => {
    try {
        const users = await db.Users.create({name: 'Prajwal', email: 'Prajwal@gmail.com', password: 'Prajwal@123'});
        res.json('user created with credential  '+JSON.stringify(users));
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving users', error });
    }
});
db.sequelize.authenticate()
    .then(() => {
        console.log('Connection established successfully.')
        return db.sequelize.sync({force: true}) // force: true drops existing tables and recreates them
        
    }).then(() => {
        console.log('Database & tables created!')
        app.listen(PORT, ()=>{
            console.log('app listening on port '+ PORT)
        })
    }
    ).catch(err => console.error('Unable to connect to the database:', err));

