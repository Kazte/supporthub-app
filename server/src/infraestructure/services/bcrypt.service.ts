import { IBcrypt } from '@/domain/services/bcrypt.interface';
import bcrypt from 'bcrypt';

export class BcryptService implements IBcrypt {
  async hash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
