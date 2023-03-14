import { ObjectId, Schema } from 'mongoose';
import { PostType } from '../types/postType';
import { getNow } from '../utils/dateTime';

export interface IPostSchema extends PostType {
    _id: ObjectId;
}

const PostSchema = new Schema<PostType>({
    postGenre: { type: Number, required: true },
    dataID: { type: String, required: true },
    dateUploaded: {
        type: String,
        default: getNow(),
    },
    uploadedBy: { type: String, required: true },
    cities: { type: [String], default: [], required: true },
    categories: { type: [String], default: [], required: true },
    userIdLiked: { type: Map, of: Boolean },
    comments: { type: [String], default: [] },
    views: { type: Number, default: 0 },
});

export default PostSchema;
