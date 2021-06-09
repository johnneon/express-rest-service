import { v4 as uuid } from 'uuid';
import { Database } from '../../db/db';
import { CONSTANTS } from '../../common/constants';
import { IColumn } from '../../types/IColumn';
import { IBoard } from '../../types/IBoard';
import { EntitysNames } from '../../types/simpleTypes';

const { BOARDS, TASKS, BOARD_ID } = CONSTANTS;

/**
 * Board model
 */
export class Board {
  id: number|string;

  title;

  columns: IColumn[];

  /**
  * @param {IBoard} board - Board data from request
  */
  constructor({
    id = uuid(),
    title = 'BOARD',
    columns = [],
  }: IBoard) {
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
   * Makes board responseble
   * @param {IBoard} board Board data 
   * @returns {IBoard} - Responseble object
   */
   static toResponse({ id, title, columns }: IBoard): IBoard {
    return { id, title, columns };
  }

  /**
   * Save board to data base
   * @async
   * @property {Function} save
   * @returns {Promise<void>}
   */
  async save(): Promise<void> {
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

    await db.save(this, BOARDS as EntitysNames);
  }

  /**
   * Delete board by id and tasks
   * @async
   * @param {string|number} id - User id
   * @returns {Promise<void>}
   */
  static async delete(id: string|number): Promise<void> {
    const db = new Database();

    await db.deleteById(id, BOARDS as EntitysNames);
    await db.deleteManyBySelector({ selector: BOARD_ID, value: id }, TASKS as EntitysNames);
  }

  /**
   * Get board by id
   * @async
   * @param {string|number} id - Board id
   * @returns {Promise<IBoard>} - Returns board data
   */
  static async getBoardById(id: string|number): Promise<IBoard | null> {
    const db = new Database();
    const board = await db.getById<IBoard>(id, BOARDS as EntitysNames);

    if (!board) {
      return null;
    }

    return board;
  }

  /**
   * Get all boards
   * @async
   * @returns {Promise<IBoard[]>} - Returns boards array
   */
  static async getAll(): Promise<IBoard[]> {
    const boards = await new Database().getAll<IBoard>(BOARDS as EntitysNames);

    return boards;
  }
}

