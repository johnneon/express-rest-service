import { v4 as uuid } from 'uuid';
import { Database } from '../../db/db.js';
import { CONSTANTS } from '../../constants.js';

const { BOARDS } = CONSTANTS;

export class Board {
  constructor({
    id = uuid(),
    title = 'BOARD',
    columns = [],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }

  save() {
    const db = new Database();

    db.save(this, BOARDS);
  }

  static update({ name, login, password }) {
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static delete(id) {
    const db = new Database();

    db.deleteById(id, BOARDS);
  }

  static findByIdAndUpdate(body) {
    const db = new Database();
    const board = db.findByIdAndUpdate(body, BOARDS);

    return board;
  }

  static getUserById(id) {
    const db = new Database();

    return db.getById(id, BOARDS);
  }

  static getAll() {
    const boards = new Database().getAll(BOARDS);

    return boards;
  }
}

