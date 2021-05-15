import { Router } from 'express';
import { OK, CREATED, NO_CONTENT, NOT_FOUND } from 'http-status-codes';
import { Board } from './board.model.js';
import {
  getAll,
  createBoard,
  getBoardById,
  deleteBoardById,
  updateBoardById,
} from './board.service.js';

const boardRouter = Router();

boardRouter.post('/', async (req, res) => {
  const board = await createBoard(req);
  res.status(CREATED).json(Board.toResponse(board));
});

boardRouter.get('/', async (req, res) => {
  const boards = await getAll();
  res.json(boards.map(Board.toResponse));
});

boardRouter.get('/:id', async (req, res) => {
  const board = await getBoardById(req.params.id);
  if (!board) {
    res.sendStatus(NOT_FOUND);
  }
  res.status(OK).json(Board.toResponse(board));
});

boardRouter.put('/:id', async (req, res) => {
  const board = await updateBoardById(req);
  res.json(Board.toResponse(board));
});

boardRouter.delete('/:id', async (req, res) => {
  await deleteBoardById(req.params.id);
  res.sendStatus(NO_CONTENT);
});

export default boardRouter;
