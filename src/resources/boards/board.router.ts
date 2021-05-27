import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Board } from './board.model';
import {
  getAll,
  save,
  get,
  remove,
  update,
} from './board.service';

const { OK, CREATED, NO_CONTENT, NOT_FOUND } = StatusCodes;

const boardRouter = Router();

boardRouter.post('/', async (req, res) => {
  const board = await save(req);
  return res.status(CREATED).json(Board.toResponse(board));
});

boardRouter.get('/', async (_req, res) => {
  const boards = await getAll();
  return res.json(boards.map(Board.toResponse));
});

boardRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const board = await get(id as string);
  if (!board) {
    return res.sendStatus(NOT_FOUND);
  }
  return res.status(OK).json(Board.toResponse(board));
});

boardRouter.put('/:id', async (req, res) => {
  const board = await update(req);
  res.json(Board.toResponse(board));
});

boardRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await remove(id as string);
  return res.sendStatus(NO_CONTENT);
});

export default boardRouter;
