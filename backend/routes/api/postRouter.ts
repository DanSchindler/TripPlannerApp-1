import express = require('express');
import { RequestHandler } from 'express';
import { userAuthorization } from '../../middleware/validations/userValidation';

import {
    getExploreFeedPosts,
    getUserFeed,
    getUserWall,
    likePost,
    createRoute,
    createLocation,
    reachedController,
} from '../../controllers/postsController';

import { multer } from '../../logic/cloudServices/cloudStorageService';
import { IMAGE_REQUEST_KEY } from '../../utils/config';

const postRouter = express.Router();

postRouter.post(
    '/createRoute',
    reachedController,
    userAuthorization as RequestHandler,
    createRoute as RequestHandler
);

postRouter.post(
    '/createLocation',
    reachedController,
    userAuthorization as RequestHandler,
    multer.single(IMAGE_REQUEST_KEY),
    createLocation
);

//postRouter.get('/:userId/feed', getUserFeed);

postRouter.get(
    '/explore',
    reachedController,
    userAuthorization as RequestHandler,
    getExploreFeedPosts
);
postRouter.get(
    '/:userId/wall',
    reachedController,
    getUserWall
    // ,userAuthorization as RequestHandler,
);
postRouter.get('/:userId/feed', getUserFeed);
postRouter.patch('/:userId/like', likePost);

export default postRouter;
