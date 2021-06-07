import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { EntityExistsError, NotFoundError } from '../../errors/http-errors';
import { userDataValidation } from '../../validation/userDataValidation';
import { User } from './user.model';
import { CONSTANTS } from '../../common/constants';
import {
  getAll,
  save,
  get,
  update,
  remove,
} from './user.service';

const { USERS } = CONSTANTS;
const { OK, CREATED, NO_CONTENT } = StatusCodes;

const userRouter = Router();

userRouter.post('/', userDataValidation, async (req, res, next) => {
  try {
    const user = await save(req);
  
    if (!user) {
      throw new EntityExistsError();
    }
  
    return res.status(CREATED).json(User.toResponse(user));
  } catch (error) {
    return next(error);
  }
});

userRouter.get('/', async (_req, res) => {
  const users = await getAll();
  return res.status(OK).json(users.map(User.toResponse));
});

userRouter.get('/:id', async ({ params }, res, next) => {
  try {
    const { id } = params;
    const user = await get(id as string);
    
    if (!user) {
      throw new NotFoundError(USERS, { userId: `${id}` });
    }
  
    return res.status(OK).json(User.toResponse(user));
  } catch (error) {
    return next(error);
  }
});

userRouter.put('/:id', userDataValidation, async (req, res, next) => {
  try {
    const user = await update(req);
  
    if (!user) {
      throw new NotFoundError(USERS, { userId: `${req.body.id}` });
    }
  
    return res.status(OK).json(User.toResponse(user));
  } catch (error) {
    return next(error);
  }
});

userRouter.delete('/:id', async ({ params }, res, next) => {
  try {
    const { id } = params;
    const user = await remove(id as string);
  
    if (!user) {
      throw new NotFoundError(USERS, { userId: `${id}` });
    }
  
    return res.sendStatus(NO_CONTENT);
  } catch (error) {
    return next(error);
  }
});

export default userRouter;
