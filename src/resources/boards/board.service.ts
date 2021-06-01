import { Request } from 'express';
import { IBoard } from '../../types/IBoard';
import * as boardsRepo from './board.memory.repository';
import { removeAllById } from '../tasks/task.service';

/**
 * Board repository module
 * @module Board service
 */

/**
 * Function that get all boards
 * @function
 * @returns {Promise<IBoard[]>} - Returns all boards
 */
export const getAll = (): Promise<IBoard[]> => boardsRepo.getAll();

/**
 * Get board by id
 * @function
 * @param {string|number} id - Board id
 * @returns {Promise<IBoard>} Returns the searched board
 */
export const get =
  (id: string|number): Promise<IBoard | null> => boardsRepo.get(id);

/**
 * Save board
 * @function
 * @param {IBoard} board - Board data to register 
 * @returns {Promise<IBoard|null>} - Returns the saved board
 */
export const save = ({ body }: Request): Promise<IBoard | null> => boardsRepo.save(body);

/**
 * Update board in data base
 * @function
 * @param {Request} req - Express req data
 * @returns {Promise<IBoard|null>} - Returns the updated board
 */
export const update = ({ body, params }: Request): Promise<IBoard | null> => {
  const { id } = params;
    return boardsRepo.update({ id, ...body })
  };

/**
 * Remove board and with all columns and tasks
 * @async
 * @function
 * @param {string|number} id - Board data
 * @returns {Promise<IBoard|null>}
 */
export const remove = async (id: string|number): Promise<IBoard | null> => {
  const board = await boardsRepo.remove(id);
  await removeAllById(id);

  return board;
};

