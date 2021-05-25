import express, { Application } from 'express';
// import logger from 'morgan';
// import cors from 'cors';
// import { fileURLToPath } from 'url';
// import { dirname, join } from 'path';
// import swaggerUI from 'swagger-ui-express';
// import YAML from 'yamljs';
// import userRouter from './resources/users/user.router.js';
// import boardRouter from './resources/boards/board.router.js';
// import taskRouter from './resources/tasks/task.router.js';
// import { transferBoardId } from './utils/transferBoardId.js';
// import { greetings } from './utils/greetings.js';

const app: Application = express();
// const __dirname = dirname(fileURLToPath(import.meta.url));
// const swaggerDocument = YAML.load(join(__dirname, '../doc/api.yaml'));

// app.use(logger('dev'));
// app.use(cors());
app.use(express.json());

// app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// app.use('/', greetings);

// app.use('/users', userRouter);

// app.use('/boards', boardRouter);

// boardRouter.use('/:id/tasks', transferBoardId, taskRouter);

export default app;
