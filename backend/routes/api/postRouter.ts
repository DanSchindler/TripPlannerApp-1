import express = require('express');
import { RequestHandler } from 'express';
import { userAuthorization } from '../../middleware/validations/userValidation';

import {
    getExploreFeedPosts,
    getUserFeed,
    getUserPosts,
    likePost,
    createRoute,
    createLocation,
    reachedController,
} from '../../controllers/postsController';

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
    createLocation
);
//postRouter.get('/:userId/feed', getUserFeed);

postRouter.get(
    '/explore',
    reachedController,
    userAuthorization as RequestHandler,
    getExploreFeedPosts
);
postRouter.get('/:userId/posts', getUserPosts);
postRouter.get('/:userId/feed', getUserFeed);

postRouter.patch('/:userId/like', likePost);

export default postRouter;
