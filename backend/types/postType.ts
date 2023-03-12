import { postGenreEnum } from './postGenreEnum';
import { Types } from 'mongoose';

export interface PostType {
    dataID: string;
    postGenre: postGenreEnum;
    dateUploaded: Date;
    uploadedBy: string;
    cities: string[];
    categories: string[];
    userIdLiked: Types.Map<boolean>;
    comments: string[];
    views: number;
}
