/**
* Task model
* @typedef {Object} ITask
* @property {string|number} id - Task id
* @property {string} title - Task title
* @property {number} order - Task order
* @property {string} description - Task description
* @property {string|number|null} userId - User id
* @property {string|number} boardId - Board id
* @property {string|number} columnId - Column id
*/

export interface ITask {
  id: string|number;
  title: string;
  order: number;
  description: string;
  userId: string|number|null;
  boardId: string|number;
  columnId: string|number;
};
