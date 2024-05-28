import type { IJwt } from '@/domain/services/jwt.interface';
import env from '@/env';
import jwt from 'jsonwebtoken';

export class JwtService implements IJwt {
  sign(payload: string | object | Buffer): string {
    return jwt.sign(payload, env.JWT_SECRET);
  }

  async verify(token: string): Promise<string | object> {
    return await jwt.verify(token, env.JWT_SECRET);
  }
}
