import { Task } from "./task.model.js";

/**
 * User repository module
 * @module Task repository
 */

/**
 * Function that get all tasks from data base
 * @async
 * @function
 * @returns {Array<ITask>} - Returns all tasks from data base
 */
const getAll = async (boardId) => {
  const tasks =  await Task.getAll(boardId);

  return tasks;
};

/**
 * Get task by id
 * @async
 * @function
 * @param {string|number} id - Task id
 * @returns {ITask} Returns the searched task from data base
 */
const get = async (id) => {
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
 * @param {ITask} task - Task data to register 
 * @returns {ITask} - Returns the saved task from data base
 */
const save = async (body) => {
  try {
    const task = new Task(body);

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
 * @returns {ITask} - Returns the updated task from data base
 */
const update = async (body) => {
  try {
    await Task.delete(body.id);
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
 * @returns {void}
 */
const remove = async (id) => {
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
 * @returns {void}
 */
const removeAllById = async (boardId) => {
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
 * @returns {Array<ITask>}
 */
const unsubscribe = async (userId) => {
  try {
    const tasks = await Task.getAll(userId, 'userId');
    return await tasks.forEach(async task => {
      await Task.delete(task.id);
      await new Task({ ...task, userId: null }).save();
    });
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
