export const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
    token: String!
  }

  type UserResponse {
    code: Int!
    success: Boolean!
    message: String!
    user: User
  }

  type Query {
    getUser: UserResponse
  }

  type Mutation {
    createUser(email: String!, password: String!): UserResponse
    loginUser(email: String!, password: String!): UserResponse
  }
`;
