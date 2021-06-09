import { Request } from 'express';
import { ITask } from '../../types/ITask';
import * as tasksRepo from './task.memory.repository';

/**
 * User repository module
 * @module Task service
 */

/**
 * Function that get all users
 * @function
 * @param {string|number} id - Task id
 * @returns {Promise<ITask[]>} - Returns all tasks
 */
export const getAll =
  (id: string|number): Promise<ITask[]> => tasksRepo.getAll(id as string);

/**
 * Get user by id
 * @function
 * @param {Request} req - Express request object
 * @returns {Promise<ITask | null>} Returns the searched task
 */
export const get = ({ params }: Request): Promise<ITask | null> => {
  const { id } = params;
  return tasksRepo.get(id as string);
};

/**
 * Save user
 * @function
 * @param {Request} req - Express request object 
 * @returns {Promise<ITask>} - Returns the saved task
 */
export const save = ({ body }: Request): Promise<ITask> => tasksRepo.save({ ...body });

/**
 * Update user in data base
 * @function
 * @param {Request} req - Express request object
 * @returns {Promise<ITask|null>} - Returns the updated task
 */
export const update = ({ body, params }: Request): Promise<ITask | null> => {
  const { id } = params;
  return tasksRepo.update({ ...body, id });
};

  /**
 * Remove user
 * @function
 * @param {Request} req - Express request object 
 * @returns {Promise<ITask|null>}
 */
export const remove = ({ params }: Request): Promise<ITask | null> => {
  const { id } = params;
  return tasksRepo.remove(id as string);
};

/**
 * Remove many task from data base
 * @function
 * @param {string|number} boardId - Board id
 * @returns {Promise<void>}
 */
export const removeAllById = (boardId: string | number): Promise<void> => tasksRepo.removeAllById(boardId);

/**
 * Unsubscribes users from tasks
 * @function
 * @param {string|number} userId - User id
 * @returns {Promise<ITask[]>}
 */
export const unsubscribe = (userId: string | number): Promise<ITask[]> => tasksRepo.unsubscribe(userId);
