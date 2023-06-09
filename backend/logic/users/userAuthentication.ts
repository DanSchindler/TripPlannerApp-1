import * as bcrypt from 'bcrypt';
import { checkIsValidObjectId } from '../../database/db';
import BadRequestError from '../../middleware/errors/BadRequestError';
import NotFoundError from '../../middleware/errors/NotFoundError';
import UserModel from '../../models/userModel';
import { IUserSchema } from '../../schema/userSchema';
import { UserReturnType, UserType } from '../../types/userTypes';
import { generateToken } from './tokenService';

//User sign up with user name and password (local)
export async function userRegisterLocal(user: UserType): Promise<UserType> {
    //check if email already exist
    const existingUser = await UserModel.findOne({ userEmail: user.userEmail });
    if (existingUser) throw new BadRequestError('A user with this email address already exists');

    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
    const newUser = new UserModel(user);
    const savedUser = await newUser.save();
    return savedUser;
}

//Logging In
export async function loginUserLocal(email: string, password: string): Promise<UserReturnType> {
    const user = await UserModel.findOne({ userEmail: email }); //check if email exists in db
    if (user == null) throw new NotFoundError('Email not found');

    const isPasswordMatch = await bcrypt.compare(password, user.password); //check if password valid
    if (!isPasswordMatch) throw new BadRequestError('Invalid password');

    return returnUserWithToken(user);
}

function returnUserWithToken(user: IUserSchema): UserReturnType {
    //const token = JWT.sign(user, JWT_SECRET, {expiresIn: '1d',});
    const token = generateToken({ _id: user._id, email: user.userEmail });

    return {
        _id: user._id,
        userEmail: user.userEmail,
        token,
    };
}

export async function getUserById(userId: string): Promise<IUserSchema> {
    checkIsValidObjectId(userId);
    const user = await UserModel.findById(userId);
    if (user == null) throw new NotFoundError('User not found');
    return user;
}
