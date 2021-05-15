import { NOT_FOUND } from 'http-status-codes';

export class NotFoundError extends Error {
  constructor(entity, params, message) {
    super(
      message || `Couldnt find ${entity} with: ${params}`
    );
    this.status = NOT_FOUND;
  }
}