import { ApolloServer } from '@apollo/server';
import env from '@/env';
import { resolvers } from './graphql/resolvers';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './graphql/type.d';

export class Server {
  private readonly server: ApolloServer;

  constructor() {
    this.server = new ApolloServer({ typeDefs, resolvers });
  }

  async start() {
    const port = env.PORT;

    const { url } = await startStandaloneServer(this.server, {
      listen: { port }
    });

    console.log(`Server ready at ${url}`);
  }
}
