import { ApiError } from '@/infraestructure/error/api-error';
import { IBcrypt } from '@/domain/services/bcrypt.interface';
import type { IUser } from '@/domain/user/user.interface';
import { User } from '@/domain/user/user';

export class CreateUser {
  constructor(
    private readonly userRepository: IUser,
    private readonly bcryptService: IBcrypt
  ) {}

  async execute(email: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findByEmail(email);

    console.log('user1', user);

    if (user) {
      throw new ApiError(400, 'User already exists');
    }

    const hashedPassword = await this.bcryptService.hash(password);

    return await this.userRepository.create(email, hashedPassword);
  }
}
