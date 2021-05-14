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

  findByIdAndUpdate({id, ...body}, name) {
    const modelIndex = this[name].findIndex(entity => entity.id === id);
    const model = this[name][modelIndex];

    Object.entries(body).forEach(([key, value]) => {
      if (key in body) {
        model[key] = value;
      }
    });

    return model;
  }

  deleteById(id, name) {
    const entityIndex = this[name].findIndex(entity => entity.id === id);
    
    this[name].splice(entityIndex, 1);
  }

  getById(id, name) {
    return this[name].find(entity => entity.id === id);
  }

  getAll(name) {
    return this[name];
  }
}