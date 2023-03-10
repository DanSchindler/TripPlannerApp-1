import * as express from 'express';
import { PORT } from "./utils/config";
import { connectDB } from "./database/db";

connectDB();

const app = express();
app.use(express.json());
app.listen(PORT,() => console.log('Server is listening on port: ' + PORT));
