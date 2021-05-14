import { Board } from "./board.model.js";

const getAll = async () => {
  const boards = Board.getAll();

  return boards;
};

const getBoardById = async (id) => {
  const board = Board.getBoardById(id);

  return board;
};

const createBoard = ({ title }) => {
  try {
    const board = new Board({ title });

    board.save();

    return board;
  } catch (error) {
    return error;
  }
};

const updateBoardById = (body) => {
  try {
    const board = Board.findByIdAndUpdate(body);

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
