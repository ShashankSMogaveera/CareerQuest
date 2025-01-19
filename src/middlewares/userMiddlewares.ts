import { Request, Response,NextFunction } from "express";
import { loginJwtPayload, loginRequestBody, userRequestBody } from "../Interfaces/UserInterfaces";
import jwt from "jsonwebtoken";
import db from "../models/index";

export const validateUser = function(req: userRequestBody, res:Response, next:NextFunction){
        try{
            const SECRET_KEY=process.env.SECRET_KEY;
            if(!SECRET_KEY){
                throw new Error("Secret Key Missing")
            }
            const jwtToken= req.cookies.jwt;
            const decodedToken: loginJwtPayload= jwt.verify(jwtToken, SECRET_KEY ) as loginJwtPayload;
            if(!decodedToken){
                res.status(401).json({message: "Unauthorised Access"})
            }

            const user= db.Users.findOne({
                where: {
                    email: decodedToken.email
                }
            })

            if(!user){
                res.status(401).json({message: 'Invalid Credentials'})
            }

            req.user= user;
            next();

        }catch(err:any){
            res.status(400).json({
                error: err,
            })
        }
}