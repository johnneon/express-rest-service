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
   * @property {Function} save
   * @returns {void}
   */
  save() {
    const db = new Database();

    db.save(this, USERS);
  }

  /**
   * Delete user by id
   * @param {string|number} id - User id
   * @returns {void}
   */
  static delete(id) {
    const db = new Database();

    db.deleteById(id, USERS);
  }

  /**
   * Get user by id
   * @param {string|number} id - User id
   * @returns {Object} - Returns data object
   */
  static getUserById(id) {
    const db = new Database();

    return db.getById(id, USERS);
  }

  /**
   * Get all users
   * @returns {IUser[]} - Returns users array
   */
  static getAll() {
    const users = new Database().getAll(USERS);

    return users;
  }
}

