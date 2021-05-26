import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { User } from './user.model';
import {
  getAll,
  save,
  get,
  update,
  remove,
} from './user.service';

const { OK, CREATED, NO_CONTENT, NOT_FOUND } = StatusCodes;

const userRouter = Router();

userRouter.post('/', async (req, res) => {
  const user = await save(req);
  return res.status(CREATED).json(User.toResponse(user));
});

userRouter.get('/', async (_req, res) => {
  const users = await getAll();
  return res.status(OK).json(users.map(User.toResponse));
});

userRouter.get('/:id', async ({ params }, res) => {
  const { id } = params;
  const user = await get(id as string);
  if (user) {
    return res.status(OK).json(User.toResponse(user));
  }
  return res.status(NOT_FOUND);
});

userRouter.put('/:id', async (req, res) => {
  const user = await update(req);
  return res.status(OK).json(User.toResponse(user));
});

userRouter.delete('/:id', async ({ params }, res) => {
  const { id } = params;
  await remove(id as string);
  return res.sendStatus(NO_CONTENT);
});

export default userRouter;
