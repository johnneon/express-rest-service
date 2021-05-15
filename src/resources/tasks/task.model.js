import { v4 as uuid } from 'uuid';
import { Database } from '../../db/db.js';
import { CONSTANTS } from '../../constants.js';

const { TASKS } = CONSTANTS;

export class Task {
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

  static toResponse(task) {
    const { id, title, columns } = task;
    return { id, title, columns };
  }

  save() {
    const db = new Database();

    db.save(this, TASKS);
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

  static getAll() {
    const tasks = new Database().getAll(TASKS);

    return tasks;
  }
}

