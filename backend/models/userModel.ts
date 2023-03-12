import { model } from 'mongoose';
import UserSchema, { IUserSchema } from '../schema/userSchema';

const UserModel = model<IUserSchema>('user', UserSchema);

export default UserModel;
