import * as express from 'express';
import { PORT } from './utils/config';
import { connectDB } from './database/db';
import { errorHandler } from './middleware/errorHandler';
import apiRoutes from './routes/apiRoutes';

connectDB();
const app = express();

app.use(express.json());
app.use(errorHandler);
app.use('/api', apiRoutes);
app.listen(PORT, () => console.log('Server is listening on port: ' + PORT));
