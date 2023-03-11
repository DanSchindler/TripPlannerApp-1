import { RequestHandler} from 'express';
import {userRegisterHandler} from "../../controllers/auth";
import express = require('express');

const userRoutes = express.Router();

userRoutes.route('/register').post(userRegisterHandler as RequestHandler);


export default userRoutes;
