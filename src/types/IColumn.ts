/**
* Column model
* @typedef {Object} IColumn
* @property {string|number} [id] - Column ID
* @property {string} title - Column title
* @property {number} order - Column order (optional)
*/

export interface IColumn {
  id?: string|number;
  title: string;
  order: number;
};
