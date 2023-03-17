import CustomError from './CustomError';

export default class NotFoundError extends CustomError {
    constructor(message = 'Not Found', error?: string | null) {
        super(message, 404, error);
    }
}
