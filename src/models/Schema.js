import { v4 as uuid } from 'uuid';
import { Database } from '../db/db.js';

export class Schema {
  constructor({ id = uuid(), clasterName = '' }) {
    this.id = id;
    this.clasterName = clasterName;
  }

  static toResponse(body) {
    const model = { ...body };

    if (model.password) {
      model.password = undefined;
    }

    return model;
  }

  save() {
    const db = new Database();

    db.save(this, this.clasterName);
  }

  delete(id) {
    const db = new Database();

    db.deleteById(id, this.clasterName);
  }

  findByIdAndUpdate(body) {
    const db = new Database();
    const model = db.findByIdAndUpdate(body, this.clasterName);

    return model;
  }

  getUserById(id) {
    const db = new Database();

    return db.getById(id, this.clasterName);
  }

  getAll() {
    const model = new Database().getAll(this.clasterName);

    return model;
  }
}

