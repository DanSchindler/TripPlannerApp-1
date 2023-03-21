import { PostType } from '../../../types/postType';
import PostsModel from '../../../models/postsModel';
import { LocationType } from '../../../types/locationType';
import LocationsModel from '../../../models/locationsModel';
import { Request, Response } from 'express';
import { ObjectId } from 'mongoose';

export async function uploadPost(postToUpload: PostType) {
    const newPost = new PostsModel(postToUpload);
    const savedPost = await newPost.save();
    return savedPost;
}
export async function uploadLocation(locationToUpload: LocationType) {
    const newLocation = new LocationsModel(locationToUpload);
    const savedLocation = await newLocation.save();
    return savedLocation;
}

export function createNewPostFromData(
    req: Request,
    res: Response,
    userId: string,
    savedLocationId: ObjectId,
    savedImageLabels: string[]
): PostType {
    const newPost: PostType = req.body;
    newPost.uploadedBy = userId;
    newPost.dataID = savedLocationId;
    newPost.categories = savedImageLabels;
    return newPost;
}
