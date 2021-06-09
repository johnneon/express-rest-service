import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CONSTANTS } from '../../common/constants';
import { EntityExistsError, NotFoundError } from '../../errors/http-errors';
import { taskDataValidation } from '../../validation';
import { Task } from './task.model';
import {
  getAll,
  save,
  get,
  remove,
  update,
} from './task.service';

const { TASKS } = CONSTANTS;
const { OK, CREATED, NO_CONTENT } = StatusCodes;

const taskRouter = Router();

taskRouter.post('/', taskDataValidation, async (req, res, next) => {
  try {
    const task = await save(req);
  
    if (!task) {
      throw new EntityExistsError();
    }
  
    return res.status(CREATED).json(Task.toResponse(task));
  } catch (error) {
    return next(error);
  }
});

taskRouter.get('/', async (req, res, next) => {
  try {
    const tasks = await getAll(req.body.boardId);
    return res.json(tasks.map(Task.toResponse));
  } catch (error) {
    return next(error);
  }
});

taskRouter.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await get(req);
    
    if (!task) {
      throw new NotFoundError(TASKS, { taskId: `${id}` });
    }
  
    return res.status(OK).json(Task.toResponse(task));
  } catch (error) {
    return next(error);
  }
});

taskRouter.put('/:id', taskDataValidation, async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await update(req);
  
    if (!task) {
      throw new NotFoundError(TASKS, { taskId: `${id}` });
    }
  
    return res.json(Task.toResponse(task));
  } catch (error) {
    return next(error);
  }
});

taskRouter.delete('/:id', async (req, res, next) => {
  try {
    const task = await remove(req);
  
    if (!task) {
      throw new NotFoundError(TASKS, { taskId: `${req.body.id}` });
    }
  
    return res.sendStatus(NO_CONTENT);
  } catch (error) {
    return next(error);
  }
});

export default taskRouter;
