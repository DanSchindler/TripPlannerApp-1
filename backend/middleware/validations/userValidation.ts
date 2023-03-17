import { NextFunction,Request } from 'express';
import { body, sanitizeBody,check } from 'express-validator';
import { verifyToken } from '../../logic/users/tokenService';
import { getUserById } from '../../logic/users/userAuthentication';
import { UserReturnType, UserType } from '../../types/userTypes';
import AuthenticationError from '../errors/AuthenticationError';
import { Response, NextFunction } from 'express'


export const registerValidation = [
    check('userEmail').isEmail().normalizeEmail(),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
        .matches(/[A-Z]/)
        .withMessage('Password must contain at least one uppercase letter'),
    check('userFirstName')
        .not()
        .isEmpty()
        .withMessage('First name is required')
        .matches(/^[a-zA-Z]+$/)
        .withMessage('First name can only contain letters'),
    check('userLastName')
        .not()
        .isEmpty()
        .withMessage('Last name is required')
        .matches(/^[a-zA-Z]+$/)
        .withMessage('Last name can only contain letters'),
];

export const LoginValidation = [
    check('userEmail').isEmail().normalizeEmail(),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long')
        .matches(/[A-Z]/)
        .withMessage('Password must contain at least one uppercase letter'),
];


    
export async function userAuthorization (
    req: Request,
    _res: Response,
    next: NextFunction){
    
    let token = req.header("Authorization");
    if (!token){ throw new AuthenticationError('Not authorized to access this route');};

    if (token.startsWith("Bearer ")){
        token = token.slice(7, token.length).trimStart();
    }
    try {
        req.user = verifyToken(token);
        
    } catch (error) {
        throw new AuthenticationError('Invalid token');
    }
    
    next();
}