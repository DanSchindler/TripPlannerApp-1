import { NextFunction, Response, Request } from 'express';
import HttpException from '../../utils/httpException';
import { NODE_ENV } from '../../utils/config';
import CustomError from './CustomError';
import BadRequestError from './BadRequestError';
import NotFoundError from './NotFoundError';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const errorHandler = (
    err: HttpException | CustomError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = err.status ?? 500;
    const message = err.message ?? 'something went wrong...';
    const error = err.error !== null ? err.error : null;

    if (err instanceof BadRequestError || err instanceof NotFoundError) return next(err);

    const errorResponse = {
        status,
        message,
        error,
        stack: NODE_ENV === 'production' ? '🥞' : err.stack,
    };

    res.status(status).json(errorResponse);
};
