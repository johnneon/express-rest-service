import { v4 as uuid } from 'uuid';
import { Database } from '../../db/db.js';
import { CONSTANTS } from '../../common/constants.js';
import { Schema } from '../../models/Schema.js';

/**
* Task model
* @typedef {Object} ITask
* @property {string|number} id - Task id
* @property {string} title - Task title
* @property {number} order - Task order
* @property {string} description - Task description
* @property {string|number|null} userId - User id
* @property {string|number} boardId - Board id
* @property {string|number} columnId - Column id
*/

const { TASKS } = CONSTANTS;

/**
 * Task model
 */
export class Task extends Schema {
  /**
  * @param {ITask} task - Task data from request
  */
  constructor({
    id = uuid(),
    title = 'TASK',
    order = 0,
    description = 'Some desc',
    userId = '',
    boardId = '',
    columnId = '',
  } = {}) {
    super();

    /**
     * @property {string|number} id - Task ID
     */
    this.id = id;

    /**
     * @property {string} title - Task title
     */
    this.title = title;

    /**
     * @property {number} order - Task order in column
     */
    this.order = order;

    /**
     * @property {string} description - Task description
     */
    this.description = description;

    /**
     * @property {string|number|null} userId - User ID
     */
    this.userId = userId;

    /**
     * @property {string|number} boardId - Board ID
     */
    this.boardId = boardId;

    /**
     * @property {string|number} columnId - Column ID
     */
    this.columnId = columnId;
  }

  /**
   * Save task to data base
   * @async
   * @property {Function} save
   * @returns {Promise<void>}
   */
  async save() {
    const db = new Database();

    db.save(this, TASKS);
  }

  /**
   * Delete many task by id
   * @async
   * @param {string|number} id - Sekector id
   * @returns {Promise<void>}
   */
  static async deleteManyById(id) {
    const db = new Database();

    db.deleteManyBySelector({ selector: 'boardId', value: id }, TASKS);
  }

  /**
   * Delete task by id
   * @async
   * @param {string|number} id - Task id
   * @returns {Promise<void>}
   */
  static async delete(id) {
    const db = new Database();

    db.deleteById(id, TASKS);
  }

  /**
   * Get task by id
   * @async
   * @param {string|number} id - Task id
   * @returns {Promise<ITask>} - Returns task object
   */
  static async getTaskById(id) {
    const db = new Database();

    return db.getById(id, TASKS);
  }

  /**
   * Get all tasks
   * @async
   * @returns {Promise<IUser[]>} - Returns tasks array
   */
  static async getAll(id, selector) {
    const tasks = new Database().getAllBySelector({ selector: selector || 'boardId', value: id }, TASKS);
    return tasks;
  }
}

