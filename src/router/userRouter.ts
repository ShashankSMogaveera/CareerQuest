import { Router, Request, Response} from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../models/index';
import { User,loginJwtPayload, loginRequestBody, registerationRequestBody } from '../Interfaces/UserInterfaces';

const userRouter = Router();

userRouter.post(
    '/login', 
    async (req: Request<{},{},loginRequestBody>,res:Response)=>{

        const {email: userEmail,password: userPassword}=req.body;
        const SECRET_KEY=process.env.SECRET_KEY
        if(!SECRET_KEY){
            throw new Error("Secret Key Missing")
        }
        
        const user: User= db.Users.findOne({
            where: {
                email: userEmail
            }
        })

        if(!user){
            res.status(401).json({message: 'Invalid Credentials'})
        }

        const isPasswordValid= await bcrypt.compare(userPassword,user.password);
        if(!isPasswordValid){
            res.status(401).json({message: 'Invalid Credentials'})
        }

        res.cookie('jwt', jwt.sign( user.email, SECRET_KEY));
        res.status(200).json({
            message: "Login Successful",
            user
        }); 
    }
);

userRouter.post(
    '/register',
    async(req:Request<{}, {}, registerationRequestBody>,res:Response)=>{
        try {
            // const { name, email, password, phoneNumber,role, resume} =req.body;
            const passwordHash= await bcrypt.hash(req.body.password, process.env.PASSWORD_SALT as string)
            const user: User = await db.Users.create({...req.body, password: passwordHash});  
            res.status(200).json({
                message: "Registration Successful",
                user
            })
        } catch (error) {
            res.status(400).json({
                message: 'Something Went Wrong',
                error: error
            })    
        }

    }
);
export {userRouter};
