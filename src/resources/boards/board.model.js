import { v4 as uuid } from 'uuid';
import { Database } from '../../db/db.js';
import { CONSTANTS } from '../../common/constants.js';
import { Schema } from '../../models/Schema.js';

const { BOARDS, TASKS, BOARD_ID } = CONSTANTS;

/**
* Column model
* @typedef {Object} IColumn
* @property {string|number} [id] - Column ID
* @property {string} title - Column title
* @property {number} order - Column order (optional)
*/

/**
* Board model
* @typedef {Object} IBoard
* @property {string|number} [id] - Board ID
* @property {string} title - Board title
* @property {IColumn[]} columns - Board columns
*/

/**
 * Board model
 */
export class Board extends Schema {
  /**
  * @param {IBoard} board - Board data from request
  */
  constructor({
    id = uuid(),
    title = 'BOARD',
    columns = [],
  } = {}) {
    super();

    /**
     * @property {string|number} id - Board ID
     */
    this.id = id;

    /**
     * @property {string} title - Board title
     */
    this.title = title;

    /**
     * @property {IColumn[]} columns - Board columns
     */
    this.columns = columns;
  }

  /**
   * Save board to data base
   * @property {Function} save
   * @returns {void}
   */
  save() {
    const db = new Database();

    if (this.columns?.length > 0) {
      this.columns = this.columns.map((col) => {
        if (!col?.id) {
          const columnWithId = { ...col, id: uuid() };
          return columnWithId;
        }
        return col;
      });
    }

    db.save(this, BOARDS);
  }

  /**
   * Delete board by id
   * @param {string|number} id - User id
   * @returns {void}
   */
  static delete(id) {
    const db = new Database();

    db.deleteById(id, BOARDS);
    db.deleteManyBySelector({ selector: BOARD_ID, value: id }, TASKS);
  }

  static findByIdAndUpdate(body) {
    const db = new Database();
    const board = db.findByIdAndUpdate(body, BOARDS);

    return board;
  }

  /**
   * Get board by id
   * @param {string|number} id - Board id
   * @returns {Object} - Returns board data
   */
  static getBoardById(id) {
    const db = new Database();

    return db.getById(id, BOARDS);
  }

  /**
   * Get all boards
   * @returns {IUser[]} - Returns boards array
   */
  static getAll() {
    const boards = new Database().getAll(BOARDS);

    return boards;
  }
}

