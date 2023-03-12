
import { Request,Response } from "express";
import { UserType } from "../types/userTypes";
import { userRegister } from "../logic/userAuthentication";
import { validationResult} from 'express-validator';



//Register User
export const userRegisterHandler = async (req:Request,res: Response) =>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const newUser: UserType = req.body;
       
        const savedUser = await userRegister(newUser);
        res.status(201).json(savedUser);
   
    }
    catch(err){
        res.status(500).json({error: err.message});  

    }
}