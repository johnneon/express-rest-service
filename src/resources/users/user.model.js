import { v4 as uuid } from 'uuid';
import { Database } from '../../db/db.js';
import { CONSTANTS } from '../../common/constants.js';
import { Schema } from '../../models/Schema.js';

/**
* User model
* @typedef {Object} IUser
* @property {string|number} [id] - User ID
* @property {string} name - User name
* @property {string} login - User login (optional)
* @property {string} password - User is active
*/

const { USERS } = CONSTANTS;

/**
 * User model
 */
export class User extends Schema {
  /**
  * @param {IUser} user - User data from request
  */
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    super();

    /**
     * @property {string|number} id - User ID
     */
    this.id = id;

    /**
     * @property {string} name - User name
     */
    this.name = name;

    /**
     * @property {string} login - User login (optional)
     */
    this.login = login;

    /**
     * @property {string} password - User is active
     */
    this.password = password;
  }

  /**
   * Save user to data base
   * @async
   * @property {Function} save
   * @returns {Promise<void>}
   */
  async save() {
    const db = new Database();

    await db.save(this, USERS);
  }

  /**
   * Delete user by id
   * @async
   * @param {string|number} id - User id
   * @returns {Promise<void>}
   */
  static async delete(id) {
    const db = new Database();

    await db.deleteById(id, USERS);
  }

  /**
   * Get user by id
   * @async
   * @param {string|number} id - User id
   * @returns {Promise<IUser>} - Returns data object
   */
  static async getUserById(id) {
    const db = await new Database();

    return db.getById(id, USERS);
  }

  /**
   * Get all users
   * @async
   * @returns {IUser[]} - Returns users array
   */
  static async getAll() {
    const users = await new Database().getAll(USERS);

    return users;
  }
}

