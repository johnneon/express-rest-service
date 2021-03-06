import { IBoard } from "../../types/IBoard";
import { Board } from "./board.model";

/**
 * Board repository module
 * @module Board repository
 */

/**
 * Function that get all boards from data base
 * @async
 * @function
 * @returns {Promise<IBoard[]>} - Returns all boards from data base
 */
const getAll = async (): Promise<IBoard[]> => {
  try {
    const boards = Board.getAll();
  
    return await boards;
  } catch (error) {
    return error;
  }
};

/**
 * Get board by id
 * @async
 * @function
 * @param {string|number} id - Board id
 * @returns {Promise<IBoard>} Returns the searched board from data base
 */
const get = async (id: string|number): Promise<IBoard | null> => {
  try {
    const board = await Board.getBoardById(id);
  
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
 * @returns {Promise<IBoard>} - Returns the saved board from data base
 */
const save = async ({ title, columns }: IBoard): Promise<IBoard> => {
  try {
    const board = new Board({ title, columns });

    await board.save();

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
 * @returns {Promise<IBoard>} - Returns the updated board from data base
 */
const update = async (body: IBoard): Promise<IBoard> => {
  try {
    if (body.id) {
      await Board.delete(body.id);
    }
    const board = new Board(body);

    await board.save();

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
 * @returns {Promise<void>}
 */
const remove = async (id: string|number): Promise<void> => {
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