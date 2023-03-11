import * as bcrypt from "bcrypt";
import UserModel from "../models/userModel";
import * as jwt from "jsonwebtoken";
import { UserType } from "../types/userTypes";

export async function userRegister(user: UserType): Promise<UserType>{
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password,salt);
    const newUser = new UserModel(user);
    const savedUser = await newUser.save();
    return savedUser;
}