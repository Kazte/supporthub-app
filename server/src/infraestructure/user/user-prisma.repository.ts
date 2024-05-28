import type { IUser } from '@/domain/user/user.interface';
import { Prisma } from '../database/prisma';
import { User } from '@/domain/user/user';

export class UserPrismaRepository implements IUser {
  private db: Prisma;

  constructor() {
    this.db = Prisma.getInstance();
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.db.prisma.user.findUnique({
      where: {
        email
      }
    });

    if (!user) {
      return null;
    }

    return new User(user.id, user.email, user.password);
  }

  async create(email: string, password: string): Promise<User> {
    const user = await this.db.prisma.user.create({
      data: {
        email,
        password
      }
    });

    return new User(user.id, user.email, user.password);
  }
}
