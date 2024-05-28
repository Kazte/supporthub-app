import * as dotenv from 'dotenv';

import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().min(1000).default(3000),
  JWT_SECRET: z.string().default('secret-a7c97ae9-8133-50ea-b7e3-7fde99db7683')
});

const env = envSchema.parse(process.env);

export default env;
