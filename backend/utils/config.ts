import * as dotenv from 'dotenv';
dotenv.config();
export const PORT = process.env.PORT ?? 5000;
export const NODE_ENV = process.env.NODE_ENC ?? 'development';
export const MONGO_URI = process.env.MONGO_URI ?? null;
export const JWT_SECRET = process.env.JWT_SECRET ?? '';

export const POSTS_IN_PAGE = 10;
