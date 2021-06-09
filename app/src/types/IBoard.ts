import { IColumn } from "./IColumn";

/**
* Board model
* @typedef {Object} IBoard
* @property {string|number} [id] - Board ID
* @property {string} title - Board title
* @property {IColumn[]} columns - Board columns
*/

export interface IBoard {
  id?: string|number;
  title: string;
  columns: IColumn[];
};
