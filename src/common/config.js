import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({
  path: join(__dirname, '../../.env')
});

const { env } = process;

export const config = {
  PORT: env.PORT,
  NODE_ENV: env.NODE_ENV,
  MONGO_CONNECTION_STRING: env.MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY: env.JWT_SECRET_KEY,
  AUTH_MODE: env.AUTH_MODE === 'true'
}
