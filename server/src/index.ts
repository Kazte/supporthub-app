import { Server } from './infraestructure/server/server';

(async () => {
  const server = new Server();
  await server.start();
})();
