import { v4 as uuid } from 'uuid';
import { Database } from '../../db/db.js';
import { CONSTANTS } from '../../constants.js';
import { NotFoundError } from '../../errors/app.errors.js';

const { BOARDS, TASKS, BOARD_ID } = CONSTANTS;

export class Board {
  constructor({
    id = uuid(),
    title = 'BOARD',
    columns = [],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;

    /**
     * column: { id, title, order }
     */
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }

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

  static delete(id) {
    try {
      const db = new Database();
  
      db.deleteById(id, BOARDS);
      db.deleteManyBySelector({ selector: BOARD_ID, value: id }, TASKS);
    } catch (err) {
      throw new NotFoundError(BOARDS, id);
    }
  }

  static findByIdAndUpdate(body) {
    const db = new Database();
    const board = db.findByIdAndUpdate(body, BOARDS);

    return board;
  }

  static getBoardById(id) {
    const db = new Database();

    return db.getById(id, BOARDS);
  }

  static getAll() {
    const boards = new Database().getAll(BOARDS);

    return boards;
  }
}

