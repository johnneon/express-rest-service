import { Request } from 'express';
import { unsubscribe } from '../tasks/task.service';
import { IUser } from '../../types/IUser';
import * as userRepo from './user.memory.repository';

/**
 * User repository module
 * @module User service
 */


/**
 * Function that get all users
 * @function
 * @returns {Promise<IUser[]>} - Returns all users
 */
const getAll = (): Promise<IUser[]> => userRepo.getAll();

/**
 * Get user by id
 * @function
 * @param {string|number} id - User id
 * @returns {Promise<IUser | null>} Returns the searched user
 */
const get = (id: string|number): Promise<IUser | null> => userRepo.get(id);

/**
 * Save user
 * @function
 * @param {IUser} user - User data to register 
 * @returns {Promise<IUser | null>} - Returns the saved user
 */
const save = ({ body }: Request): Promise<IUser | null> => userRepo.save(body);

/**
 * Update user in data base
 * @function
 * @param {Request} req - Express req data
 * @returns {Promise<IUser|null>} - Returns the updated user
 */
const update = ({ body, params }: Request): Promise<IUser | null> => {
  const { id } = params;
  return userRepo.update({ id, ...body })
};

/**
 * Remove user
 * @async
 * @function
 * @param {string|number} id - User data
 * @returns {Promise<IUser | null>}
 */
const remove = async (id: string|number): Promise<IUser | null> => {
  const user = await userRepo.remove(id);

  await unsubscribe(id);

  return user;
};

export {
  getAll,
  get,
  save,
  update,
  remove,
};
