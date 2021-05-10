import { v4 as uuid } from 'uuid';

export class Board {
  constructor({
    id = uuid(),
    title,
    columns,
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

