import * as express from 'express';
import { PORT } from "./utils/config";

const app = express();
app.use(express.json());
app.listen(PORT,() => console.log('server is listening on port: ' + PORT));
