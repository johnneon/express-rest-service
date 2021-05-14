import { Router } from 'express';
import { OK, CREATED, NO_CONTENT } from 'http-status-codes';
import { User } from './user.model.js';
import {
  getAll,
  createUser,
  getUserById,
  deleteUserById,
  updateUserById,
} from './user.service.js';

const userRouter = Router();

userRouter.post('/', async (req, res) => {
  const user = await createUser(req);
  res.status(CREATED).json(User.toResponse(user));
});

userRouter.get('/', async (req, res) => {
  const users = await getAll();
  res.json(users.map(User.toResponse));
});

userRouter.get('/:id', async (req, res) => {
  const user = await getUserById(req.params.id);
  res.status(OK).json(User.toResponse(user));
});

userRouter.put('/:id', async (req, res) => {
  const user = await updateUserById(req);
  res.json(User.toResponse(user));
});

userRouter.delete('/:id', async (req, res) => {
  await deleteUserById(req.params.id);
  res.sendStatus(NO_CONTENT);
});

export default userRouter;
