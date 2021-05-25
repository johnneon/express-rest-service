import { v4 as uuid } from 'uuid';
import { Database } from '../../db/db.js';
import { CONSTANTS } from '../../constants.js';
import { Schema } from '../../models/Schema.js';

const { TASKS } = CONSTANTS;

export class Task extends Schema {
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
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  save() {
    const db = new Database();

    db.save(this, TASKS);
  }

  static deleteManyById(id) {
    const db = new Database();

    db.deleteManyBySelector({ selector: 'boardId', value: id }, TASKS);
  }

  static delete(id) {
    const db = new Database();

    db.deleteById(id, TASKS);
  }

  static findByIdAndUpdate(body) {
    const db = new Database();
    const task = db.findByIdAndUpdate(body, TASKS);

    return task;
  }

  static getTaskById(id) {
    const db = new Database();

    return db.getById(id, TASKS);
  }

  static getAll(id, selector) {
    const tasks = new Database().getAllBySelector({ selector: selector || 'boardId', value: id }, TASKS);
    return tasks;
  }
}

