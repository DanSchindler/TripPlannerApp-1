import { body, sanitizeBody,check } from 'express-validator';
import { UserType } from '../../types/userTypes';


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
       
    
