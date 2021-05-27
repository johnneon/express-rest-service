import { ITask } from "../../types/ITask";
import { Task } from "./task.model";

/**
 * User repository module
 * @module Task repository
 */

/**
 * Function that get all tasks from data base
 * @async
 * @function
 * @param {string} boardId - Board ID for search
 * @returns {Promise<ITask[]>} - Returns all tasks from data base
 */
const getAll = async (boardId: string): Promise<ITask[]> => {
  const tasks =  await Task.getAll(boardId);

  return tasks;
};

/**
 * Get task by id
 * @async
 * @function
 * @param {string|number} id - Task id
 * @returns {Promise<ITask>} Returns the searched task from data base
 */
const get = async (id: string|number): Promise<ITask | null> => {
  try {
    const task = await Task.getTaskById(id);
  
    return task;
  } catch (error) {
    return error;
  }
};

/**
 * Save task to data base
 * @async
 * @function
 * @param {ITask} newTask - Task data to register 
 * @returns {Promise<ITask>} - Returns the saved task from data base
 */
const save = async ({
  title,
  order,
  description,
  userId,
  boardId,
  columnId,
}: ITask): Promise<ITask> => {
  try {
    const task = new Task({
      title,
      order,
      description,
      userId,
      boardId,
      columnId,
    });

    await task.save();

    return task;
  } catch (error) {
    return error;
  }
};

/**
 * Update task in data base
 * @async
 * @function
 * @param {ITask} body - Task data
 * @returns {Promise<ITask>} - Returns the updated task from data base
 */
const update = async (body: ITask): Promise<ITask> => {
  try {
    if (body.id) {
      await Task.delete(body.id);
    }
    const task = new Task(body);

    task.save();

    return task;
  } catch (error) {
    return error;
  }
};

/**
 * Remove task from data base
 * @async
 * @function
 * @param {string|number} id - Task data
 * @returns {Promise<void>}
 */
const remove = async (id: string|number): Promise<void> => {
  try {
    return await Task.delete(id);
  } catch (error) {
    return error;
  }
};

/**
 * Remove many task from data base
 * @async
 * @function
 * @param {string|number} boardId - Board id
 * @returns {Promise<void>}
 */
const removeAllById = async (boardId: string|number): Promise<void> => {
  try {
    return await Task.deleteManyById(boardId);
  } catch (error) {
    return error;
  }
};

/**
 * Unsubscribes users from tasks
 * @async
 * @function
 * @param {string|number} userId - User id
 * @returns {Promise<ITask[]>}
 */
const unsubscribe = async (userId: string|number): Promise<ITask[]> => {
  try {
    const tasks = await Task.getAll(userId, 'userId');
    await tasks.forEach(async task => {
      if (task.id) {
        await Task.delete(task.id);
        await new Task({ ...task, userId: null }).save();
      }
    });
    return tasks;
  } catch (error) {
    return error;
  }
};

export {
  get,
  getAll,
  save,
  update,
  remove,
  removeAllById,
  unsubscribe,
};
