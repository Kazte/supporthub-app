import { createUserController } from './../../user/dependencies';

export const resolvers = {
  Query: {
    getUser: async () => {
      return {};
    }
  },
  Mutation: {
    createUser: createUserController.createUserRun.bind(createUserController),
    loginUser: createUserController.loginUserRun.bind(createUserController)
  }
};
