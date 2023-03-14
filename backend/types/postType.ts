import { postGenreEnum } from './postGenreEnum';
import { ObjectId, Types } from 'mongoose';

export interface PostType {
    dataID: ObjectId;
    postGenre: postGenreEnum;
    dateUploaded: string;
    uploadedBy: string;
    cities: string[];
    categories: string[];
    userIdLiked: Types.Map<boolean>;
    comments: string[];
    views: number;
}
