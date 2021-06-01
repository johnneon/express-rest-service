import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../errors/http-errors/BadRequestError";

/**
 * Middleware for validation task data
 * @function
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @param {NextFunction} next - Next function
 * @returns {void}
 */
export const taskDataValidation = (req: Request, _res: Response, next: NextFunction): void => {
  const { body: task } = req;

  if (!task.title) {
    throw new BadRequestError();
  }

  next();
}