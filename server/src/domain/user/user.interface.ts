import { User } from './user';

export interface IUser {
  findByEmail(email: string): Promise<User | null>;
  create(email: string, password: string): Promise<User>;
}
