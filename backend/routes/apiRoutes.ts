import userRoutes from './api/userAuthRoutes';
import { RequestHandler, Router } from 'express';
<<<<<<< HEAD
import postRouter from './api/postRouter';
=======
>>>>>>> main

const apiRoutes = Router();

apiRoutes.use('/users', userRoutes as RequestHandler);

export default apiRoutes;
