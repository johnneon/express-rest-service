import { v4 as uuid } from 'uuid';
import { Database } from '../../db/db.js';
import { CONSTANTS } from '../../common/constants.js';
import { Schema } from '../../models/Schema.js';

const { BOARDS, TASKS, BOARD_ID } = CONSTANTS;

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
   * @async
   * @property {Function} save
   * @returns {Promise<void>}
   */
  async save() {
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

    await db.save(this, BOARDS);
  }

  /**
   * Delete board by id and tasks
   * @async
   * @param {string|number} id - User id
   * @returns {Promise<void>}
   */
  static async delete(id) {
    const db = new Database();

    await db.deleteById(id, BOARDS);
    await db.deleteManyBySelector({ selector: BOARD_ID, value: id }, TASKS);
  }

  static async findByIdAndUpdate(body) {
    const db = new Database();
    const board = await db.findByIdAndUpdate(body, BOARDS);

    return board;
  }

  /**
   * Get board by id
   * @async
   * @param {string|number} id - Board id
   * @returns {Promise<IBoard>} - Returns board data
   */
  static async getBoardById(id) {
    const db = new Database();
    const board = await db.getById(id, BOARDS);
    return board;
  }

  /**
   * Get all boards
   * @async
   * @returns {Promise<IBoard[]>} - Returns boards array
   */
  static async getAll() {
    const boards = await new Database().getAll(BOARDS);

    return boards;
  }
}

