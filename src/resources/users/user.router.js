import { Router } from 'express';
import { User } from './user.model.js';
import { getAll } from './user.service.js';

const userRouter = Router();

userRouter.get('/', async (req, res) => {
  const users = await getAll();
  res.json(users.map(User.toResponse));
});

userRouter.get('/', async (req, res) => {
  const users = await getAll();
  res.json(users.map(User.toResponse));
});

userRouter.post('/', async (req, res) => {
  const users = await getAll();
  res.json(users.map(User.toResponse));
});

userRouter.put('/', async (req, res) => {
  const users = await getAll();
  res.json(users.map(User.toResponse));
});

userRouter.delete('/', async (req, res) => {
  const users = await getAll();
  res.json(users.map(User.toResponse));
});

export default userRouter;
