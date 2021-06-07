import { IBoard } from "./IBoard";
import { ITask } from "./ITask";
import { IUser } from "./IUser";

export type EntitysNames = 'boards'|'tasks'|'users';

export type EntitysTypes = IBoard | IUser | ITask;
export type EntitysTypesAnd = IBoard & IUser & ITask;

export type SelectorValue = {selector: string, value: string|number};

export type SimpleStringEntity = {
  [string: string]: string;
}