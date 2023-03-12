import { model } from 'mongoose';
import PostSchema, { IPostSchema } from '../schema/postSchema';
import { postsDBName } from './utils';

const PostsModel = model<IPostSchema>(postsDBName, PostSchema);

export default PostsModel;
