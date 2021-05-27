import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Task } from './task.model';
import {
  getAll,
  save,
  get,
  remove,
  update,
} from './task.service';

const { OK, CREATED, NO_CONTENT, NOT_FOUND } = StatusCodes;

const taskRouter = Router();

taskRouter.post('/', async (req, res) => {
  const task = await save(req);
  return res.status(CREATED).json(Task.toResponse(task));
});

taskRouter.get('/', async (req, res) => {
  const tasks = await getAll(req.body.boardId);
  return res.json(tasks.map(Task.toResponse));
});

taskRouter.get('/:id', async (req, res) => {
  const task = await get(req);
  if (!task) {
    return res.sendStatus(NOT_FOUND);
  }
  return res.status(OK).json(Task.toResponse(task));
});

taskRouter.put('/:id', async (req, res) => {
  const task = await update(req);
  return res.json(Task.toResponse(task));
});

taskRouter.delete('/:id', async (req, res) => {
  await remove(req);
  return res.sendStatus(NO_CONTENT);
});

export default taskRouter;
