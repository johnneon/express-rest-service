/**
* User interface
* @typedef {Object} IUser
* @property {string|number} [id] - User ID
* @property {string} name - User name
* @property {string} login - User login (optional)
* @property {string} password - User is active
*/

export interface IUser {
  id?: string|number;
  name: string;
  login: string;
  password?: string;
};
