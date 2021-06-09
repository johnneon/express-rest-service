import { Request, Response, NextFunction } from 'express';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import { winston } from '../common/logging';
import { IHttpError } from '../types/IHttpError';

const { INTERNAL_SERVER_ERROR } = StatusCodes;

/**
 * Middleware for error handling
 * @function
 * @param {IHttpError} err - Request object
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @param {NextFunction} next - Next function
 * @returns {void}
 */
export const errorHandler = (err: IHttpError, _req: Request, res: Response, next: NextFunction): void => {
  if (err.status) {
    res.status(err.status).send(err.message || getReasonPhrase(err.status));
    return;
  }
  
  winston.error(err.message);
  res.status(INTERNAL_SERVER_ERROR).send(getReasonPhrase(INTERNAL_SERVER_ERROR));

  next();
};
