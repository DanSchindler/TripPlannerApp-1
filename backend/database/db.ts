import mongoose from 'mongoose';
import { MONGO_URI } from '../utils/config';

export const connectDB = async () => {
    if (!MONGO_URI) {
        console.log('MONGO_URI is undefined in the env file');
        process.exit(1);
    }
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected successfully to MongoDB');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};
