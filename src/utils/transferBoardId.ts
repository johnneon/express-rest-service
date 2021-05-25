import { NextFunction, Request, Response } from "express";

/**
 * Middleware for transport boardId
 * @function
 * @param {Request} req - Request object
 * @param {Response} _res - Response object
 * @param {NextFunction} next - Next function
 * @returns {void}
 */
export const transferBoardId = (req: Request, _res: Response, next: NextFunction): void => {
  const { id } = req.params;
  req.body.boardId = id;
  next();
}