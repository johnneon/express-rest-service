import { Router } from 'express';
import { Task } from './task.model.js';
import { getAll } from './task.service.js';

const taskRouter = Router();

taskRouter.get('/', async (req, res) => {
  const tasks = await getAll();
  res.json(tasks.map(Task.toResponse));
});


taskRouter.post('/', async (req, res) => {
  const tasks = await getAll();
  res.json(tasks.map(Task.toResponse));
});

taskRouter.put('/', async (req, res) => {
  const tasks = await getAll();
  res.json(tasks.map(Task.toResponse));
});

taskRouter.delete('/', async (req, res) => {
  const tasks = await getAll();
  res.json(tasks.map(Task.toResponse));
});

export default taskRouter;
