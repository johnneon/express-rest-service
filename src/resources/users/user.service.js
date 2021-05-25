import { unsubscribe } from '../tasks/task.service.js';
import * as userRepo from './user.memory.repository.js';

/**
 * User repository module
 * @module User service
 */

/**
* A user
* @typedef {Object} User
* @property {string|number} [id] - User ID
* @property {string} name - User name
* @property {string} login - User login (optional)
* @property {string} password - User is active
*/

/**
 * Function that get all users
 * @function
 * @returns {Array<User>} - Returns all users
 */
const getAll = () => userRepo.getAll();

/**
 * Get user by id
 * @function
 * @param {string|number} id - User id
 * @returns {User} Returns the searched user
 */
const get = (id) => userRepo.get(id);

/**
 * Save user
 * @function
 * @param {User} user - User data to register 
 * @returns {User} - Returns the saved user
 */
const save = ({ body }) => userRepo.save(body);

/**
 * Update user in data base
 * @function
 * @param {User} body - User data
 * @returns {User} - Returns the updated user
 */
const update = ({ body, params }) => userRepo.update({ id: params.id, ...body });

/**
 * Remove user
 * @async
 * @function
 * @param {string|number} id - User data
 * @returns {void}
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
