import { Schema } from 'mongoose';
import { UserType } from '../types/userTypes';

export interface IUserSchema extends UserType {
    _id: string;
  }
  
  const UserSchema = new Schema<UserType>(
    {
      userFirstName:   {type: String, required: true },
      userLastName:    {type: String, required: true },
      userEmail: {
        type: String,
        required: true,
        unique: true,
      },
      password:         {type: String, required: true},
      profilePictureId: {type: String, default: ""},
      userPicturesIds:  {type: [],  default: []},
      savedPicturesIds: {type: [],  default: []},
      savedRoutes: {type: [],  default: []}
      
    },
    {timestamps: true}
  );
  
  export default UserSchema;
  