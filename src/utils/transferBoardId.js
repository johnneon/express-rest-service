export const transferBoardId = (req, res, next) => {
  req.boardId = req.params.id;
  next();
}