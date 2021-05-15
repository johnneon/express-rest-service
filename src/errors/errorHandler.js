export const errorHandler = (err, req, res, next) => {
  res.status(err.status).send(err.message);
  next();
};