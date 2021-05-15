export class Database {
  constructor() {
    if (Database.exists) {
      return Database.instance;
    }

    Database.instance = this;
    Database.exists = true;

    this.users = [];
    this.boards = [];
    this.columns = [];
    this.tasks = [];
  }

  createCluster(name) {
    this[name] = [];
  }

  save(entity, name) {
    this[name].push(entity);
  }

  deleteById(id, name) {
    const entityIndex = this[name].findIndex(entity => entity.id === id);

    // if (entityIndex === -1) {
    //   throw new Error();
    // }
    
    this[name].splice(entityIndex, 1);
  }

  deleteManyBySelector({selector, value}, name) {
    this[name] = this[name].filter(entity => entity[selector] !== value);
  }

  getAllBySelector({selector, value}, name) {
    return this[name].filter(entity => entity[selector] === value);
  }

  getById(id, name) {
    return this[name].find(entity => entity.id === id);
  }

  getAll(name) {
    return this[name] || [];
  }
}