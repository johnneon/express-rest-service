import { Board } from "./board.model.js";

const getAll = async () => {
  const boards = Board.getAll();

  return boards;
};

const getBoardById = async (id) => {
  const board = Board.getBoardById(id);

  return board;
};

const createBoard = ({ title, columns }) => {
  try {
    const board = new Board({ title, columns });

    board.save();

    return board;
  } catch (error) {
    return error;
  }
};

const updateBoardById = async (body) => {
  try {
    await Board.delete(body.id);
    const board = new Board(body);

    board.save();

    return board;
  } catch (error) {
    return error;
  }
};

const deleteBoardById = async (id) => {
  await Board.delete(id);
};

export default {
  getAll,
  createBoard,
  getBoardById,
  deleteBoardById,
  updateBoardById,
};
