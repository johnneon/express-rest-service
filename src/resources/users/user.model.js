import { v4 as uuid } from 'uuid';
import { Database } from '../../db/db.js';
import { CONSTANTS } from '../../constants.js';

const { USERS } = CONSTANTS;

export class User {
  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
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

