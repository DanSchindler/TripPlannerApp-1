import { NextFunction, Request, Response } from 'express';
import { PostType } from '../types/postType';
import { LocationType } from '../types/locationType';
import { uploadLocation, uploadPost } from '../logic/posts/posts/postCreator';
import { supplyFilteredPosts } from '../logic/posts/posts/postsSupplier';
import { POSTS_IN_PAGE } from '../utils/config';
import { IUserSchema } from '../schema/userSchema';

export function reachedController(req: Request, res: Response, next: NextFunction) {
    console.log('reached PostsController');
    next();
}

export const getExploreFeedPosts = async (req: Request, res: Response) => {
    const pageInd = (req.body.page || 1) as number;
    const pageSize = (req.body.pageSize || POSTS_IN_PAGE) as number; // probably has to be found in ENV
    const filterCities = req.body.cities;
    try {
        const allPosts = await supplyFilteredPosts(pageInd, pageSize, filterCities);
        res.status(201).json({ allPosts });
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getUserFeed = async (req: Request, res: Response) => {
    console.log('reached to getUserFeed');
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getUserPosts = async (req: Request, res: Response) => {
    console.log('reached to getUserPosts');
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const likePost = async (req: Request, res: Response) => {
    console.log('reached to likePost');
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createRoute = async (req: Request, res: Response) => {
    console.log('reached to createRoute');
};

export const createLocation = async (req: Request, res: Response) => {
    try {
        const newLocation: LocationType = req.body;
        const savedLocation = await uploadLocation(newLocation);
        const newPost: PostType = req.body;
        newPost.uploadedBy = req.body.user._id;
        newPost.dataID = savedLocation._id;
        const savedPost = await uploadPost(newPost);
        res.status(201).json({ postDetails: savedPost, locationDetail: savedLocation });
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};
