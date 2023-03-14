import userRoutes from './api/userAuthRoutes';
import { RequestHandler, Router } from 'express';
import postRouter from './api/postRouter';
import { TryCatchMiddleware } from '../middleware/TryCatchMiddleware';

const apiRoutes = Router();

apiRoutes.use('/users', userRoutes as RequestHandler);
apiRoutes.use('/posts', postRouter as RequestHandler);

export default apiRoutes;
