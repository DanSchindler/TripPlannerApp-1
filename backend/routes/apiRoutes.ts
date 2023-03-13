import userRoutes from './api/userAuthRoutes';
import { RequestHandler, Router } from 'express';
import { TryCatchMiddleware } from '../middleware/TryCatchMiddleware';

const apiRoutes = Router();

apiRoutes.use('/users',userRoutes as RequestHandler);

export default apiRoutes;
