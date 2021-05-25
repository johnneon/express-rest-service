import * as tasksRepo from './task.memory.repository.js';

/**
 * User repository module
 * @module Task service
 */

/**
 * Function that get all users
 * @function
 * @param {string|number} id - Task id
 * @returns {ITask[]} - Returns all tasks
 */
export const getAll = (id) => tasksRepo.getAll(id);

/**
 * Get user by id
 * @function
 * @param {Request} req - Express request object
 * @returns {ITask} Returns the searched task
 */
export const get = ({ params }) => tasksRepo.get(params.id);

/**
 * Save user
 * @function
 * @param {Request} req - Express request object 
 * @returns {ITask} - Returns the saved task
 */
export const save = ({ body, boardId }) => tasksRepo.save({ ...body, boardId});

/**
 * Update user in data base
 * @function
 * @param {Request} req - Express request object
 * @returns {ITask} - Returns the updated task
 */
export const update = ({ body, params, boardId }) => 
  tasksRepo.update({ ...body, id: params.id, boardId });

  /**
 * Remove user
 * @async
 * @function
 * @param {Request} req - Express request object 
 * @returns {void}
 */
export const remove = ({ params }) => tasksRepo.remove(params.id);

/**
 * Remove many task from data base
 * @async
 * @function
 * @param {string|number} boardId - Board id
 * @returns {void}
 */
export const removeAllById = (boardId) => tasksRepo.removeAllById(boardId);

/**
 * Unsubscribes users from tasks
 * @async
 * @function
 * @param {string|number} userId - User id
 * @returns {ITask[]}
 */
export const unsubscribe = (userId) => tasksRepo.unsubscribe(userId);
