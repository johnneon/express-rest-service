import { Router } from 'express';
import { Board } from './board.model.js';
import { getAll } from './board.service.js';

const boardRouter = Router();

boardRouter.get('/', async (req, res) => {
  const boards = await getAll();
  res.json(boards.map(Board.toResponse));
});

boardRouter.post('/', async (req, res) => {
  const boards = await getAll();
  res.json(boards.map(Board.toResponse));
});

boardRouter.put('/', async (req, res) => {
  const boards = await getAll();
  res.json(boards.map(Board.toResponse));
});

boardRouter.delete('/', async (req, res) => {
  const boards = await getAll();
  res.json(boards.map(Board.toResponse));
});

export default boardRouter;
