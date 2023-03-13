import CustomError from './CustomError';

export default class NotFoundError extends CustomError {
  constructor(message: string = 'Not Found', error?: string | null) {
    super(message, 404, error);
  }
}
