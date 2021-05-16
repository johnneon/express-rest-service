import { BAD_REQUEST } from 'http-status-codes';

export class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.status = BAD_REQUEST;
  }
}