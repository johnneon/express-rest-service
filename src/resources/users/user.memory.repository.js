import { User } from "./user.model.js";

/**
 * User repository module
 * @module User repository
 */

/**
 * Function that get all users from data base
 * @async
 * @function
 * @returns {IUser[]} - Returns all users from data base
 */
const getAll = async () => {
  const users = User.getAll();

  return users;
};

/**
 * Get user by id
 * @async
 * @function
 * @param {string|number} id - User id
 * @returns {IUser} Returns the searched user from data base
 */
const get = async (id) => {
  try {
    const user = User.getUserById(id);
  
    return user;
  } catch (error) {
    return error;
  }
};

/**
 * Save user to data base
 * @async
 * @function
 * @param {IUser} user - User data to register 
 * @returns {IUser} - Returns the saved user from data base
 */
const save = ({ login, name, password }) => {
  try {
    const user = new User({login, name, password});

    user.save();

    return user;
  } catch (error) {
    return error;
  }
};

/**
 * Update user in data base
 * @async
 * @function
 * @param {IUser} body - User data
 * @returns {IUser} - Returns the updated user from data base
 */
const update = async (body) => {
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
 * Remove user from data base
 * @async
 * @function
 * @param {string|number} id - User data
 * @returns {void}
 */
const remove = async (id) => {
  try {
    return await User.delete(id);
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