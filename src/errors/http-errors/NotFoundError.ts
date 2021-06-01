import { StatusCodes } from 'http-status-codes';
import { IHttpError } from '../../types/IHttpError';
import { SimpleStringEntity } from '../../types/simpleTypes';

const {
  NOT_FOUND,
} = StatusCodes;

/**
 * Class for Not Found Error
 * @class
 * @augments Error
 */
export class NotFoundError extends Error implements IHttpError {
  /**
   * @property {number} status - Status code
   */
  status: number;

  constructor(entity: string, params: SimpleStringEntity, message?: string) {
    super(
      message ?? `Could not find ${entity} with: ${JSON.stringify(params)}`
    );
    this.status = NOT_FOUND;
  }
}