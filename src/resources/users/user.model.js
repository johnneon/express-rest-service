import { v4 as uuid } from 'uuid';
import { Database } from '../../db/db.js';
import { CONSTANTS } from '../../common/constants.js';
import { Schema } from '../../models/Schema.js';

const { USERS } = CONSTANTS;

export class User extends Schema {
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    super();

    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  save() {
    const db = new Database();

    db.save(this, USERS);
  }

  update({ name, login, password }) {
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static delete(id) {
    const db = new Database();

    db.deleteById(id, USERS);
  }

  static findByIdAndUpdate(body) {
    const db = new Database();
    const user = db.findByIdAndUpdate(body, USERS);

    return user;
  }

  static getUserById(id) {
    const db = new Database();

    return db.getById(id, USERS);
  }

  static getAll() {
    const users = new Database().getAll(USERS);

    return users;
  }
}

