import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import { IHttpError } from '../../types/IHttpError';

const {
  FORBIDDEN,
} = StatusCodes;

/**
 * Class for Authentication Error
 * @class
 * @augments Error
 */
export class AuthenticationError extends Error implements IHttpError {
  /**
   * @property {number} status - Status code
   */
  status: number;
  
  constructor(message: string) {
    super(message ?? getReasonPhrase(FORBIDDEN));
    this.status = FORBIDDEN;
  }
}