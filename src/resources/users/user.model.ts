import { v4 as uuid } from 'uuid';
import { Database } from '../../db/db';
import { CONSTANTS } from '../../common/constants';
import { IUser } from '../../types/IUser';
import { EntitysNamse } from '../../types/simpleTypes';

const { USERS } = CONSTANTS;

/**
 * User model
 */
export class User {
  id: number|string;

  name;

  login;
  
  password;

  /**
  * @param {IUser} user - User data from request
  */
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  }: IUser) {
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
   * Makes user responseble
   * @param {IUser} user User data 
   * @returns {IUser} - Responseble object
   */
   static toResponse({ id, name, login }: IUser): IUser {
    return { id, name, login };
  }

  /**
   * Save user to data base
   * @async
   * @property {Function} save
   * @returns {Promise<void>}
   */
  async save(): Promise<void> {
    const db = new Database();
    const {
      name,
      login,
      password,
      id
    } = this;
    await db.save({
      name,
      login,
      password,
      id
    }, USERS as EntitysNamse);
  }

  /**
   * Delete user by id
   * @async
   * @param {string|number} id - User id
   * @returns {Promise<void>}
   */
  static async delete(id: string|number): Promise<void> {
    const db = new Database();

    await db.deleteById(id, USERS as EntitysNamse);
  }

  /**
   * Get user by id
   * @async
   * @param {string|number} id - User id
   * @returns {Promise<IUser>} - Returns data object
   */
  static async getUserById(id: string|number): Promise<IUser | null> {
    const db = await new Database();

    return db.getById<IUser>(id, USERS as EntitysNamse);
  }

  /**
   * Get all users
   * @async
   * @returns {IUser[]} - Returns users array
   */
  static async getAll(): Promise<IUser[]> {
    const users = await new Database().getAll<IUser>(USERS as EntitysNamse);

    return users;
  }
}

