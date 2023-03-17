import { body, sanitizeBody,check } from 'express-validator';
import { UserType } from '../../types/userTypes';
import { NextFunction } from 'express';
import { Request } from 'express';
import AuthenticationError from '../errors/AuthenticationError';
import { JWT_SECRET } from '../../utils/config';
import { getUserById } from '../../logic/userAuthentication';
import * as jwt from 'jsonwebtoken';
import { verifyToken } from '../../logic/tokenService';




export const registerValidation = [
    check('userEmail').isEmail().normalizeEmail(),
    check('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long').matches(/[A-Z]/)
    .withMessage('Password must contain at least one uppercase letter'),
    check('userFirstName')
    .not().isEmpty().withMessage('First name is required')
    .matches(/^[a-zA-Z]+$/).withMessage('First name can only contain letters'),
    check('userLastName')
    .not().isEmpty().withMessage('Last name is required')
    .matches(/^[a-zA-Z]+$/).withMessage('Last name can only contain letters')
    ];
   

export const LoginValidation = [
    check('userEmail').isEmail().normalizeEmail(),
    check('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long').matches(/[A-Z]/)
    .withMessage('Password must contain at least one uppercase letter')
    ];
       
    
export const userAuthorization = async (req: Request, res: Response,next: NextFunction) => {
    
    let token = req.header("Authorization");
    if (!token){ throw new AuthenticationError('Not authorized to access this route');};

    if (token.startsWith("Bearer ")){
        token = token.slice(7, token.length).trimStart();
    }
    try {
        const decoded = verifyToken(token);
        req.user = req.user = await getUserById(decoded._id);
 
    } catch (error) {
        throw new AuthenticationError('Invalid token');
    }
    next();
}