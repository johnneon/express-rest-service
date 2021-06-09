import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../errors/http-errors/BadRequestError";

/**
 * Middleware for validation user data
 * @function
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @param {NextFunction} next - Next function
 * @returns {void}
 */
export const userDataValidation = (req: Request, _res: Response, next: NextFunction): void => {
  const { body: user } = req;

  if (!user.login || !user.name || !user.password) {
    throw new BadRequestError();
  }

  next();
}