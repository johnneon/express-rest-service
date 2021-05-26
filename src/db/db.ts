import { EntitysNamse, EntitysTypes, SelectorValue } from "../types/simpleTypes";

import { IBoard } from '../types/IBoard';
import { ITask } from '../types/ITask';
import { IUser } from '../types/IUser';

/**
 * Class to create a Data Base
 */
export class Database {
  private static exists = true;

  private static instance: Database;

  users: IUser[] = [];

  boards: IBoard[] = [];

  tasks: ITask[] = [];

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
  save(entity: EntitysTypes, name: EntitysNamse): void {
    if (Array.isArray(this[name])) {
      (this[name] as EntitysTypes[]).push(entity);
    }
  }

  /**
   * Delete entity by id
   * @param {string|number} id - Id of entity in db
   * @param {string} name  - Name of place to save
   * @returns {void}
   */
  deleteById(id: string|number, name: EntitysNamse): void {
    if (Array.isArray(this[name])) {
      const entityIndex = this[name].findIndex((element: EntitysTypes) => element.id === id);
  
      this[name].splice(entityIndex, 1);
    }
  }

  /**
   * Delete many by selector
   * @param {{ selector: string, value: string }} data - Object with couple selector and value to find and delete
   * @param {string} name  - Name of place to save
   * @returns {void}
   */
  deleteManyBySelector({selector, value}: SelectorValue, name: EntitysNamse): void {
    if (Array.isArray(this[name]) && this[name].length) {
      this[name] = (this[name] as []).filter((entity) => entity[selector] !== value);
    }
  }

  /**
   * Get many by selector
   * @param {{ selector: string, value: string }} data - Object with couple selector and value to get
   * @param {string} name - Name of place to save
   * @returns {Object[]} - Returns array of data
   */
  getAllBySelector({selector, value}: SelectorValue, name: EntitysNamse): EntitysTypes[] {
    if (Array.isArray(this[name])) {
      return (this[name] as []).filter((entity) => entity[selector] === value);
    }
    return [];
  }

  /**
   * Get entity by id
   * @param {string|number} id - Id of entity in db
   * @param {string} name - Name of place to save
   * @returns {Object} - Returns data object
   */
  getById<T extends EntitysTypes>(id: number|string, name: EntitysNamse): T | null {
    const condidate = (this[name] as []).find((entity: T) => entity.id === id);

    if (!condidate) {
      return null;
    }
    
    return condidate;
  }

  /**
   * Get all entitys by db name
   * @param {string} name - Name of place to save
   * @returns {EntitysTypes[]} - Returns array of data
   */
  getAll<T extends EntitysTypes>(name: EntitysNamse): T[] {
    return (this[name] as []);
  }
}