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
      savedPicturesIds: {type: [],  default: []}
      //TODO add list of uplodad photos id
      //TODO add list of saved routes id
      //TODO add saved photos id
    },
    {
      timestamps: true,
    }
  );
  
  export default UserSchema;
  