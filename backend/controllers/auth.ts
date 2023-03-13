import { Request, Response } from 'express';
import { UserType } from '../types/userTypes';
import { userRegister } from '../logic/userAuthentication';

//Register User
export const userRegisterHandler = async (req: Request, res: Response) => {
    try {
        const newUser: UserType = req.body;

        /*const{
            userFirstName,
            userLastName,
            userEmail,
            password,
            profilePictureId,
            userPicturesIds,
            savedPicturesIds,
            savedRoutes
        } = req.body;*/
        const savedUser = await userRegister(newUser);
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
