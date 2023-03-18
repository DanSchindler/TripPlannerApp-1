import { postGenreEnum } from './postGenreEnum';
import { Types } from 'mongoose';
import { LocationType } from './locationType';
import { RouteType } from './routeType';
import { PostType } from './postType';

export interface PostDTOType extends PostType {
    contentData: LocationType | RouteType | null;
    postGenre: postGenreEnum;
    dateUploaded: string;
    uploadedBy: string;
    cities: string[];
    categories: string[];
    userIdLiked: Types.Map<boolean>;
    comments: string[];
    views: number;
}

export function createPostDTO(post: PostType): PostDTOType {
    const {
        dataID,
        postGenre,
        dateUploaded,
        uploadedBy,
        cities,
        categories,
        userIdLiked,
        comments,
        views,
    } = post;
    const postDTO: PostDTOType = {
        contentData: null,
        postGenre,
        dateUploaded,
        uploadedBy,
        cities,
        categories,
        userIdLiked,
        comments,
        views,
        dataID,
    };
    return postDTO;
}
