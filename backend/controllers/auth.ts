import { Request, Response, NextFunction } from 'express';
import { UserType } from '../types/userTypes';
import { loginUserLocal, userRegisterLocal } from '../logic/users/userAuthentication';
import { validationResult } from 'express-validator';

//Register User
export const userRegisterHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
            return;
        }
        const newUser: UserType = req.body;

        const savedUser = await userRegisterLocal(newUser);
        res.status(201).json(savedUser);
    } catch (err) {
        next(err);
    }
};

export const loginLocalHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    const { userEmail, password } = req.body;
    try {
        const loggedInUser = await loginUserLocal(userEmail, password);
        res.status(201).json(loggedInUser);
    } catch (error) {
        next(error);
    }
};
