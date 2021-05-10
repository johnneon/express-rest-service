import { fileURLToPath } from 'url';
import express from 'express';
import swaggerUI from 'swagger-ui-express';
import { dirname, join } from 'path';
import YAML from 'yamljs';
import userRouter from './resources/users/user.router.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const swaggerDocument = YAML.load(join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);

export { app };
