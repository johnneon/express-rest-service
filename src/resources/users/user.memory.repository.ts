import { IUser } from '../../types/IUser';
import { User } from "./user.model";

/**
 * User repository module
 * @module User repository
 */

/**
 * Function that get all users from data base
 * @async
 * @function
 * @returns {Promise<IUser[]>} - Returns all users from data base
 */
const getAll = async (): Promise<IUser[]> => {
  const users = await User.getAll();

  return users;
};

/**
 * Get user by id
 * @async
 * @function
 * @param {string|number} id - User id
 * @returns {Promise<IUser>} Returns the searched user from data base
 */
const get = async (id: string|number): Promise<IUser | null> => {
  try {
    const user = await User.getUserById(id);
  
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
 * @returns {Promise<IUser>} - Returns the saved user from data base
 */
const save = async ({ login, name, password }: IUser): Promise<IUser> => {
  try {
    const user = new User({login, name, password});

    await user.save();

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
 * @returns {Promise<IUser>} - Returns the updated user from data base
 */
const update = async (body: IUser): Promise<IUser> => {
  try {
    if (body.id) {
      await User.delete(body.id);
    }
    const user = new User(body);

    await user.save();

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
 * @returns {Promise<void>}
 */
const remove = async (id: string|number): Promise<void> => {
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