import express = require('express');

import {
    getFeedPosts,
    getUserFeed,
    getUserPosts,
    likePost,
    createRoute,
    createLocation,
} from '../../controllers/postsController';

const postRouter = express.Router();

postRouter.post('/createRoute', createRoute);
postRouter.post('/createLocation', createLocation);
postRouter.get('/:userId/feed', getUserFeed);

postRouter.get('/', getFeedPosts);
postRouter.get('/:userId/posts', getUserPosts);
postRouter.get('/:userId/feed', getUserFeed);

postRouter.patch('/:userId/like', likePost);

export default postRouter;
