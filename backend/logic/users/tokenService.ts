import * as JWT from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
import AuthenticationError from '../../middleware/errors/AuthenticationError';

import { JWT_SECRET } from '../../utils/config';

export interface UserPayload extends JwtPayload {
    _id: string;
    email: string;
}

export function generateToken(user: UserPayload): string {
    return JWT.sign(user, JWT_SECRET, {
        expiresIn: '1d',
    });
}

export function verifyToken(token: string): UserPayload {
    try {
        return JWT.verify(token, JWT_SECRET) as UserPayload;
    } catch (error) {
        throw new AuthenticationError('Invalid token');
    }
}
