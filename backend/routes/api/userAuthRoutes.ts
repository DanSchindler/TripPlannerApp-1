import { RequestHandler} from 'express';
import {userRegisterHandler} from "../../controllers/auth";
import express = require('express');
import { registerValidation } from '../../middleware/validation/userValidation';

const userRoutes = express.Router();

userRoutes.route('/register').post(registerValidation,userRegisterHandler as RequestHandler);


export default userRoutes;
