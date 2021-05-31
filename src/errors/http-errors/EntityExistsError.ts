import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import { IHttpError } from '../../types/IHttpError';

const {
  EXPECTATION_FAILED,
} = StatusCodes;

/**
 * Class for Entity Exists Error
 * @class
 * @augments Error
 */
export class EntityExistsError extends Error implements IHttpError {
  /**
   * @property {number} status - Status code
   */
  status: number;
  
  constructor(message: string) {
    super(message ?? getReasonPhrase(EXPECTATION_FAILED));
    this.status = EXPECTATION_FAILED;
  }
}