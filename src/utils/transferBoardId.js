/**
 * Middleware for transport boardId
 * @function
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @param {NextFunction} next - Next function
 * @returns {void}
 */
export const transferBoardId = (req, res, next) => {
  req.boardId = req.params.id;
  next();
}