import { RequestHandler} from 'express';
import {loginLocalHandler, userRegisterHandler} from "../../controllers/auth";
import express = require('express');
import { LoginValidation, registerValidation } from '../../middleware/validations/userValidation';

const userRoutes = express.Router();

userRoutes.route('/register').post(registerValidation,userRegisterHandler as RequestHandler);
userRoutes.route('/login').post(LoginValidation,loginLocalHandler as RequestHandler);

export default userRoutes;
