import { NextFunction, Request, Response } from 'express';
import { PostType } from '../types/postType';
import { LocationType } from '../types/locationType';
import { uploadLocation, uploadPost } from '../logic/posts/posts/postCreator';
// import {POSTS_IN_PAGE} from "../utils/config";
// import {supplyPosts} from "../logic/posts/posts/postsSupplier";

export function reachedController(req: Request, res: Response, next: NextFunction) {
    console.log('reached PostsController');
    next();
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const getAllPosts = async (req: Request, res: Response) => {
//     const allPosts =
// };
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// export const getUserFeed = async (req: Request, res: Response) => {
//     let pageInd = req.query.page || 1;
//     let pageSize = req.query.pageSize || POSTS_IN_PAGE;
//     /*
//
//     has to fix conversion between string to numbers, then has to think what do I send, how to handle the
//     data from the posts? what to return? whos in charge of querying the exact data?
//
//     In addition, has to fix the types -
//     it may be helpful in manner of making sense to myself of what the data and what should I return.
//
//      */
//     //const posts = supplyPosts(,pageSize);
//
// };
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
        newPost.dataID = savedLocation._id;
        const savedPost = await uploadPost(newPost);
        res.status(201).json({ postDetails: savedPost, locationDetail: savedLocation });
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};
