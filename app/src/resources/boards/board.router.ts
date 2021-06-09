import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CONSTANTS } from '../../common/constants';
import { EntityExistsError, NotFoundError } from '../../errors/http-errors';
import { boardDataValidation } from '../../validation';
import { Board } from './board.model';
import {
  getAll,
  save,
  get,
  remove,
  update,
} from './board.service';

const { BOARDS } = CONSTANTS;
const { OK, CREATED, NO_CONTENT } = StatusCodes;

const boardRouter = Router();

boardRouter.post('/', boardDataValidation, async (req, res, next) => {
  try {
    const board = await save(req);
  
    if (!board) {
      throw new EntityExistsError();
    }
  
    return res.status(CREATED).json(Board.toResponse(board));
  } catch (error) {
    return next(error);
  }
});

boardRouter.get('/', async (_req, res, next) => {
  try {
    const boards = await getAll();
    return res.json(boards.map(Board.toResponse));
  } catch (error) {
    return next(error);
  }
});

boardRouter.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const board = await get(id as string);
   
    if (!board) {
      throw new NotFoundError(BOARDS, { boardId: `${id}` });
    }
    
    return res.status(OK).json(Board.toResponse(board));
  } catch (error) {
    return next(error);
  }
});

boardRouter.put('/:id', boardDataValidation, async (req, res, next) => {
  try {
    const { id } = req.params;
    const board = await update(req);
  
    if (!board) {
      throw new NotFoundError(BOARDS, { boardId: `${id}` });
    }
    
    return res.json(Board.toResponse(board));
  } catch (error) {
    return next(error);
  }
});

boardRouter.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const board = await remove(id as string);
  
    if (!board) {
      throw new NotFoundError(BOARDS, { boardId: `${id}` });
    }
  
    return res.sendStatus(NO_CONTENT);
  } catch (error) {
    return next(error);
  }
});

export default boardRouter;
