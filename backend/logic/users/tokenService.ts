import * as JWT from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';

import { JWT_SECRET } from '../../utils/config';

interface UserPayload extends JwtPayload {
    _id: string;
    email: string;
}

export function generateToken(user: UserPayload): string {
    return JWT.sign(user, JWT_SECRET, {
        expiresIn: '1d',
    });
}
