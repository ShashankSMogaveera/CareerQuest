import express from 'express';
import dotenv from 'dotenv'
import db from './models/index';
import { userRouter } from './router/userRouter';
import cookieParser from 'cookie-parser';


dotenv.config(); 

const app=express();
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(cookieParser())

app.use('/user',userRouter);
// app.get('/user', async (req:Request, res:Response) => {
//     try {
//         const users = await db.User.findAll();
//         res.json('user '+ JSON.stringify(users));
//     } catch (error) {
//         res.status(500).send({ message: 'Error retrieving users', error });
//     }
// });

// app.get('/create-user', async (req:Request, res:) => {
//     try {
//         const users = await db.Users.create({name: 'Prajwal', email: 'Prajwal@gmail.com', password: 'Prajwal@123'});
//         res.json('user created with credential  '+JSON.stringify(users));
//     } catch (error) {
//         res.status(500).send({ message: 'Error retrieving users', error });
//     }
// });
db.sequelize
  .authenticate()
  .then(() => db.sequelize.sync({ force: true }))
  .then(() => {
    console.log('Database connected and synced');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err:any) => { 
    console.error('Unable to connect to the database:', err);
  });