import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../errors/http-errors/BadRequestError";

/**
 * Middleware for validation board data
 * @function
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @param {NextFunction} next - Next function
 * @returns {void}
 */
export const boardDataValidation = (req: Request, _res: Response, next: NextFunction): void => {
  const { body: board } = req;

  if (!board.title) {
    throw new BadRequestError();
  }

  next();
}