import { User } from "./user.model.js";

/**
 * User repository module
 * @module User_repository
 */

/**
* A user
* @typedef {Object} User
* @property {string} [id] - User ID
* @property {string} name - User name
* @property {string} login - User age (optional)
* @property {string} password - User is active
*/

/**
 * Function that get all users from db
 * @returns {Array<User>}
 */
export const getAll = async () => {
  const users = User.getAll();

  return users;
};

/**
 * Get user by id
 * @param {string} id - User id
 * @returns {User}
 */
export const get = async (id) => {
  try {
    const user = User.getUserById(id);
  
    return user;
  } catch (error) {
    return error;
  }
};

/**
 * Save user to data base
 * @param {User} user - User data to register 
 * @returns {User}
 */
export const save = ({ login, name, password }) => {
  try {
    const user = new User({login, name, password});

    user.save();

    return user;
  } catch (error) {
    return error;
  }
};

/**
 * Update user
 * @param {User} body - User data
 * @returns {User}
 */
export const update = async (body) => {
  try {
    await User.delete(body.id);
    const user = new User(body);

    user.save();

    return user;
  } catch (error) {
    return error;
  }
};


/**
 * Remove user
 * @param {string} id - User data
 * @returns {void}
 */
export const remove = async (id) => {
  try {
    return await User.delete(id);
  } catch (error) {
    return error;
  }
};
