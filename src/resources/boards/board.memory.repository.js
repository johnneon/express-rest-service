import { Board } from "./board.model.js";

/**
 * Board repository module
 * @module Board repository
 */

/**
 * Function that get all boards from data base
 * @async
 * @function
 * @returns {IBoard[]} - Returns all boards from data base
 */
const getAll = async () => {
  try {
    const boards = Board.getAll();
  
    return boards;
  } catch (error) {
    return error;
  }
};

/**
 * Get board by id
 * @async
 * @function
 * @param {string|number} id - Board id
 * @returns {IBoard} Returns the searched board from data base
 */
const get = async (id) => {
  try {
    const board = Board.getBoardById(id);
  
    return board;
  } catch (error) {
    return error;
  }
};

/**
 * Save board to data base
 * @async
 * @function
 * @param {IBoard} board - Board data to register 
 * @returns {IBoard} - Returns the saved board from data base
 */
const save = ({ title, columns }) => {
  try {
    const board = new Board({ title, columns });

    board.save();

    return board;
  } catch (error) {
    return error;
  }
};

/**
 * Update board in data base
 * @async
 * @function
 * @param {IBoard} body - Board data
 * @returns {IBoard} - Returns the updated board from data base
 */
const update = async (body) => {
  try {
    await Board.delete(body.id);
    const board = new Board(body);

    board.save();

    return board;
  } catch (error) {
    return error;
  }
};

/**
 * Remove board from data base
 * @async
 * @function
 * @param {string|number} id - Board data
 * @returns {void}
 */
const remove = async (id) => {
  try {
    return await Board.delete(id);
  } catch (error) {
    return error;
  }
};

export {
  get,
  getAll,
  save,
  update,
  remove,
};