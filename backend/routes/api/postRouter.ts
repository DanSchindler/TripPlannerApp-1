
import express = require('express');
import { RequestHandler } from 'express';
import { userAuthorization } from '../../middleware/validations/userValidation';
import { Response, NextFunction } from 'express'

import {
    getExploreFeedPosts,
    getUserFeed,
    getUserPosts,
    likePost,
    createRoute,
    createLocation,
    reachedController,
} from '../../controllers/postsController';
import { multer } from '../../logic/cloudServices/cloudStorageHandler';

const postRouter = express.Router();

postRouter.post('/createRoute',userAuthorization as RequestHandler,createRoute as RequestHandler);
postRouter.post('/createLocation',userAuthorization as RequestHandler,multer.single("imgfile"),reachedController, createLocation);
//postRouter.get('/:userId/feed', getUserFeed);

postRouter.get('/explore',reachedController, getExploreFeedPosts);
postRouter.get('/:userId/posts', getUserPosts);
postRouter.get('/:userId/feed', getUserFeed);

postRouter.patch('/:userId/like', likePost);

export default postRouter;
