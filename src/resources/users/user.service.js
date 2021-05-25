import { unsubscribe } from '../tasks/task.service.js';
import * as userRepo from './user.memory.repository.js';

/**
 * User repository module
 * @module User service
 */


/**
 * Function that get all users
 * @function
 * @returns {IUser[]} - Returns all users
 */
const getAll = () => userRepo.getAll();

/**
 * Get user by id
 * @function
 * @param {string|number} id - User id
 * @returns {IUser} Returns the searched user
 */
const get = (id) => userRepo.get(id);

/**
 * Save user
 * @function
 * @param {IUser} user - User data to register 
 * @returns {IUser} - Returns the saved user
 */
const save = ({ body }) => userRepo.save(body);

/**
 * Update user in data base
 * @function
 * @param {IUser} body - User data
 * @returns {IUser} - Returns the updated user
 */
const update = ({ body, params }) => userRepo.update({ id: params.id, ...body });

/**
 * Remove user
 * @async
 * @function
 * @param {string|number} id - User data
 * @returns {Promise<void>}
 */
const remove = async (id) => {
  await userRepo.remove(id);
  await unsubscribe(id);
};

export {
  getAll,
  get,
  save,
  update,
  remove,
};
