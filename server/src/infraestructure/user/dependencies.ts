import { BcryptService } from '../services/bcrypt.service';
import { CreateUser } from '@/application/user/create-user';
import { JwtService } from '../services/jwt.service';
import { LoginUser } from '@/application/user/login-user';
import { UserController } from './user.controller';
import { UserPrismaRepository } from './user-prisma.repository';

const userRepository = new UserPrismaRepository();
const bcryptService = new BcryptService();
const jwtService = new JwtService();

const createUser = new CreateUser(userRepository, bcryptService);
const loginUser = new LoginUser(userRepository, bcryptService, jwtService);
export const createUserController = new UserController(createUser, loginUser);
