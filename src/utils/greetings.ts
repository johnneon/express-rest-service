import { NextFunction, Request, Response } from "express";

/**
 * Middleware for greeting the servise
 * @function
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @param {NextFunction} next - Next function
 * @returns {void}
 */
export const greetings = (req: Request, res: Response, next: NextFunction): void => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
};