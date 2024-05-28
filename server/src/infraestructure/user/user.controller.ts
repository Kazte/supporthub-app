import { ApiError } from '../error/api-error';
import { CreateUser } from '@/application/user/create-user';
import { LoginUser } from '@/application/user/login-user';

export class UserController {
  constructor(
    private readonly createUser: CreateUser,
    private readonly loginUser: LoginUser
  ) {}

  async createUserRun(_: any, args: { email: string; password: string }) {
    const { email, password } = args;

    try {
      const user = await this.createUser.execute(email, password);

      console.log('user2', user);

      if (!user) {
        return {
          code: 400,
          success: false,
          message: 'User already exists'
        };
      }

      return {
        code: 200,
        success: true,
        message: 'User created successfully',
        user
      };
    } catch (e) {
      if (e instanceof ApiError) {
        return {
          code: e.code,
          success: false,
          message: e.message
        };
      }

      return {
        code: 500,
        success: false,
        message: 'Internal server error'
      };
    }
  }

  async loginUserRun(_: any, args: { email: string; password: string }) {
    const { email, password } = args;

    try {
      const user = await this.loginUser.execute(email, password);

      if (!user) {
        return {
          code: 400,
          success: false,
          message: 'User does not exist'
        };
      }

      return {
        code: 200,
        success: true,
        message: 'User logged in successfully',
        user
      };
    } catch (e) {
      if (e instanceof ApiError) {
        return {
          code: e.code,
          success: false,
          message: e.message
        };
      }

      return {
        code: 500,
        success: false,
        message: 'Internal server error'
      };
    }
  }
}
