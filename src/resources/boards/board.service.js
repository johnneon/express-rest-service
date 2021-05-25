import * as boardsRepo from './board.memory.repository.js';
import { removeAllById } from '../tasks/task.service.js';

/**
 * Board repository module
 * @module Board service
 */

/**
 * Function that get all boards
 * @function
 * @returns {IBoard[]} - Returns all boards
 */
export const getAll = () => boardsRepo.getAll();

/**
 * Get board by id
 * @function
 * @param {string|number} id - Board id
 * @returns {IBoard} Returns the searched board
 */
export const get = (id) => boardsRepo.get(id);

/**
 * Save board
 * @function
 * @param {IBoard} board - Board data to register 
 * @returns {IBoard} - Returns the saved board
 */
export const save = ({ body }) => boardsRepo.save(body);

/**
 * Update board in data base
 * @function
 * @param {IBoard} body - Board data
 * @returns {IBoard} - Returns the updated board
 */
export const update = ({ body, params }) => boardsRepo.update({ id: params.id, ...body });

/**
 * Remove board and with all columns and tasks
 * @async
 * @function
 * @param {string|number} id - Board data
 * @returns {Promise<void>}
 */
export const remove = async (id) => {
  await boardsRepo.remove(id);
  await removeAllById(id);
};

