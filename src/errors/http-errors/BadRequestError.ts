import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import { IHttpError } from '../../types/IHttpError';

const {
  BAD_REQUEST,
} = StatusCodes;


/**
 * Class for Bad Request Error
 * @class
 * @augments Error
 */
export class BadRequestError extends Error implements IHttpError {
  /**
   * @property {number} status - Status code
   */
  status: number;
  
  constructor(message: string) {
    super(message ?? getReasonPhrase(BAD_REQUEST));
    this.status = BAD_REQUEST;
  }
}