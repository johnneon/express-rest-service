import express, { Application } from 'express';
import logger from 'morgan';
import cors from 'cors';
import { join } from 'path';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';
import { transferBoardId } from './utils/transferBoardId';
import { greetings } from './utils/greetings';

const app: Application = express();
const swaggerDocument = YAML.load(join(__dirname, '../doc/api.yaml'));

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

app.use('/api-docs', express.static(join(__dirname, '../api-docs')));

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', greetings);

app.use('/users', userRouter);

app.use('/boards', boardRouter);

boardRouter.use('/:id/tasks', transferBoardId, taskRouter);

export default app;
