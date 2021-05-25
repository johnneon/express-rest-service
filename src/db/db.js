/**
 * Class to create a Data Base
 */
export class Database {
  /**
   * @constructor
   */
  constructor() {
    if (Database.exists) {
      return Database.instance;
    }

    Database.instance = this;
    Database.exists = true;

    /**
     * @property {Object[]} - Users data base
     */
    this.users = [];

    /**
     * @property {Object[]} - Boards data base
     */
    this.boards = [];

    /**
     * @property {Object[]} - Columns data base
     */
    this.columns = [];

    /**
     * @property {Object[]} - Tasks data base
     */
    this.tasks = [];
  }

  /**
   * Save entity to db
   * @param {Object} entity - Data to save
   * @param {string} name - Name of place to save
   * @returns {void}
   */
  save(entity, name) {
    this[name].push(entity);
  }

  /**
   * Delete entity by id
   * @param {string|number} id - Id of entity in db
   * @param {string} name  - Name of place to save
   * @returns {void}
   */
  deleteById(id, name) {
    const entityIndex = this[name].findIndex(entity => entity.id === id);

    this[name].splice(entityIndex, 1);
  }

  /**
   * Delete many by selector
   * @param {{ selector: string, value: string }} data - Object with couple selector and value to find and delete
   * @param {string} name  - Name of place to save
   * @returns {void}
   */
  deleteManyBySelector({selector, value}, name) {
    this[name] = this[name].filter(entity => entity[selector] !== value);
  }

  /**
   * Get many by selector
   * @param {{ selector: string, value: string }} data - Object with couple selector and value to get
   * @param {string} name - Name of place to save
   * @returns {Object[]} - Returns array of data
   */
  getAllBySelector({selector, value}, name) {
    return this[name].filter(entity => entity[selector] === value);
  }

  /**
   * Get entity by id
   * @param {string|number} id - Id of entity in db
   * @param {string} name - Name of place to save
   * @returns {Object} - Returns data object
   */
  getById(id, name) {
    const condidate = this[name].find(entity => entity.id === id);
    return condidate;
  }

  /**
   * Get all entitys by db name
   * @param {string} name - Name of place to save
   * @returns {Object[]} - Returns array of data
   */
  getAll(name) {
    return this[name] || [];
  }
}