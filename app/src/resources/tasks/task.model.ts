import { v4 as uuid } from 'uuid';
import { Database } from '../../db/db';
import { CONSTANTS } from '../../common/constants';
import { ITask } from '../../types/ITask';
import { EntitysNames } from '../../types/simpleTypes';

const { TASKS } = CONSTANTS;

/**
 * Task model
 */
export class Task {
  id: number|string;

  title;

  order;

  description;

  userId: string | number | null;

  boardId: string | number;

  columnId: string | number;
  
  /**
  * @param {ITask} task - Task data from request
  */
  constructor({
    id = uuid(),
    title = 'TASK',
    order = 0,
    description = 'Some desc',
    userId = '',
    boardId = '',
    columnId = '',
  }: ITask) {
    /**
     * @property {string|number} id - Task ID
     */
    this.id = id;

    /**
     * @property {string} title - Task title
     */
    this.title = title;

    /**
     * @property {number} order - Task order in column
     */
    this.order = order;

    /**
     * @property {string} description - Task description
     */
    this.description = description;

    /**
     * @property {string|number|null} userId - User ID
     */
    this.userId = userId;

    /**
     * @property {string|number} boardId - Board ID
     */
    this.boardId = boardId;

    /**
     * @property {string|number} columnId - Column ID
     */
    this.columnId = columnId;
  }

  /**
   * Makes task responseble
   * @param {ITask} task User data 
   * @returns {ITask} - Responseble object
   */
   static toResponse(task: ITask): ITask {
    return task;
  }

  /**
   * Save task to data base
   * @async
   * @property {Function} save
   * @returns {Promise<void>}
   */
  async save(): Promise<void> {
    const db = new Database();

    db.save(this, TASKS as EntitysNames);
  }

  /**
   * Delete many task by id
   * @async
   * @param {string|number} id - Sekector id
   * @returns {Promise<void>}
   */
  static async deleteManyById(id: string|number): Promise<void> {
    const db = new Database();

    db.deleteManyBySelector({ selector: 'boardId', value: id }, TASKS as EntitysNames);
  }

  /**
   * Delete task by id
   * @async
   * @param {string|number} id - Task id
   * @returns {Promise<void>}
   */
  static async delete(id: string|number): Promise<void> {
    const db = new Database();

    db.deleteById(id, TASKS as EntitysNames);
  }

  /**
   * Get task by id
   * @async
   * @param {string|number} id - Task id
   * @returns {Promise<ITask>} - Returns task object
   */
  static async getTaskById(id: string|number): Promise<ITask | null> {
    const db = new Database();

    return db.getById<ITask>(id, TASKS as EntitysNames);
  }

  /**
   * Get all tasks
   * @async
   * @param {string|number} id - Board id
   * @param {string} - Selector for search
   * @returns {Promise<ITask[]>} - Returns tasks array
   */
  static async getAll(id: string|number, selector?: string): Promise<ITask[]> {
    const tasks = new Database()
      .getAllBySelector(
        { selector: selector || 'boardId', value: id },
        TASKS as EntitysNames
      );
    return tasks as [];
  }
}

