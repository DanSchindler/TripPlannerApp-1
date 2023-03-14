import * as express from 'express';
import { PORT } from './utils/config';
import { connectDB } from './database/db';
import { errorHandler } from './middleware/errors/errorHandler';
import apiRoutes from './routes/apiRoutes';
import { TryCatchMiddleware } from './middleware/TryCatchMiddleware';

connectDB();
const app = express();

app.use(express.json());
app.use('', TryCatchMiddleware(apiRoutes));
app.use(errorHandler);
app.listen(PORT, () => console.log('Server is listening on port: ' + PORT));
