import { ApiError } from '@/infraestructure/error/api-error';
import { IBcrypt } from '@/domain/services/bcrypt.interface';
import { IJwt } from '@/domain/services/jwt.interface';
import { IUser } from '@/domain/user/user.interface';
import { User } from '@/domain/user/user';

export class LoginUser {
  constructor(
    private readonly userRepository: IUser,
    private readonly bcryptService: IBcrypt,
    private readonly jwtService: IJwt
  ) {}
  async execute(email: string, password: string): Promise<User> {
    const exists = await this.userRepository.findByEmail(email);

    if (!exists) {
      throw new ApiError(400, 'User does not exist');
    }

    const isValid = await this.bcryptService.compare(
      password,
      exists.password!
    );

    if (!isValid) {
      throw new ApiError(400, 'Invalid credentials');
    }

    const token = this.jwtService.sign({
      sub: exists.id,
      email: exists.email
    });

    return new User(exists.id, exists.email, exists.password, token);
  }
}
