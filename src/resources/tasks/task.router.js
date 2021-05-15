import { Router } from 'express';
import { OK, CREATED, NO_CONTENT } from 'http-status-codes';
import { Task } from './task.model.js';
import {
  getAll,
  createTask,
  getTaskById,
  deleteTaskById,
  updateTaskById,
} from './task.service.js';

const taskRouter = Router();

taskRouter.post('/', async (req, res) => {
  const task = await createTask(req);
  res.status(CREATED).json(Task.toResponse(task));
});

taskRouter.get('/', async (req, res) => {
  const tasks = await getAll();
  res.json(tasks.map(Task.toResponse));
});

taskRouter.get('/:id', async (req, res) => {
  const task = await getTaskById(req.params.id);
  res.status(OK).json(Task.toResponse(task));
});

taskRouter.put('/:id', async (req, res) => {
  const task = await updateTaskById(req);
  res.json(Task.toResponse(task));
});

taskRouter.delete('/:id', async (req, res) => {
  await deleteTaskById(req.params.id);
  res.sendStatus(NO_CONTENT);
});

export default taskRouter;
