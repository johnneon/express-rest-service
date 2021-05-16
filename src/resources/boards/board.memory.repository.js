import { Board } from "./board.model.js";

export const getAll = async () => {
  try {
    const boards = Board.getAll();
  
    return boards;
  } catch (error) {
    return error;
  }
};

export const get = async (id) => {
  try {
    const board = Board.getBoardById(id);
  
    return board;
  } catch (error) {
    return error;
  }
};

export const save = ({ title, columns }) => {
  try {
    const board = new Board({ title, columns });

    board.save();

    return board;
  } catch (error) {
    return error;
  }
};

export const update = async (body) => {
  try {
    await Board.delete(body.id);
    const board = new Board(body);

    board.save();

    return board;
  } catch (error) {
    return error;
  }
};

export const remove = async (id) => {
  try {
    return await Board.delete(id);
  } catch (error) {
    return error;
  }
};
