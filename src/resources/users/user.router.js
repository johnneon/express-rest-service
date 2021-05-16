import { Router } from 'express';
import { OK, CREATED, NO_CONTENT } from 'http-status-codes';
import { User } from './user.model.js';
import {
  getAll,
  save,
  get,
  update,
  remove,
} from './user.service.js';

const userRouter = Router();

userRouter.post('/', async (req, res) => {
  const user = await save(req);
  return res.status(CREATED).json(User.toResponse(user));
});

userRouter.get('/', async (req, res) => {
  const users = await getAll();
  return res.status(OK).json(users.map(User.toResponse));
});

userRouter.get('/:id', async ({ params }, res) => {
  const user = await get(params.id);
  return res.status(OK).json(User.toResponse(user));
});

userRouter.put('/:id', async (req, res) => {
  const user = await update(req);
  return res.status(OK).json(User.toResponse(user));
});

userRouter.delete('/:id', async ({ params }, res) => {
  await remove(params.id);
  return res.sendStatus(NO_CONTENT);
});

export default userRouter;
