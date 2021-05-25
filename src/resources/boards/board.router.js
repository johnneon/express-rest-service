import { Router } from 'express';
import { OK, CREATED, NO_CONTENT, NOT_FOUND } from 'http-status-codes';
import { Board } from './board.model.js';
import {
  getAll,
  save,
  get,
  remove,
  update,
} from './board.service.js';

const boardRouter = Router();

boardRouter.post('/', async (req, res) => {
  const board = await save(req);
  return res.status(CREATED).json(Board.toResponse(board));
});

boardRouter.get('/', async (req, res) => {
  const boards = await getAll();
  return res.json(boards.map(Board.toResponse));
});

boardRouter.get('/:id', async (req, res) => {
  const board = await get(req.params.id);
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
  await remove(req.params.id);
  return res.sendStatus(NO_CONTENT);
});

export default boardRouter;
